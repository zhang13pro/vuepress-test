<template>
  <div data-v-1605a430="">
    <h1 data-v-1605a430="" class="main-title">
      04 | 什么是字面量类型、类型推断、类型拓宽和类型缩小？
    </h1>
    <div data-v-1605a430="" class="main-tips">
      2021/05/13
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
                    aria-valuetext="00:00/13:07"
                    class="vue-slider-dot vue-slider-dot-hover"
                    role="slider"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="787"
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
                          >00:00/13:07</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ecd2302="" class="detail-wrap">
              <div data-v-6ecd2302="" class="detail-one">34.22M</div>
              <div data-v-6ecd2302="" class="detail-two">00:00/13:07</div>
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
        <blockquote data-nodeid="1141" class="">
          <p data-nodeid="1142">
            学习建议：使用 VS Code，通过新建一个 04.Literal.ts
            文件，尝试课程中的所有示例。
          </p>
        </blockquote>
        <p data-nodeid="1143">
          在前面的课程中，我们已经学习了 TypeScript
          的基本语法和基础类型，接下来通过几个例子温习一下（为了避免命名冲突，后续课程示例中会引入一对花括符
          {} 创建块级作用域）：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word">{
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> str: <span class="hljs-built_in">string</span> = <span class="hljs-string">'this is string'</span>;
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> num: <span class="hljs-built_in">number</span> = <span class="hljs-number">1</span>;
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> bool: <span class="hljs-built_in">boolean</span> = <span class="hljs-literal">true</span>;
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word">{
</div></li><li><div class="code-word">  <span class="hljs-keyword">const</span> str: <span class="hljs-built_in">string</span> = <span class="hljs-string">'this is string'</span>;
</div></li><li><div class="code-word">  <span class="hljs-keyword">const</span> num: <span class="hljs-built_in">number</span> = <span class="hljs-number">1</span>;
</div></li><li><div class="code-word">  <span class="hljs-keyword">const</span> bool: <span class="hljs-built_in">boolean</span> = <span class="hljs-literal">true</span>;
</div></li><li><div class="code-word">}
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="1145">
          看着上面的示例，可能你在 02
          讲中已经嘀咕了：定义基础类型的变量都需要写明类型注解，TypeScript
          太麻烦了吧？在示例中，使用 let
          定义变量时，我们写明类型注解也就罢了，毕竟值可能会被改变。可是，使用
          const 常量时还需要写明类型注解，那可真的很麻烦。
        </p>
        <p data-nodeid="1146">
          实际上，TypeScript 早就考虑到了这么简单而明显的问题。
        </p>
        <p data-nodeid="1147">
          在很多情况下，TypeScript
          会根据上下文环境自动推断出变量的类型，无须我们再写明类型注解。因此，上面的示例可以简化为如下所示内容：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word">{
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> str = <span class="hljs-string">'this is string'</span>; <span class="hljs-comment">// 等价</span>
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> num = <span class="hljs-number">1</span>; <span class="hljs-comment">// 等价</span>
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> bool = <span class="hljs-literal">true</span>; <span class="hljs-comment">// 等价</span>
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word">{
</div></li><li><div class="code-word">  <span class="hljs-keyword">const</span> str = <span class="hljs-string">'this is string'</span>; <span class="hljs-comment">// 不等价</span>
</div></li><li><div class="code-word">  <span class="hljs-keyword">const</span> num = <span class="hljs-number">1</span>; <span class="hljs-comment">// 不等价</span>
</div></li><li><div class="code-word">  <span class="hljs-keyword">const</span> bool = <span class="hljs-literal">true</span>; <span class="hljs-comment">// 不等价</span>
</div></li><li><div class="code-word">}
</div></li></ol></code></pre>
        </div>
        <blockquote data-nodeid="1149">
          <p data-nodeid="1150">
            注意：这里说的仅仅是“简化”，而不是说两个示例完全等价，接下来我们会进一步介绍。
          </p>
        </blockquote>
        <p data-nodeid="1151">
          我们把 TypeScript 这种基于赋值表达式推断类型的能力称之为“类型推断”。
        </p>
        <h3 data-nodeid="1152">类型推断</h3>
        <p data-nodeid="1153">
          在 TypeScript 中，类型标注声明是在变量之后（即类型后置），它不像 Java
          语言一样，先声明变量的类型，再声明变量的名称。
        </p>
        <p data-nodeid="1154">
          使用类型标注后置的好处是编译器可以通过代码所在的上下文推导其对应的类型，无须再声明变量类型，具体示例如下：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word">{
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> x1 = <span class="hljs-number">42</span>; <span class="hljs-comment">// 推断出 x1 的类型是 number</span>
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> x2: <span class="hljs-built_in">number</span> = x1; <span class="hljs-comment">// ok</span>
</div></li><li><div class="code-word">}
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="1156">
          在上述代码中，x1 的类型被推断为 number，将变量赋值给 number 类型的变量
          x2 后，不会出现任何错误。
        </p>
        <p data-nodeid="1157">
          在 TypeScript
          中，具有初始化值的变量、有默认值的函数参数、函数返回的类型（05
          讲中会专门介绍函数类型）都可以根据上下文推断出来。比如我们能根据
          return 语句推断函数返回的类型，如下代码所示：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word">{
