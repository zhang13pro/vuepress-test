<template>
  <div data-v-1605a430="">
    <h1 data-v-1605a430="" class="main-title">
      14 | 异步编程（中）：如何深入理解异步编程的核心 Promise？
    </h1>
    <div data-v-1605a430="" class="main-tips">
      2021/02/22
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
                    aria-valuetext="00:00/10:40"
                    class="vue-slider-dot vue-slider-dot-hover"
                    role="slider"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="640"
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
                          >00:00/10:40</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ecd2302="" class="detail-wrap">
              <div data-v-6ecd2302="" class="detail-one">27.85M</div>
              <div data-v-6ecd2302="" class="detail-two">00:00/10:40</div>
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
        <p data-nodeid="793" class="">
          上一讲，我们聊了关于 JS
          异步编程的发展历程以及异步编程的几种方式，那么从这一讲开始，就要深入学习了，今天要和你说的就是异步编程的核心
          Promise。
        </p>
        <p data-nodeid="794">
          其实在 ES6 标准出现之前，社区就最早提出了 Promise 的方案，后随着 ES6
          将其加入进去，才统一了其用法，并提供了原生的 Promise 对象。Promise
          也是日常前端开发使用比较多的编程方式，因此希望通过这一讲的学习，你能够对
          Promise 异步编程的思路有更深刻的理解。
        </p>
        <p data-nodeid="795">按照惯例，我先给你抛出几个问题：</p>
        <ol data-nodeid="796">
          <li data-nodeid="797">
            <p data-nodeid="798">Promise 内部究竟有几种状态？</p>
          </li>
          <li data-nodeid="799">
            <p data-nodeid="800">Promise 是怎么解决回调地狱问题的？</p>
          </li>
        </ol>
        <p data-nodeid="801">
          现在请你带着思考，跟我一起回顾 Promise 的相关内容吧。
        </p>
        <h3 data-nodeid="802">Promise 的基本情况</h3>
        <p data-nodeid="803">
          如果一定要解释 Promise
          到底是什么，简单来说它就是一个容器，里面保存着某个未来才会结束的事件（通常是异步操作）的结果。从语法上说，Promise
          是一个对象，从它可以获取异步操作的消息。
        </p>
        <p data-nodeid="804">
          Promise 提供统一的
          API，各种异步操作都可以用同样的方法进行处理。我们来简单看一下 Promise
          实现的链式调用代码，如下所示。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">read</span>(<span class="hljs-params">url</span>) </span>{
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =&gt;</span> {
</div></li><li><div class="code-word">        fs.readFile(url, <span class="hljs-string">'utf8'</span>, (err, data) =&gt; {
</div></li><li><div class="code-word">            <span class="hljs-keyword">if</span>(err) reject(err);
</div></li><li><div class="code-word">            resolve(data);
</div></li><li><div class="code-word">        });
</div></li><li><div class="code-word">    });
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word">read(A).then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> read(B);
</div></li><li><div class="code-word">}).then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> read(C);
</div></li><li><div class="code-word">}).then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> read(D);
</div></li><li><div class="code-word">}).catch(<span class="hljs-function"><span class="hljs-params">reason</span> =&gt;</span> {
</div></li><li><div class="code-word">    <span class="hljs-built_in">console</span>.log(reason);
</div></li><li><div class="code-word">});
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="806">
          结合上面的代码，我们一起来分析一下 Promise
          内部的状态流转情况，Promise&nbsp;对象在被创建出来时是待定的状态，它让你能够把异步操作返回最终的成功值或者失败原因，和相应的处理程序关联起来。
        </p>
        <p data-nodeid="807">
          一般&nbsp;Promise&nbsp;在执行过程中，必然会处于以下几种状态之一。
        </p>
        <ol data-nodeid="808">
          <li data-nodeid="809">
            <p data-nodeid="810">
              待定（pending）：初始状态，既没有被完成，也没有被拒绝。
            </p>
          </li>
          <li data-nodeid="811">
            <p data-nodeid="812">已完成（fulfilled）：操作成功完成。</p>
          </li>
          <li data-nodeid="813">
            <p data-nodeid="814">已拒绝（rejected）：操作失败。</p>
          </li>
        </ol>
        <p data-nodeid="815">
          待定状态的 Promise
          对象执行的话，最后要么会通过一个值完成，要么会通过一个原因被拒绝。当其中一种情况发生时，我们用
          Promise 的 then
          方法排列起来的相关处理程序就会被调用。因为最后&nbsp;Promise.prototype.then
          和&nbsp;Promise.prototype.catch&nbsp;方法返回的是一个 Promise，
          所以它们可以继续被链式调用。
        </p>
        <p data-nodeid="816">
          关于 Promise
          的状态流转情况，有一点值得注意的是，内部状态改变之后不可逆，你需要在编程过程中加以注意。文字描述比较晦涩，我们直接通过一张图就能很清晰地看出
          Promise 内部状态流转的情况，如下所示（图片来源于网络）。
        </p>
        <p data-nodeid="817">
          <img
            src="https://s0.lgstatic.com/i/image6/M01/05/09/Cgp9HWAvhIyAH1WgAAES_06spV4639.png"
            alt="Drawing 1.png"
            data-nodeid="901"
          />
        </p>
        <p data-nodeid="818">
          从上图可以看出，我们最开始创建一个新的 Promise 返回给 p1
          ，然后开始执行，状态是 pending，当执行 resolve 之后状态就切换为
          fulfilled，执行 reject 之后就变为 rejected 的状态。
        </p>
        <p data-nodeid="819">
          关于 Promise
          的状态切换如果你想深入研究，可以学习一下“有限状态机”这个知识点。日常中比较常见的状态机有很多，比如马路上的红绿灯。
        </p>
        <p data-nodeid="820">
          那么，Promise 的基本情况先介绍到这里，我们再一起来分析下，Promise
          如何解决回调地狱的问题。
        </p>
        <h3 data-nodeid="821">Promise 如何解决回调地狱</h3>
        <p data-nodeid="822">
          首先，请你再回想一下什么是回调地狱，回调地狱有两个主要的问题：
        </p>
        <ol data-nodeid="823">
          <li data-nodeid="824">
            <p data-nodeid="825">多层嵌套的问题；</p>
          </li>
          <li data-nodeid="826">
            <p data-nodeid="827">
              每种任务的处理结果存在两种可能性（成功或失败），那么需要在每种任务执行结束后分别处理这两种可能性。
            </p>
          </li>
        </ol>
        <p data-nodeid="828">
          这两种问题在“回调函数时代”尤为突出，Promise
          的诞生就是为了解决这两个问题。Promise
          利用了三大技术手段来解决回调地狱：回调函数延迟绑定、返回值穿透、错误冒泡。
        </p>
        <p data-nodeid="829">下面我们通过一段代码来说明，如下所示。</p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-keyword">let</span> readFilePromise = <span class="hljs-function"><span class="hljs-params">filename</span> =&gt;</span> {
