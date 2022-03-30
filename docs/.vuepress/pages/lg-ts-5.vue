<template>
  <div data-v-1605a430="">
    <h1 data-v-1605a430="" class="main-title">
      05 | 函数类型：返回值类型和参数类型到底如何定义？
    </h1>
    <div data-v-1605a430="" class="main-tips">
      2021/05/18
      <span data-v-1605a430="" class="auth">乾元</span>
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
                    aria-valuetext="00:00/15:21"
                    class="vue-slider-dot vue-slider-dot-hover"
                    role="slider"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="921"
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
                          >00:00/15:21</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ecd2302="" class="detail-wrap">
              <div data-v-6ecd2302="" class="detail-one">40.06M</div>
              <div data-v-6ecd2302="" class="detail-two">00:00/15:21</div>
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
        <p data-nodeid="36887">
          04
          讲我们简单介绍了函数定义时的相关类型推断特性，这一讲将深入介绍一下函数类型。
        </p>
        <blockquote data-nodeid="36888">
          <p data-nodeid="36889">
            学习建议：使用 VS Code 新建一个 05.ts 文件，尝试这一讲中所有示例。
          </p>
        </blockquote>
        <p data-nodeid="36890">
          在 JavaScript
          中，函数是构建应用的一块基石，我们可以使用函数抽离可复用的逻辑、抽象模型、封装过程。在
          TypeScript
          中，虽然有类、命名空间、模块，但是函数同样是最基本、最重要的元素之一。
        </p>
        <p data-nodeid="36891">
          在 TypeScript 里，我们可以通过 function
          字面量和箭头函数的形式定义函数，示例如下：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">add</span>(<span class="hljs-params"></span>) </span>{}
</div></li><li><div class="code-word"><span class="hljs-keyword">const</span> add = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {}
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="36893">
          我们还可以显式指定函数参数和返回值的类型，示例如下。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word"><span class="hljs-keyword">const</span> add = (a: <span class="hljs-built_in">number</span>, b: <span class="hljs-built_in">number</span>): <span class="hljs-function"><span class="hljs-params">number</span> =&gt;</span> {