</div></li><li><div class="code-word">  <span class="hljs-comment">/** 根据参数的类型，推断出返回值的类型也是 number */</span>
</div></li><li><div class="code-word">  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">add1</span>(<span class="hljs-params">a: <span class="hljs-built_in">number</span>, b: <span class="hljs-built_in">number</span></span>) </span>{
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> a + b;
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  <span class="hljs-keyword">const</span> x1= add1(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>); <span class="hljs-comment">// 推断出 x1 的类型也是 number</span>
</div></li><li><div class="code-word">
</div></li><li><div class="code-word">  <span class="hljs-comment">/** 推断参数 b 的类型是数字或者 undefined，返回值的类型也是数字 */</span>
</div></li><li><div class="code-word">  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">add2</span>(<span class="hljs-params">a: <span class="hljs-built_in">number</span>, b = 1</span>) </span>{
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> a + b;
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  <span class="hljs-keyword">const</span> x2 = add2(<span class="hljs-number">1</span>);
</div></li><li><div class="code-word">  <span class="hljs-keyword">const</span> x3 = add2(<span class="hljs-number">1</span>, <span class="hljs-string">'1'</span>); <span class="hljs-comment">// ts(2345) Argument of type '"1"' is not assignable to parameter of type 'number | undefined</span>
</div></li><li><div class="code-word">}
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="1159">
          在上述 add1 函数中，我们 return 了变量 a + b 的结果，因为 a 和 b
          的类型为 number，所以函数返回类型被推断为 number。
        </p>
        <p data-nodeid="1160">
          当然，拥有默认值的函数参数的类型也能被推断出来。比如上述 add2
          函数中，b 参数被推断为 number | undefined 类型，如果我们给 b
          参数传入一个字符串类型的值，由于函数参数类型不一致，此时编译器就会抛出一个
          ts(2345) 错误。
        </p>
        <h3 data-nodeid="1161">上下文推断</h3>
        <p data-nodeid="1162">
          通过类型推断的例子，我们发现变量的类型可以通过被赋值的值进行推断。除此之外，在某些特定的情况下，我们也可以通过变量所在的上下文环境推断变量的类型，具体示例如下：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word">{