</div></li><li><div class="code-word">  <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =&gt;</span> {
</div></li><li><div class="code-word">    fs.readFile(filename, (err, data) =&gt; {
</div></li><li><div class="code-word">      <span class="hljs-keyword">if</span> (err) {
</div></li><li><div class="code-word">        reject(err)
</div></li><li><div class="code-word">      } <span class="hljs-keyword">else</span> {
</div></li><li><div class="code-word">        resolve(data)
</div></li><li><div class="code-word">      }
</div></li><li><div class="code-word">    })
</div></li><li><div class="code-word">  })
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word">readFilePromise(<span class="hljs-string">'1.json'</span>).then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {
</div></li><li><div class="code-word">  <span class="hljs-keyword">return</span> readFilePromise(<span class="hljs-string">'2.json'</span>)
</div></li><li><div class="code-word">});
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="831">
          从上面的代码中可以看到，回调函数不是直接声明的，而是通过后面的 then
          方法传入的，即延迟传入，这就是回调函数延迟绑定。接下来我们针对上面的代码做一下微调，如下所示。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-keyword">let</span> x = readFilePromise(<span class="hljs-string">'1.json'</span>).then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {
</div></li><li><div class="code-word">  <span class="hljs-keyword">return</span> readFilePromise(<span class="hljs-string">'2.json'</span>)  <span class="hljs-comment">//这是返回的Promise</span>
</div></li><li><div class="code-word">});
</div></li><li><div class="code-word">x.then(<span class="hljs-comment">/* 内部逻辑省略 */</span>)
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="833">
          我们根据 then 中回调函数的传入值创建不同类型的 Promise，然后把返回的
          Promise 穿透到外层，以供后续的调用。这里的 x 指的就是内部返回的
          Promise，然后在 x
          后面可以依次完成链式调用。这便是返回值穿透的效果，这两种技术一起作用便可以将深层的嵌套回调写成下面的形式。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="javascript"><ol><li><div class="code-word">readFilePromise(<span class="hljs-string">'1.json'</span>).then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> readFilePromise(<span class="hljs-string">'2.json'</span>);