</div></li><li><div class="code-word">     <span class="hljs-keyword">return</span> a + b;
</div></li><li><div class="code-word">}
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="36895">
          如上述示例中，参数名后的 ':number'
          表示参数类型都是数字类型，圆括号后的 ': number'
          则表示返回值类型也是数字类型。下面我们具体介绍一下返回值类型和参数类型。
        </p>
        <h3 data-nodeid="36896">返回值类型</h3>
        <p data-nodeid="36897">
          在 JavaScript 中，我们知道一个函数可以没有显式
          return，此时函数的返回值应该是 undefined：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fn</span>(<span class="hljs-params"></span>) </span>{
</div></li><li><div class="code-word">  <span class="hljs-comment">// TODO</span>
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-built_in">console</span>.log(fn()); <span class="hljs-comment">// =&gt; undefined</span>
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="36899">
          <strong data-nodeid="37018"
            >需要注意的是，在 TypeScript 中，如果我们显式声明函数的返回值类型为
            undfined，将会得到如下所示的错误提醒。</strong
          >
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fn</span>(<span class="hljs-params"></span>): <span class="hljs-title">undefined</span> </span>{ <span class="hljs-comment">// ts(2355) A function whose declared type is neither 'void' nor 'any' must return a value</span>
</div></li><li><div class="code-word">  <span class="hljs-comment">// TODO</span>
</div></li><li><div class="code-word">}
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="36901">
          此时，正确的做法是使用 03 讲介绍的 void
          类型来表示函数没有返回值的类型（这是“废柴” void
          类型唯一有用的场景），示例如下：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fn1</span>(<span class="hljs-params"></span>): <span class="hljs-title">void</span> </span>{
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word">fn1().doSomething(); <span class="hljs-comment">// ts(2339) Property 'doSomething' does not exist on type 'void'.</span>
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="36903">
          我们可以使用类似定义箭头函数的语法来表示函数类型的参数和返回值类型，此时<code
            data-backticks="1"
            data-nodeid="37021"
            >=&gt; 类型</code
          >仅仅用来定义一个函数类型而不用实现这个函数。
        </p>
        <p data-nodeid="36904">
          <strong data-nodeid="37040">需要注意的是，这里的</strong
          ><code data-backticks="1" data-nodeid="37026">=&gt;</code
          ><strong data-nodeid="37041">与 ES6 中箭头函数的</strong
          ><code data-backticks="1" data-nodeid="37030">=&gt;</code
          ><strong data-nodeid="37042">有所不同。TypeScript 函数类型中的</strong
          ><code data-backticks="1" data-nodeid="37034">=&gt;</code
          ><strong data-nodeid="37043"
            >用来表示函数的定义，其左侧是函数的参数类型，右侧是函数的返回值类型；而
            ES6 中的</strong
          ><code data-backticks="1" data-nodeid="37038">=&gt;</code
          >是函数的实现。
        </p>
        <p data-nodeid="36905">
          如下示例中，我们定义了一个函数类型（这里我们使用了类型别名 type，详见
          07 讲），并且使用箭头函数实现了这个类型。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word"><span class="hljs-keyword">type</span> Adder = <span class="hljs-function">(<span class="hljs-params">a: <span class="hljs-built_in">number</span>, b: <span class="hljs-built_in">number</span></span>) =&gt;</span> <span class="hljs-built_in">number</span>; <span class="hljs-comment">// TypeScript 函数类型定义</span>
</div></li><li><div class="code-word"><span class="hljs-keyword">const</span> add: Adder = <span class="hljs-function">(<span class="hljs-params">a, b</span>) =&gt;</span> a + b; <span class="hljs-comment">// ES6 箭头函数</span>
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="36907">
          <strong data-nodeid="37048"
            >这里请注意：右侧的箭头函数并没有显式声明类型注解，不过可以根据 04
            讲中提到的上下文类型进行推断。</strong
          >
        </p>
        <p data-nodeid="36908">
          在对象（即接口类型，详见 07
          讲）中，除了使用这种声明语法，我们还可以使用类似对象属性的简写语法来声明函数类型的属性，如下代码所示：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word"><span class="hljs-keyword">interface</span> Entity {
</div></li><li><div class="code-word">    add: <span class="hljs-function">(<span class="hljs-params">a: <span class="hljs-built_in">number</span>, b: <span class="hljs-built_in">number</span></span>)&nbsp;=&gt;</span> <span class="hljs-built_in">number</span>;
</div></li><li><div class="code-word">    del(a: <span class="hljs-built_in">number</span>, b: <span class="hljs-built_in">number</span>): <span class="hljs-built_in">number</span>;
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-keyword">const</span> entity: Entity = {
</div></li><li><div class="code-word">    add: <span class="hljs-function">(<span class="hljs-params">a, b</span>) =&gt;</span> a + b,
</div></li><li><div class="code-word">    del(a, b) {
</div></li><li><div class="code-word">      <span class="hljs-keyword">return</span> a - b;
</div></li><li><div class="code-word">    },
</div></li><li><div class="code-word">};
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="36910">
          在某种意义上来说，这两种形式都是等价的。但是很多时候，我们不必或者不能显式地指明返回值的类型，这就涉及可缺省和可推断的返回值类型的讲解。
        </p>
        <h4 data-nodeid="36911">可缺省和可推断的返回值类型</h4>
        <p data-nodeid="36912">
          幸运的是，函数返回值的类型可以在 TypeScript 中被推断出来，即可缺省。
        </p>
        <p data-nodeid="36913">
          函数内是一个相对独立的上下文环境，我们可以根据入参对值加工计算，并返回新的值。从类型层面看，我们也可以通过类型推断（回想一下
          04
          讲中的类型推断、上下文类型推断）加工计算入参的类型，并返回新的类型，示例如下：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">computeTypes</span>(<span class="hljs-params">one: <span class="hljs-built_in">string</span>, two: <span class="hljs-built_in">number</span></span>) </span>{
</div></li><li><div class="code-word">  <span class="hljs-keyword">const</span> nums = [two];
</div></li><li><div class="code-word">  <span class="hljs-keyword">const</span> strs = [one]
</div></li><li><div class="code-word">  <span class="hljs-keyword">return</span> {
</div></li><li><div class="code-word">    nums,
</div></li><li><div class="code-word">    strs
</div></li><li><div class="code-word">  } <span class="hljs-comment">// 返回 { nums: number[]; strs: string[] } 的类型 </span>
</div></li><li><div class="code-word">}
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="36915">
          <strong data-nodeid="37057"
            >请记住：这是一个很重要也很有意思的特性，函数返回值的类型推断结合泛型（我们会在
            10
            讲中详细介绍）可以实现特别复杂的类型计算（本质是复杂的类型推断，这里称之为计算是为了表明其复杂性），比如
            Redux Model 中 State、Reducer、Effect 类型的关联。</strong
          >
        </p>
        <p data-nodeid="36916">
          一般情况下，TypeScript
          中的函数返回值类型是可以缺省和推断出来的，但是有些特例需要我们显式声明返回值类型，比如
          Generator 函数的返回值。
        </p>
        <h4 data-nodeid="36917">Generator 函数的返回值</h4>
        <p data-nodeid="36918">
          ES6 中新增的 Generator 函数在 TypeScript 中也有对应的类型定义。
        </p>
        <p data-nodeid="36919">
          Generator 函数返回的是一个 Iterator 迭代器对象，我们可以使用 Generator
          的同名接口泛型或者 Iterator 的同名接口泛型（在 10
          讲会介绍）表示返回值的类型（Generator 类型继承了 Iterator
          类型），示例如下：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word"><span class="hljs-keyword">type</span>&nbsp;AnyType&nbsp;=&nbsp;<span class="hljs-built_in">boolean</span>;