</div></li><li><div class="code-word">  <span class="hljs-keyword">type</span> Adder = <span class="hljs-function">(<span class="hljs-params">a: <span class="hljs-built_in">number</span>, b: <span class="hljs-built_in">number</span></span>) =&gt;</span> <span class="hljs-built_in">number</span>;
</div></li><li><div class="code-word">  <span class="hljs-keyword">const</span> add: Adder = <span class="hljs-function">(<span class="hljs-params">a, b</span>) =&gt;</span> {
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> a + b;
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  <span class="hljs-keyword">const</span> x1 = add(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>); <span class="hljs-comment">// 推断出 x1 类型是 number</span>
</div></li><li><div class="code-word">  <span class="hljs-keyword">const</span> x2 = add(<span class="hljs-number">1</span>, <span class="hljs-string">'1'</span>);  <span class="hljs-comment">// ts(2345) Argument of type '"1"' is not assignable to parameter of type 'number</span>
</div></li><li><div class="code-word">}
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="1164">
          这里我们定义了一个实现加法功能的<strong data-nodeid="1268"
            >函数类型 Adde</strong
          >r（定义的 Adder 类型使用了 type 类型别名，这点会在 07
          讲专门介绍），声明了<strong data-nodeid="1269">add</strong
          >变量的类型为 Adder 并赋值一个匿名箭头函数，箭头函数参数 a 和 b
          的类型和返回类型都没有显式声明。
        </p>
        <p data-nodeid="1165">
          TypeScript 通过<strong data-nodeid="1275">add</strong>的类型 Adder
          反向（通过变量类型推断出值的相关类型）推断出箭头函数参数及返回值的类型，也就是说函数参数
          a、b，以及返回类型在这个变量的声明上下文中被确定了（更多关于函数类型相关的知识点会在
          05 讲中详细介绍）。
        </p>
        <p data-nodeid="1166">
          正是得益于 TypeScript
          这种类型推导机制和能力，使得我们无须显式声明，即可直接通过上下文环境推断出变量的类型，也就是说此时类型可缺省。
        </p>
        <p data-nodeid="1167">
          下面回头看最前面的示例（如下所示），我们发现这些缺省类型注解的变量还可以通过类型推断出类型。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word">{
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> str = <span class="hljs-string">'this is string'</span>; <span class="hljs-comment">// str: string</span>
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> num = <span class="hljs-number">1</span>; <span class="hljs-comment">// num: number</span>
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> bool = <span class="hljs-literal">true</span>; <span class="hljs-comment">// bool: boolean</span>
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word">{
</div></li><li><div class="code-word">  <span class="hljs-keyword">const</span> str = <span class="hljs-string">'this is string'</span>; <span class="hljs-comment">// str: 'this is string'</span>
</div></li><li><div class="code-word">  <span class="hljs-keyword">const</span> num = <span class="hljs-number">1</span>; <span class="hljs-comment">// num: 1</span>
</div></li><li><div class="code-word">  <span class="hljs-keyword">const</span> bool = <span class="hljs-literal">true</span>; <span class="hljs-comment">// bool: true</span>
</div></li><li><div class="code-word">}
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="1169">
          如上述代码中注释说明，通过 let 和 const
          定义的赋予了相同值的变量，其推断出来的类型不一样。比如同样是 'this is
          string'（这里表示一个字符串值），通过 let 定义的变量类型是
          string，而通过 const 定义的变量类型是 'this is
          string'（这里表示一个字符串字面量类型）。这里我们可以通过 VS Code
          hover 示例中的变量查看类型，验证一下这个结论。
        </p>
        <p data-nodeid="1170">在讲解差异之前，我们先来聊一下字面量类型。</p>
        <h3 data-nodeid="1171">字面量类型</h3>
        <p data-nodeid="1172">
          在 TypeScript
          中，字面量不仅可以表示值，还可以表示类型，即所谓的字面量类型。
        </p>
        <p data-nodeid="1173">
          目前，TypeScript 支持 3
          种字面量类型：字符串字面量类型、数字字面量类型、布尔字面量类型，对应的字符串字面量、数字字面量、布尔字面量分别拥有与其值一样的字面量类型，具体示例如下：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word">{
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> specifiedStr: <span class="hljs-string">'this is string'</span> = <span class="hljs-string">'this is string'</span>;
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> specifiedNum: <span class="hljs-number">1</span> = <span class="hljs-number">1</span>;
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> specifiedBoolean: <span class="hljs-literal">true</span> = <span class="hljs-literal">true</span>;
</div></li><li><div class="code-word">}
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="1175">
          字面量类型是集合类型的子类型，它是集合类型的一种更具体的表达。比如
          'this is string' （这里表示一个字符串字面量类型）类型是 string
          类型（确切地说是 string 类型的子类型），而 string 类型不一定是 'this
          is string'（这里表示一个字符串字面量类型）类型，如下具体示例：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word">{
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> specifiedStr: <span class="hljs-string">'this is string'</span> = <span class="hljs-string">'this is string'</span>;
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> str: <span class="hljs-built_in">string</span> = <span class="hljs-string">'any string'</span>;
</div></li><li><div class="code-word">  specifiedStr = str; <span class="hljs-comment">// ts(2322) 类型 '"string"' 不能赋值给类型 'this is string'</span>
</div></li><li><div class="code-word">  str = specifiedStr; <span class="hljs-comment">// ok </span>
</div></li><li><div class="code-word">}
</div></li></ol></code></pre>
        </div>

        <p data-nodeid="1177">
          这里，我们通过一个更通俗的说法来理解字面量类型和所属集合类型的关系。
        </p>
        <p data-nodeid="1178">
          比如说我们用“马”比喻 string 类型，即“黑马”代指 'this is string'
          类型，“黑马”肯定是“马”，但“马”不一定是“黑马”，它可能还是“白马”“灰马”。因此，'this
          is string' 字面量类型可以给 string 类型赋值，但是 string 类型不能给
          'this is string'
          字面量类型赋值，这个比喻同样适合于形容数字、布尔等其他字面量和它们父类的关系。
        </p>
        <p data-nodeid="1179">
          接下来，我们介绍一下字符串字面量类型、数字字面量类型、布尔字面量类型。
        </p>
        <h4 data-nodeid="1180">字符串字面量类型</h4>
        <p data-nodeid="1181">
          一般来说，我们可以使用一个字符串字面量类型作为变量的类型，如下代码所示：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word"><span class="hljs-keyword">let</span> hello: <span class="hljs-string">'hello'</span> = <span class="hljs-string">'hello'</span>;