</div></li><li><div class="code-word">}).then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> readFilePromise(<span class="hljs-string">'3.json'</span>);
</div></li><li><div class="code-word">}).then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> readFilePromise(<span class="hljs-string">'4.json'</span>);
</div></li><li><div class="code-word">});
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="835">
          这样就显得清爽了许多，更重要的是，它更符合人的线性思维模式，开发体验也更好，两种技术结合产生了链式调用的效果。
        </p>
        <p data-nodeid="836">
          这样解决了多层嵌套的问题，那另外一个问题，即每次任务执行结束后分别处理成功和失败的情况怎么解决的呢？Promise
          采用了错误冒泡的方式。其实很容易理解，我们来看看效果。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="javascript"><ol><li><div class="code-word">readFilePromise(<span class="hljs-string">'1.json'</span>).then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> readFilePromise(<span class="hljs-string">'2.json'</span>);
</div></li><li><div class="code-word">}).then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> readFilePromise(<span class="hljs-string">'3.json'</span>);
</div></li><li><div class="code-word">}).then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> readFilePromise(<span class="hljs-string">'4.json'</span>);
</div></li><li><div class="code-word">}).catch(<span class="hljs-function"><span class="hljs-params">err</span> =&gt;</span> {
</div></li><li><div class="code-word">  <span class="hljs-comment">// xxx</span>
</div></li><li><div class="code-word">})
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="838">
          这样前面产生的错误会一直向后传递，被 catch
          接收到，就不用频繁地检查错误了。从上面的这些代码中可以看到，Promise
          解决效果也比较明显：实现链式调用，解决多层嵌套问题；实现错误冒泡后一站式处理，解决每次任务中判断错误、增加代码混乱度的问题。
        </p>
        <p data-nodeid="839">接下来我们再看看 Promise 提供了哪些静态的方法。</p>
        <h3 data-nodeid="840">Promise 的静态方法</h3>
        <p data-nodeid="841">
          我会从语法、参数以及方法的代码几个方面来分别介绍
          all、allSettled、any、race 这四种方法。
        </p>
        <h4 data-nodeid="842">all 方法</h4>
        <p data-nodeid="843">
          <strong data-nodeid="924">语法：</strong> Promise.all（iterable）
        </p>
        <p data-nodeid="844">
          <strong data-nodeid="929">参数：</strong> 一个可迭代对象，如 Array。
        </p>
        <p data-nodeid="845">
          <strong data-nodeid="934">描述：</strong> 此方法对于汇总多个 promise
          的结果很有用，在 ES6 中可以将多个 Promise.all
          异步请求并行操作，返回结果一般有下面两种情况。
        </p>
        <ol data-nodeid="846">
          <li data-nodeid="847">
            <p data-nodeid="848">当所有结果成功返回时按照请求顺序返回成功。</p>
          </li>
          <li data-nodeid="849">
            <p data-nodeid="850">当其中有一个失败方法时，则进入失败方法。</p>
          </li>
        </ol>
        <p data-nodeid="851">
          我们来看下业务的场景，对于下面这个业务场景页面的加载，将多个请求合并到一起，用
          all 来实现可能效果会更好，请看代码片段。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-comment">//1.获取轮播数据列表</span>