</div></li><li><div class="code-word"><span class="hljs-keyword">type</span>&nbsp;AnyReturnType&nbsp;=&nbsp;<span class="hljs-built_in">string</span>;
</div></li><li><div class="code-word"><span class="hljs-keyword">type</span>&nbsp;AnyNextType&nbsp;=&nbsp;<span class="hljs-built_in">number</span>;
</div></li><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span>&nbsp;*<span class="hljs-title">gen</span>(<span class="hljs-params"></span>):&nbsp;<span class="hljs-title">Generator</span>&lt;<span class="hljs-title">AnyType</span>, <span class="hljs-title">AnyReturnType</span>, <span class="hljs-title">AnyNextType</span>&gt; </span>{
</div></li><li><div class="code-word">  <span class="hljs-keyword">const</span> nextValue = <span class="hljs-keyword">yield</span> <span class="hljs-literal">true</span>; <span class="hljs-comment">// nextValue 类型是 number，yield 后必须是 boolean 类型</span>
</div></li><li><div class="code-word">  <span class="hljs-keyword">return</span> <span class="hljs-string">`<span class="hljs-subst">${nextValue}</span>`</span>; <span class="hljs-comment">// 必须返回 string 类型</span>
</div></li><li><div class="code-word">}
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="36921">
          <strong data-nodeid="37065"
            >注意：TypeScript 3.6 之前的版本不支持指定 next、return
            的类型，所以在某些有点历史的代码中，我们可能会看到 Generator 和
            Iterator 类型不一样的表述。</strong
          >
        </p>
        <h3 data-nodeid="36922">参数类型</h3>
        <p data-nodeid="36923">
          了解了定义函数的基本语法以及返回值类型后，我们再来详细看一下可选参数、默认参数、剩余参数的几个特性。
        </p>
        <h4 data-nodeid="36924">可选参数和默认参数</h4>
        <p data-nodeid="36925">
          在实际工作中，我们可能经常碰到函数参数可传可不传的情况，当然
          TypeScript 也支持这种函数类型表达，如下代码所示：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">log</span>(<span class="hljs-params">x?: <span class="hljs-built_in">string</span></span>) </span>{
</div></li><li><div class="code-word">  <span class="hljs-keyword">return</span> x;
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word">log(); <span class="hljs-comment">// =&gt; undefined</span>
</div></li><li><div class="code-word">log(<span class="hljs-string">'hello world'</span>); <span class="hljs-comment">// =&gt; hello world</span>
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="36927">
          在上述代码中，我们在类型标注的<code
            data-backticks="1"
            data-nodeid="37071"
            >:</code
          >前添加<code data-backticks="1" data-nodeid="37073">?</code>表示 log
          函数的参数 x 就是可缺省的。
        </p>
        <p data-nodeid="36928">
          也就是说参数 x 的类型可能是 undefined（第 5 行调用 log
          时不传入实参）类型或者是 string 类型（第 6 行调用 log 传入 'hello
          world' 实参），那是不是意味着可缺省和类型是 undefined
          等价呢？我们来看看以下的示例：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">log</span>(<span class="hljs-params">x?: <span class="hljs-built_in">string</span></span>) </span>{
</div></li><li><div class="code-word">  <span class="hljs-built_in">console</span>.log(x);
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">log1</span>(<span class="hljs-params">x: <span class="hljs-built_in">string</span> | <span class="hljs-literal">undefined</span></span>) </span>{
</div></li><li><div class="code-word">  <span class="hljs-built_in">console</span>.log(x);
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word">log();
</div></li><li><div class="code-word">log(<span class="hljs-literal">undefined</span>);
</div></li><li><div class="code-word">log1(); <span class="hljs-comment">// ts(2554) Expected 1 arguments, but got 0</span>
</div></li><li><div class="code-word">log1(<span class="hljs-literal">undefined</span>);
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="36930">
          <strong data-nodeid="37083"
            >答案显而易见：这里的 ?:
            表示参数可以缺省、可以不传，也就是说调用函数时，我们可以不显式传入参数。但是，如果我们声明了参数类型为
            xxx | undefined（这里使用了联合类型 |，详见 08
            讲），就表示函数参数是不可缺省且类型必须是 xxx 或者
            undfined。</strong
          >
        </p>
        <p data-nodeid="36931">
          因此，在上述代码中，log1 函数如果不显示传入函数的参数，TypeScript
          就会报一个 ts(2554) 的错误，即函数需要 1 个参数，但是我们只传入了 0
          个参数。
        </p>
        <p data-nodeid="36932">
          在 ES6 中支持函数默认参数的功能，而 TypeScript
          会根据函数的默认参数的类型来推断函数参数的类型，示例如下：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">log</span>(<span class="hljs-params">x = 'hello'</span>) </span>{