</div></li><li><div class="code-word">hello = <span class="hljs-string">'hi'</span>; <span class="hljs-comment">// ts(2322) Type '"hi"' is not assignable to type '"hello"'</span>
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="1183">
          实际上，定义单个的字面量类型并没有太大的用处，它真正的应用场景是可以把多个字面量类型组合成一个联合类型（详见
          08 讲），用来描述拥有明确成员的实用的集合。
        </p>
        <p data-nodeid="1184">
          如下代码所示，我们使用字面量联合类型描述了一个明确、可 'up' 可 'down'
          的集合，这样就能清楚地知道需要的数据结构了。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word"><span class="hljs-keyword">type</span> Direction = <span class="hljs-string">'up'</span> | <span class="hljs-string">'down'</span>;
</div></li><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">move</span>(<span class="hljs-params">dir: Direction</span>) </span>{
</div></li><li><div class="code-word">  <span class="hljs-comment">// ...</span>
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word">move(<span class="hljs-string">'up'</span>); <span class="hljs-comment">// ok</span>
</div></li><li><div class="code-word">move(<span class="hljs-string">'right'</span>); <span class="hljs-comment">// ts(2345) Argument of type '"right"' is not assignable to parameter of type 'Direction'</span>
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="1186">
          通过使用字面量类型组合的联合类型，我们可以限制函数的参数为指定的字面量类型集合，然后编译器会检查参数是否是指定的字面量类型集合里的成员。
        </p>
        <p data-nodeid="1187">
          因此，相较于使用 string
          类型，使用字面量类型（组合的联合类型）可以将函数的参数限定为更具体的类型。这不仅提升了程序的可读性，还保证了函数的参数类型，可谓一举两得。
        </p>
        <h4 data-nodeid="1188">数字字面量类型及布尔字面量类型</h4>
        <p data-nodeid="1189">
          数字字面量类型和布尔字面量类型的使用与字符串字面量类型的使用类似，我们可以使用字面量组合的联合类型将函数的参数限定为更具体的类型，比如声明如下所示的一个类型
          Config：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word"><span class="hljs-keyword">interface</span> Config {