</div></li><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getBannerList</span>(<span class="hljs-params"></span>)</span>{
</div></li><li><div class="code-word">  <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve,reject</span>)=&gt;</span>{
</div></li><li><div class="code-word">      setTimeout(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
</div></li><li><div class="code-word">        resolve(<span class="hljs-string">'轮播数据'</span>)
</div></li><li><div class="code-word">      },<span class="hljs-number">300</span>) 
</div></li><li><div class="code-word">  })
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-comment">//2.获取店铺列表</span>
</div></li><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getStoreList</span>(<span class="hljs-params"></span>)</span>{
</div></li><li><div class="code-word">  <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve,reject</span>)=&gt;</span>{
</div></li><li><div class="code-word">    setTimeout(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
</div></li><li><div class="code-word">      resolve(<span class="hljs-string">'店铺数据'</span>)
</div></li><li><div class="code-word">    },<span class="hljs-number">500</span>)
</div></li><li><div class="code-word">  })
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-comment">//3.获取分类列表</span>
</div></li><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getCategoryList</span>(<span class="hljs-params"></span>)</span>{
</div></li><li><div class="code-word">  <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve,reject</span>)=&gt;</span>{
</div></li><li><div class="code-word">    setTimeout(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
</div></li><li><div class="code-word">      resolve(<span class="hljs-string">'分类数据'</span>)
</div></li><li><div class="code-word">    },<span class="hljs-number">700</span>)
</div></li><li><div class="code-word">  })
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">initLoad</span>(<span class="hljs-params"></span>)</span>{ 
</div></li><li><div class="code-word">  <span class="hljs-built_in">Promise</span>.all([getBannerList(),getStoreList(),getCategoryList()])
</div></li><li><div class="code-word">  .then(<span class="hljs-function"><span class="hljs-params">res</span>=&gt;</span>{
</div></li><li><div class="code-word">    <span class="hljs-built_in">console</span>.log(res) 
</div></li><li><div class="code-word">  }).catch(<span class="hljs-function"><span class="hljs-params">err</span>=&gt;</span>{
</div></li><li><div class="code-word">    <span class="hljs-built_in">console</span>.log(err)
</div></li><li><div class="code-word">  })
</div></li><li><div class="code-word">} 
</div></li><li><div class="code-word">initLoad()
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="853">
          从上面代码中可以看出，在一个页面中需要加载获取轮播列表、获取店铺列表、获取分类列表这三个操作，页面需要同时发出请求进行页面渲染，这样用
          Promise.all 来实现，看起来更清晰、一目了然。
        </p>
        <p data-nodeid="854">下面我们再来看另一种方法。</p>
        <h4 data-nodeid="855">allSettled 方法</h4>
        <p data-nodeid="856">
          Promise.allSettled 的语法及参数跟 Promise.all 类似，其参数接受一个
          Promise 的数组，返回一个新的
          Promise。唯一的不同在于，执行完之后不会失败，也就是说当
          Promise.allSettled 全部处理完成后，我们可以拿到每个 Promise
          的状态，而不管其是否处理成功。
        </p>
        <p data-nodeid="857">我们来看一下用 allSettled 实现的一段代码。</p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-keyword">const</span> resolved = <span class="hljs-built_in">Promise</span>.resolve(<span class="hljs-number">2</span>);
