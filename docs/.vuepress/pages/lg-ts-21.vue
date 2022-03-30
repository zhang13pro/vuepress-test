<template>
  <div data-v-1605a430="">
    <h1 data-v-1605a430="" class="main-title">
      结束语 | TypeScript 的这些实用技能，你不得不知
    </h1>
    <div data-v-1605a430="" class="main-tips">
      2021/07/13
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
                    aria-valuetext="00:00/13:29"
                    class="vue-slider-dot vue-slider-dot-hover"
                    role="slider"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="809"
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
                          >00:00/13:29</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ecd2302="" class="detail-wrap">
              <div data-v-6ecd2302="" class="detail-one">35.19M</div>
              <div data-v-6ecd2302="" class="detail-two">00:00/13:29</div>
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
        <p data-nodeid="16788" class="">
          经过前面 20 讲的学习，我们已经了解了 TypeScript
          从开发环境搭建、基础类型、高阶类型到业务实践的全链路知识。
        </p>
        <p data-nodeid="16789">
          最后一讲我们再一起对过往实用的技能、重点或者容易混淆的知识进行提炼汇总，查漏补缺。
        </p>
        <h3 data-nodeid="16790">知识回顾</h3>
        <h4 data-nodeid="16791">Number、String、Boolean、Symbol</h4>
        <p data-nodeid="16792">
          首先，我们来回顾一下初学 TypeScript 时，很容易和原始类型
          number、string、boolean、symbol 混淆的首字母大写的
          Number、String、Boolean、Symbol
          类型，后者是相应原始类型的包裹对象，姑且把它们称之为对象类型。
        </p>
        <p data-nodeid="16793">
          从类型兼容性上看，原始类型兼容对应的对象类型，反过来对象类型不兼容对应的原始类型。
        </p>
        <p data-nodeid="33258">下面我们看一个具体的示例：</p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code><ol><li><div class="code-word">let num: number;
</div></li><li><div class="code-word">let Num: Number;
</div></li><li><div class="code-word">Num = num; // ok
</div></li><li><div class="code-word">num = Num; // ts(2322)
</div></li><li><div class="code-word">
</div></li></ol></code></pre>
        </div>

        <p data-nodeid="16796">
          在示例中的第 3 行，我们可以把 number 赋给类型 Number，但在第 4 行把
          Number 赋给 number 就会提示 ts(2322) 错误。
        </p>
        <p data-nodeid="16797">
          因此，<strong data-nodeid="16904"
            >我们需要铭记不要使用对象类型来注解值的类型，因为这没有任何意义。</strong
          >
        </p>
        <h4 data-nodeid="16798">object、Object 和 {}</h4>
        <p data-nodeid="16799">
          另外，object（首字母小写，03 讲我们介绍过，以下称“小
          object”）、Object（首字母大写，以下称“大 Object”）和
          {}（以下称“空对象”）也是容易混淆的类型。
        </p>
        <p data-nodeid="16800">
          小 object 代表的是所有非原始类型，也就是说我们不能把
          number、string、boolean、symbol 原始类型赋值给 object。<strong
            data-nodeid="16916"
            >在严格****模式下，null 和 undefined 类型也不能赋给 object。</strong
          >
        </p>
        <p data-nodeid="35925">下面我们看一个具体示例：</p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code><ol><li><div class="code-word">let lowerCaseObject: object;
</div></li><li><div class="code-word">lowerCaseObject = 1; // ts(2322)
</div></li><li><div class="code-word">lowerCaseObject = 'a'; // ts(2322)
</div></li><li><div class="code-word">lowerCaseObject = true; // ts(2322)
</div></li><li><div class="code-word">lowerCaseObject = null; // ts(2322)
</div></li><li><div class="code-word">lowerCaseObject = undefined; // ts(2322)
</div></li><li><div class="code-word">lowerCaseObject = {}; // ok
</div></li><li><div class="code-word">
</div></li></ol></code></pre>
        </div>

        <p data-nodeid="16803">
          在示例中的第 2~6 行都会提示 ts(2322) 错误，但是我们在第 7
          行把一个空对象赋值给 object 后，则可以通过静态类型检测。
        </p>
        <p data-nodeid="16804">
          大Object 代表所有拥有 toString、hasOwnProperty
          方法的类型，所以所有原始类型、非原始类型都可以赋给 Object。<strong
            data-nodeid="16942"
            >同样，在严格模式下，null 和 undefined 类型也不能赋给
            Object。</strong
          >
        </p>
        <p data-nodeid="39064">下面我们也看一个具体的示例：</p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code><ol><li><div class="code-word">let upperCaseObject: Object;