</div></li><li><div class="code-word">    size: <span class="hljs-string">'small'</span> | <span class="hljs-string">'big'</span>;
</div></li><li><div class="code-word">    isEnable:  <span class="hljs-literal">true</span> | <span class="hljs-literal">false</span>;
</div></li><li><div class="code-word">    margin: <span class="hljs-number">0</span> | <span class="hljs-number">2</span> | <span class="hljs-number">4</span>;
</div></li><li><div class="code-word">}
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="1191">
          在上述代码中，我们限定了 size 属性为字符串字面量类型 'small' |
          'big'，isEnable 属性为布尔字面量类型 true | false（布尔字面量只包含
          true 和 false，true | false 的组合跟直接使用 boolean
          没有区别），margin 属性为数字字面量类型 0 | 2 | 4。
        </p>
        <p data-nodeid="1192">
          <strong data-nodeid="1353"
            >介绍完三种字面量类型后，我们再来看看通过 let 和 const
            定义的变量的值相同，而变量类型不一致的具体原因。</strong
          >
        </p>
        <p data-nodeid="1193">我们先来看一个 const 示例，如下代码所示：</p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word">{
</div></li><li><div class="code-word">  <span class="hljs-keyword">const</span> str = <span class="hljs-string">'this is string'</span>; <span class="hljs-comment">// str: 'this is string'</span>
</div></li><li><div class="code-word">  <span class="hljs-keyword">const</span> num = <span class="hljs-number">1</span>; <span class="hljs-comment">// num: 1</span>
</div></li><li><div class="code-word">  <span class="hljs-keyword">const</span> bool = <span class="hljs-literal">true</span>; <span class="hljs-comment">// bool: true</span>
</div></li><li><div class="code-word">}
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="1195">
          在上述代码中，我们将 const
          定义为一个不可变更的常量，在缺省类型注解的情况下，TypeScript
          推断出它的类型直接由赋值字面量的类型决定，这也是一种比较合理的设计。
        </p>
        <p data-nodeid="1196">
          接下来我们看看如下所示的 let 示例，此时理解起来可能会稍微难一些。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word">{
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> str = <span class="hljs-string">'this is string'</span>; <span class="hljs-comment">// str: string</span>
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> num = <span class="hljs-number">1</span>; <span class="hljs-comment">// num: number</span>
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> bool = <span class="hljs-literal">true</span>; <span class="hljs-comment">// bool: boolean</span>
</div></li><li><div class="code-word">}
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="1198">
          在上述代码中，缺省显式类型注解的可变更的变量的类型转换为了赋值字面量类型的父类型，比如
          str 的类型是 'this is string'
          类型（这里表示一个字符串字面量类型）的父类型 string，num 的类型是 1
          类型的父类型 number。
        </p>
        <p data-nodeid="1199">
          这种设计符合编程预期，意味着我们可以分别赋予 str 和 num
          任意值（只要类型是 string 和 number 的子集的变量）：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word">  str = <span class="hljs-string">'any string'</span>;
