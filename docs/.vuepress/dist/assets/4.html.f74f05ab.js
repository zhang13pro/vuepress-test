import{a as n}from"./app.7fc4c06d.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="_04-\u7EE7\u627F\u8FDB\u9636-\u5982\u4F55\u5B9E\u73B0-new\u3001apply\u3001call\u3001bind-\u7684\u5E95\u5C42\u903B\u8F91" tabindex="-1"><a class="header-anchor" href="#_04-\u7EE7\u627F\u8FDB\u9636-\u5982\u4F55\u5B9E\u73B0-new\u3001apply\u3001call\u3001bind-\u7684\u5E95\u5C42\u903B\u8F91" aria-hidden="true">#</a> 04 | \u7EE7\u627F\u8FDB\u9636\uFF1A\u5982\u4F55\u5B9E\u73B0 new\u3001apply\u3001call\u3001bind \u7684\u5E95\u5C42\u903B\u8F91\uFF1F</h1><p>\u6211\u5728\u4E0A\u4E00\u8BB2\u4ECB\u7ECD\u4E86\u7EE7\u627F\u7684\u6982\u5FF5\uFF0C\u540C\u65F6\u4F60\u4E5F\u53EF\u4EE5\u770B\u5230\uFF0C\u5176\u4E2D\u7EFC\u5408\u4F7F\u7528\u4E86 new\u3001apply \u4EE5\u53CA call \u7684\u65B9\u6CD5\uFF0C\u90A3\u4E48\u8FD9\u4E00\u8BB2\u6211\u4EEC\u5C31\u56F4\u7ED5\u8FD9\u51E0\u4E2A\u65B9\u6CD5\u8FDB\u884C\u66F4\u6DF1\u5165\u7684\u8BB2\u89E3\uFF0C\u4EE5\u4FBF\u4E8E\u4F60\u6E05\u695A\u8FD9\u51E0\u4E2A\u6838\u5FC3\u65B9\u6CD5\u7684\u5B9E\u73B0\u601D\u8DEF\uFF0C\u66F4\u597D\u5730\u53BB\u7406\u89E3\u7EE7\u627F\u7684\u539F\u7406\u3002</p><p>JavaScript \u4E2D\u7684 apply\u3001call \u548C bind \u65B9\u6CD5\u662F\u524D\u7AEF\u4EE3\u7801\u5F00\u53D1\u4E2D\u76F8\u5F53\u91CD\u8981\u7684\u6982\u5FF5\uFF0C\u5E76\u4E14\u4E0E this \u7684\u6307\u5411\u5BC6\u5207\u76F8\u5173\u3002\u5F88\u591A\u4EBA\u5BF9\u5B83\u4EEC\u7684\u7406\u89E3\u8FD8\u6BD4\u8F83\u6D45\u663E\uFF0C\u5982\u679C\u4F60\u60F3\u62E5\u6709\u624E\u5B9E\u7684 JavaScript \u7F16\u7A0B\u57FA\u7840\uFF0C\u90A3\u4E48\u5FC5\u987B\u8981\u4E86\u89E3\u8FD9\u4E9B\u57FA\u7840\u5E38\u7528\u7684\u65B9\u6CD5\u3002\u5E0C\u671B\u901A\u8FC7\u8FD9\u4E00\u8BB2\u7684\u5B66\u4E60\uFF0C\u4F60\u53EF\u4EE5\u5F7B\u5E95\u638C\u63E1\u5B83\u4EEC\u3002</p><p>\u4E3A\u4E86\u65B9\u4FBF\u4F60\u66F4\u597D\u5730\u7406\u89E3\u672C\u8BB2\u7684\u5185\u5BB9\uFF0C\u5728\u8BFE\u7A0B\u5F00\u59CB\u524D\u8BF7\u4F60\u5148\u601D\u8003\u51E0\u4E2A\u95EE\u9898\uFF1A</p><p>\u7528\u4EC0\u4E48\u6837\u7684\u601D\u8DEF\u53EF\u4EE5 new \u5173\u952E\u8BCD\uFF1F</p><p>apply\u3001call\u3001bind \u8FD9\u4E09\u4E2A\u65B9\u6CD5\u4E4B\u95F4\u6709\u4EC0\u4E48\u533A\u522B?</p><p>\u600E\u6837\u5B9E\u73B0\u4E00\u4E2A apply \u6216\u8005 call \u7684\u65B9\u6CD5\uFF1F</p><p>\u5E26\u7740\u8FD9\u51E0\u4E2A\u601D\u8003\uFF0C\u6211\u4EEC\u5F00\u59CB\u672C\u8BFE\u65F6\u7684\u5B66\u4E60\u5427\u3002</p><h2 id="\u65B9\u6CD5\u7684\u57FA\u672C\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u7684\u57FA\u672C\u4ECB\u7ECD" aria-hidden="true">#</a> \u65B9\u6CD5\u7684\u57FA\u672C\u4ECB\u7ECD</h2><p>new \u539F\u7406\u4ECB\u7ECD new \u5173\u952E\u8BCD\u7684\u4E3B\u8981\u4F5C\u7528\u5C31\u662F\u6267\u884C\u4E00\u4E2A\u6784\u9020\u51FD\u6570\u3001\u8FD4\u56DE\u4E00\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u5728 new \u7684\u8FC7\u7A0B\u4E2D\uFF0C\u6839\u636E\u6784\u9020\u51FD\u6570\u7684\u60C5\u51B5\uFF0C\u6765\u786E\u5B9A\u662F\u5426\u53EF\u4EE5\u63A5\u53D7\u53C2\u6570\u7684\u4F20\u9012\u3002\u4E0B\u9762\u6211\u4EEC\u901A\u8FC7\u4E00\u6BB5\u4EE3\u7801\u6765\u770B\u4E00\u4E2A\u7B80\u5355\u7684 new \u7684\u4F8B\u5B50\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;Jack&quot;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// Jack</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8FD9\u6BB5\u4EE3\u7801\u6BD4\u8F83\u5BB9\u6613\u7406\u89E3\uFF0C\u4ECE\u8F93\u51FA\u7ED3\u679C\u53EF\u4EE5\u770B\u51FA\uFF0Cp \u662F\u4E00\u4E2A\u901A\u8FC7 person \u8FD9\u4E2A\u6784\u9020\u51FD\u6570\u751F\u6210\u7684\u4E00\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5E94\u8BE5\u5F88\u5BB9\u6613\u7406\u89E3\u3002\u90A3\u4E48 new \u5728\u8FD9\u4E2A\u751F\u6210\u5B9E\u4F8B\u7684\u8FC7\u7A0B\u4E2D\u5230\u5E95\u8FDB\u884C\u4E86\u54EA\u4E9B\u6B65\u9AA4\u6765\u5B9E\u73B0\u5462\uFF1F\u603B\u7ED3\u4E0B\u6765\u5927\u81F4\u5206\u4E3A\u4EE5\u4E0B\u51E0\u4E2A\u6B65\u9AA4\u3002</p><p>\u521B\u5EFA\u4E00\u4E2A\u65B0\u5BF9\u8C61\uFF1B</p><p>\u5C06\u6784\u9020\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u8D4B\u7ED9\u65B0\u5BF9\u8C61\uFF08this \u6307\u5411\u65B0\u5BF9\u8C61\uFF09\uFF1B</p><p>\u6267\u884C\u6784\u9020\u51FD\u6570\u4E2D\u7684\u4EE3\u7801\uFF08\u4E3A\u8FD9\u4E2A\u65B0\u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027\uFF09\uFF1B</p><p>\u8FD4\u56DE\u65B0\u5BF9\u8C61\u3002</p><p>\u90A3\u4E48\u95EE\u9898\u6765\u4E86\uFF0C\u5982\u679C\u4E0D\u7528 new \u8FD9\u4E2A\u5173\u952E\u8BCD\uFF0C\u7ED3\u5408\u4E0A\u9762\u7684\u4EE3\u7801\u6539\u9020\u4E00\u4E0B\uFF0C\u53BB\u6389 new\uFF0C\u4F1A\u53D1\u751F\u4EC0\u4E48\u6837\u7684\u53D8\u5316\u5462\uFF1F\u6211\u4EEC\u518D\u6765\u770B\u4E0B\u9762\u8FD9\u6BB5\u4EE3\u7801\u3002</p><p>\u590D\u5236\u4EE3\u7801 function Person(){ this.name = &#39;Jack&#39;; } var p = Person(); console.log(p) // undefined console.log(name) // Jack console.log(p.name) // &#39;name&#39; of undefined \u4ECE\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\u53EF\u4EE5\u770B\u5230\uFF0C\u6211\u4EEC\u6CA1\u6709\u4F7F\u7528 new \u8FD9\u4E2A\u5173\u952E\u8BCD\uFF0C\u8FD4\u56DE\u7684\u7ED3\u679C\u5C31\u662F undefined\u3002\u5176\u4E2D\u7531\u4E8E JavaScript \u4EE3\u7801\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B this \u7684\u6307\u5411\u662F window\uFF0C\u90A3\u4E48 name \u7684\u8F93\u51FA\u7ED3\u679C\u5C31\u4E3A Jack\uFF0C\u8FD9\u662F\u4E00\u79CD\u4E0D\u5B58\u5728 new \u5173\u952E\u8BCD\u7684\u60C5\u51B5\u3002</p><p>\u90A3\u4E48\u5F53\u6784\u9020\u51FD\u6570\u4E2D\u6709 return \u4E00\u4E2A\u5BF9\u8C61\u7684\u64CD\u4F5C\uFF0C\u7ED3\u679C\u53C8\u4F1A\u662F\u4EC0\u4E48\u6837\u5B50\u5462\uFF1F\u6211\u4EEC\u518D\u6765\u770B\u4E00\u6BB5\u5728\u4E0A\u9762\u7684\u57FA\u7840\u4E0A\u6539\u9020\u8FC7\u7684\u4EE3\u7801\u3002</p><p>\u590D\u5236\u4EE3\u7801 function Person(){ this.name = &#39;Jack&#39;; return {age: 18} } var p = new Person(); console.log(p) // {age: 18} console.log(p.name) // undefined console.log(p.age) // 18 \u901A\u8FC7\u8FD9\u6BB5\u4EE3\u7801\u53C8\u53EF\u4EE5\u770B\u51FA\uFF0C\u5F53\u6784\u9020\u51FD\u6570\u6700\u540E return \u51FA\u6765\u7684\u662F\u4E00\u4E2A\u548C this \u65E0\u5173\u7684\u5BF9\u8C61\u65F6\uFF0Cnew \u547D\u4EE4\u4F1A\u76F4\u63A5\u8FD4\u56DE\u8FD9\u4E2A\u65B0\u5BF9\u8C61\uFF0C\u800C\u4E0D\u662F\u901A\u8FC7 new \u6267\u884C\u6B65\u9AA4\u751F\u6210\u7684 this \u5BF9\u8C61\u3002</p><p>\u4F46\u662F\u8FD9\u91CC\u8981\u6C42\u6784\u9020\u51FD\u6570\u5FC5\u987B\u662F\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5982\u679C\u8FD4\u56DE\u7684\u4E0D\u662F\u5BF9\u8C61\uFF0C\u90A3\u4E48\u8FD8\u662F\u4F1A\u6309\u7167 new \u7684\u5B9E\u73B0\u6B65\u9AA4\uFF0C\u8FD4\u56DE\u65B0\u751F\u6210\u7684\u5BF9\u8C61\u3002\u63A5\u4E0B\u6765\u8FD8\u662F\u5728\u4E0A\u9762\u8FD9\u6BB5\u4EE3\u7801\u7684\u57FA\u7840\u4E4B\u4E0A\u7A0D\u5FAE\u6539\u52A8\u4E00\u4E0B\u3002</p><p>\u590D\u5236\u4EE3\u7801 function Person(){ this.name = &#39;Jack&#39;; return &#39;tom&#39;; } var p = new Person(); console.log(p) // {name: &#39;Jack&#39;} console.log(p.name) // Jack \u53EF\u4EE5\u770B\u51FA\uFF0C\u5F53\u6784\u9020\u51FD\u6570\u4E2D return \u7684\u4E0D\u662F\u4E00\u4E2A\u5BF9\u8C61\u65F6\uFF0C\u90A3\u4E48\u5B83\u8FD8\u662F\u4F1A\u6839\u636E new \u5173\u952E\u8BCD\u7684\u6267\u884C\u903B\u8F91\uFF0C\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\uFF08\u7ED1\u5B9A\u4E86\u6700\u65B0 this\uFF09\uFF0C\u6700\u540E\u8FD4\u56DE\u51FA\u6765\u3002</p><p>\u56E0\u6B64\u6211\u4EEC\u603B\u7ED3\u4E00\u4E0B\uFF1Anew \u5173\u952E\u8BCD\u6267\u884C\u4E4B\u540E\u603B\u662F\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8981\u4E48\u662F\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u8981\u4E48\u662F return \u8BED\u53E5\u6307\u5B9A\u7684\u5BF9\u8C61\u3002</p><p>\u5218\u70E8\u7684 js.png</p><p>\u597D\u4E86\uFF0Cnew \u8FD9\u4E2A\u5173\u952E\u8BCD\u5185\u5BB9\u57FA\u672C\u5C31\u8BB2\u5230\u8FD9\u91CC\u4E86\uFF0C\u6211\u4EEC\u518D\u770B\u4E00\u4E0B apply \u548C call \u7684\u57FA\u672C\u539F\u7406\u3002</p><p>apply &amp; call &amp; bind \u539F\u7406\u4ECB\u7ECD \u5148\u6765\u4E86\u89E3\u4E00\u4E0B\u8FD9\u4E09\u4E2A\u65B9\u6CD5\u7684\u57FA\u672C\u60C5\u51B5\uFF0Ccall\u3001apply \u548C bind \u662F\u6302\u5728 Function \u5BF9\u8C61\u4E0A\u7684\u4E09\u4E2A\u65B9\u6CD5\uFF0C\u8C03\u7528\u8FD9\u4E09\u4E2A\u65B9\u6CD5\u7684\u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570\u3002</p><p>\u8BF7\u770B\u8FD9\u4E09\u4E2A\u51FD\u6570\u7684\u57FA\u672C\u8BED\u6CD5\u3002</p><p>\u590D\u5236\u4EE3\u7801 func.call(thisArg, param1, param2, ...) func.apply(thisArg, [param1,param2,...]) func.bind(thisArg, param1, param2, ...) \u5176\u4E2D func \u662F\u8981\u8C03\u7528\u7684\u51FD\u6570\uFF0CthisArg \u4E00\u822C\u4E3A this \u6240\u6307\u5411\u7684\u5BF9\u8C61\uFF0C\u540E\u9762\u7684 param1\u30012 \u4E3A\u51FD\u6570 func \u7684\u591A\u4E2A\u53C2\u6570\uFF0C\u5982\u679C func \u4E0D\u9700\u8981\u53C2\u6570\uFF0C\u5219\u540E\u9762\u7684 param1\u30012 \u53EF\u4EE5\u4E0D\u5199\u3002</p><p>\u8FD9\u4E09\u4E2A\u65B9\u6CD5\u5171\u6709\u7684\u3001\u6BD4\u8F83\u660E\u663E\u7684\u4F5C\u7528\u5C31\u662F\uFF0C\u90FD\u53EF\u4EE5\u6539\u53D8\u51FD\u6570 func \u7684 this \u6307\u5411\u3002call \u548C apply \u7684\u533A\u522B\u5728\u4E8E\uFF0C\u4F20\u53C2\u7684\u5199\u6CD5\u4E0D\u540C\uFF1Aapply \u7684\u7B2C 2 \u4E2A\u53C2\u6570\u4E3A\u6570\u7EC4\uFF1B call \u5219\u662F\u4ECE\u7B2C 2 \u4E2A\u81F3\u7B2C N \u4E2A\u90FD\u662F\u7ED9 func \u7684\u4F20\u53C2\uFF1B\u800C bind \u548C\u8FD9\u4E24\u4E2A\uFF08call\u3001apply\uFF09\u53C8\u4E0D\u540C\uFF0Cbind \u867D\u7136\u6539\u53D8\u4E86 func \u7684 this \u6307\u5411\uFF0C\u4F46\u4E0D\u662F\u9A6C\u4E0A\u6267\u884C\uFF0C\u800C\u8FD9\u4E24\u4E2A\uFF08call\u3001apply\uFF09\u662F\u5728\u6539\u53D8\u4E86\u51FD\u6570\u7684 this \u6307\u5411\u4E4B\u540E\u7ACB\u9A6C\u6267\u884C\u3002</p><p>\u8FD9\u51E0\u4E2A\u65B9\u6CD5\u7684\u533A\u522B\u548C\u539F\u7406\u57FA\u672C\u8BB2\u6E05\u695A\u4E86\uFF0C\u4F46\u662F\u7406\u89E3\u8D77\u6765\u662F\u4E0D\u662F\u5F88\u62BD\u8C61\u5462\uFF1F\u90A3\u4E48\u6211\u4E3E\u4E2A\u5F62\u8C61\u7684\u4F8B\u5B50\u518D\u914D\u5408\u7740\u4EE3\u7801\u4E00\u8D77\u770B\u4E0B\u3002</p><p>\u4F8B\u5982\uFF0C\u751F\u6D3B\u4E2D\u6211\u4E0D\u7ECF\u5E38\u505A\u996D\uFF0C\u5BB6\u91CC\u6CA1\u6709\u9505\uFF0C\u5468\u672B\u7A81\u7136\u60F3\u7ED9\u81EA\u5DF1\u505A\u4E2A\u996D\u5C1D\u5C1D\u3002\u4F46\u662F\u5BB6\u91CC\u6CA1\u6709\u9505\uFF0C\u800C\u6211\u53C8\u4E0D\u60F3\u51FA\u53BB\u4E70\uFF0C\u6240\u4EE5\u5C31\u95EE\u9694\u58C1\u90BB\u5C45\u501F\u4E86\u4E00\u4E2A\u9505\u6765\u7528\uFF0C\u8FD9\u6837\u505A\u4E86\u996D\uFF0C\u53C8\u8282\u7701\u4E86\u5F00\u9500\uFF0C\u4E00\u4E3E\u4E24\u5F97\u3002</p><p>\u5BF9\u5E94\u5728\u7A0B\u5E8F\u4E2D\uFF1AA \u5BF9\u8C61\u6709\u4E2A getName \u7684\u65B9\u6CD5\uFF0CB \u5BF9\u8C61\u4E5F\u9700\u8981\u4E34\u65F6\u4F7F\u7528\u540C\u6837\u7684\u65B9\u6CD5\uFF0C\u90A3\u4E48\u8FD9\u65F6\u5019\u6211\u4EEC\u662F\u5355\u72EC\u4E3A B \u5BF9\u8C61\u6269\u5C55\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u8FD8\u662F\u501F\u7528\u4E00\u4E0B A \u5BF9\u8C61\u7684\u65B9\u6CD5\u5462\uFF1F\u5F53\u7136\u662F\u53EF\u4EE5\u501F\u7528 A \u5BF9\u8C61\u7684 getName \u65B9\u6CD5\uFF0C\u65E2\u8FBE\u5230\u4E86\u76EE\u7684\uFF0C\u53C8\u8282\u7701\u91CD\u590D\u5B9A\u4E49\uFF0C\u8282\u7EA6\u5185\u5B58\u7A7A\u95F4\u3002</p><p>\u4E3A\u4E86\u66F4\u597D\u5730\u638C\u63E1\u8FD9\u90E8\u5206\u6982\u5FF5\uFF0C\u6211\u4EEC\u7ED3\u5408\u4E00\u6BB5\u4EE3\u7801\u518D\u6DF1\u5165\u7406\u89E3\u4E00\u4E0B\u8FD9\u51E0\u4E2A\u65B9\u6CD5\u3002</p><p>\u590D\u5236\u4EE3\u7801 let a = { name: &#39;jack&#39;, getName: function(msg) { return msg + this.name; } } let b = { name: &#39;lily&#39; } console.log(a.getName(&#39;hello~&#39;)); // hello~jack console.log(a.getName.call(b, &#39;hi~&#39;)); // hi~lily console.log(a.getName.apply(b, [&#39;hi~&#39;])) // hi~lily let name = a.getName.bind(b, &#39;hello~&#39;); console.log(name()); // hello~lily \u4ECE\u4E0A\u9762\u7684\u4EE3\u7801\u6267\u884C\u7684\u7ED3\u679C\u4E2D\u53EF\u4EE5\u53D1\u73B0\uFF0C\u4F7F\u7528\u8FD9\u4E09\u79CD\u65B9\u5F0F\u90FD\u53EF\u4EE5\u8FBE\u6210\u6211\u4EEC\u60F3\u8981\u7684\u76EE\u6807\uFF0C\u5373\u901A\u8FC7\u6539\u53D8 this \u7684\u6307\u5411\uFF0C\u8BA9 b \u5BF9\u8C61\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 a \u5BF9\u8C61\u4E2D\u7684 getName \u65B9\u6CD5\u3002\u4ECE\u7ED3\u679C\u4E2D\u53EF\u4EE5\u770B\u5230\uFF0C\u6700\u540E\u4E09\u4E2A\u65B9\u6CD5\u8F93\u51FA\u7684\u90FD\u662F\u548C lily \u76F8\u5173\u7684\u6253\u5370\u7ED3\u679C\uFF0C\u6EE1\u8DB3\u4E86\u6211\u4EEC\u7684\u9884\u671F\u3002</p><p>\u5173\u4E8E\u8FD9\u4E09\u4E2A\u65B9\u6CD5\u7684\u539F\u7406\u76F8\u5173\u5148\u4ECB\u7ECD\u5230\u8FD9\u91CC\uFF0C\u6211\u4EEC\u518D\u770B\u770B\u8FD9\u51E0\u4E2A\u65B9\u6CD5\u7684\u4F7F\u7528\u573A\u666F\u3002</p><p>\u65B9\u6CD5\u7684\u5E94\u7528\u573A\u666F \u4E0B\u9762\u51E0\u79CD\u5E94\u7528\u573A\u666F\uFF0C\u4F60\u591A\u52A0\u4F53\u4F1A\u5C31\u53EF\u4EE5\u53D1\u73B0\u5B83\u4EEC\u7684\u7406\u5FF5\u90FD\u662F\u201C\u501F\u7528\u201D\u65B9\u6CD5\u7684\u601D\u8DEF\u3002\u6211\u4EEC\u6765\u770B\u770B\u90FD\u6709\u54EA\u4E9B\u3002</p><p>\u5224\u65AD\u6570\u636E\u7C7B\u578B \u7528 Object.prototype.toString \u6765\u5224\u65AD\u7C7B\u578B\u662F\u6700\u5408\u9002\u7684\uFF0C\u501F\u7528\u5B83\u6211\u4EEC\u51E0\u4E4E\u53EF\u4EE5\u5224\u65AD\u6240\u6709\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u6211\u5728 01 \u8BB2\u6570\u636E\u7C7B\u578B\u7684\u5224\u65AD\u4E2D\u6709\u4ECB\u7ECD\u8FC7\uFF0C\u6211\u5C06\u5F53\u65F6\u603B\u7ED3\u7684\u7528\u6765\u5224\u65AD\u6570\u636E\u7C7B\u578B\u7684\u90A3\u90E8\u5206\u4EE3\u7801\u7C98\u8D34\u5728\u4E0B\u9762\u4E86\uFF0C\u4F60\u53EF\u4EE5\u56DE\u5FC6\u4E00\u4E0B\u3002</p><p>\u590D\u5236\u4EE3\u7801 function getType(obj){ let type = typeof obj; if (type !== &quot;object&quot;) { return type; } return Object.prototype.toString.call(obj).replace(/^$/, &#39;$1&#39;); } \u7ED3\u5408\u4E0A\u9762\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u4EE5\u53CA\u5728\u524D\u9762\u8BB2\u7684 call \u7684\u65B9\u6CD5\u7684 \u201C\u501F\u7528\u201D \u601D\u8DEF\uFF0C\u90A3\u4E48\u5224\u65AD\u6570\u636E\u7C7B\u578B\u5C31\u662F\u501F\u7528\u4E86 Object \u7684\u539F\u578B\u94FE\u4E0A\u7684 toString \u65B9\u6CD5\uFF0C\u6700\u540E\u8FD4\u56DE\u7528\u6765\u5224\u65AD\u4F20\u5165\u7684 obj \u7684\u5B57\u7B26\u4E32\uFF0C\u6765\u786E\u5B9A\u6700\u540E\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u518D\u591A\u505A\u8BB2\u89E3\u4E86\u3002</p><p>\u7C7B\u6570\u7EC4\u501F\u7528\u65B9\u6CD5 \u7C7B\u6570\u7EC4\u76F8\u5173\u77E5\u8BC6\u6211\u4F1A\u5728\u7B2C\u4E8C\u4E2A\u6A21\u5757\u201C\u6DF1\u5165\u6570\u7EC4\u201D\u4E2D\u8BE6\u7EC6\u4ECB\u7ECD\uFF0C\u8FD9\u91CC\u5148\u7B80\u5355\u8BF4\u4E00\u4E0B\uFF0C\u7C7B\u6570\u7EC4\u56E0\u4E3A\u4E0D\u662F\u771F\u6B63\u7684\u6570\u7EC4\uFF0C\u6240\u6709\u6CA1\u6709\u6570\u7EC4\u7C7B\u578B\u4E0A\u81EA\u5E26\u7684\u79CD\u79CD\u65B9\u6CD5\uFF0C\u6240\u4EE5\u6211\u4EEC\u5C31\u53EF\u4EE5\u5229\u7528\u4E00\u4E9B\u65B9\u6CD5\u53BB\u501F\u7528\u6570\u7EC4\u7684\u65B9\u6CD5\uFF0C\u6BD4\u5982\u501F\u7528\u6570\u7EC4\u7684 push \u65B9\u6CD5\uFF0C\u770B\u4E0B\u9762\u7684\u4E00\u6BB5\u4EE3\u7801\u3002</p><p>\u590D\u5236\u4EE3\u7801 var arrayLike = { 0: &#39;java&#39;, 1: &#39;script&#39;, length: 2 } Array.prototype.push.call(arrayLike, &#39;jack&#39;, &#39;lily&#39;); console.log(typeof arrayLike); // &#39;object&#39; console.log(arrayLike); // {0: &quot;java&quot;, 1: &quot;script&quot;, 2: &quot;jack&quot;, 3: &quot;lily&quot;, length: 4} \u4ECE\u4E0A\u9762\u7684\u4EE3\u7801\u53EF\u4EE5\u770B\u5230\uFF0CarrayLike \u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6A21\u62DF\u6570\u7EC4\u7684\u4E00\u4E2A\u7C7B\u6570\u7EC4\u3002\u4ECE\u6570\u636E\u7C7B\u578B\u4E0A\u770B\uFF0C\u5B83\u662F\u4E00\u4E2A\u5BF9\u8C61\u3002\u4ECE\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\u53EF\u4EE5\u770B\u51FA\uFF0C\u7528 typeof \u6765\u5224\u65AD\u8F93\u51FA\u7684\u662F &#39;object&#39;\uFF0C\u5B83\u81EA\u8EAB\u662F\u4E0D\u4F1A\u6709\u6570\u7EC4\u7684 push \u65B9\u6CD5\u7684\uFF0C\u8FD9\u91CC\u6211\u4EEC\u5C31\u7528 call \u7684\u65B9\u6CD5\u6765\u501F\u7528 Array \u539F\u578B\u94FE\u4E0A\u7684 push \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u4E00\u4E2A\u7C7B\u6570\u7EC4\u7684 push \u65B9\u6CD5\uFF0C\u7ED9 arrayLike \u6DFB\u52A0\u65B0\u7684\u5143\u7D20\u3002</p><p>\u4ECE\u4E0A\u9762\u7684\u63A7\u5236\u53F0\u53EF\u4EE5\u770B\u51FA\uFF0Cpush \u6EE1\u8DB3\u4E86\u6211\u4EEC\u60F3\u8981\u5B9E\u73B0\u6DFB\u52A0\u5143\u7D20\u7684\u8BC9\u6C42\u3002</p><p>\u83B7\u53D6\u6570\u7EC4\u7684\u6700\u5927 / \u6700\u5C0F\u503C \u6211\u4EEC\u53EF\u4EE5\u7528 apply \u6765\u5B9E\u73B0\u6570\u7EC4\u4E2D\u5224\u65AD\u6700\u5927 / \u6700\u5C0F\u503C\uFF0Capply \u76F4\u63A5\u4F20\u9012\u6570\u7EC4\u4F5C\u4E3A\u8C03\u7528\u65B9\u6CD5\u7684\u53C2\u6570\uFF0C\u4E5F\u53EF\u4EE5\u51CF\u5C11\u4E00\u6B65\u5C55\u5F00\u6570\u7EC4\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 Math.max\u3001Math.min \u6765\u83B7\u53D6\u6570\u7EC4\u7684\u6700\u5927\u503C / \u6700\u5C0F\u503C\uFF0C\u8BF7\u770B\u4E0B\u9762\u8FD9\u6BB5\u4EE3\u7801\u3002</p><p>\u590D\u5236\u4EE3\u7801 let arr = [13, 6, 10, 11, 16]; const max = Math.max.apply(Math, arr); const min = Math.min.apply(Math, arr);</p><p>console.log(max); // 16 console.log(min); // 6 \u7EE7\u627F \u6211\u4EEC\u5728\u4E0A\u4E00\u8BB2\u4E2D\u8BF4\u5230\u4E86\u7EE7\u627F\uFF0C\u5B83\u4E0E new\u3001call \u5171\u540C\u5B9E\u73B0\u4E86\u5404\u79CD\u5404\u6837\u7684\u7EE7\u627F\u65B9\u5F0F\u3002\u90A3\u4E48\u4E0B\u9762\u6211\u4EEC\u7ED3\u5408\u7740\u8FD9\u4E00\u8BB2\u7684\u5185\u5BB9\u518D\u6765\u56DE\u987E\u4E00\u4E0B\u7EC4\u5408\u7EE7\u627F\u65B9\u5F0F\uFF0C\u4EE3\u7801\u5982\u4E0B\u3002</p><p>\u590D\u5236\u4EE3\u7801 function Parent3 () { this.name = &#39;parent3&#39;; this.play = [1, 2, 3]; }</p><p>Parent3.prototype.getName = function () { return this.name; } function Child3() { Parent3.call(this); this.type = &#39;child3&#39;; }</p><p>Child3.prototype = new Parent3(); Child3.prototype.constructor = Child3; var s3 = new Child3(); console.log(s3.getName()); // &#39;parent3&#39; \u5173\u4E8E\u7EE7\u627F\u7684\u5185\u5BB9\u5728\u8FD9\u91CC\u5C31\u4E0D\u8FC7\u591A\u8BB2\u89E3\u4E86\uFF0C\u53E6\u5916\u8FD9\u4E9B\u65B9\u6CD5\u7C7B\u4F3C\u7684\u5E94\u7528\u573A\u666F\u8FD8\u6709\u5F88\u591A\uFF0C\u5173\u952E\u5728\u4E8E\u5B83\u4EEC\u501F\u7528\u65B9\u6CD5\u7684\u7406\u5FF5\uFF0C\u5982\u679C\u5BF9\u8FD9\u90E8\u5206\u5185\u5BB9\u4E0D\u7406\u89E3\u7684\u8BDD\uFF0C\u4F60\u53EF\u4EE5\u518D\u591A\u770B\u51E0\u904D\u3002</p><p>\u5982\u4F55\u81EA\u5DF1\u5B9E\u73B0\u8FD9\u4E9B\u65B9\u6CD5 \u5728\u4E92\u8054\u7F51\u5927\u5382\u7684\u9762\u8BD5\u4E2D\uFF0C\u624B\u5199\u5B9E\u73B0 new\u3001call\u3001apply\u3001bind \u4E00\u76F4\u662F\u6BD4\u8F83\u9AD8\u9891\u7684\u9898\u76EE\uFF0C\u7ED3\u5408\u672C\u8BB2\u7684\u5185\u5BB9\uFF0C\u6211\u4EEC\u4E00\u8D77\u6765\u624B\u5DE5\u5B9E\u73B0\u4E00\u4E0B\u8FD9\u51E0\u4E2A\u65B9\u6CD5\u3002</p><p>new \u7684\u5B9E\u73B0 \u6211\u4EEC\u521A\u624D\u5728\u8BB2 new \u7684\u539F\u7406\u65F6\uFF0C\u4ECB\u7ECD\u4E86\u6267\u884C new \u7684\u8FC7\u7A0B\u3002\u90A3\u4E48\u6765\u770B\u4E0B\u5728\u8FD9\u8FC7\u7A0B\u4E2D\uFF0Cnew \u88AB\u8C03\u7528\u540E\u5927\u81F4\u505A\u4E86\u54EA\u51E0\u4EF6\u4E8B\u60C5\u3002</p><p>\u8BA9\u5B9E\u4F8B\u53EF\u4EE5\u8BBF\u95EE\u5230\u79C1\u6709\u5C5E\u6027\uFF1B</p><p>\u8BA9\u5B9E\u4F8B\u53EF\u4EE5\u8BBF\u95EE\u6784\u9020\u51FD\u6570\u539F\u578B\uFF08constructor.prototype\uFF09\u6240\u5728\u539F\u578B\u94FE\u4E0A\u7684\u5C5E\u6027\uFF1B</p><p>\u6784\u9020\u51FD\u6570\u8FD4\u56DE\u7684\u6700\u540E\u7ED3\u679C\u662F\u5F15\u7528\u6570\u636E\u7C7B\u578B\u3002</p><p>\u90A3\u4E48\u8BF7\u4F60\u601D\u8003\u4E00\u4E0B\uFF0C\u81EA\u5DF1\u5B9E\u73B0 new \u7684\u4EE3\u7801\u5E94\u8BE5\u5982\u4F55\u5199\u5462\uFF1F\u4E0B\u9762\u6211\u7ED9\u4F60\u4E00\u4E2A\u601D\u8DEF\u3002</p><p>\u590D\u5236\u4EE3\u7801 function _new(ctor, ...args) { if(typeof ctor !== &#39;function&#39;) { throw &#39;ctor must be a function&#39;; } let obj = new Object(); obj.<strong>proto</strong> = Object.create(ctor.prototype); let res = ctor.apply(obj, [...args]);</p><pre><code>let isObject = typeof res === &#39;object&#39; &amp;&amp; res !== null;
let isFunction = typeof res === &#39;function&#39;;
return isObject || isFunction ? res : obj;
</code></pre><p>}; \u63A5\u4E0B\u6765\u6211\u4EEC\u518D\u770B\u770B apply \u548C call \u7684\u5B9E\u73B0\u65B9\u6CD5\u3002</p><p>apply \u548C call \u7684\u5B9E\u73B0 \u7531\u4E8E apply \u548C call \u57FA\u672C\u539F\u7406\u662F\u5DEE\u4E0D\u591A\u7684\uFF0C\u53EA\u662F\u53C2\u6570\u5B58\u5728\u533A\u522B\uFF0C\u56E0\u6B64\u6211\u4EEC\u5C06\u8FD9\u4E24\u4E2A\u7684\u5B9E\u73B0\u65B9\u6CD5\u653E\u5728\u4E00\u8D77\u8BB2\u3002</p><p>\u4F9D\u7136\u662F\u7ED3\u5408\u65B9\u6CD5\u201C\u501F\u7528\u201D\u7684\u539F\u7406\uFF0C\u6211\u4EEC\u4E00\u8D77\u6765\u601D\u8003\u4E00\u4E0B\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u5982\u4F55\u5B9E\u73B0\uFF0C\u8BF7\u770B\u4E0B\u9762\u5B9E\u73B0\u7684\u4EE3\u7801\u3002</p><p>\u590D\u5236\u4EE3\u7801 Function.prototype.call = function (context, ...args) { var context = context || window; context.fn = this; var result = eval(&#39;context.fn(...args)&#39;); delete context.fn return result; } Function.prototype.apply = function (context, args) { let context = context || window; context.fn = this; let result = eval(&#39;context.fn(...args)&#39;); delete context.fn return result; } \u4ECE\u4E0A\u9762\u7684\u4EE3\u7801\u53EF\u4EE5\u770B\u51FA\uFF0C\u5B9E\u73B0 call \u548C apply \u7684\u5173\u952E\u5C31\u5728 eval \u8FD9\u884C\u4EE3\u7801\u3002\u5176\u4E2D\u663E\u793A\u4E86\u7528 context \u8FD9\u4E2A\u4E34\u65F6\u53D8\u91CF\u6765\u6307\u5B9A\u4E0A\u4E0B\u6587\uFF0C\u7136\u540E\u8FD8\u662F\u901A\u8FC7\u6267\u884C eval \u6765\u6267\u884C context.fn \u8FD9\u4E2A\u51FD\u6570\uFF0C\u6700\u540E\u8FD4\u56DE result\u3002</p><p>\u8981\u6CE8\u610F\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u548C bind \u7684\u533A\u522B\u5C31\u5728\u4E8E\uFF0C\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u662F\u76F4\u63A5\u8FD4\u56DE\u6267\u884C\u7ED3\u679C\uFF0C\u800C bind \u65B9\u6CD5\u662F\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\uFF0C\u56E0\u6B64\u8FD9\u91CC\u76F4\u63A5\u7528 eval \u6267\u884C\u5F97\u5230\u7ED3\u679C\u3002</p><p>\u5982\u679C\u8BA9\u4F60\u53BB\u6267\u884C\uFF0C\u8FD9\u4E2A\u533A\u522B\u4E00\u5B9A\u8981\u591A\u52A0\u6CE8\u610F\u3002\u7D27\u63A5\u7740\u6211\u4EEC\u5C31\u6765\u770B\u4E0B bind \u7684\u5B9E\u73B0\u3002</p><p>bind \u7684\u5B9E\u73B0 \u7ED3\u5408\u4E0A\u9762\u4E24\u4E2A\u65B9\u6CD5\u7684\u5B9E\u73B0\uFF0Cbind \u7684\u5B9E\u73B0\u601D\u8DEF\u57FA\u672C\u548C apply \u4E00\u6837\uFF0C\u4F46\u662F\u5728\u6700\u540E\u5B9E\u73B0\u8FD4\u56DE\u7ED3\u679C\u8FD9\u91CC\uFF0Cbind \u548C apply \u6709\u7740\u6BD4\u8F83\u5927\u7684\u5DEE\u5F02\uFF0Cbind \u4E0D\u9700\u8981\u76F4\u63A5\u6267\u884C\uFF0C\u56E0\u6B64\u4E0D\u518D\u9700\u8981\u7528 eval \uFF0C\u800C\u662F\u9700\u8981\u901A\u8FC7\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\u7684\u65B9\u5F0F\u5C06\u7ED3\u679C\u8FD4\u56DE\uFF0C\u4E4B\u540E\u518D\u901A\u8FC7\u6267\u884C\u8FD9\u4E2A\u7ED3\u679C\uFF0C\u5F97\u5230\u60F3\u8981\u7684\u6267\u884C\u6548\u679C\u3002</p><p>\u90A3\u4E48\uFF0C\u7ED3\u5408\u8FD9\u4E2A\u601D\u8DEF\uFF0C\u6211\u4EEC\u770B\u4E0B bind \u8FD9\u4E2A\u65B9\u6CD5\u7684\u5E95\u5C42\u903B\u8F91\u5B9E\u73B0\u7684\u4EE3\u7801\u662F\u4EC0\u4E48\u6837\u7684\uFF0C\u5982\u4E0B\u6240\u793A\u3002</p><p>\u590D\u5236\u4EE3\u7801 Function.prototype.bind = function (context, ...args) { if (typeof this !== &quot;function&quot;) { throw new Error(&quot;this must be a function&quot;); } var self = this; var fbound = function () { self.apply(this instanceof self ? this : context, args.concat(Array.prototype.slice.call(arguments))); } if(this.prototype) { fbound.prototype = Object.create(this.prototype); } return fbound; } \u4ECE\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\u53EF\u4EE5\u770B\u5230\uFF0C\u5B9E\u73B0 bind \u7684\u6838\u5FC3\u5728\u4E8E\u8FD4\u56DE\u7684\u65F6\u5019\u9700\u8981\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\uFF0C\u6545\u8FD9\u91CC\u7684 fbound \u9700\u8981\u8FD4\u56DE\uFF0C\u4F46\u662F\u5728\u8FD4\u56DE\u7684\u8FC7\u7A0B\u4E2D\u539F\u578B\u94FE\u5BF9\u8C61\u4E0A\u7684\u5C5E\u6027\u4E0D\u80FD\u4E22\u5931\u3002\u56E0\u6B64\u8FD9\u91CC\u9700\u8981\u7528 Object.create \u65B9\u6CD5\uFF0C\u5C06 this.prototype \u4E0A\u9762\u7684\u5C5E\u6027\u6302\u5230 fbound \u7684\u539F\u578B\u4E0A\u9762\uFF0C\u6700\u540E\u518D\u8FD4\u56DE fbound\u3002\u8FD9\u6837\u8C03\u7528 bind \u65B9\u6CD5\u63A5\u6536\u5230\u51FD\u6570\u7684\u5BF9\u8C61\uFF0C\u518D\u901A\u8FC7\u6267\u884C\u63A5\u6536\u7684\u51FD\u6570\uFF0C\u5373\u53EF\u5F97\u5230\u60F3\u8981\u7684\u7ED3\u679C\u3002</p><p>\u90A3\u4E48\u8BB2\u5230\u8FD9\u91CC\uFF0C\u4F60\u662F\u4E0D\u662F\u5DF2\u7ECF\u6E05\u695A\u4E86 new\u3001apply\u3001call\u3001bind \u8FD9\u4E9B\u65B9\u6CD5\u662F\u5982\u4F55\u5B9E\u73B0\u7684\u5462\uFF1F\u5982\u679C\u8FD8\u662F\u4E00\u77E5\u534A\u89E3\uFF0C\u6211\u5EFA\u8BAE\u4F60\u591A\u52A8\u624B\u5B9E\u8DF5\u51E0\u6B21\u3002</p><p>\u603B\u7ED3 \u8FD9\u4E00\u8BB2\u7684\u5185\u5BB9\u5C31\u4ECB\u7ECD\u5B8C\u4E86\u3002\u6211\u4EEC\u901A\u8FC7\u539F\u7406\u4EE5\u53CA\u5BF9\u5E95\u5C42\u903B\u8F91\u7684\u5256\u6790\uFF0C\u4ECB\u7ECD\u4E86\u65E5\u5E38\u5F00\u53D1\u4E2D\u7ECF\u5E38\u7528\u7684 new\u3001apply\u3001call\u3001bind \u8FD9\u51E0\u79CD\u65B9\u6CD5\uFF0C\u6700\u540E\u5E26\u4F60\u4E00\u8D77\u52A8\u624B\u8FDB\u884C\u4E86\u5B9E\u8DF5\u3002</p><p>\u7EFC\u4E0A\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u8FD9\u51E0\u4E2A\u65B9\u6CD5\u662F\u6709\u533A\u522B\u548C\u8054\u7CFB\u7684\uFF0C\u901A\u8FC7\u4E0B\u9762\u7684\u8868\u683C\u6211\u4EEC\u518D\u6765\u68B3\u7406\u4E00\u4E0B\u8FD9\u4E9B\u65B9\u6CD5\u7684\u5F02\u540C\u70B9\uFF0C\u5E0C\u671B\u4F60\u53EF\u4EE5\u66F4\u597D\u5730\u7406\u89E3\u3002</p><p>\u56FE\u7247 5.png</p><p>\u5728\u65E5\u5E38\u7684\u524D\u7AEF\u5F00\u53D1\u5DE5\u4F5C\u4E2D\uFF0C\u5927\u5BB6\u5F80\u5F80\u4F1A\u5FFD\u89C6\u5BF9\u8FD9\u4E9B\u65B9\u6CD5\u7684\u7CFB\u7EDF\u6027\u5B66\u4E60\uFF0C\u5176\u5B9E\u8FD9\u4E9B\u65B9\u6CD5\u5728\u9AD8\u7EA7 JavaScript \u7F16\u7A0B\u4E2D\u7ECF\u5E38\u51FA\u73B0\uFF0C\u5C24\u5176\u662F\u4F60\u53BB\u770B\u4E00\u4E9B\u6BD4\u8F83\u597D\u7684\u5F00\u6E90\u9879\u76EE\uFF0C\u7ECF\u5E38\u4F1A\u901A\u8FC7\u201C\u501F\u7528\u201D\u7684\u65B9\u5F0F\u53BB\u590D\u7528\u5DF2\u6709\u7684\u65B9\u6CD5\uFF0C\u6765\u8282\u7EA6\u5185\u5B58\u3001\u4F18\u5316\u4EE3\u7801\u3002</p><p>\u800C\u4E14\u8FD9\u4E9B\u65B9\u6CD5\u7684\u5E95\u5C42\u903B\u8F91\u7684\u5B9E\u73B0\uFF0C\u5728\u4E92\u8054\u7F51\u5927\u5382\u7684\u524D\u7AEF\u9762\u8BD5\u4E2D\u51FA\u73B0\u7684\u9891\u7387\u4E5F\u6BD4\u8F83\u9AD8\uFF0C\u6BCF\u4E2A\u5B9E\u73B0\u7684\u65B9\u6CD5\u7EC6\u8282\u4E5F\u6BD4\u8F83\u96F6\u6563\uFF0C\u5F88\u591A\u5F00\u53D1\u8005\u5F88\u96BE\u6709\u4E00\u4E2A\u7CFB\u7EDF\u7684\u3001\u6574\u4F53\u7684\u5B66\u4E60\uFF0C\u9020\u6210\u4E86\u5728\u9762\u8BD5\u8FC7\u7A0B\u4E2D\u9047\u5230\u6B64\u7C7B\u624B\u5199\u5E95\u5C42 API \u7B49\u95EE\u9898\u65F6\uFF0C\u5BB9\u6613\u4E34\u573A\u53D1\u6035\u3002</p><p>\u56E0\u6B64\u6211\u5E0C\u671B\u901A\u8FC7\u8FD9\u4E00\u8BB2\u7684\u5B66\u4E60\uFF0C\u4F60\u80FD\u5F88\u597D\u5730\u638C\u63E1\u8FD9\u90E8\u5206\u5185\u5BB9\uFF0C\u4EE5\u4FBF\u5728\u9762\u8BD5\u4E2D\u9047\u5230\u8FD9\u7C7B\u9898\u76EE\u7684\u65F6\u5019\u80FD\u591F\u8F7B\u677E\u5E94\u5BF9\u3002</p><p>\u5728\u540E\u7EED\u7684\u8BFE\u65F6\u4E2D\uFF0C\u6211\u5C06\u7EE7\u7EED\u5E26\u9886\u4F60\u6DF1\u5165\u6316\u6398\u95ED\u5305\u7684\u539F\u7406\u548C\u5E95\u5C42\u77E5\u8BC6\u3002\u540C\u65F6\u5E0C\u671B\u4F60\u591A\u52A8\u624B\u7EC3\u4E60\u4EE5\u719F\u7EC3\u4E0A\u9762\u7684\u4EE3\u7801\uFF0C\u4E5F\u6B22\u8FCE\u4F60\u5728\u4E0B\u65B9\u7559\u8A00\u8BA8\u8BBA\u81EA\u5DF1\u5728\u5B66\u4E60\u8FC7\u7A0B\u4E2D\u9047\u5230\u7684\u56F0\u60D1\uFF0C\u4EE5\u53CA\u5B66\u4E60\u611F\u609F\u7B49\uFF0C\u8BA9\u6211\u4EEC\u5171\u540C\u8FDB\u6B65\u3002</p><p>\u6211\u4EEC\u4E0B\u4E00\u8BFE\u65F6\u518D\u89C1~</p>`,73);function t(o,s){return e}var r=p(a,[["render",t]]);export{r as default};