</div></li><li><div class="code-word">upperCaseObject = 1; // ok
</div></li><li><div class="code-word">upperCaseObject = 'a'; // ok
</div></li><li><div class="code-word">upperCaseObject = true; // ok
</div></li><li><div class="code-word">upperCaseObject = null; // ts(2322)
</div></li><li><div class="code-word">upperCaseObject = undefined; // ts(2322)
</div></li><li><div class="code-word">upperCaseObject = {}; // ok
</div></li><li><div class="code-word">
</div></li></ol></code></pre>
        </div>

        <p data-nodeid="16807">
          在示例中的第 2~4 行、第 7 行都可以通过静态类型检测，而第 5~6
          行则会提示 ts(2322) 错误。
        </p>
        <p data-nodeid="16808">
          从上面示例可以看到，大 Object 包含原始类型，小 object
          仅包含非原始类型，所以大 Object 似乎是小 object 的父类型。实际上，大
          Object 不仅是小 object 的父类型，同时也是小 object 的子类型（回想 15
          讲中我们实现的判断两个类型是否相等的工具泛型
          isEqualV3，其实就是区分不了大 Object 和小 object）。
        </p>
        <p data-nodeid="39685">下面我们还是通过一个具体的示例进行说明。</p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code><ol><li><div class="code-word">type isLowerCaseObjectExtendsUpperCaseObject = object extends Object ? true : false; // true
</div></li><li><div class="code-word">type isUpperCaseObjectExtendsLowerCaseObject = Object extends object ? true : false; // true
</div></li><li><div class="code-word">upperCaseObject = lowerCaseObject; // ok
</div></li><li><div class="code-word">lowerCaseObject = upperCaseObject; // ok
</div></li><li><div class="code-word">
</div></li></ol></code></pre>
        </div>

        <p data-nodeid="16811">
          在示例中的第 1 行和第 2 行返回的类型都是 true，第3 行和第 4 行的
          upperCaseObject 与 lowerCaseObject 可以互相赋值。
        </p>
        <blockquote data-nodeid="16812">
          <p data-nodeid="16813">
            <strong data-nodeid="16979"
              >注意：尽管官方文档说可以使用小 object 代替大
              Object，但是我们仍要明白大 Object 并不完全等价于小
              object。</strong
            >
          </p>
        </blockquote>
        <p data-nodeid="42678">
          {}空对象类型和大 Object
          一样，也是表示原始类型和非原始类型的集合，并且在严格模式下，null 和
          undefined 也不能赋给 {} ，如下示例：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code><ol><li><div class="code-word">let ObjectLiteral: {};