</div></li><li><div class="code-word">  num = <span class="hljs-number">2</span>;
</div></li><li><div class="code-word">  bool = <span class="hljs-literal">false</span>;
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="1201">
          我们将 TypeScript 的字面量子类型转换为父类型的这种设计称之为 "literal
          widening"，也就是字面量类型的拓宽，比如上面示例中提到的字符串字面量类型转换成
          string 类型，下面我们着重介绍一下。
        </p>
        <h4 data-nodeid="1202">Literal Widening</h4>
        <p data-nodeid="1203">
          所有通过 let 或 var
          定义的变量、函数的形参、对象的非只读属性，如果满足指定了初始值且未显式添加类型注解的条件，那么它们推断出来的类型就是指定的初始值字面量类型拓宽后的类型，这就是字面量类型拓宽。
        </p>
        <p data-nodeid="1204">
          下面我们通过字符串字面量的示例来理解一下字面量类型拓宽：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word">{
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> str = <span class="hljs-string">'this is string'</span>; <span class="hljs-comment">// 类型是 string</span>
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> strFun = <span class="hljs-function">(<span class="hljs-params">str = '<span class="hljs-keyword">this</span> is <span class="hljs-built_in">string</span>'</span>) =&gt;</span> str; <span class="hljs-comment">// 类型是 (str?: string) =&gt; string;</span>
</div></li><li><div class="code-word">  <span class="hljs-keyword">const</span> specifiedStr = <span class="hljs-string">'this is string'</span>; <span class="hljs-comment">// 类型是 'this is string'</span>
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> str2 = specifiedStr; <span class="hljs-comment">// 类型是 'string'</span>
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> strFun2 = <span class="hljs-function">(<span class="hljs-params">str = specifiedStr</span>) =&gt;</span> str; <span class="hljs-comment">// 类型是 (str?: string) =&gt; string;</span>
</div></li><li><div class="code-word">}
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="1206">
          因为第 2~3 行满足了
          let、形参且未显式声明类型注解的条件，所以变量、形参的类型拓宽为
          string（形参类型确切地讲是 string | undefined）。
        </p>
        <p data-nodeid="1207">
          因为第 5 行的常量不可变更，类型没有拓宽，所以 specifiedStr 的类型是
          'this is string' 字面量类型。
        </p>
        <p data-nodeid="1208">
          第 7~8 行，因为赋予的值 specifiedStr
          的类型是字面量类型，且没有显式类型注解，所以变量、形参的类型也被拓宽了。其实，这样的设计符合实际编程诉求。我们设想一下，如果
          str2 的类型被推断为 'this is
          string'，它将不可变更，因为赋予任何其他的字符串类型的值都会提示类型错误。
        </p>
        <p data-nodeid="1209">
          基于字面量类型拓宽的条件，我们可以通过如下所示代码添加显示类型注解控制类型拓宽行为。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word">{
