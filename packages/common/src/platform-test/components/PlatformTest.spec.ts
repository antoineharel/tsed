import {
  Configuration,
  Controller,
  createExpressApplication,
  createHttpServer,
  createHttpsServer,
  Get,
  GlobalAcceptMimesMiddleware,
  GlobalErrorHandlerMiddleware,
  InjectorService,
  IRoute,
  LogIncomingRequestMiddleware,
  PlatformBuilder,
  PlatformTest,
  RequestContext
} from "@tsed/common";
import {Type} from "@tsed/core";
import {expect} from "chai";
import * as SuperTest from "supertest";

@Configuration({})
class Server {}

@Controller("/")
class MyController {
  @Get("/")
  get() {
    return "hello";
  }
}

describe("PlatformTest", () => {
  let request: SuperTest.SuperTest<SuperTest.Test>;
  beforeEach(() => {
    PlatformTest.platformBuilder = class PlatformExpress extends PlatformBuilder {
      static async bootstrap(module: Type<any>, settings: Partial<TsED.Configuration> = {}): Promise<PlatformExpress> {
        return this.build<PlatformExpress>(PlatformExpress).bootstrap(module, settings);
      }

      async loadStatics() {}

      protected async loadRoutes(routes: IRoute[]): Promise<void> {
        this.app.use(LogIncomingRequestMiddleware);
        this.app.use(GlobalAcceptMimesMiddleware);

        await super.loadRoutes(routes);

        this.app.use(GlobalErrorHandlerMiddleware);
      }

      protected createInjector(module: Type<any>, settings: any) {
        super.createInjector(module, settings);
        createExpressApplication(this.injector);
        createHttpsServer(this.injector);
        createHttpServer(this.injector);
      }
    };
  });
  beforeEach(
    PlatformTest.bootstrap(Server, {
      mount: {
        "/rest": [MyController]
      }
    })
  );
  beforeEach(() => {
    request = SuperTest(PlatformTest.callback());
  });

  afterEach(PlatformTest.reset);
  afterEach(() => {
    delete PlatformTest.platformBuilder;
  });

  it("should get symbol from injector", () => {
    expect(PlatformTest.get(InjectorService)).to.be.instanceOf(InjectorService);
  });

  it("should create server and mount the controller", async () => {
    const result = await request.get("/rest");
    expect(result.text).to.equal("hello");
  });

  describe("createRequestContext", () => {
    it("should return request context", () => {
      expect(PlatformTest.createRequestContext()).to.be.instanceOf(RequestContext);
    });
  });
});
