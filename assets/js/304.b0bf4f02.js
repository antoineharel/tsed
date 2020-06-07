(window.webpackJsonp=window.webpackJsonp||[]).push([[304],{742:function(n,a,s){"use strict";s.r(a);var t=s(44),e=Object(t.a)({},(function(){var n=this,a=n.$createElement,s=n._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"store"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#store"}},[n._v("#")]),n._v(" Store "),s("Badge",{attrs:{text:"Class",type:"class"}})],1),n._v(" "),s("section",{staticClass:"symbol-info"},[s("table",{staticClass:"is-full-width"},[s("tbody",[s("tr",[s("th",[n._v("Module")]),s("td",[s("div",{staticClass:"lang-typescript"},[s("span",{staticClass:"token keyword"},[n._v("import")]),n._v(" { Store } "),s("span",{staticClass:"token keyword"},[n._v("from")]),n._v(" "),s("span",{staticClass:"token string"},[n._v('"@tsed/core"')])])])]),s("tr",[s("th",[n._v("Source")]),s("td",[s("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.57.2/packages/core/src/class/Store.ts#L0-L0"}},[n._v("/packages/core/src/class/Store.ts")])])])])])]),n._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[n._v("#")]),n._v(" Overview")]),n._v(" "),s("div",{staticClass:"language-typescript"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("class")]),n._v(" Store "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n"),s("div",{pre:!0,attrs:{class:"language- extra-class"}},[s("pre",[s("code",[n._v('<span class="token keyword">constructor</span><span class="token punctuation">(</span>args<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n/**\n * Return the size of the collection.\n * @returns <span class="token punctuation">{</span><span class="token keyword">number</span><span class="token punctuation">}</span>\n */\nget <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">number</span><span class="token punctuation">;</span>\n/**\n * Create or get a Store <span class="token keyword">from</span> args <span class="token punctuation">{</span>target + methodName + descriptor<span class="token punctuation">}</span>\n * @param args\n * @returns <span class="token punctuation">{</span>Store<span class="token punctuation">}</span>\n */\n<span class="token keyword">static</span> <span class="token keyword">from</span><span class="token punctuation">(</span>...args<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Store<span class="token punctuation">;</span>\n/**\n * Create store on the method.\n * @param target\n * @param <span class="token punctuation">{</span><span class="token keyword">string</span><span class="token punctuation">}</span> propertyKey\n * @returns <span class="token punctuation">{</span>Store<span class="token punctuation">}</span>\n */\n<span class="token keyword">static</span> <span class="token function">fromMethod</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> propertyKey<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Store<span class="token punctuation">;</span>\n/**\n * Create a store correctly configured <span class="token keyword">from</span> the parameters given by the decorator.\n * The `fn` can return a decorator that will be initialized with the parameters <span class="token punctuation">(</span>target<span class="token punctuation">,</span> propertyKey<span class="token punctuation">,</span> descriptor<span class="token punctuation">)</span>.\n * @param <span class="token punctuation">{</span><span class="token punctuation">(</span>store<span class="token punctuation">:</span> Store<span class="token punctuation">,</span> parameters<span class="token punctuation">:</span> <a href="/api/core/interfaces/DecoratorParameters.html"><span class="token">DecoratorParameters</span></a><span class="token punctuation">)</span> =&gt; <span class="token keyword">void</span><span class="token punctuation">}</span> fn\n * @deprecated <a href="/api/common/mvc/decorators/method/Use.html"><span class="token">Use</span></a> <a href="/api/core/decorators/StoreFn.html"><span class="token">StoreFn</span></a>\n * @returns <span class="token punctuation">{</span>Function<span class="token punctuation">}</span>\n */\n<span class="token keyword">static</span> <span class="token function">decorate</span><span class="token punctuation">(</span>fn<span class="token punctuation">:</span> <span class="token punctuation">(</span>store<span class="token punctuation">:</span> Store<span class="token punctuation">,</span> parameters<span class="token punctuation">:</span> <a href="/api/core/interfaces/DecoratorParameters.html"><span class="token">DecoratorParameters</span></a><span class="token punctuation">)</span> =&gt; <span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Function<span class="token punctuation">;</span>\n/**\n * The <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> method returns a specified element <span class="token keyword">from</span> a Map object.\n * @param key <a href="/api/common/mvc/decorators/Required.html"><span class="token">Required</span></a>. The key of the element to return <span class="token keyword">from</span> the Map object.\n * @returns <span class="token punctuation">{</span>T<span class="token punctuation">}</span> <a href="/api/swagger/decorators/Returns.html"><span class="token">Returns</span></a> the element associated with the specified key or undefined if the key can\'t be found in the Map object.\n */\nget&lt;T<span class="token punctuation"> = </span><span class="token keyword">any</span>&gt;<span class="token punctuation">(</span>key<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> T<span class="token punctuation">;</span>\n/**\n * The <span class="token function">has</span><span class="token punctuation">(</span><span class="token punctuation">)</span> method returns a <span class="token keyword">boolean</span> indicating whether an element with the specified key exists or not.\n * @param key\n * @returns <span class="token punctuation">{</span><span class="token keyword">boolean</span><span class="token punctuation">}</span>\n */\n<span class="token function">has</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>\n/**\n * The <span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span> method adds or updates an element with a specified key and value to a Map object.\n * @param key <a href="/api/common/mvc/decorators/Required.html"><span class="token">Required</span></a>. The key of the element to add to the Map object.\n * @param metadata <a href="/api/common/mvc/decorators/Required.html"><span class="token">Required</span></a>. The value of the element to add to the Map object.\n * @returns <span class="token punctuation">{</span><a href="/api/core/class/Registry.html"><span class="token">Registry</span></a><span class="token punctuation">}</span>\n */\n<span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> metadata<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Store<span class="token punctuation">;</span>\n/**\n * The <span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span> method returns a new Iterator object that contains the <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> pairs for each element in the Map object in insertion order.\n * @returns <span class="token punctuation">{</span>IterableIterator<span class="token punctuation">}</span> A new Map iterator object.\n */\n<span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> IterableIterator&lt;<span class="token punctuation">[</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">any</span><span class="token punctuation">]</span>&gt;<span class="token punctuation">;</span>\n/**\n * The <span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span> method returns a new Iterator object that contains the keys for each element in the Map object in insertion order.\n * @returns <span class="token punctuation">{</span>IterableIterator<span class="token punctuation">}</span> A new Map iterator object.\n */\n<span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> IterableIterator&lt;<span class="token keyword">string</span>&gt;<span class="token punctuation">;</span>\n/**\n * The <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> method removes all elements <span class="token keyword">from</span> a Map object.\n */\n<span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n/**\n * The <span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> method removes the specified element <span class="token keyword">from</span> a Map object.\n * @param key <a href="/api/common/mvc/decorators/Required.html"><span class="token">Required</span></a>. The key of the element to remove <span class="token keyword">from</span> the Map object.\n * @returns <span class="token punctuation">{</span><span class="token keyword">boolean</span><span class="token punctuation">}</span> <a href="/api/swagger/decorators/Returns.html"><span class="token">Returns</span></a> true if an element in the Map object existed and has been removed<span class="token punctuation">,</span> or false if the element does not exist.\n */\n<span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>\n/**\n * The <span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">)</span> method executes a provided function once per each key/value pair in the Map object<span class="token punctuation">,</span> in insertion order.\n *\n * @param callbackfn Function to execute for each element.\n * @param thisArg <a href="/api/di/decorators/Value.html"><span class="token">Value</span></a> to use <span class="token keyword">as</span> this when executing callback.\n * @description\n * The forEach method executes the provided callback once for each key of the map which actually exist. It is not invoked for keys which have been deleted. However<span class="token punctuation">,</span> it is executed for values which are present but have the value undefined.\n * callback is invoked with three arguments<span class="token punctuation">:</span>\n *\n * * the element value\n * * the element key\n * * the Map object being traversed\n *\n * If a thisArg parameter is provided to forEach<span class="token punctuation">,</span> it will be passed to callback when invoked<span class="token punctuation">,</span> for use <span class="token keyword">as</span> its this value.  Otherwise<span class="token punctuation">,</span> the value undefined will be passed for use <span class="token keyword">as</span> its this value.  The this value ultimately observable by callback is determined according to the usual rules for determining the this seen by a function.\n *\n * Each value is visited once<span class="token punctuation">,</span> except in the case when it was deleted and re-added before forEach has finished. callback is not invoked for values deleted before being visited. New values added before forEach has finished will be visited.\n * forEach executes the callback function once for each element in the Map object<span class="token punctuation">;</span> it does not return a value.\n *\n */\n<span class="token function">forEach</span><span class="token punctuation">(</span>callbackfn<span class="token punctuation">:</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> map<span class="token punctuation">:</span> Map&lt;<span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">any</span>&gt;<span class="token punctuation">)</span> =&gt; <span class="token keyword">void</span><span class="token punctuation">,</span> thisArg?<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n/**\n * The <span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span> method returns a new Iterator object that contains the values for each element in the Map object in insertion order.\n * @returns <span class="token punctuation">{</span>IterableIterator<span class="token punctuation">}</span> A new Map iterator object.\n */\n<span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> IterableIterator&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">;</span>\n/**\n * Merge given value with existing value.\n * @param key\n * @param value\n * @param inverse Change the merge order. <a href="/api/common/mvc/decorators/method/Get.html"><span class="token">Get</span></a> the existing value and apply over given value\n * @returns <span class="token punctuation">{</span>Store<span class="token punctuation">}</span>\n */\n<span class="token function">merge</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> inverse?<span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Store<span class="token punctuation">;</span>\n/**\n * Store all keys contains in the options object.\n * @param options\n * @param args\n */\n<span class="token function">storeValues</span><span class="token punctuation">(</span>options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span>key<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n/**\n *\n * @param key\n * @param args\n * @<span class="token keyword">private</span>\n */\n')])])]),s("p",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")])])])])]),s("p")])}),[],!1,null,null,null);a.default=e.exports}}]);