</div></li><li><div class="code-word">  <span class="hljs-keyword">const</span> specifiedStr: <span class="hljs-string">'this is string'</span> = <span class="hljs-string">'this is string'</span>; <span class="hljs-comment">// 类型是 '"this is string"'</span>
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> str2 = specifiedStr; <span class="hljs-comment">// 即便使用 let 定义，类型是 'this is string'</span>
</div></li><li><div class="code-word">}
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="1211">
          实际上，除了字面量类型拓宽之外，TypeScript 对某些特定类型值也有类似
          "Type Widening" （类型拓宽）的设计，下面我们具体来了解一下。
        </p>
        <h4 data-nodeid="1212">Type Widening</h4>
        <p data-nodeid="1213">
          比如对 null 和 undefined 的类型进行拓宽，通过 let、var
          定义的变量如果满足未显式声明类型注解且被赋予了 null 或 undefined
          值，则推断出这些变量的类型是 any：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word">{
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> x = <span class="hljs-literal">null</span>; <span class="hljs-comment">// 类型拓宽成 any</span>
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> y = <span class="hljs-literal">undefined</span>; <span class="hljs-comment">// 类型拓宽成 any</span>
</div></li><li><div class="code-word">  <span class="hljs-comment">/** -----分界线------- */</span>
</div></li><li><div class="code-word">  <span class="hljs-keyword">const</span> z = <span class="hljs-literal">null</span>; <span class="hljs-comment">// 类型是 null</span>
</div></li><li><div class="code-word">  <span class="hljs-comment">/** -----分界线------- */</span>
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> anyFun = <span class="hljs-function">(<span class="hljs-params">param = <span class="hljs-literal">null</span></span>) =&gt;</span> param; <span class="hljs-comment">// 形参类型是 null</span>
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> z2 = z; <span class="hljs-comment">// 类型是 null</span>
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> x2 = x; <span class="hljs-comment">// 类型是 null</span>
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> y2 = y; <span class="hljs-comment">// 类型是 undefined</span>
</div></li><li><div class="code-word">}
</div></li></ol></code></pre>
        </div>
        <blockquote data-nodeid="1215">
          <p data-nodeid="1216">
            注意：在严格模式下，一些比较老的版本中（2.0）null 和 undefined
            并不会被拓宽成“any”。因此，某些过时的资料中会存在与课程不一致的解释。
          </p>
        </blockquote>
        <p data-nodeid="1217">
          在现代 TypeScript 中，以上示例的第 2~3
          行的类型拓宽更符合实际编程习惯，我们可以赋予任何其他类型的值给具有
          null 或 undefined 初始值的变量 x 和 y。
        </p>
        <p data-nodeid="1218">
          示例第 7~10 行的类型推断行为因为开启了
          strictNullChecks=true（说明：本课程所有示例都基于严格模式编写），此时我们可以从类型安全的角度试着思考一下：这几行代码中出现的变量、形参的类型为什么是
          null 或 undefined，而不是
          any？因为前者可以让我们更谨慎对待这些变量、形参，而后者不能。
        </p>
        <p data-nodeid="1219">
          既然有类型拓宽，自然也会有类型缩小，下面我们简单介绍一下 Type
          Narrowing。
        </p>
        <h4 data-nodeid="1220">Type Narrowing</h4>
        <p data-nodeid="1221">
          在 TypeScript
          中，我们可以通过某些操作将变量的类型由一个较为宽泛的集合缩小到相对较小、较明确的集合，这就是
          "Type Narrowing"。
        </p>
        <p data-nodeid="1222">
          比如，我们可以使用类型守卫（详见 11 讲的内容）将函数参数的类型从 any
          缩小到明确的类型，具体示例如下：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word">{
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> func = <span class="hljs-function">(<span class="hljs-params">anything: <span class="hljs-built_in">any</span></span>) =&gt;</span> {
</div></li><li><div class="code-word">    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> anything === <span class="hljs-string">'string'</span>) {
</div></li><li><div class="code-word">      <span class="hljs-keyword">return</span> anything; <span class="hljs-comment">// 类型是 string&nbsp;</span>
</div></li><li><div class="code-word">    } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> anything === <span class="hljs-string">'number'</span>) {
</div></li><li><div class="code-word">      <span class="hljs-keyword">return</span> anything; <span class="hljs-comment">// 类型是 number</span>
</div></li><li><div class="code-word">    }
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> <span class="hljs-literal">null</span>;
</div></li><li><div class="code-word">  };
</div></li><li><div class="code-word">}
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="1224">
          在 VS Code 中 hover 到第 4 行的 anything 变量提示类型是 string，到第 6
          行则提示类型是 number。
        </p>
        <p data-nodeid="1225">
          同样，我们可以使用类型守卫将联合类型（详见 08 讲
          内容）缩小到明确的子类型，具体示例如下：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word">{
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> func = <span class="hljs-function">(<span class="hljs-params">anything: <span class="hljs-built_in">string</span> | <span class="hljs-built_in">number</span></span>) =&gt;</span> {
</div></li><li><div class="code-word">    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> anything === <span class="hljs-string">'string'</span>) {
</div></li><li><div class="code-word">      <span class="hljs-keyword">return</span> anything; <span class="hljs-comment">// 类型是 string </span>
</div></li><li><div class="code-word">    } <span class="hljs-keyword">else</span> {
</div></li><li><div class="code-word">      <span class="hljs-keyword">return</span> anything; <span class="hljs-comment">// 类型是 number</span>
</div></li><li><div class="code-word">    }
</div></li><li><div class="code-word">  };
</div></li><li><div class="code-word">}
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="1227">
          当然，我们也可以通过字面量类型等值判断（===）或其他控制流语句（包括但不限于
          if、三目运算符、switch
          分支）将联合类型收敛为更具体的类型，如下代码所示：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word">{