</div></li><li><div class="code-word">    <span class="hljs-built_in">console</span>.log(x);
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word">log(); <span class="hljs-comment">// =&gt; 'hello'</span>
</div></li><li><div class="code-word">log(<span class="hljs-string">'hi'</span>); <span class="hljs-comment">// =&gt; 'hi'</span>
</div></li><li><div class="code-word">log(<span class="hljs-number">1</span>); <span class="hljs-comment">// ts(2345) Argument of type '1' is not assignable to parameter of type 'string | undefined'</span>
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="36934">
          在上述示例中，根据函数的默认参数 'hello' ，TypeScript 推断出了 x
          的类型为 string | undefined。
        </p>
        <p data-nodeid="36935">
          当然，对于默认参数，TypeScript
          也可以显式声明参数的类型（一般默认参数的类型是参数类型的子集时，我们才需要这么做）。不过，此时的默认参数只起到参数默认值的作用，如下代码所示：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">log1</span>(<span class="hljs-params">x: <span class="hljs-built_in">string</span> = 'hello'</span>) </span>{
</div></li><li><div class="code-word">    <span class="hljs-built_in">console</span>.log(x);
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-comment">// ts(2322) Type 'string' is not assignable to type 'number'</span>
</div></li><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">log2</span>(<span class="hljs-params">x: <span class="hljs-built_in">number</span> = 'hello'</span>) </span>{
</div></li><li><div class="code-word">    <span class="hljs-built_in">console</span>.log(x);
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word">log2();
</div></li><li><div class="code-word">log2(<span class="hljs-number">1</span>);
</div></li><li><div class="code-word">log2(<span class="hljs-string">'1'</span>); <span class="hljs-comment">// ts(2345) Argument of type '"1"' is not assignable to parameter of type 'number | undefined'</span>
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="36937">
          上例函数 log2 中，我们显式声明了函数参数 x 的类型为
          number，表示函数参数 x 的类型可以不传或者是 number
          类型。因此，如果我们将默认值设置为字符串类型，编译器就会抛出一个
          ts(2322) 的错误。
        </p>
        <p data-nodeid="36938">
          同理，如果我们将函数的参数传入了字符串类型，编译器也会抛出一个
          ts(2345) 的错误。
        </p>
        <p data-nodeid="36939">
          <strong data-nodeid="37098"
            >这里请注意：函数的默认参数类型必须是参数类型的子类型</strong
          >，下面我们看一下如下具体示例：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">log3</span>(<span class="hljs-params">x: <span class="hljs-built_in">number</span> | <span class="hljs-built_in">string</span> = 'hello'</span>) </span>{
