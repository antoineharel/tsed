(window.webpackJsonp=window.webpackJsonp||[]).push([[634],{1072:function(n,s,a){"use strict";a.r(s);var t=a(44),o=Object(t.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"testmongoosecontext"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testmongoosecontext"}},[n._v("#")]),n._v(" TestMongooseContext "),a("Badge",{attrs:{text:"Class",type:"class"}})],1),n._v(" "),a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[n._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[n._v("import")]),n._v(" { TestMongooseContext } "),a("span",{staticClass:"token keyword"},[n._v("from")]),n._v(" "),a("span",{staticClass:"token string"},[n._v('"@tsed/testing-mongoose"')])])])]),a("tr",[a("th",[n._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.57.2/packages/testing-mongoose/src/TestMongooseContext.ts#L0-L0"}},[n._v("/packages/testing-mongoose/src/TestMongooseContext.ts")])])])])])]),n._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[n._v("#")]),n._v(" Overview")]),n._v(" "),a("div",{staticClass:"language-typescript"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("class")]),n._v(" TestMongooseContext "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("extends")]),n._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/platform-test/components/PlatformTest.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[n._v("PlatformTest")])]),n._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n"),a("div",{pre:!0,attrs:{class:"language- extra-class"}},[a("pre",[a("code",[n._v('<span class="token keyword">static</span> <span class="token function">install</span><span class="token punctuation">(</span>options?<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Promise&lt;<span class="token punctuation">{</span>\n    url<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>\n    connectionOptions<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        useUnifiedTopology<span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>\n        useNewUrlParser<span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>\n        autoReconnect<span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>\n        reconnectTries<span class="token punctuation">:</span> <span class="token keyword">number</span><span class="token punctuation">;</span>\n        reconnectInterval<span class="token punctuation">:</span> <span class="token keyword">number</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>&gt;<span class="token punctuation">;</span>\n/**\n * Connect to the in-memory database.\n */\n<span class="token keyword">static</span> <span class="token function">bootstrap</span><span class="token punctuation">(</span>mod<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> options?<span class="token punctuation">:</span> Partial&lt;TsED.<a href="/api/di/decorators/Configuration.html"><span class="token">Configuration</span></a>&gt;<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> =&gt; Promise&lt;<span class="token keyword">void</span>&gt;<span class="token punctuation">;</span>\n<span class="token keyword">static</span> <span class="token function">create</span><span class="token punctuation">(</span>options?<span class="token punctuation">:</span> Partial&lt;TsED.<a href="/api/di/decorators/Configuration.html"><span class="token">Configuration</span></a>&gt;<span class="token punctuation">)</span><span class="token punctuation">:</span> Promise&lt;<span class="token keyword">void</span>&gt;<span class="token punctuation">;</span>\n/**\n * Resets the test injector of the test context<span class="token punctuation">,</span> so it won\'t pollute your next test. Call this in your `tearDown` logic.\n */\n<span class="token keyword">static</span> <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Promise&lt;<span class="token keyword">void</span>&gt;<span class="token punctuation">;</span>\n/**\n *\n */\n<span class="token keyword">static</span> <span class="token function">clearDatabase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Promise&lt;<span class="token keyword">void</span>&gt;<span class="token punctuation">;</span>\n<span class="token keyword">static</span> <span class="token function">getMongooseOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Promise&lt;<span class="token punctuation">{</span>\n    url<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>\n    connectionOptions<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        useUnifiedTopology<span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>\n        useNewUrlParser<span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>\n        autoReconnect<span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>\n        reconnectTries<span class="token punctuation">:</span> <span class="token keyword">number</span><span class="token punctuation">;</span>\n        reconnectInterval<span class="token punctuation">:</span> <span class="token keyword">number</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>&gt;<span class="token punctuation">;</span>\n')])])]),a("p",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")])])])])]),a("p")])}),[],!1,null,null,null);s.default=o.exports}}]);