</div></li><li><div class="code-word"><span class="hljs-keyword">const</span> rejected = <span class="hljs-built_in">Promise</span>.reject(<span class="hljs-number">-1</span>);
</div></li><li><div class="code-word"><span class="hljs-keyword">const</span> allSettledPromise = <span class="hljs-built_in">Promise</span>.allSettled([resolved, rejected]);
</div></li><li><div class="code-word">allSettledPromise.then(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">results</span>) </span>{
</div></li><li><div class="code-word">  <span class="hljs-built_in">console</span>.log(results);
</div></li><li><div class="code-word">});
</div></li><li><div class="code-word"><span class="hljs-comment">// 返回结果：</span>
</div></li><li><div class="code-word"><span class="hljs-comment">// [</span>
</div></li><li><div class="code-word"><span class="hljs-comment">//    { status: 'fulfilled', value: 2 },</span>
</div></li><li><div class="code-word"><span class="hljs-comment">//    { status: 'rejected', reason: -1 }</span>
</div></li><li><div class="code-word"><span class="hljs-comment">// ]</span>
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="859">
          从上面代码中可以看到，Promise.allSettled
          最后返回的是一个数组，记录传进来的参数中每个 Promise
          的返回值，这就是和 all 方法不太一样的地方。你也可以根据 all
          方法提供的业务场景的代码进行改造，其实也能知道多个请求发出去之后，Promise
          最后返回的是每个参数的最终状态。
        </p>
        <p data-nodeid="860">接下来看一下 any 这个方法。</p>
        <h4 data-nodeid="861">any 方法</h4>
        <p data-nodeid="862">
          <strong data-nodeid="950">语法：</strong> Promise.any（iterable）
        </p>
        <p data-nodeid="863">
          <strong data-nodeid="955">参数：</strong> iterable 可迭代的对象，例如
          Array。
        </p>
        <p data-nodeid="864">
          <strong data-nodeid="960">描述：</strong> any 方法返回一个
          Promise，只要参数 Promise 实例有一个变成 fulfilled 状态，最后 any
          返回的实例就会变成 fulfilled 状态；如果所有参数 Promise 实例都变成
          rejected 状态，包装实例就会变成 rejected 状态。
        </p>
        <p data-nodeid="865">
          还是对上面 allSettled
          这段代码进行改造，我们来看下改造完的代码和执行结果。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-keyword">const</span> resolved = <span class="hljs-built_in">Promise</span>.resolve(<span class="hljs-number">2</span>);
</div></li><li><div class="code-word"><span class="hljs-keyword">const</span> rejected = <span class="hljs-built_in">Promise</span>.reject(<span class="hljs-number">-1</span>);
</div></li><li><div class="code-word"><span class="hljs-keyword">const</span> anyPromise = <span class="hljs-built_in">Promise</span>.any([resolved, rejected]);
</div></li><li><div class="code-word">anyPromise.then(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">results</span>) </span>{
</div></li><li><div class="code-word">  <span class="hljs-built_in">console</span>.log(results);
</div></li><li><div class="code-word">});
</div></li><li><div class="code-word"><span class="hljs-comment">// 返回结果：</span>
</div></li><li><div class="code-word"><span class="hljs-comment">// 2</span>
</div></li></ol></code></pre>
        </div>

        <p data-nodeid="867">
          从改造后的代码中可以看出，只要其中一个 Promise 变成 fulfilled
          状态，那么 any 最后就返回这个 Promise。由于上面 resolved 这个 Promise
          已经是 resolve 的了，故最后返回结果为 2。
        </p>
        <p data-nodeid="868">我们最后来看一下 race 方法。</p>
        <h4 data-nodeid="869">race 方法</h4>
        <p data-nodeid="870">
          <strong data-nodeid="969">语法：</strong> Promise.race（iterable）
        </p>
        <p data-nodeid="871">
          <strong data-nodeid="974">参数：</strong> iterable 可迭代的对象，例如
          Array。
        </p>
        <p data-nodeid="872">
          <strong data-nodeid="979">描述：</strong> race 方法返回一个
          Promise，只要参数的 Promise 之中有一个实例率先改变状态，则 race
          方法的返回状态就跟着改变。那个率先改变的 Promise
          实例的返回值，就传递给 race 方法的回调函数。
        </p>
        <p data-nodeid="873">
          我们来看一下这个业务场景，对于图片的加载，特别适合用 race
          方法来解决，将图片请求和超时判断放到一起，用 race
          来实现图片的超时判断。请看代码片段。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-comment">//请求某个图片资源</span>