</div></li><li><div class="code-word">    <span class="hljs-built_in">console</span>.log(x);
</div></li><li><div class="code-word">}
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="36941">
          在上述代码中，函数 log3 的函数参数 x 的类型为可选的联合类型 number |
          string，但是因为默认参数字符串类型是联合类型 number | string
          的子类型，所以 TypeScript 也会检查通过。
        </p>
        <h4 data-nodeid="36942">剩余参数</h4>
        <p data-nodeid="36943">
          在 ES6 中，JavaScript
          支持函数参数的剩余参数，它可以把多个参数收集到一个变量中。同样，在TypeScript
          中也支持这样的参数类型定义，如下代码所示：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sum</span>(<span class="hljs-params">...nums: <span class="hljs-built_in">number</span>[]</span>) </span>{
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> nums.reduce(<span class="hljs-function">(<span class="hljs-params">a, b</span>) =&gt;</span> a + b, <span class="hljs-number">0</span>);
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word">sum(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>); <span class="hljs-comment">// =&gt; 3</span>
</div></li><li><div class="code-word">sum(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">// =&gt; 6</span>
</div></li><li><div class="code-word">sum(<span class="hljs-number">1</span>, <span class="hljs-string">'2'</span>); <span class="hljs-comment">// ts(2345) Argument of type 'string' is not assignable to parameter of type 'number'</span>
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="36945">
          在上述代码中，sum 是一个求和的函数，<code
            data-backticks="1"
            data-nodeid="37103"
            >...nums</code
          >将函数的所有参数收集到了变量 nums 中，而 nums 的类型应该是
          number[]，表示所有被求和的参数是数字类型。因此，sum(1, '2') 抛出了一个
          ts(2345) 的错误，因为参数 '2' 并不是 number 类型。
        </p>
        <p data-nodeid="36946">
          如果我们将函数参数 nums 聚合的类型定义为 (number |
          string)[]，如下代码所示：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sum</span>(<span class="hljs-params">...nums: (<span class="hljs-built_in">number</span> | <span class="hljs-built_in">string</span>)[]</span>): <span class="hljs-title">number</span> </span>{
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> nums.reduce&lt;<span class="hljs-built_in">number</span>&gt;<span class="hljs-function">(<span class="hljs-params">(<span class="hljs-params">a, b</span>) =&gt; a + <span class="hljs-built_in">Number</span>(<span class="hljs-params">b</span>), 0</span>);
</span></div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-params">sum</span>(<span class="hljs-params">1, '2', 3</span>); // 6
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="36948">
          那么，函数的每一个参数的类型就是联合类型 number | string，因此 sum(1,
          '2', 3) 的类型检查也就通过了。
        </p>
        <p data-nodeid="36949">
          介绍完函数的参数，我们再来了解一下函数中另外一个重要的知识点 this。
        </p>
        <h3 data-nodeid="40239" class="">this</h3>

        <p data-nodeid="36951">
          众所周知，在 JavaScript 中，函数 this
          的指向一直是一个令人头痛的问题。因为 this
          的值需要等到函数被调用时才能被确定，更别说通过一些方法还可以改变 this
          的指向。也就是说 this 的类型不固定，它取决于执行时的上下文。
        </p>
        <p data-nodeid="36952">
          但是，使用了 TypeScript 后，我们就不用担心这个问题了。通过指定 this
          的类型（严格模式下，必须显式指定 this 的类型），当我们错误使用了
          this，TypeScript 就会提示我们，如下代码所示：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">say</span>(<span class="hljs-params"></span>) </span>{
</div></li><li><div class="code-word">    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.name); <span class="hljs-comment">// ts(2683) 'this' implicitly has type 'any' because it does not have a type annotation</span>
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word">say();
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="36954">
          在上述代码中，如果我们直接调用 say 函数，this 应该指向全局 window 或
          global（Node 中）。但是，在 strict 模式下的 TypeScript 中，它会提示
          this 的类型是 any，此时就需要我们手动显式指定类型了。
        </p>
        <p data-nodeid="36955">
          那么，在 TypeScript 中，我们应该如何声明 this 的类型呢？
        </p>
        <p data-nodeid="36956">
          在 TypeScript 中，我们只需要在函数的第一个参数中声明 this
          指代的对象（即函数被调用的方式）即可，比如最简单的作为对象的方法的
          this 指向，如下代码所示：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">say</span>(<span class="hljs-params"><span class="hljs-keyword">this</span>: Window, name: <span class="hljs-built_in">string</span></span>) </span>{
</div></li><li><div class="code-word">    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.name);
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-built_in">window</span>.say = say;
</div></li><li><div class="code-word"><span class="hljs-built_in">window</span>.say(<span class="hljs-string">'hi'</span>);
</div></li><li><div class="code-word"><span class="hljs-keyword">const</span> obj = {
</div></li><li><div class="code-word">    say
</div></li><li><div class="code-word">};
</div></li><li><div class="code-word">obj.say(<span class="hljs-string">'hi'</span>); <span class="hljs-comment">// ts(2684) The 'this' context of type '{ say: (this: Window, name: string) =&gt; void; }' is not assignable to method's 'this' of type 'Window'.</span>
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="36958">
          在上述代码中，我们在 window 对象上增加 say 的属性为函数
          say。那么调用<code data-backticks="1" data-nodeid="37136"
            >window.say()</code
          >时，this 指向即为 window 对象。
        </p>
        <p data-nodeid="36959">
          调用<code data-backticks="1" data-nodeid="37139">obj.say()</code
          >后，此时 TypeScript 检测到 this 的指向不是
          window，于是抛出了如下所示的一个 ts(2684) 错误。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word">say(<span class="hljs-string">'captain'</span>); <span class="hljs-comment">// ts(2684) The 'this' context of type 'void' is not assignable to method's 'this' of type 'Window'</span>
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="36961">
          <strong data-nodeid="37144"
            >需要注意的是，如果我们直接调用 say()，this 实际上应该指向全局变量
            window，但是因为 TypeScript 无法确定 say 函数被谁调用，所以将 this
            的指向默认为 void，也就提示了一个 ts(2684) 错误。</strong
          >
        </p>
        <p data-nodeid="36962">
          此时，我们可以通过调用 window.say()
          来避免这个错误，这也是一个安全的设计。因为在 JavaScript
          的严格模式下，全局作用域函数中 this 的指向是 undefined。
        </p>
        <p data-nodeid="36963">
          <strong data-nodeid="37149"
            >同样，定义对象的函数属性时，只要实际调用中 this 的指向与指定的 this
            指向不同，TypeScript 就能发现 this
            指向的错误，示例代码如下：</strong
          >
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word"><span class="hljs-keyword">interface</span> Person {
</div></li><li><div class="code-word">    name: <span class="hljs-built_in">string</span>;
</div></li><li><div class="code-word">    say(<span class="hljs-keyword">this</span>: Person): <span class="hljs-built_in">void</span>;
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-keyword">const</span> person: Person = {
</div></li><li><div class="code-word">    name: <span class="hljs-string">'captain'</span>,
</div></li><li><div class="code-word">    say() {
</div></li><li><div class="code-word">        <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.name);
</div></li><li><div class="code-word">    },
</div></li><li><div class="code-word">};
</div></li><li><div class="code-word"><span class="hljs-keyword">const</span> fn = person.say;
</div></li><li><div class="code-word">fn(); <span class="hljs-comment">// ts(2684) The 'this' context of type 'void' is not assignable to method's 'this' of type 'Person'</span>
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="36965">
          <strong data-nodeid="37153"
            >注意：显式注解函数中的 this
            类型，它表面上占据了第一个形参的位置，但并不意味着函数真的多了一个参数，因为
            TypeScript 转译为 JavaScript 后，“伪形参” this 会被抹掉，这算是
            TypeScript 为数不多的特有语法。</strong
          >
        </p>
        <p data-nodeid="36966">
          当然，初次接触这个特性时让人费解，这就需要我们把它铭记于心。前边的 say
          函数转译为 JavaScript 后，this 就会被抹掉，如下代码所示：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">say</span>(<span class="hljs-params">name</span>) </span>{
