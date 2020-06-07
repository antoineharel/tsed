(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{628:function(t,a,s){"use strict";s.r(a);var n=s(44),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"endpointmetadata"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#endpointmetadata"}},[t._v("#")]),t._v(" EndpointMetadata "),s("Badge",{attrs:{text:"Class",type:"class"}})],1),t._v(" "),s("section",{staticClass:"symbol-info"},[s("table",{staticClass:"is-full-width"},[s("tbody",[s("tr",[s("th",[t._v("Module")]),s("td",[s("div",{staticClass:"lang-typescript"},[s("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { EndpointMetadata } "),s("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),s("span",{staticClass:"token string"},[t._v('"@tsed/common"')])])])]),s("tr",[s("th",[t._v("Source")]),s("td",[s("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.57.2/packages/common/src/mvc/models/EndpointMetadata.ts#L0-L0"}},[t._v("/packages/common/src/mvc/models/EndpointMetadata.ts")])])])])])]),t._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("div",{staticClass:"language-typescript"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" EndpointMetadata "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/core/class/Storable.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("Storable")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/mvc/models/EndpointConstructorOptions.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("EndpointConstructorOptions")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    beforeMiddlewares"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    middlewares"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    afterMiddlewares"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Route strategy.\n     */\n    pathsMethods"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/mvc/interfaces/IPathMethod.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("IPathMethod")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" responses"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Map<"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/mvc/interfaces/IResponseOptions.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("IResponseOptions")])]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    statusCode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Endpoint inherited "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" parent "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(".\n     */\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" EndpointMetadata | undefined"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/mvc/models/EndpointConstructorOptions.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("EndpointConstructorOptions")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    get "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("Type")])]),t._v("<"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    set "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("Type")])]),t._v("<"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * @deprecated\n     */\n    get "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("methodClassName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     *\n     * @returns "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("a",{pre:!0,attrs:{href:"/api/core/class/Store.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("Store")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     */\n    get "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("store")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/core/class/Store.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("Store")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    get "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("params")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v('"./'),s("a",{pre:!0,attrs:{href:"/api/common/mvc/models/ParamMetadata.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("ParamMetadata")])]),t._v('"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("."),s("a",{pre:!0,attrs:{href:"/api/common/mvc/models/ParamMetadata.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("ParamMetadata")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    get "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/mvc/interfaces/IResponseOptions.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("IResponseOptions")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Find the a value at the controller level. Let this value be extended or overridden by the endpoint itself.\n     *\n     * @param key\n     * @returns "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     */\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Change the type and the collection type "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" the status code.\n     * @param "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" | "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" code\n     * @deprecated "),s("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/method/Use.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("Use")])]),t._v(" endpoint.responses."),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     */\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("statusResponse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" | "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/mvc/interfaces/IResponseOptions.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("IResponseOptions")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     *\n     * @param args\n     * @returns "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("EndpointMetadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     */\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("before")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" this"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     *\n     * @param args\n     * @returns "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("EndpointMetadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     */\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("after")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" this"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * "),s("a",{pre:!0,attrs:{href:"/api/core/class/Store.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("Store")])]),t._v(" all arguments collected via Annotation.\n     * @param args\n     */\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("merge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" this"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),t._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("div",{pre:!0},[s("p",[t._v("EndpointMetadata contains metadata about a controller and his method.\nEach annotation (@Get, @Body...) attached to a method are stored in a endpoint.\nEndpointMetadata convert this metadata to an array which contain arguments to call an Express method.")]),t._v(" "),s("p",[t._v("Example :")]),t._v(" "),s("p",[t._v('@Controller("/my-path")\nprovide MyClass {')]),t._v(" "),s("div",{pre:!0,attrs:{class:"language- extra-class"}},[s("pre",[s("code",[t._v('   @Get("/")\n   @Authenticated()\n   public myMethod(){}\n')])])]),s("p",[t._v("}")])])])}),[],!1,null,null,null);a.default=e.exports}}]);