</div></li><li><div class="code-word">  <span class="hljs-keyword">type</span> Goods = <span class="hljs-string">'pen'</span> | <span class="hljs-string">'pencil'</span> |<span class="hljs-string">'ruler'</span>;
</div></li><li><div class="code-word">  <span class="hljs-keyword">const</span> getPenCost = <span class="hljs-function">(<span class="hljs-params">item: 'pen'</span>) =&gt;</span> <span class="hljs-number">2</span>;
</div></li><li><div class="code-word">  <span class="hljs-keyword">const</span> getPencilCost = <span class="hljs-function">(<span class="hljs-params">item: 'pencil'</span>) =&gt;</span> <span class="hljs-number">4</span>;
</div></li><li><div class="code-word">  <span class="hljs-keyword">const</span> getRulerCost = <span class="hljs-function">(<span class="hljs-params">item: 'ruler'</span>) =&gt;</span> <span class="hljs-number">6</span>;
</div></li><li><div class="code-word">  <span class="hljs-keyword">const</span> getCost = <span class="hljs-function">(<span class="hljs-params">item: Goods</span>) =&gt;</span>  {
</div></li><li><div class="code-word">    <span class="hljs-keyword">if</span> (item === <span class="hljs-string">'pen'</span>) {
</div></li><li><div class="code-word">      <span class="hljs-keyword">return</span> getPenCost(item); <span class="hljs-comment">// item =&gt; 'pen'</span>
</div></li><li><div class="code-word">    } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (item === <span class="hljs-string">'pencil'</span>) {
</div></li><li><div class="code-word">      <span class="hljs-keyword">return</span> getPencilCost(item); <span class="hljs-comment">// item =&gt; 'pencil'</span>
</div></li><li><div class="code-word">    } <span class="hljs-keyword">else</span> {
</div></li><li><div class="code-word">      <span class="hljs-keyword">return</span> getRulerCost(item); <span class="hljs-comment">// item =&gt; 'ruler'</span>
</div></li><li><div class="code-word">    }
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">}
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="1229">
          在上述 getCost
          函数中，接受的参数类型是字面量类型的联合类型，函数内包含了 if 语句的 3
          个流程分支，其中每个流程分支调用的函数的参数都是具体独立的字面量类型。
        </p>
        <p data-nodeid="1230">
          那为什么类型由多个字面量组成的变量 item
          可以传值给仅接收单一特定字面量类型的函数
          getPenCost、getPencilCost、getRulerCost
          呢？这是因为在每个流程分支中，编译器知道流程分支中的 item
          类型是什么。比如 item === 'pencil' 的分支，item
          的类型就被收缩为“pencil”。
        </p>
        <p data-nodeid="1231">
          事实上，如果我们将上面的示例去掉中间的流程分支，编译器也可以推断出收敛后的类型，如下代码所示：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="typescript"><ol><li><div class="code-word">  <span class="hljs-keyword">const</span> getCost = <span class="hljs-function">(<span class="hljs-params">item: Goods</span>) =&gt;</span>  {
</div></li><li><div class="code-word">    <span class="hljs-keyword">if</span> (item === <span class="hljs-string">'pen'</span>) {
</div></li><li><div class="code-word">      item; <span class="hljs-comment">// item =&gt; 'pen'</span>
</div></li><li><div class="code-word">    } <span class="hljs-keyword">else</span> {
</div></li><li><div class="code-word">      item; <span class="hljs-comment">// =&gt; 'pencil' | 'ruler'</span>
</div></li><li><div class="code-word">    }
</div></li><li><div class="code-word">  }
</div></li></ol></code></pre>
        </div>
        <h3 data-nodeid="1233">小结与预告</h3>
        <p data-nodeid="1234">
          这一讲中包含了类型推断、字面量类型、类型拓宽、类型缩小等知识，涉及的都是比较简单的字面量、赋值、函数的编程场景，而这些知识同样适用于
          06 讲中更复杂的类型和结构，只不过你需要多花时间学习、理解并掌握。
        </p>
        <p data-nodeid="1235">
          这里给你预留了一道思考题：涉及字面量的类型推断都有什么规则？欢迎你在留言区与我互动、交流。
        </p>
        <p data-nodeid="1236" class="">
          另外，如果你觉得本专栏有价值，欢迎分享给更多好友哦~
        </p>
      </div>
    </div>
  </div>
</template>