</div></li><li><div class="code-word">    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.name);
</div></li><li><div class="code-word">}
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="36968">
          同样，我们也可以显式限定类（class 类的介绍详见 06 讲）函数属性中的
          this 类型，TypeScript 也能检查出错误的使用方式，如下代码所示：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word"><span class="hljs-keyword">class</span> Component {
</div></li><li><div class="code-word">  onClick(<span class="hljs-keyword">this</span>: Component) {}
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-keyword">const</span> component = <span class="hljs-keyword">new</span> Component();
</div></li><li><div class="code-word"><span class="hljs-keyword">interface</span> UI {
</div></li><li><div class="code-word">  addClickListener(onClick: <span class="hljs-function">(<span class="hljs-params"><span class="hljs-keyword">this</span>: <span class="hljs-built_in">void</span></span>) =&gt;</span> <span class="hljs-built_in">void</span>): <span class="hljs-built_in">void</span>;
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-keyword">const</span> ui: UI = {
</div></li><li><div class="code-word">  addClickListener() {}
</div></li><li><div class="code-word">};
</div></li><li><div class="code-word">ui.addClickListener(<span class="hljs-keyword">new</span> Component().onClick); <span class="hljs-comment">// ts(2345)</span>
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="36970">
          上面示例中，我们定义的 Component 类的 onClick
          函数属性（方法）显式指定了 this 类型是 Component，在第 14
          行作为入参传递给 ui 的 addClickListener 方法中，它指定的 this 类型是
          void，两个 this 类型不匹配，所以抛出了一个 ts(2345) 错误。
        </p>
        <p data-nodeid="36971">
          此外，在链式调用风格的库中，使用 this
          也可以很方便地表达出其类型，如下代码所示：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word"><span class="hljs-keyword">class</span> Container {
</div></li><li><div class="code-word">  <span class="hljs-keyword">private</span> val: <span class="hljs-built_in">number</span>;
</div></li><li><div class="code-word">  <span class="hljs-keyword">constructor</span>(<span class="hljs-params">val: <span class="hljs-built_in">number</span></span>) {
</div></li><li><div class="code-word">    <span class="hljs-keyword">this</span>.val = val;
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  map(cb: <span class="hljs-function">(<span class="hljs-params">x: <span class="hljs-built_in">number</span></span>) =&gt;</span> <span class="hljs-built_in">number</span>): <span class="hljs-keyword">this</span> {
</div></li><li><div class="code-word">    <span class="hljs-keyword">this</span>.val = cb(<span class="hljs-keyword">this</span>.val);
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>;
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  log(): <span class="hljs-keyword">this</span> {
</div></li><li><div class="code-word">    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.val);
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>;
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-keyword">const</span> instance = <span class="hljs-keyword">new</span> Container(<span class="hljs-number">1</span>)
</div></li><li><div class="code-word">  .map(<span class="hljs-function">(<span class="hljs-params">x</span>) =&gt;</span> x + <span class="hljs-number">1</span>)
</div></li><li><div class="code-word">  .log() <span class="hljs-comment">// =&gt; 2</span>
</div></li><li><div class="code-word">  .map(<span class="hljs-function">(<span class="hljs-params">x</span>) =&gt;</span> x * <span class="hljs-number">3</span>)
</div></li><li><div class="code-word">  .log(); <span class="hljs-comment">// =&gt; 6  </span>
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="36973">
          因为 Container 类中 map、log 等函数属性（方法）未显式指定 this
          类型，默认类型是 Container，所以以上方法在被调用时返回的类型也是
          Container，this 指向一直是类的实例，它可以一直无限地被链式调用。
        </p>
        <p data-nodeid="36974">
          介绍完函数中 this
          的指向和类型后，我们再来了解一下它的另外一个特性函数多态（函数重载）。
        </p>
        <h3 data-nodeid="42652" class="">函数重载</h3>

        <p data-nodeid="36976">
          JavaScript
          是一门动态语言，针对同一个函数，它可以有多种不同类型的参数与返回值，这就是函数的多态。
        </p>
        <p data-nodeid="36977">
          而在 TypeScript
          中，也可以相应地表达不同类型的参数和返回值的函数，如下代码所示：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">convert</span>(<span class="hljs-params">x: <span class="hljs-built_in">string</span> | <span class="hljs-built_in">number</span> | <span class="hljs-literal">null</span></span>): <span class="hljs-title">string</span> | <span class="hljs-title">number</span> | -1 </span>{
</div></li><li><div class="code-word">    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> x === <span class="hljs-string">'string'</span>) {
</div></li><li><div class="code-word">        <span class="hljs-keyword">return</span> <span class="hljs-built_in">Number</span>(x);
</div></li><li><div class="code-word">    }
</div></li><li><div class="code-word">    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> x === <span class="hljs-string">'number'</span>) {
</div></li><li><div class="code-word">        <span class="hljs-keyword">return</span> <span class="hljs-built_in">String</span>(x);
</div></li><li><div class="code-word">    }
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> <span class="hljs-number">-1</span>;
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-keyword">const</span> x1 = convert(<span class="hljs-string">'1'</span>); <span class="hljs-comment">// =&gt; string | number</span>
</div></li><li><div class="code-word"><span class="hljs-keyword">const</span> x2 = convert(<span class="hljs-number">1</span>); <span class="hljs-comment">// =&gt; string | number</span>
</div></li><li><div class="code-word"><span class="hljs-keyword">const</span> x3 = convert(<span class="hljs-literal">null</span>); <span class="hljs-comment">// =&gt; string | number</span>
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="36979">
          在上述代码中，我们把 convert 函数的 string 类型的值转换为 number
          类型，number 类型转换为 string 类型，而将 null 类型转换为数字
          -1。此时， x1、x2、x3 的返回值类型都会被推断成 string | number 。
        </p>
        <p data-nodeid="36980">
          那么，有没有一种办法可以更精确地描述参数与返回值类型约束关系的函数类型呢？有，这就是函数重载（Function
          Overload），如下示例中 1~3
          行定义了三种各不相同的函数类型列表，并描述了不同的参数类型对应不同的返回值类型，而从第
          4 行开始才是函数的实现。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">convert</span>(<span class="hljs-params">x: <span class="hljs-built_in">string</span></span>): <span class="hljs-title">number</span></span>;