</div></li><li><div class="code-word">ObjectLiteral = 1; // ok
</div></li><li><div class="code-word">ObjectLiteral = 'a'; // ok
</div></li><li><div class="code-word">ObjectLiteral = true; // ok
</div></li><li><div class="code-word">ObjectLiteral = null; // ts(2322)
</div></li><li><div class="code-word">ObjectLiteral = undefined; // ts(2322)
</div></li><li><div class="code-word">ObjectLiteral = {}; // ok
</div></li><li><div class="code-word">type isLiteralCaseObjectExtendsUpperCaseObject = {} extends Object ? true : false; // true
</div></li><li><div class="code-word">type isUpperCaseObjectExtendsLiteralCaseObject = Object extends {} ? true : false; // true
</div></li><li><div class="code-word">upperCaseObject = ObjectLiteral;
</div></li><li><div class="code-word">ObjectLiteral = upperCaseObject;
</div></li><li><div class="code-word">
</div></li></ol></code></pre>
        </div>

        <p data-nodeid="16816">
          在示例中的第 8 行和第 9 行返回的类型都是 true，第10 行和第 11 行的
          ObjectLiteral 与 upperCaseObject 可以互相赋值，第2~4 行、第 7
          行的赋值操作都符合静态类型检测；而第5 行、第 6 行则会提示 ts(2322)
          错误。
        </p>
        <p data-nodeid="42917" class="">
          <strong data-nodeid="42921"
            >综上结论：{}、大 Object 是比小 object 更宽泛的类型（least
            specific），{} 和大 Object
            可以互相代替，用来表示原始类型（null、undefined
            除外）和非原始类型；而小 object 则表示非原始类型。</strong
          >
        </p>

        <blockquote data-nodeid="16818">
          <p data-nodeid="16819" class="">
            这里插播一道思考题：基于以上总结，请实现一个能够区分大 Object 和小
            object 的 isEqualV4。
          </p>
        </blockquote>
        <h4 data-nodeid="16820">严格与非严格模式</h4>
        <p data-nodeid="16821">
          关于静态类型检测的工作模式，在课程中我们也经常提到严格和非严格模式的区别，实际上最让人困惑的是
          strictNullChecks 和 strictFunctionTypes 这两个设置。
        </p>
        <p data-nodeid="16822">
          strictNullChecks 影响的是 null、undefined
          与其他类型的兼容性问题，比如上边提到，开启 strictNullChecks
          时，null、undefined 不兼容大、小 object 和 {}，但关闭 strictNullChecks
          时，它们又是兼容的。
        </p>
        <p data-nodeid="16823">
          strictFunctionTypes 则影响的是函数类型检测，开启 strictFunctionTypes
          时，函数参数是逆变的，而关闭 strictFunctionTypes
          时，函数参数则变成了双向协变。
        </p>
        <p data-nodeid="43409" class="">
          <strong data-nodeid="43420">因此</strong>，在 TypeScript
          的所有项目中使用严格模式（尤其是以上两个配置），实际上可以降低心智成本。<b
            ><strong data-nodeid="43421">在实</strong></b
          >际工作中，我们只需要理解 TypeScript
          在严格模式下的特性并严格遵循，代码就是类型安全的。
        </p>

        <h4 data-nodeid="16825">类型增强</h4>
        <p data-nodeid="16826">
          在 TypeScript 中，如果文件包含顶层的 export 或者 import，则会被当作
          module，在 module 中定义的、没有显式 export
          的变量、函数、类对外都不可见；相反，如果文件不包含顶层的 export 或者
          import，则会被当作 script，script
          里的内容（类型声明、变量声明）都是全局可见的（对 module 也是可见的）。
        </p>
        <p data-nodeid="16827">
          这就是为什么使用同样的语法进行人工补齐类型声明时，有的类型声明在其他的模块、文件中无需显式
          import 就可以直接使用，而有的类型声明必须显式 import 之后才可以使用。
        </p>
        <p data-nodeid="16828">
          <strong data-nodeid="17046">需要注意</strong>：因为 script
          中的内容都是全局可见的，一方面我们应该避免定义过多全局类型，另一方面也要使用足够特性化的唯一标识来命名全局类型，从而避免全局命名污染。
        </p>
        <p data-nodeid="45672">下面看一个具体的示例：</p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code><ol><li><div class="code-word">// myAugmention.ts
