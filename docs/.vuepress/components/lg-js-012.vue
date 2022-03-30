<template>
  <div data-v-1605a430="">
    <h1 data-v-1605a430="" class="main-title">
      12 | 进阶练习：带你手写 JS 数组多个方法的底层实现
    </h1>
    <div data-v-1605a430="" class="main-tips">
      2021/02/15
      <span data-v-1605a430="" class="auth">若离</span>
    </div>
    <div data-v-1605a430="" class="media-player-wrap">
      <div data-v-6ecd2302="" data-v-1605a430="">
        <div data-v-6ecd2302="" class="media-container">
          <div data-v-6ecd2302="" class="button-wrap inline-block">
            <div data-v-6ecd2302="" class="button-icon inline-block"></div>
          </div>
          <div data-v-6ecd2302="" class="data-wrap inline-block">
            <div data-v-6ecd2302="" class="progress-bar">
              <div
                class="vue-slider vue-slider-ltr"
                style="padding: 7px 0px; width: auto; height: 4px"
              >
                <div
                  class="vue-slider-rail"
                  style="
                    height: 2px;
                    background: rgb(213, 218, 223);
                    border-radius: 1.5px;
                  "
                >
                  <div
                    class="vue-slider-process"
                    style="
                      height: 100%;
                      top: 0px;
                      left: 0%;
                      width: 0%;
                      transition-property: width, left;
                      transition-duration: 0.5s;
                      background: rgb(252, 215, 102);
                    "
                  ></div>
                  <div
                    aria-valuetext="00:00/04:42"
                    class="vue-slider-dot vue-slider-dot-hover"
                    role="slider"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="282"
                    aria-orientation="horizontal"
                    tabindex="0"
                    style="
                      width: 14px;
                      height: 14px;
                      transform: translate(-50%, -50%);
                      top: 50%;
                      left: 0%;
                      transition: left 0.5s ease 0s;
                    "
                  >
                    <div
                      class="vue-slider-dot-handle"
                      style="
                        width: 16px;
                        height: 16px;
                        background: rgb(252, 215, 102);
                        box-shadow: none;
                        margin-top: -1px;
                        z-index: 1;
                      "
                    ></div>
                    <div
                      class="vue-slider-dot-tooltip vue-slider-dot-tooltip-top"
                    >
                      <div
                        class="vue-slider-dot-tooltip-inner vue-slider-dot-tooltip-inner-top"
                        style="
                          padding: 2px 12px;
                          border-radius: 14px;
                          font-size: 14px;
                          color: rgb(0, 0, 0);
                          background: rgb(252, 215, 102);
                          min-width: 20px;
                          border-color: rgb(252, 215, 102);
                        "
                      >
                        <span class="vue-slider-dot-tooltip-text"
                          >00:00/04:42</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ecd2302="" class="detail-wrap">
              <div data-v-6ecd2302="" class="detail-one">12.3M</div>
              <div data-v-6ecd2302="" class="detail-two">00:00/04:42</div>
            </div>
          </div>
          <div data-v-6ecd2302="" class="division-line inline-block"></div>
          <div data-v-6ecd2302="" class="viedo-wrap inline-block">
            <div data-v-6ecd2302="" class="viedo-icon"></div>
            <div data-v-6ecd2302="" class="text">看视频</div>
          </div>
        </div>
        <!---->
      </div>
    </div>
    <div data-v-1605a430="" class="main-container">
      <div data-v-1605a430="" class="rich-text-wrap">
        <p data-nodeid="2084" class="">
          我们都知道，比较常用的数组方法有 push、pop、slice、map 和 reduce
          等。上一讲我带你剖析了 sort 方法以及 V8
          源码中关于排序的内容，本讲则会围绕这几个常用方法，并结合 V8
          的源代码带你手写这些方法的底层实现。
        </p>
        <p data-nodeid="2085">
          那么，为了方便你更好地理解本讲的内容，在课程开始前请你先回想一下：
        </p>
        <ol data-nodeid="2086">
          <li data-nodeid="2087">
            <p data-nodeid="2088">reduce 方法里面的参数都是什么作用？</p>
          </li>
          <li data-nodeid="2089">
            <p data-nodeid="2090">push 和 pop 的底层逻辑是什么样的呢？</p>
          </li>
        </ol>
        <p data-nodeid="2091">带着思考，我们开始今天的学习。</p>
        <h3 data-nodeid="2092">push 方法的底层实现</h3>
        <p data-nodeid="2093">
          为了更好地实现 push 的底层方法，你可以先去 ECMA 的官网去查一下关于
          push 的基本描述（链接：<a
            href="https://tc39.es/ecma262/#sec-array.prototype.push"
            data-nodeid="2170"
            >ECMA 数组的 push 标准</a
          >），我们看下其英文的描述，如下所示。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="plain"><ol><li><div class="code-word">When the&nbsp;push&nbsp;method is called with zero or more arguments, the following steps are taken:
</div></li><li><div class="code-word">1. Let&nbsp;O&nbsp;be ?&nbsp;ToObject(this&nbsp;value).
</div></li><li><div class="code-word">2. Let&nbsp;len&nbsp;be ?&nbsp;LengthOfArrayLike(O).
</div></li><li><div class="code-word">3. Let&nbsp;argCount&nbsp;be the number of elements in&nbsp;items.
</div></li><li><div class="code-word">4. If&nbsp;len&nbsp;+&nbsp;argCount&nbsp;&gt; 2^53&nbsp;- 1, throw a&nbsp;TypeError&nbsp;exception.
</div></li><li><div class="code-word">5. For each element&nbsp;E&nbsp;of&nbsp;items, do
</div></li><li><div class="code-word">  a. Perform ?&nbsp;Set(O, !&nbsp;ToString(F(len)),&nbsp;E,&nbsp;true).
</div></li><li><div class="code-word">  b. Set&nbsp;len&nbsp;to&nbsp;len&nbsp;+ 1.
</div></li><li><div class="code-word">6. Perform ?&nbsp;Set(O,&nbsp;"length",&nbsp;F(len),&nbsp;true).
</div></li><li><div class="code-word">7. Return&nbsp;F(len).
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="2095">
          从上面的描述可以看到边界判断逻辑以及实现的思路，根据这段英文，我们将其转换为容易理解代码，如下所示。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-built_in">Array</span>.prototype.push = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">...items</span>) </span>{
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> O = <span class="hljs-built_in">Object</span>(<span class="hljs-keyword">this</span>);  <span class="hljs-comment">// ecma 中提到的先转换为对象</span>
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> len = <span class="hljs-keyword">this</span>.length &gt;&gt;&gt; <span class="hljs-number">0</span>;
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> argCount = items.length &gt;&gt;&gt; <span class="hljs-number">0</span>;
</div></li><li><div class="code-word">  <span class="hljs-comment">// 2 ^ 53 - 1 为JS能表示的最大正整数</span>
</div></li><li><div class="code-word">  <span class="hljs-keyword">if</span> (len + argCount &gt; <span class="hljs-number">2</span> ** <span class="hljs-number">53</span> - <span class="hljs-number">1</span>) {
</div></li><li><div class="code-word">    <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">TypeError</span>(<span class="hljs-string">"The number of array is over the max value"</span>)
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  <span class="hljs-keyword">for</span>(<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; argCount; i++) {
</div></li><li><div class="code-word">    O[len + i] = items[i];
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> newLength = len + argCount;
</div></li><li><div class="code-word">  O.length = newLength;
</div></li><li><div class="code-word">  <span class="hljs-keyword">return</span> newLength;
</div></li><li><div class="code-word">}
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="2097">
          从上面的代码可以看出，关键点就在于给数组本身循环添加新的元素
          item，然后调整数组的长度 length 为最新的长度，即可完成 push
          的底层实现。
        </p>
        <p data-nodeid="2098">
          其中关于长度的部分需要做无符号位移，无符号位移在很多源码中你都会看到。关于为什么一些变量要进行无符号位移，你可以自己研究一下，比如在
          Stack Overflow
          中有一些高票的回答，这里就不占用篇幅了。下面我们再看来一下 pop
          的实现。
        </p>
        <h3 data-nodeid="2099">pop 方法的底层实现</h3>
        <p data-nodeid="2100">
          同样我们也一起来看下 pop 的底层实现，你也可以先去 ECMA
          的官网去查一下关于 pop 的基本描述（链接：<a
            href="https://tc39.es/ecma262/#sec-array.prototype.pop"
            data-nodeid="2179"
            >ECMA 数组的 pop 标准</a
          >），我们还是同样看下英文的描述。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="plain"><ol><li><div class="code-word">When the&nbsp;pop&nbsp;method is called, the following steps are taken:
</div></li><li><div class="code-word">1. Let&nbsp;O&nbsp;be ?&nbsp;ToObject(this&nbsp;value).
</div></li><li><div class="code-word">2. Let&nbsp;len&nbsp;be ?&nbsp;LengthOfArrayLike(O).
</div></li><li><div class="code-word">3. If&nbsp;len&nbsp;= 0, then
</div></li><li><div class="code-word">    Perform ?&nbsp;Set(O,&nbsp;"length",&nbsp;+0F,&nbsp;true).
</div></li><li><div class="code-word">    Return&nbsp;undefined.
</div></li><li><div class="code-word">4. Else,
</div></li><li><div class="code-word">  Assert:&nbsp;len&nbsp;&gt; 0.
</div></li><li><div class="code-word">  Let&nbsp;newLen&nbsp;be&nbsp;F(len&nbsp;- 1).
</div></li><li><div class="code-word">  Let&nbsp;index&nbsp;be !&nbsp;ToString(newLen).
</div></li><li><div class="code-word">  Let&nbsp;element&nbsp;be ?&nbsp;Get(O,&nbsp;index).
</div></li><li><div class="code-word">  Perform ?&nbsp;DeletePropertyOrThrow(O,&nbsp;index).
</div></li><li><div class="code-word">  Perform ?&nbsp;Set(O,&nbsp;"length",&nbsp;newLen,&nbsp;true).
</div></li><li><div class="code-word">  Return&nbsp;element.
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="2102">
          从上面的描述可以看到边界判断逻辑以及实现的思路，根据上面的英文，我们同样将其转换为可以理解的代码，如下所示。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-built_in">Array</span>.prototype.pop = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> O = <span class="hljs-built_in">Object</span>(<span class="hljs-keyword">this</span>);
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> len = <span class="hljs-keyword">this</span>.length &gt;&gt;&gt; <span class="hljs-number">0</span>;
</div></li><li><div class="code-word">  <span class="hljs-keyword">if</span> (len === <span class="hljs-number">0</span>) {
</div></li><li><div class="code-word">    O.length = <span class="hljs-number">0</span>;
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> <span class="hljs-literal">undefined</span>;
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  len --;
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> value = O[len];
</div></li><li><div class="code-word">  <span class="hljs-keyword">delete</span> O[len];
</div></li><li><div class="code-word">  O.length = len;
</div></li><li><div class="code-word">  <span class="hljs-keyword">return</span> value;
</div></li><li><div class="code-word">}
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="2104">
          其核心思路还是在于删掉数组自身的最后一个元素，index 就是数组的 len
          长度，然后更新最新的长度，最后返回的元素的值，即可达到想要的效果。另外就是在当长度为
          0 的时候，如果执行 pop 操作，返回的是 undefined，需要做一下特殊处理。
        </p>
        <p data-nodeid="2105">
          看完了 pop 的实现，我们再来看一下 map 方法的底层逻辑。
        </p>
        <h3 data-nodeid="2106">map 方法的底层实现</h3>
        <p data-nodeid="2107">
          同样你可以去 ECMA 的官网去查一下关于 map 的基本描述（链接：<a
            href="https://tc39.es/ecma262/#sec-array.prototype.map"
            data-nodeid="2188"
            >ECMA 数组的 map 标准</a
          >），请看英文的表述。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="plain"><ol><li><div class="code-word">When the&nbsp;map&nbsp;method is called with one or two arguments, the following steps are taken:
</div></li><li><div class="code-word">1. Let&nbsp;O&nbsp;be ?&nbsp;ToObject(this&nbsp;value).
</div></li><li><div class="code-word">2. Let&nbsp;len&nbsp;be ?&nbsp;LengthOfArrayLike(O).
</div></li><li><div class="code-word">3. If&nbsp;IsCallable(callbackfn) is&nbsp;false, throw a&nbsp;TypeError&nbsp;exception.
</div></li><li><div class="code-word">4. Let&nbsp;A&nbsp;be ?&nbsp;ArraySpeciesCreate(O,&nbsp;len).
</div></li><li><div class="code-word">5. Let&nbsp;k&nbsp;be 0.
</div></li><li><div class="code-word">6. Repeat, while&nbsp;k&nbsp;&lt;&nbsp;len,
</div></li><li><div class="code-word">    a. Let&nbsp;Pk&nbsp;be !&nbsp;ToString(F(k)).
</div></li><li><div class="code-word">    b. Let&nbsp;kPresent&nbsp;be ?&nbsp;HasProperty(O,&nbsp;Pk).
</div></li><li><div class="code-word">    c. If&nbsp;kPresent&nbsp;is&nbsp;true, then
</div></li><li><div class="code-word">        Let&nbsp;kValue&nbsp;be ?&nbsp;Get(O,&nbsp;Pk).
</div></li><li><div class="code-word">        Let&nbsp;mappedValue&nbsp;be ?&nbsp;Call(callbackfn,&nbsp;thisArg, «&nbsp;kValue,&nbsp;F(k),&nbsp;O&nbsp;»).
</div></li><li><div class="code-word">        Perform ?&nbsp;CreateDataPropertyOrThrow(A,&nbsp;Pk,&nbsp;mappedValue).
</div></li><li><div class="code-word">    d. Set&nbsp;k&nbsp;to&nbsp;k&nbsp;+ 1.
</div></li><li><div class="code-word">7. Return&nbsp;A.
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="2109">
          同样的，根据上面的英文，我们将其转换为可理解的代码，如下所示。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-built_in">Array</span>.prototype.map = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">callbackFn, thisArg</span>) </span>{
</div></li><li><div class="code-word">  <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span> === <span class="hljs-literal">null</span> || <span class="hljs-keyword">this</span> === <span class="hljs-literal">undefined</span>) {
</div></li><li><div class="code-word">    <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">TypeError</span>(<span class="hljs-string">"Cannot read property 'map' of null"</span>);
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  <span class="hljs-keyword">if</span> (<span class="hljs-built_in">Object</span>.prototype.toString.call(callbackfn) != <span class="hljs-string">"[object Function]"</span>) {
</div></li><li><div class="code-word">    <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">TypeError</span>(callbackfn + <span class="hljs-string">' is not a function'</span>)
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> O = <span class="hljs-built_in">Object</span>(<span class="hljs-keyword">this</span>);
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> T = thisArg;
</div></li><li><div class="code-word">
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> len = O.length &gt;&gt;&gt; <span class="hljs-number">0</span>;
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> A = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Array</span>(len);
</div></li><li><div class="code-word">  <span class="hljs-keyword">for</span>(<span class="hljs-keyword">let</span> k = <span class="hljs-number">0</span>; k &lt; len; k++) {
</div></li><li><div class="code-word">    <span class="hljs-keyword">if</span> (k <span class="hljs-keyword">in</span> O) {
</div></li><li><div class="code-word">      <span class="hljs-keyword">let</span> kValue = O[k];
</div></li><li><div class="code-word">      <span class="hljs-comment">// 依次传入this, 当前项，当前索引，整个数组</span>
</div></li><li><div class="code-word">      <span class="hljs-keyword">let</span> mappedValue = callbackfn.call(T, KValue, k, O);
</div></li><li><div class="code-word">      A[k] = mappedValue;
</div></li><li><div class="code-word">    }
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  <span class="hljs-keyword">return</span> A;
</div></li><li><div class="code-word">}
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="2111">
          有了上面实现 push 和 pop 的基础思路，map
          的实现也不会太难了，基本就是再多加一些判断，循环遍历实现 map
          的思路，将处理过后的 mappedValue 赋给一个新定义的数组
          A，最后返回这个新数组 A，并不改变原数组的值。
        </p>
        <p data-nodeid="2112">
          我们在“<a
            href="https://kaiwu.lagou.com/course/courseInfo.htm?courseId=601#/detail/pc?id=6180"
            data-nodeid="2197"
            >07 | 数组原理（上）：帮你梳理眼花缭乱的数组 API</a
          >”中也介绍过数据的方法分类，遍历类型的方法最后返回的都是一个新数组，并不改变原有数组的值，这点你需要牢记。
        </p>
        <p data-nodeid="2113">最后我们来看看 reduce 的实现。</p>
        <h3 data-nodeid="2114">reduce 方法的底层实现</h3>
        <p data-nodeid="2115">
          ECMA 官网关于 reduce 的基本描述（链接：<a
            href="https://tc39.es/ecma262/#sec-array.prototype.pop"
            data-nodeid="2204"
            >ECMA 数组的 pop 标准</a
          >），如下所示。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="plain"><ol><li><div class="code-word">When the&nbsp;reduce&nbsp;method is called with one or two arguments, the following steps are taken:
</div></li><li><div class="code-word">1. Let&nbsp;O&nbsp;be ?&nbsp;ToObject(this&nbsp;value).
</div></li><li><div class="code-word">2. Let&nbsp;len&nbsp;be ?&nbsp;LengthOfArrayLike(O).
</div></li><li><div class="code-word">3. If&nbsp;IsCallable(callbackfn) is&nbsp;false, throw a&nbsp;TypeError&nbsp;exception.
</div></li><li><div class="code-word">4. If&nbsp;len&nbsp;= 0 and&nbsp;initialValue&nbsp;is not present, throw a&nbsp;TypeError&nbsp;exception.
</div></li><li><div class="code-word">5. Let&nbsp;k&nbsp;be 0.
</div></li><li><div class="code-word">6. Let&nbsp;accumulator&nbsp;be&nbsp;undefined.
</div></li><li><div class="code-word">7. If&nbsp;initialValue&nbsp;is present, then
</div></li><li><div class="code-word">    Set&nbsp;accumulator&nbsp;to&nbsp;initialValue.
</div></li><li><div class="code-word">8. Else,
</div></li><li><div class="code-word">    Let&nbsp;kPresent&nbsp;be&nbsp;false.
</div></li><li><div class="code-word">    Repeat, while&nbsp;kPresent&nbsp;is&nbsp;false&nbsp;and&nbsp;k&nbsp;&lt;&nbsp;len,
</div></li><li><div class="code-word">        Let&nbsp;Pk&nbsp;be !&nbsp;ToString(F(k)).
</div></li><li><div class="code-word">        Set&nbsp;kPresent&nbsp;to ?&nbsp;HasProperty(O,&nbsp;Pk).
</div></li><li><div class="code-word">        If&nbsp;kPresent&nbsp;is&nbsp;true, then
</div></li><li><div class="code-word">        Set&nbsp;accumulator&nbsp;to ?&nbsp;Get(O,&nbsp;Pk).
</div></li><li><div class="code-word">        Set&nbsp;k&nbsp;to&nbsp;k&nbsp;+ 1.
</div></li><li><div class="code-word">    If&nbsp;kPresent&nbsp;is&nbsp;false, throw a&nbsp;TypeError&nbsp;exception.
</div></li><li><div class="code-word">9. Repeat, while&nbsp;k&nbsp;&lt;&nbsp;len,
</div></li><li><div class="code-word">    Let&nbsp;Pk&nbsp;be !&nbsp;ToString(F(k)).
</div></li><li><div class="code-word">    Let&nbsp;kPresent&nbsp;be ?&nbsp;HasProperty(O,&nbsp;Pk).
</div></li><li><div class="code-word">    If&nbsp;kPresent&nbsp;is&nbsp;true, then
</div></li><li><div class="code-word">        Let&nbsp;kValue&nbsp;be ?&nbsp;Get(O,&nbsp;Pk).
</div></li><li><div class="code-word">        Set&nbsp;accumulator&nbsp;to ?&nbsp;Call(callbackfn,&nbsp;undefined, «&nbsp;accumulator,&nbsp;kValue,&nbsp;F(k),&nbsp;O&nbsp;»).
</div></li><li><div class="code-word">    Set&nbsp;k&nbsp;to&nbsp;k&nbsp;+ 1.
</div></li><li><div class="code-word">10. Return&nbsp;accumulator.
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="2117">还是将其转换为我们自己的代码，如下所示。</p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-built_in">Array</span>.prototype.reduce  = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">callbackfn, initialValue</span>) </span>{
</div></li><li><div class="code-word">  <span class="hljs-comment">// 异常处理，和 map 类似</span>
</div></li><li><div class="code-word">  <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span> === <span class="hljs-literal">null</span> || <span class="hljs-keyword">this</span> === <span class="hljs-literal">undefined</span>) {
</div></li><li><div class="code-word">    <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">TypeError</span>(<span class="hljs-string">"Cannot read property 'reduce' of null"</span>);
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  <span class="hljs-comment">// 处理回调类型异常</span>
</div></li><li><div class="code-word">  <span class="hljs-keyword">if</span> (<span class="hljs-built_in">Object</span>.prototype.toString.call(callbackfn) != <span class="hljs-string">"[object Function]"</span>) {
</div></li><li><div class="code-word">    <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">TypeError</span>(callbackfn + <span class="hljs-string">' is not a function'</span>)
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> O = <span class="hljs-built_in">Object</span>(<span class="hljs-keyword">this</span>);
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> len = O.length &gt;&gt;&gt; <span class="hljs-number">0</span>;
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> k = <span class="hljs-number">0</span>;
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> accumulator = initialValue;  <span class="hljs-comment">// reduce方法第二个参数作为累加器的初始值</span>
</div></li><li><div class="code-word">  <span class="hljs-keyword">if</span> (accumulator === <span class="hljs-literal">undefined</span>) {  
</div></li><li><div class="code-word">      <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">'Each element of the array is empty'</span>);
</div></li><li><div class="code-word">      <span class="hljs-comment">// 初始值不传的处理</span>
</div></li><li><div class="code-word">    <span class="hljs-keyword">for</span>(; k &lt; len ; k++) {
</div></li><li><div class="code-word">      <span class="hljs-keyword">if</span> (k <span class="hljs-keyword">in</span> O) {
</div></li><li><div class="code-word">        accumulator = O[k];
</div></li><li><div class="code-word">        k++;
</div></li><li><div class="code-word">        <span class="hljs-keyword">break</span>;
</div></li><li><div class="code-word">      }
</div></li><li><div class="code-word">    }
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  <span class="hljs-keyword">for</span>(;k &lt; len; k++) {
</div></li><li><div class="code-word">    <span class="hljs-keyword">if</span> (k <span class="hljs-keyword">in</span> O) {
</div></li><li><div class="code-word">      <span class="hljs-comment">// 注意 reduce 的核心累加器</span>
</div></li><li><div class="code-word">      accumulator = callbackfn.call(<span class="hljs-literal">undefined</span>, accumulator, O[k], O);
</div></li><li><div class="code-word">    }
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  <span class="hljs-keyword">return</span> accumulator;
</div></li><li><div class="code-word">}
</div></li></ol></code></pre>
        </div>

        <p data-nodeid="2119">
          根据上面的代码及注释，有几个关键点你需要重点关注：
        </p>
        <ol data-nodeid="2120">
          <li data-nodeid="2121">
            <p data-nodeid="2122">初始值默认值不传的特殊处理；</p>
          </li>
          <li data-nodeid="2123">
            <p data-nodeid="2124">累加器以及 callbackfn 的处理逻辑。</p>
          </li>
        </ol>
        <p data-nodeid="2125">
          这两个关键问题处理好，其他的地方和上面几个方法实现的思路是基本类似的，你要学会举一反三。
        </p>
        <h3 data-nodeid="2126">总结</h3>
        <p data-nodeid="2127">
          到这里，本讲的内容就先告一段落了。这一讲内容虽少，但却是你必须要掌握的内容。
        </p>
        <p data-nodeid="2128">
          这一讲中，我把 JS 的 push 、pop、map、reduce
          的底层方法挨个带你实现了一遍，希望你能对此形成一套自己的思路。我所提供的实现代码，虽然不能完全和
          V8
          源码中实现的代码媲美，但是在正常的使用中，你如果自己能实现到这个程度，基本也可以满足要求了。
        </p>
        <p data-nodeid="2129">
          讲到这里，我再贴一下 V8 数组关于各种方法的实现源码地址，如下表所示。
        </p>
        <table data-nodeid="2131">
          <thead data-nodeid="2132">
            <tr data-nodeid="2133">
              <th align="center" data-nodeid="2135">数组方法</th>
              <th data-nodeid="2136">V8 源码地址</th>
            </tr>
          </thead>
          <tbody data-nodeid="2139">
            <tr data-nodeid="2140">
              <td align="center" data-nodeid="2141">pop</td>
              <td data-nodeid="2142">
                <a
                  href="https://github.com/v8/v8/blob/98d735069d0937f367852ed968a33210ceb527c2/src/js/array.js#L394"
                  data-nodeid="2220"
                  >V8 源码 pop 的实现</a
                >
              </td>
            </tr>
            <tr data-nodeid="2143">
              <td align="center" data-nodeid="2144">push</td>
              <td data-nodeid="2145">
                <a
                  href="https://github.com/v8/v8/blob/98d735069d0937f367852ed968a33210ceb527c2/src/js/array.js#L414"
                  data-nodeid="2224"
                  >V8 源码 push 的实现</a
                >
              </td>
            </tr>
            <tr data-nodeid="2146">
              <td align="center" data-nodeid="2147">map</td>
              <td data-nodeid="2148">
                <a
                  href="https://github.com/v8/v8/blob/98d735069d0937f367852ed968a33210ceb527c2/src/js/array.js#L1036"
                  data-nodeid="2228"
                  >V8 源码 map 的实现</a
                >
              </td>
            </tr>
            <tr data-nodeid="2149">
              <td align="center" data-nodeid="2150">slice</td>
              <td data-nodeid="2151">
                <a
                  href="https://github.com/v8/v8/blob/98d735069d0937f367852ed968a33210ceb527c2/src/js/array.js#L586"
                  data-nodeid="2232"
                  >V8 源码 slice 的实现</a
                >
              </td>
            </tr>
            <tr data-nodeid="2152">
              <td align="center" data-nodeid="2153">filter</td>
              <td data-nodeid="2154">
                <a
                  href="https://github.com/v8/v8/blob/98d735069d0937f367852ed968a33210ceb527c2/src/js/array.js#L1024"
                  data-nodeid="2236"
                  >V8 源码 filter 的实现</a
                >
              </td>
            </tr>
            <tr data-nodeid="2155">
              <td align="center" data-nodeid="2156">...</td>
              <td data-nodeid="2157">...</td>
            </tr>
          </tbody>
        </table>
        <p data-nodeid="2158">
          关于本讲内容没有提到的代码及方法，你可以根据自己的兴趣，尝试着实现其中的某个方法。
        </p>
        <p data-nodeid="2159">
          同时也希望你能够多思考日常工作中都有哪些经常用到的 JS
          方法，并且去研究其底层源代码的实现逻辑，找机会自己实现一遍，来整体提升你的
          JavaScript 的编程能力和对底层的理解能力。
        </p>
        <p data-nodeid="2160" class="">
          下一讲我们将会进入一个全新的模块——JS
          的异步编程篇，期待你能从中学习到更多的东西。每天进步一点点，加油！
        </p>
      </div>
    </div>
  </div>
</template>