</div></li><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">convert</span>(<span class="hljs-params">x: <span class="hljs-built_in">number</span></span>): <span class="hljs-title">string</span></span>;
</div></li><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">convert</span>(<span class="hljs-params">x: <span class="hljs-literal">null</span></span>): -1</span>;
</div></li><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">convert</span>(<span class="hljs-params">x: <span class="hljs-built_in">string</span> | <span class="hljs-built_in">number</span> | <span class="hljs-literal">null</span></span>): <span class="hljs-title">any</span> </span>{
</div></li><li><div class="code-word">    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> x === <span class="hljs-string">'string'</span>) {
</div></li><li><div class="code-word">        <span class="hljs-keyword">return</span> <span class="hljs-built_in">Number</span>(x);
</div></li><li><div class="code-word">    }
</div></li><li><div class="code-word">    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> x === <span class="hljs-string">'number'</span>) {
</div></li><li><div class="code-word">        <span class="hljs-keyword">return</span> <span class="hljs-built_in">String</span>(x);
</div></li><li><div class="code-word">    }
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> <span class="hljs-number">-1</span>;
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-keyword">const</span> x1 = convert(<span class="hljs-string">'1'</span>); <span class="hljs-comment">// =&gt; number</span>
</div></li><li><div class="code-word"><span class="hljs-keyword">const</span> x2 = convert(<span class="hljs-number">1</span>); <span class="hljs-comment">// =&gt; string</span>
</div></li><li><div class="code-word"><span class="hljs-keyword">const</span> x3 = convert(<span class="hljs-literal">null</span>); <span class="hljs-comment">// -1</span>
</div></li></ol></code></pre>
        </div>
        <blockquote data-nodeid="36982">
          <p data-nodeid="36983">
            注意：函数重载列表的各个成员（即示例中的 1 ~ 3
            行）必须是函数实现（即示例中的第 4 行）的子集，例如 “function
            convert(x: string): number”是“function convert(x: string | number |
            null): any”的子集。
          </p>
        </blockquote>
        <p data-nodeid="36984">
          在 convert 函数被调用时，TypeScript
          会从上到下查找函数重载列表中与入参类型匹配的类型，并优先使用第一个匹配的重载定义。因此，我们需要把最精确的函数重载放到前面。例如我们在第
          14 行传入了字符串 '1'，查找到第 1 行即匹配，而第 15 行传入了数字
          1，则查找到第 2 行匹配。
        </p>
        <p data-nodeid="43250" class="te-preview-highlight">
          <strong data-nodeid="43255">为了方便你理解这部分内容，</strong>
          下面我们通过以下一个示例进行具体说明。
        </p>

        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word"><span class="hljs-keyword">interface</span> P1 {
</div></li><li><div class="code-word">    name: <span class="hljs-built_in">string</span>;
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-keyword">interface</span> P2 <span class="hljs-keyword">extends</span> P1 {
</div></li><li><div class="code-word">    age: <span class="hljs-built_in">number</span>;
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">convert</span>(<span class="hljs-params">x: P1</span>): <span class="hljs-title">number</span></span>;
</div></li><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">convert</span>(<span class="hljs-params">x: P2</span>): <span class="hljs-title">string</span></span>;
</div></li><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">convert</span>(<span class="hljs-params">x: P1 | P2</span>): <span class="hljs-title">any</span> </span>{}
</div></li><li><div class="code-word"><span class="hljs-keyword">const</span> x1 = convert({ name: <span class="hljs-string">""</span> } <span class="hljs-keyword">as</span> P1); <span class="hljs-comment">// =&gt; number</span>
</div></li><li><div class="code-word"><span class="hljs-keyword">const</span> x2 = convert({ name: <span class="hljs-string">""</span>, age: <span class="hljs-number">18</span> } <span class="hljs-keyword">as</span> P2); <span class="hljs-comment">// number</span>
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="36987">
          因为 P2 继承自 P1，所以类型为 P2 的参数会和类型为 P1
          的参数一样匹配到第一个函数重载，此时 x1、x2 的返回值都是 number。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">convert</span>(<span class="hljs-params">x: P2</span>): <span class="hljs-title">string</span></span>;