</div></li><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">requestImg</span>(<span class="hljs-params"></span>)</span>{
</div></li><li><div class="code-word">  <span class="hljs-keyword">var</span> p = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">resolve, reject</span>)</span>{
</div></li><li><div class="code-word">    <span class="hljs-keyword">var</span> img = <span class="hljs-keyword">new</span> Image();
</div></li><li><div class="code-word">    img.onload = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{ resolve(img); }
</div></li><li><div class="code-word">    img.src = <span class="hljs-string">'http://www.baidu.com/img/flexible/logo/pc/result.png'</span>;
</div></li><li><div class="code-word">  });
</div></li><li><div class="code-word">  <span class="hljs-keyword">return</span> p;
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-comment">//延时函数，用于给请求计时</span>
</div></li><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">timeout</span>(<span class="hljs-params"></span>)</span>{
</div></li><li><div class="code-word">  <span class="hljs-keyword">var</span> p = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">resolve, reject</span>)</span>{
</div></li><li><div class="code-word">    setTimeout(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{ reject(<span class="hljs-string">'图片请求超时'</span>); }, <span class="hljs-number">5000</span>);
</div></li><li><div class="code-word">  });
</div></li><li><div class="code-word">  <span class="hljs-keyword">return</span> p;
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-built_in">Promise</span>.race([requestImg(), timeout()])
</div></li><li><div class="code-word">.then(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">results</span>)</span>{
</div></li><li><div class="code-word">  <span class="hljs-built_in">console</span>.log(results);
</div></li><li><div class="code-word">})
</div></li><li><div class="code-word">.catch(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">reason</span>)</span>{
</div></li><li><div class="code-word">  <span class="hljs-built_in">console</span>.log(reason);
</div></li><li><div class="code-word">});
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="875">
          从上面的代码中可以看出，采用 Promise
          的方式来判断图片是否加载成功，也是针对 Promise.race
          方法的一个比较好的业务场景。
        </p>
        <p data-nodeid="876">
          综上，这四种方法的参数传递形式基本是一致的，但是最后每个方法实现的功能还是略微有些差异的，这一点你需要留意。
        </p>
        <h3 data-nodeid="877">总结</h3>
        <p data-nodeid="878">
          好了，这一讲内容就介绍到这了。这两讲，我将 Promise
          的异步编程方式带你学习了一遍，希望你能对此形成更深刻的认知。关于如何自己实现一个符合规范的
          Promise，在后面的进阶课程中我会带你一步步去实现，这两讲也是为后面的实践打下基础，因此希望你能好好掌握。
        </p>
        <p data-nodeid="879">
          我最后整理了一下 Promise 的几个方法，你可以根据下面的表格再次复习。
        </p>
        <p data-nodeid="880">
          <img
            src="https://s0.lgstatic.com/i/image6/M01/05/09/Cgp9HWAvhLCAXDoCAAETMiO3QTA853.png"
            alt="Drawing 2.png"
            data-nodeid="988"
          />
        </p>
        <p data-nodeid="881">
          在后续的课程中，我还会继续对 JS
          异步编程的知识点进行更详细的剖析，你要及时发现自身的不足，有针对性地学习薄弱的知识。
        </p>
        <p data-nodeid="882" class="">
          下一讲，我们来聊聊 Generator 和
          async/await，这些语法糖也是你需要掌握的内容。我们到时见。
        </p>
      </div>
    </div>
  </div>
</template>