</div></li><li><div class="code-word">namespace MyNameSpaceExample {
</div></li><li><div class="code-word">export type id = number; // 此处非顶层 export
</div></li><li><div class="code-word">export type name = string;
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word">type TSCourseUserInfoName = string;
</div></li><li><div class="code-word">
</div></li></ol></code></pre>
        </div>

        <p data-nodeid="16831" class="">
          在示例中的第 2~4 行，我们使用了 namespace 组织 id、name
          等比较容易出现命名冲突的类型（namespace 中只有显式 export
          的成员才对外可见），然后在第 6 行命名了一个足够特性化的全局
          TSCourseUserInfoName。接下来我们就可以在任何其他地方通过类型名、命名空间名
          + 类型名访问全局类型。
        </p>
        <p data-nodeid="16832">
          <strong data-nodeid="17072"
            >此外，为了避免其他人在 myAugmention.ts 中添加顶层 export 或者
            import，导致 script 变
            module、类型全局可见性被破坏，我们可以显式添加描述信息，比如标明“
            script 文件，请勿添加顶层 export 或者 import”。<b
              ><strong data-nodeid="17071">反过</strong></b
            >来，我们也可以在 script 中添加“export {}”，显式地把 script 改为
            module，避免类型全局污染。</strong
          >
        </p>
        <p data-nodeid="48143">
          如果我们确实想让 module 中的类型全局可见，则可以使用 declare global
          声明全局类型，如下示例：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code><ol><li><div class="code-word">// myGlobalModule.ts
</div></li><li><div class="code-word">declare global {
</div></li><li><div class="code-word">type GlobalUserId = number;
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word">
</div></li></ol></code></pre>
        </div>

        <p data-nodeid="16835">
          在示例中的第 2~4 行，我们声明了可以在任何地方访问的全局类型
          GlobalUserId（如果你们的示例中只有这么几行代码，肯定访问不到
          GlobalUserId）。
        </p>
        <p data-nodeid="16836">下面我们再来回顾一下类型断言的一般性原则。</p>
        <h4 data-nodeid="16837">类型断言</h4>
        <p data-nodeid="25544">
          对于复杂类型而言，父子类型可以互相断言；对于原始类型
          number、string、boolean
          而言，属于同一原始类型的字面量类型以及字面量类型组成的联合类型也可以互相断言，如下示例：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code><ol><li><div class="code-word">let NumberLiteral1: 1 = 1;
</div></li><li><div class="code-word">let NumberLiteral2: 2 = 2;
</div></li><li><div class="code-word">let StringLiterala: 'a' = 'a';
</div></li><li><div class="code-word">let StringLiteralb: 'b' = 'b';
</div></li><li><div class="code-word">let MixedLiteral1: typeof NumberLiteral1 \| typeof StringLiterala = 1;
</div></li><li><div class="code-word">let MixedLiteral2: typeof NumberLiteral2 \| typeof StringLiteralb = 2;
</div></li><li><div class="code-word">NumberLiteral1 = NumberLiteral2 as 1; // ok
</div></li><li><div class="code-word">NumberLiteral2 = NumberLiteral1 as 2; // ok
</div></li><li><div class="code-word">StringLiterala = StringLiteralb as 'a'; // ok
</div></li><li><div class="code-word">StringLiteralb = StringLiterala as 'b'; // ok
</div></li><li><div class="code-word">MixedLiteral1 = MixedLiteral2 as typeof MixedLiteral1; // ok
</div></li><li><div class="code-word">MixedLiteral2 = MixedLiteral1 as typeof MixedLiteral2; // ok
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="31614" class="">
          在示例中的第 7~12
          行的类型断言虽然都符合静态类型检测，却没有任何实际的意义，并且不安全。
        </p>

        <p data-nodeid="16841">
          以上是对本专栏的重难点回顾，接下来我们了解一下 TypeScript
          最近一段时间新增的重要特性。
        </p>
        <h3 data-nodeid="16842">TypeScript 新特性和变更</h3>
        <p data-nodeid="16843">
          TypeScript 迭代十分活跃，至本课程截稿已经发布了 4.0、4.1、4.2
          版本，以下我按照版本号整理了部分新增特性和 break changes。
        </p>
        <h4 data-nodeid="16844">
          <strong data-nodeid="17148">4.0</strong>可变元组
        </h4>
        <p data-nodeid="16845">
          03 讲中我们学习了元组的定义：元素类型、个数确定的数组即元组，在
          TypeScript 4.0 版本中，新引入了两处功能性的变更支持可变元组：
        </p>
        <ul data-nodeid="52767">
          <li data-nodeid="52768">
            <p data-nodeid="52769">
              第一个变更是在元组类型的语法中，我们可以对泛型使用展开运算符，如以下示例第
              4 行（注意：TypeScript 4.0 以下版本会提示 ts(1256) 错误）；
            </p>
          </li>
          <li data-nodeid="52770" class="">
            <p data-nodeid="52771">
              另外一个变更是可以在元组中的任何位置使用剩余元素，如以下示例第 8
              行所示。
            </p>
          </li>
        </ul>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code><ol><li><div class="code-word">const TupleA = ['A'] as const;
</div></li><li><div class="code-word">const TupleB = ['B'] as const;
</div></li><li><div class="code-word">type TupleType = readonly any[];
</div></li><li><div class="code-word">function concat\&lt;T extends TupleType, U extends TupleType&gt;(arr1: T, arr2: U): [...T, ...U] { // ts(1256)
</div></li><li><div class="code-word">return [...arr1, ...arr2]; // ts(2741)
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word">const TupleC = concat(TupleA, TupleB); // ['A', 'B']
</div></li><li><div class="code-word">type ConcatedTuple = [ ...(typeof TupleA), ...(typeof TupleB)];
</div></li><li><div class="code-word">
</div></li></ol></code></pre>
        </div>

        <p data-nodeid="16851">
          可变元组的引入，使得我们可以极其方便地实现一些有意思的功能，比如合并两个元组为一个新的元组的函数，在上述示例中的第
          7 行，我们调用了第 4~6 行定义的函数 concat 合并元组 ['A'] 和 ['B']
          ，从而得到了新的元组类型 ['A', 'B'] 。如果没有可变元组（比如 在
          TypeScript 3.9 中），我们就需要给函数 concat 编写 m * n
          个重载类型，比如支持长度为 5 的元组合并就需要编写 25 个类型重载。
        </p>
        <p data-nodeid="16852">
          可变元组还可以极大地提升函数式编程的类型体验和可能性，我们可以在函数组合中使用可变元组约束高阶函数入参和返回值的类型，比如对
          JavaScript 内置 bind 方法更好地进行类型检测支持。
        </p>
        <h4 data-nodeid="16853">4.0 元组元素标签</h4>
        <p data-nodeid="55299">
          另外一个元组相关的变更是我们可以在元组类型的定义中给元素指定标签，让代码更具语义化、可读性，如下示例：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code><ol><li><div class="code-word">type LabeledTupleType = [id: number, name: string];
</div></li><li><div class="code-word">
</div></li></ol></code></pre>
        </div>

        <p data-nodeid="16856">
          在示例中的第 1 行，我们给元组的两个元素分别指定了 id 和 name 的标签。
        </p>
        <p data-nodeid="16857">
          接下来，我们了解一下 4.1 版本中的新特性和变更。
        </p>
        <h4 data-nodeid="16858">
          <strong data-nodeid="17247">4.1</strong>模板字面量类型
        </h4>
        <p data-nodeid="16859">
          不得不说，模板字面量类型是 4.1
          版本中非常有创造力和想象力的新特性，它使得字符串类型也具备了可变可运算的能力。
        </p>
        <p data-nodeid="59777">
          我们可以基于已有的字符串字面量衍生出新的字面量类型，也就是说既可以使用模板语法拼接字符串，也可以使用内置工具函数对模板变量进行转换，如下示例：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code><ol><li><div class="code-word">type PrefixType\&lt;P extends string, N extends string&gt; = `${P}/${Capitalize&lt;string &amp; N&gt;}`;
</div></li><li><div class="code-word">type UserLoginAction = PrefixType&lt;'User', 'login'&gt;; // 'User/Login'
</div></li><li><div class="code-word">
</div></li></ol></code></pre>
        </div>

        <p data-nodeid="16862">
          示例中的第 1 行，因为我们定义了泛型
          PrefixType，它可以接收字符串类型入参 P 和 N，并以“P + / + 首字母大写 N
          ”的格式返回，所以第 2 行入参是 'User' 和 'login' 时，返回的类型是
          'User/Login'。
        </p>
        <p data-nodeid="16863">
          回想一下在 18 讲中介绍的组件和 Redux 类型化中提到的路由属性和 action
          type，我们就可以基于模板字符串类型实现更全面的类型化。
        </p>
        <p data-nodeid="16864">
          我们可以将路由属性中的 params 参数对象和路由字符串规则关联起来，比如将
          { id: string; name:
          string}和“user/:id/:name/”进行关联。同样，我们也可以更方便地将 Redux
          中的 action name 和 action type 关联起来，比如将 doLogin 和
          'user'/'login' 进行关联。
        </p>
        <h4 data-nodeid="16865">4.1 映射类型键名重新映射</h4>
        <p data-nodeid="62182">
          4.1 版本另一个重要的特性：在映射类型中，我们可以使用 as
          操作符对键名重新映射（可以理解为针对类型的类型断言），如下示例：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code><ol><li><div class="code-word">type Getters = {
</div></li><li><div class="code-word">[K in keyof T as `get${Capitalize&lt;string &amp; K&gt;}`]: () =&gt; T[K];
</div></li><li><div class="code-word">};
</div></li><li><div class="code-word">type UserInfoGetters = Getters&lt;{ id: number; name: string; }&gt;
</div></li><li><div class="code-word">
</div></li></ol></code></pre>
        </div>

        <p data-nodeid="16869">
          在示例中的第 2 行，因为我们提取了入参 T
          的属性名，并将其重新映射为“get”前缀+属性名首字母大写拼接格式的新属性名，然后作为返回新类型的属性，所以第三行返回的类型是
          { getId: number; getName: string; }。
        </p>
        <p data-nodeid="16870">
          接下来我们看一下本课程截稿前发布的最新版本（ 4.2 版本）的新特性。
        </p>
        <h4 data-nodeid="16871">
          <strong data-nodeid="17316">4.2</strong>元组头部/中间剩余元素
        </h4>
        <p data-nodeid="64592">
          在 4.2
          版本中，我们可以在元组的任何地方使用剩余元素表达式，而不再仅仅局限于元组的尾部，如下示例：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code><ol><li><div class="code-word">let prefixRestTuple: [...rest: string[], number] = ['a', 'b', 1];
</div></li><li><div class="code-word">let middleRestTuple: [boolean, ...rest: string[], number] = [true
</div></li><li><div class="code-word">,'a', 'b', 1];
</div></li><li><div class="code-word">
</div></li></ol></code></pre>
        </div>

        <p data-nodeid="16874">
          在示例中的第 1 行，我们在元组的头部定义了剩余元素。第 2
          行，我们在元组的中间位置定义了剩余元素。
        </p>
        <h4 data-nodeid="16875">4.2 yield 表达式提示 noImplicitAny 错误</h4>
        <p data-nodeid="65331" class="">
          在 TypeScript 的 4.2
          版本中，另一个有用而颇具破坏性的特性是，必须显式注解 yield
          表达式的返回值类型，否则会提示 noImplicitAny 错误。
        </p>

        <p data-nodeid="16877">
          这个变更极有可能影响第 18 讲“TypeScript Web 开发”中提到的使用
          Redux-saga 管理副作用的 Redux 类型化方案。如果之前我们在 Redux-saga
          副作用函数中没有显式指定 yield 表达式返回值类型，那么 TypeScript
          升级为 4.2 版本之后就需要重构代码，并补全缺失的返回值类型。
        </p>
        <p data-nodeid="16878">
          以上就是我觉得有必要单独补充和同步的 TypeScript 官方新特性和变更。
        </p>
        <p data-nodeid="69004" class="te-preview-highlight">
          从这些新特性和变更中我们不难发现，实际上所有的变更都是朝着愈发严格而全面的类型安全目标演进的。因此，我们与其被动地重构代码，以兼容愈发严格的静态类型检测，不如从学习使用
          TypeScript
          之初就启用严格模式，以追求最高标准，养成好习惯。这也是我在整个专栏期间最中肯的建议和最执着的要求，当然也是最好的实践。
        </p>

        <p data-nodeid="16880">
          注意：TypeScript
          更新快，特性日新月异，我们可以通过官方文档的发版日志模块获取更多详细信息，详见[链接]。
        </p>
        <h3 data-nodeid="16881">寄语</h3>
        <p data-nodeid="16882">
          以上就是这一讲的全部内容，感谢你坚持到最后一讲。
        </p>
        <p data-nodeid="16883">
          这门课程的学习过程，对你们而言是一场有意义的 TypeScript
          学习之旅，对我自己而言也同样是一场有意义的系统性复习和总结之旅。
        </p>
        <p data-nodeid="16884" class="">
          最后，感谢大家的支持，希望我总结的经验能帮助你更快、更好地了解和掌握
          TypeScript，愿严格安全的静态类型保佑你！
        </p>
      </div>
    </div>
  </div>
</template>