</div></li><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">convert</span>(<span class="hljs-params">x: P1</span>): <span class="hljs-title">number</span></span>;
</div></li><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">convert</span>(<span class="hljs-params">x: P1 | P2</span>): <span class="hljs-title">any</span> </span>{ }
</div></li><li><div class="code-word"><span class="hljs-keyword">const</span> x1 = convert({ name: <span class="hljs-string">''</span> } <span class="hljs-keyword">as</span> P1); <span class="hljs-comment">// =&gt; number</span>
</div></li><li><div class="code-word"><span class="hljs-keyword">const</span> x2 = convert({ name: <span class="hljs-string">''</span>, age: <span class="hljs-number">18</span> } <span class="hljs-keyword">as</span> P2); <span class="hljs-comment">// =&gt; string</span>
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="36989">
          而我们只需要将函数重载列表的顺序调换一下，类型为 P2 和 P1
          的参数就可以分别匹配到正确的函数重载了，例如第 5 行匹配到第 2 行，第 6
          行匹配到第 1 行。
        </p>
        <h3 data-nodeid="36990">类型谓词（is）</h3>
        <p data-nodeid="36991">
          在 TypeScript 中，函数还支持另外一种特殊的类型描述，如下示例 ：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span>&nbsp;<span class="hljs-title">isString</span>(<span class="hljs-params">s</span>):&nbsp;<span class="hljs-title">s</span>&nbsp;<span class="hljs-title">is</span>&nbsp;<span class="hljs-title">string</span>&nbsp;</span>{ <span class="hljs-comment">// 类型谓词</span>
</div></li><li><div class="code-word">&nbsp;&nbsp;<span class="hljs-keyword">return</span>&nbsp;<span class="hljs-keyword">typeof</span>&nbsp;s&nbsp;===&nbsp;<span class="hljs-string">'string'</span>;
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span>&nbsp;<span class="hljs-title">isNumber</span>(<span class="hljs-params">n:&nbsp;<span class="hljs-built_in">number</span></span>)&nbsp;</span>{
</div></li><li><div class="code-word">&nbsp;&nbsp;<span class="hljs-keyword">return</span>&nbsp;<span class="hljs-keyword">typeof</span>&nbsp;n&nbsp;===&nbsp;<span class="hljs-string">'number'</span>;
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span>&nbsp;<span class="hljs-title">operator</span>(<span class="hljs-params">x:&nbsp;unknown</span>)&nbsp;</span>{
</div></li><li><div class="code-word">&nbsp;&nbsp;<span class="hljs-keyword">if</span>(isString(x))&nbsp;{&nbsp;<span class="hljs-comment">//&nbsp;ok&nbsp;x&nbsp;类型缩小为&nbsp;string</span>
</div></li><li><div class="code-word">&nbsp;&nbsp;}
</div></li><li><div class="code-word">&nbsp;&nbsp;<span class="hljs-keyword">if</span>&nbsp;(isNumber(x))&nbsp;{&nbsp;<span class="hljs-comment">//&nbsp;ts(2345)&nbsp;unknown&nbsp;不能赋值给&nbsp;number</span>
</div></li><li><div class="code-word">&nbsp;&nbsp;}
</div></li><li><div class="code-word">}
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="36993">
          在上述代码中，在添加返回值类型的地方，我们通过“参数名 + is +
          类型”的格式明确表明了参数的类型，进而引起类型缩小，所以类型谓词函数的一个重要的应用场景是实现自定义类型守卫（详见第
          11 讲）。
        </p>
        <h3 data-nodeid="36994">小结与预告</h3>
        <p data-nodeid="36995">
          函数是 JavaScript 和 TypeScript
          中极其重要的基础部分，无论是面向过程，还是面向对象编程，都离不开函数的抽象、封装。静态类型的加持，使得
          TypeScript 中的函数相较于 JavaScript 来说，变得更加稳定、精确、安全。
        </p>
        <p data-nodeid="36996">
          这里插播一个思考题：如何注解函数中 this
          的类型？函数类型重载的匹配顺序是什么？欢迎你在留言区与我互动、交流。另外，如果你觉得本专栏有价值，欢迎分享给更多好友哦~
        </p>
        <p data-nodeid="36997">
          06 讲我们将了解 TypeScript
          另外一个抽象、封装及面向对象编程的利器——类，敬请期待！
        </p>
      </div>
    </div>
  </div>
</template>
