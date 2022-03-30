<template>
  <div data-v-1605a430="">
    <h1 data-v-1605a430="" class="main-title">
      彩蛋 2 | 前端开发如何有针对性地学习算法？
    </h1>
    <div data-v-1605a430="" class="main-tips">
      2021/03/29
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
                    aria-valuetext="00:00/09:22"
                    class="vue-slider-dot vue-slider-dot-hover"
                    role="slider"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="562"
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
                          >00:00/09:22</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ecd2302="" class="detail-wrap">
              <div data-v-6ecd2302="" class="detail-one">24.44M</div>
              <div data-v-6ecd2302="" class="detail-two">00:00/09:22</div>
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
        <p data-nodeid="9318">
          为了应一些朋友的诉求，今天这节彩蛋我主要针对算法进行讲解，带你重新学习数据结构，以便更好地应对各种算法题目。
        </p>
        <p data-nodeid="9319">
          你也知道算法题目是各种大厂必考的题目，但是由于工作比较忙而没有时间刷题；即便想好好复习一下算法，却又因为知识点太多而无从下手；还有一些非计算机专业出身的前端同学，对数据结构算法并没有系统学习过，面对那么多知识点也比较盲从，不知道哪些需要掌握、哪些不需要掌握。那么希望这一讲彩蛋，能帮助你形成对数据结构算法学习的思路，提升你的学习效率。
        </p>
        <p data-nodeid="9320">话不多说，先来看看数据结构的存储方式。</p>
        <h3 data-nodeid="9321">数据结构的存储方式</h3>
        <p data-nodeid="9322">
          <strong data-nodeid="9402"
            >数据结构的存储方式只有两种：数组（顺序存储）和链表（链式存储）</strong
          >。根据这两种分类我们来分别看看几个数据结构的 JavaScript
          代码描述方式。
        </p>
        <h4 data-nodeid="9323">顺序存储</h4>
        <p data-nodeid="9324">
          先来看看 JS 实现一个栈的代码，它是比较典型的顺序存储方式。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Stack</span> </span>{
</div></li><li><div class="code-word">  <span class="hljs-keyword">constructor</span>() {
</div></li><li><div class="code-word">    <span class="hljs-keyword">this</span>.items = []
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  
</div></li><li><div class="code-word">  push(element) {
</div></li><li><div class="code-word">    <span class="hljs-keyword">this</span>.items.push(element)
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  pop() {
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.items.pop()
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  <span class="hljs-keyword">get</span> <span class="hljs-title">size</span>() {
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.items.length
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  <span class="hljs-keyword">get</span> <span class="hljs-title">isEmpty</span>() {
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> !<span class="hljs-keyword">this</span>.items.length
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  clear() {
</div></li><li><div class="code-word">    <span class="hljs-keyword">this</span>.items = []
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  print() {
</div></li><li><div class="code-word">    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.items.toString())
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-comment">// 初始化一个栈</span>
</div></li><li><div class="code-word"><span class="hljs-keyword">var</span> s = <span class="hljs-keyword">new</span> Stack()
</div></li><li><div class="code-word">s.push(<span class="hljs-number">1</span>)
</div></li><li><div class="code-word">s.push(<span class="hljs-number">2</span>)
</div></li><li><div class="code-word">s.push(<span class="hljs-number">3</span>)
</div></li><li><div class="code-word">s.push(<span class="hljs-number">4</span>)
</div></li><li><div class="code-word"><span class="hljs-built_in">console</span>.log(s)
</div></li><li><div class="code-word"><span class="hljs-built_in">console</span>.log(s.isEmpty)
</div></li><li><div class="code-word"><span class="hljs-built_in">console</span>.log(s.size)
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="9326">
          上面的代码比较简单，通过 ES6 的语法 class
          来描述非常简洁、容易让人理解。那么再看类似的队列，下面这个数据结构应该怎么用
          JavaScript 来描述呢？
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Queue</span> </span>{
</div></li><li><div class="code-word">  <span class="hljs-keyword">constructor</span>() {
</div></li><li><div class="code-word">    <span class="hljs-keyword">this</span>.items = []
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  enqueue(element) {
</div></li><li><div class="code-word">    <span class="hljs-keyword">this</span>.items.push(element)
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  shift() {
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.items.shift()
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  <span class="hljs-keyword">get</span> <span class="hljs-title">size</span>() {
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.items.length
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  <span class="hljs-keyword">get</span> <span class="hljs-title">isEmpty</span>() {
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> !<span class="hljs-keyword">this</span>.items.length
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  clear() {
</div></li><li><div class="code-word">    <span class="hljs-keyword">this</span>.items = []
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  print() {
</div></li><li><div class="code-word">    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.items.toString())
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-comment">// 初始化一个队列</span>
</div></li><li><div class="code-word"><span class="hljs-keyword">var</span> s = <span class="hljs-keyword">new</span> Queue()
</div></li><li><div class="code-word">s.enqueue(<span class="hljs-number">1</span>)
</div></li><li><div class="code-word">s.enqueue(<span class="hljs-number">2</span>)
</div></li><li><div class="code-word">s.enqueue(<span class="hljs-number">3</span>)
</div></li><li><div class="code-word">s.enqueue(<span class="hljs-number">4</span>)
</div></li><li><div class="code-word"><span class="hljs-built_in">console</span>.log(s)
</div></li><li><div class="code-word"><span class="hljs-built_in">console</span>.log(s.isEmpty)
</div></li><li><div class="code-word"><span class="hljs-built_in">console</span>.log(s.size)
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="9328">
          从上面的两种数据结构的实现方式可以看出，队列和栈都是顺序存储结构，是用数组来模拟实现的，但是两者唯一的区别就在于一个是先进后出，另外一个是先进先出。
        </p>
        <p data-nodeid="9329">
          这两个数据结构模拟起来都比较简单，我们再看看较为复杂的链式存储、二叉树和链表等，都是怎么用
          JavaScript 来描述的。
        </p>
        <h4 data-nodeid="9330">链式存储</h4>
        <p data-nodeid="9331">
          下面代码展示的是最基本的链表的 JS 实现逻辑，也是链式存储最典型的例子。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Node</span> </span>{
</div></li><li><div class="code-word">  <span class="hljs-keyword">constructor</span>(element) {
</div></li><li><div class="code-word">    <span class="hljs-keyword">this</span>.element = element
</div></li><li><div class="code-word">    <span class="hljs-keyword">this</span>.next = <span class="hljs-literal">null</span>
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">LinkedList</span> </span>{
</div></li><li><div class="code-word">  <span class="hljs-keyword">constructor</span>() {
</div></li><li><div class="code-word">    <span class="hljs-keyword">this</span>.head = <span class="hljs-literal">null</span>
</div></li><li><div class="code-word">    <span class="hljs-keyword">this</span>.length = <span class="hljs-number">0</span>
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  append(element) {
</div></li><li><div class="code-word">    <span class="hljs-keyword">const</span> node = <span class="hljs-keyword">new</span> Node(element)
</div></li><li><div class="code-word">    <span class="hljs-keyword">let</span> current = <span class="hljs-literal">null</span>
</div></li><li><div class="code-word">    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.head == <span class="hljs-literal">null</span>) {
</div></li><li><div class="code-word">      <span class="hljs-keyword">this</span>.head = node
</div></li><li><div class="code-word">    } <span class="hljs-keyword">else</span> {
</div></li><li><div class="code-word">      current = <span class="hljs-keyword">this</span>.head
</div></li><li><div class="code-word">      <span class="hljs-keyword">while</span> (current.next) {
</div></li><li><div class="code-word">        current = current.next
</div></li><li><div class="code-word">      }
</div></li><li><div class="code-word">      current.next = node
</div></li><li><div class="code-word">    }
</div></li><li><div class="code-word">    <span class="hljs-keyword">this</span>.length++
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  insert(position, element) {
</div></li><li><div class="code-word">    <span class="hljs-keyword">if</span> (position &lt; <span class="hljs-number">0</span> &amp;&amp; position &gt; <span class="hljs-keyword">this</span>.length) {
</div></li><li><div class="code-word">       <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span> 
</div></li><li><div class="code-word">    } <span class="hljs-keyword">else</span> {
</div></li><li><div class="code-word">      <span class="hljs-keyword">const</span> node = <span class="hljs-keyword">new</span> Node(element)
</div></li><li><div class="code-word">      <span class="hljs-keyword">let</span> current = <span class="hljs-keyword">this</span>.head
</div></li><li><div class="code-word">      <span class="hljs-keyword">let</span> previous = <span class="hljs-literal">null</span>
</div></li><li><div class="code-word">      <span class="hljs-keyword">let</span> index = <span class="hljs-number">0</span>
</div></li><li><div class="code-word">      <span class="hljs-keyword">if</span> (position === <span class="hljs-number">0</span>) {
</div></li><li><div class="code-word">        <span class="hljs-keyword">this</span>.head = node
</div></li><li><div class="code-word">        node.next = current
</div></li><li><div class="code-word">      } <span class="hljs-keyword">else</span> {
</div></li><li><div class="code-word">        <span class="hljs-keyword">while</span> (index++ &lt; position) {
</div></li><li><div class="code-word">          previous = current
</div></li><li><div class="code-word">          current = current.next
</div></li><li><div class="code-word">        }
</div></li><li><div class="code-word">        node.next = current
</div></li><li><div class="code-word">        previous.next = node
</div></li><li><div class="code-word">      }
</div></li><li><div class="code-word">      <span class="hljs-keyword">this</span>.length++
</div></li><li><div class="code-word">      <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>
</div></li><li><div class="code-word">    }
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  
</div></li><li><div class="code-word">  removeAt(position) {
</div></li><li><div class="code-word">    <span class="hljs-keyword">if</span> (position &lt; <span class="hljs-number">0</span> &amp;&amp; position &gt; <span class="hljs-keyword">this</span>.length) {
</div></li><li><div class="code-word">      <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
</div></li><li><div class="code-word">    } <span class="hljs-keyword">else</span> {
</div></li><li><div class="code-word">      <span class="hljs-keyword">let</span> current = <span class="hljs-keyword">this</span>.head
</div></li><li><div class="code-word">      <span class="hljs-keyword">let</span> previous = <span class="hljs-literal">null</span>
</div></li><li><div class="code-word">      <span class="hljs-keyword">let</span> index = <span class="hljs-number">0</span>
</div></li><li><div class="code-word">      <span class="hljs-keyword">if</span> (position === <span class="hljs-number">0</span>) {
</div></li><li><div class="code-word">        <span class="hljs-keyword">this</span>.head = current.next
</div></li><li><div class="code-word">      } <span class="hljs-keyword">else</span> {
</div></li><li><div class="code-word">        <span class="hljs-keyword">while</span> (index++ &lt; position) {
</div></li><li><div class="code-word">          previous = current
</div></li><li><div class="code-word">          current = current.next
</div></li><li><div class="code-word">        }
</div></li><li><div class="code-word">        previous.next = current.next
</div></li><li><div class="code-word">      }
</div></li><li><div class="code-word">      <span class="hljs-keyword">this</span>.length--
</div></li><li><div class="code-word">      <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>
</div></li><li><div class="code-word">    }
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  findIndex(element) {
</div></li><li><div class="code-word">    <span class="hljs-keyword">let</span> current = <span class="hljs-keyword">this</span>.head
</div></li><li><div class="code-word">    <span class="hljs-keyword">let</span> index = <span class="hljs-number">-1</span>
</div></li><li><div class="code-word">    <span class="hljs-keyword">while</span> (current) {
</div></li><li><div class="code-word">      <span class="hljs-keyword">if</span> (current.element === element) {
</div></li><li><div class="code-word">        <span class="hljs-keyword">return</span> index + <span class="hljs-number">1</span>
</div></li><li><div class="code-word">      }
</div></li><li><div class="code-word">      index++
</div></li><li><div class="code-word">      current = current.next
</div></li><li><div class="code-word">    }
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> <span class="hljs-number">-1</span>
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  remove(element) {
</div></li><li><div class="code-word">    <span class="hljs-keyword">const</span> index = <span class="hljs-keyword">this</span>.findIndex(element)
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.removeAt(index)
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  <span class="hljs-keyword">get</span> <span class="hljs-title">size</span>() {
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.length
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  <span class="hljs-keyword">get</span> <span class="hljs-title">isEmpty</span>() {
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> !<span class="hljs-keyword">this</span>.length
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  toString() {
</div></li><li><div class="code-word">    <span class="hljs-keyword">let</span> current = <span class="hljs-keyword">this</span>.head
</div></li><li><div class="code-word">    <span class="hljs-keyword">let</span> slink = <span class="hljs-string">''</span>
</div></li><li><div class="code-word">    <span class="hljs-keyword">while</span> (current) {
</div></li><li><div class="code-word">      slink += <span class="hljs-string">`<span class="hljs-subst">${current.element}</span>-`</span>
</div></li><li><div class="code-word">      current = current.next
</div></li><li><div class="code-word">    }
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> slink
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-comment">// 初始化一个链表</span>
</div></li><li><div class="code-word"><span class="hljs-keyword">var</span> s = <span class="hljs-keyword">new</span> LinkedList()
</div></li><li><div class="code-word">s.append(<span class="hljs-number">1</span>)
</div></li><li><div class="code-word">s.append(<span class="hljs-number">2</span>)
</div></li><li><div class="code-word">s.append(<span class="hljs-number">3</span>)
</div></li><li><div class="code-word">s.append(<span class="hljs-number">4</span>)
</div></li><li><div class="code-word"><span class="hljs-built_in">console</span>.log(s)
</div></li><li><div class="code-word"><span class="hljs-built_in">console</span>.log(s.isEmpty)
</div></li><li><div class="code-word"><span class="hljs-built_in">console</span>.log(s.size)
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="9333">
          这段代码同样用 ES6
          比较简明的语法实现了链表的数据结构，只要你基本了解数据结构链表的思路，那么对上面的代码理解起来不是很难。
        </p>
        <p data-nodeid="9334">
          下面我们再看稍微复杂一些的二叉树的 JS 代码描述。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Node</span> </span>{
</div></li><li><div class="code-word">  <span class="hljs-keyword">constructor</span>(element) {
</div></li><li><div class="code-word">    <span class="hljs-keyword">this</span>.element = element
</div></li><li><div class="code-word">    <span class="hljs-keyword">this</span>.left = <span class="hljs-literal">null</span>
</div></li><li><div class="code-word">    <span class="hljs-keyword">this</span>.right = <span class="hljs-literal">null</span>
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">BinarySearchTree</span> </span>{
</div></li><li><div class="code-word">  <span class="hljs-keyword">constructor</span>() {
</div></li><li><div class="code-word">    <span class="hljs-keyword">this</span>.root = <span class="hljs-literal">null</span>
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  insert(element) {
</div></li><li><div class="code-word">    <span class="hljs-keyword">const</span> temp = <span class="hljs-keyword">new</span> Node(element)
</div></li><li><div class="code-word">    <span class="hljs-keyword">var</span> insertNode = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">root, node</span>) </span>{
</div></li><li><div class="code-word">      <span class="hljs-keyword">if</span> (node.element &gt; root.element) {
</div></li><li><div class="code-word">        <span class="hljs-keyword">if</span> (root.right === <span class="hljs-literal">null</span>) {
</div></li><li><div class="code-word">          root.right = node
</div></li><li><div class="code-word">        } <span class="hljs-keyword">else</span> {
</div></li><li><div class="code-word">          insertNode(root.right, node)
</div></li><li><div class="code-word">        }
</div></li><li><div class="code-word">      } <span class="hljs-keyword">else</span> {
</div></li><li><div class="code-word">        <span class="hljs-keyword">if</span> (root.left === <span class="hljs-literal">null</span>) {
</div></li><li><div class="code-word">          root.left = node
</div></li><li><div class="code-word">        } <span class="hljs-keyword">else</span> {
</div></li><li><div class="code-word">          insertNode(root.left, node)
</div></li><li><div class="code-word">        }
</div></li><li><div class="code-word">      }
</div></li><li><div class="code-word">    }
</div></li><li><div class="code-word">    <span class="hljs-keyword">if</span> (!<span class="hljs-keyword">this</span>.root) {
</div></li><li><div class="code-word">      <span class="hljs-keyword">this</span>.root = temp
</div></li><li><div class="code-word">    } <span class="hljs-keyword">else</span> {
</div></li><li><div class="code-word">      insertNode(<span class="hljs-keyword">this</span>.root, temp)
</div></li><li><div class="code-word">    }
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  <span class="hljs-comment">// 中序遍历</span>
</div></li><li><div class="code-word">  inOrderTraverse(callback) {
</div></li><li><div class="code-word">    <span class="hljs-keyword">const</span> inOrderTraverseNode = <span class="hljs-function">(<span class="hljs-params">node, callback</span>) =&gt;</span> {
</div></li><li><div class="code-word">      <span class="hljs-keyword">if</span> (node !== <span class="hljs-literal">null</span>) {
</div></li><li><div class="code-word">        inOrderTraverseNode(node.left, callback)
</div></li><li><div class="code-word">        callback(node.element)
</div></li><li><div class="code-word">        inOrderTraverseNode(node.right, callback)
</div></li><li><div class="code-word">      }
</div></li><li><div class="code-word">    }
</div></li><li><div class="code-word">    inOrderTraverseNode(<span class="hljs-keyword">this</span>.root, callback)
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">&nbsp; <span class="hljs-comment">// 前序遍历</span>
</div></li><li><div class="code-word">  preOrderTraverse(callback) {
</div></li><li><div class="code-word">    <span class="hljs-keyword">const</span> preOrderTraverseNode = <span class="hljs-function">(<span class="hljs-params">node, callback</span>) =&gt;</span> {
</div></li><li><div class="code-word">      <span class="hljs-keyword">if</span> (node !== <span class="hljs-literal">null</span>) {
</div></li><li><div class="code-word">        callback(node.element)
</div></li><li><div class="code-word">        preOrderTraverseNode(node.left, callback)
</div></li><li><div class="code-word">        preOrderTraverseNode(node.right, callback)
</div></li><li><div class="code-word">      }
</div></li><li><div class="code-word">    }
</div></li><li><div class="code-word">    preOrderTraverseNode(<span class="hljs-keyword">this</span>.root, callback)
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">&nbsp; <span class="hljs-comment">// 后序遍历</span>
</div></li><li><div class="code-word">  postOrderTraverse(callback) {
</div></li><li><div class="code-word">    <span class="hljs-keyword">const</span> postOrderTraverseNode = <span class="hljs-function">(<span class="hljs-params">node, callback</span>) =&gt;</span> {
</div></li><li><div class="code-word">      <span class="hljs-keyword">if</span> (node !== <span class="hljs-literal">null</span>) {
</div></li><li><div class="code-word">        postOrderTraverseNode(node.left, callback)
</div></li><li><div class="code-word">        postOrderTraverseNode(node.right, callback)
</div></li><li><div class="code-word">        callback(node.element)
</div></li><li><div class="code-word">      }
</div></li><li><div class="code-word">    }
</div></li><li><div class="code-word">    postOrderTraverseNode(<span class="hljs-keyword">this</span>.root, callback)
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  min() {
</div></li><li><div class="code-word">    <span class="hljs-keyword">const</span> minNode = <span class="hljs-function"><span class="hljs-params">node</span> =&gt;</span> {
</div></li><li><div class="code-word">      <span class="hljs-keyword">return</span> node ? (node.left ? minNode(node.left) : node) : <span class="hljs-literal">null</span>
</div></li><li><div class="code-word">    }
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> minNode(<span class="hljs-keyword">this</span>.root)
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  max() {
</div></li><li><div class="code-word">    <span class="hljs-keyword">const</span> maxNode = <span class="hljs-function"><span class="hljs-params">node</span> =&gt;</span> {
</div></li><li><div class="code-word">      <span class="hljs-keyword">return</span> node ? (node.right ? maxNode(node.right) : node) : <span class="hljs-literal">null</span>
</div></li><li><div class="code-word">    }
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> maxNode(<span class="hljs-keyword">this</span>.root)
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  search(key) {
</div></li><li><div class="code-word">    <span class="hljs-keyword">const</span> searchNode = <span class="hljs-function">(<span class="hljs-params">node, key</span>) =&gt;</span> {
</div></li><li><div class="code-word">      <span class="hljs-keyword">if</span> (node === <span class="hljs-literal">null</span>) <span class="hljs-keyword">return</span>
</div></li><li><div class="code-word">      <span class="hljs-keyword">if</span> (node.element === key) {
</div></li><li><div class="code-word">        <span class="hljs-built_in">console</span>.log(node)
</div></li><li><div class="code-word">        <span class="hljs-keyword">return</span> node
</div></li><li><div class="code-word">      } <span class="hljs-keyword">else</span> {
</div></li><li><div class="code-word">        <span class="hljs-keyword">return</span> searchNode((key &lt; node.element) ? node.left : node.right, key)
</div></li><li><div class="code-word">      }
</div></li><li><div class="code-word">    }
</div></li><li><div class="code-word">    searchNode(<span class="hljs-keyword">this</span>.root, key)
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-comment">// 初始化一个BST</span>
</div></li><li><div class="code-word"><span class="hljs-keyword">const</span> tree = <span class="hljs-keyword">new</span> BinarySearchTree()
</div></li><li><div class="code-word">tree.insert(<span class="hljs-number">11</span>)
</div></li><li><div class="code-word">tree.insert(<span class="hljs-number">7</span>)
</div></li><li><div class="code-word">tree.insert(<span class="hljs-number">5</span>)
</div></li><li><div class="code-word">tree.insert(<span class="hljs-number">3</span>)
</div></li><li><div class="code-word">tree.insert(<span class="hljs-number">9</span>)
</div></li><li><div class="code-word">tree.insert(<span class="hljs-number">8</span>)
</div></li><li><div class="code-word">tree.insert(<span class="hljs-number">10</span>)
</div></li><li><div class="code-word">tree.insert(<span class="hljs-number">13</span>)
</div></li><li><div class="code-word">tree.insert(<span class="hljs-number">12</span>)
</div></li><li><div class="code-word">tree.insert(<span class="hljs-number">14</span>)
</div></li><li><div class="code-word">tree.insert(<span class="hljs-number">20</span>)
</div></li><li><div class="code-word">tree.insert(<span class="hljs-number">18</span>)
</div></li><li><div class="code-word">tree.insert(<span class="hljs-number">25</span>)
</div></li><li><div class="code-word"><span class="hljs-built_in">console</span>.log(tree)
</div></li><li><div class="code-word"><span class="hljs-comment">// 调用二叉树对应地获取最大最小，以及搜索的方法</span>
</div></li><li><div class="code-word"><span class="hljs-keyword">var</span> m = tree.min()
</div></li><li><div class="code-word"><span class="hljs-built_in">console</span>.log(m.element)
</div></li><li><div class="code-word"><span class="hljs-keyword">var</span> max = tree.max()
</div></li><li><div class="code-word"><span class="hljs-built_in">console</span>.log(max)
</div></li><li><div class="code-word"><span class="hljs-keyword">var</span> r = tree.search(<span class="hljs-number">12</span>)
</div></li><li><div class="code-word"><span class="hljs-built_in">console</span>.log(r)
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="9336">
          到这里是不是发现二叉树要比上面栈、队列以及链表要复杂一些了呢？仔细看二叉树的核心实现逻辑，不管是前、中、后序遍历，还是获取最值以及查找，本质上都是算法中一个比较重要的思想，那就是递归。递归调用自身的方法不断地往下遍历，这是二叉树相关题目比较重要的一个思路，你需要好好掌握，以便能轻松解决一系列二叉树的相关算法题目。
        </p>
        <p data-nodeid="9337">下面再和你说说关于算法该如何刷题。</p>
        <h3 data-nodeid="9338">算法刷题指南</h3>
        <p data-nodeid="9339">
          首先要明确的是数据结构是工具，<strong data-nodeid="9420"
            >算法是通过合适的工具解决特定问题的方法</strong
          >。也就是说，学习算法之前，最起码得了解那些常用的数据结构，知道它们的特性和缺陷。
        </p>
        <p data-nodeid="9340">
          那么该如何在 LeetCode
          刷题呢？我的建议是你在熟悉了基本数据结构，并且能很轻松用 JS
          实现常见的数据结构之后，就可以去刷题了。LeetCode
          刷题也有套路，建议你当数据结构基本都了解并能实现的基础上，可以先直接刷二叉树相关的题目，因为这块比较容易抽象出通用的思路（本讲的最后我会带你看二叉树这部分怎么突破）。
        </p>
        <p data-nodeid="9341">
          其实总结下来，算法刷题无非就是找到这几类题目的解题思路：
        </p>
        <ol data-nodeid="9342">
          <li data-nodeid="9343">
            <p data-nodeid="9344">If-else, switch（branch）</p>
          </li>
          <li data-nodeid="9345">
            <p data-nodeid="9346">for，while loop（Iteration）</p>
          </li>
          <li data-nodeid="9347">
            <p data-nodeid="9348">递归 Recursion（Divide, Backtrace）</p>
          </li>
          <li data-nodeid="9349">
            <p data-nodeid="9350">
              搜索 Search：深度优先搜索（Depth first
              search）、广度优先搜索（Breadth first search）、A* 等
            </p>
          </li>
          <li data-nodeid="9351">
            <p data-nodeid="9352">动态规划（Dynamic Programming）</p>
          </li>
          <li data-nodeid="9353">
            <p data-nodeid="9354">二分查找（Binary Search）</p>
          </li>
          <li data-nodeid="9355">
            <p data-nodeid="9356">贪心算法（Greedy）</p>
          </li>
          <li data-nodeid="9357">
            <p data-nodeid="9358">数学（Math）&amp; 位运算等</p>
          </li>
        </ol>
        <p data-nodeid="9359">
          上面提到的二叉树相关的实现思路以及相关的题目，其实就是第三类递归的思路，如果你把递归的思路掌握好，那对于二叉树相关的题目你将会得心应手。动态规划也类似，核心思路就是动态递推，从最小的开始计算，一步一步推导累加到第
          n 次之后的结果。
        </p>
        <p data-nodeid="9360">
          针对算法和数据结构那么多知识点，我为你总结了一个脑图，方便你分别击破。
        </p>
        <h3 data-nodeid="9361">算法数据结构脑图</h3>
        <p data-nodeid="10028" class="te-preview-highlight">
          <img
            src="https://s0.lgstatic.com/i/image6/M00/29/9F/CioPOWBhenGAJGelAAc3iYTqAIw539.png"
            alt="2021329-145721.png"
            data-nodeid="10031"
          />
        </p>

        <p data-nodeid="9363">
          里面的分支有很多，下面我们专门针对上面提到的二叉树来进行深入探讨，看看递归的思想是如何解决二叉树相关问题的。
        </p>
        <h3 data-nodeid="9364">带你攻克一个难点</h3>
        <p data-nodeid="9365">
          在看二叉树相关题目之前，你需要对上面的 JS
          实现二叉树的代码非常了解，尤其是前、中、后序遍历的过程，以及递归找二叉树中的最值的思路。有了这些基础之后，我们挑
          LeetCode
          的几个例子，看看怎么用递归的思路解决二叉树一系列的问题，类似的题目如下：
        </p>
        <ol data-nodeid="9366">
          <li data-nodeid="9367">
            <p data-nodeid="9368">94 题：二叉树的中序遍历</p>
          </li>
          <li data-nodeid="9369">
            <p data-nodeid="9370">102 题：二叉树的层序遍历</p>
          </li>
          <li data-nodeid="9371">
            <p data-nodeid="9372">103 题：二叉树的锯齿形层序遍历</p>
          </li>
          <li data-nodeid="9373">
            <p data-nodeid="9374">104 题：二叉树的最大深度</p>
          </li>
          <li data-nodeid="9375">
            <p data-nodeid="9376">144 题：二叉树的前序遍历</p>
          </li>
          <li data-nodeid="9377">
            <p data-nodeid="9378">199 题：二叉树的右视图</p>
          </li>
        </ol>
        <p data-nodeid="9379">
          还有其他类似的题目，这里就不举例了，我们先看这六道题如何击破。
        </p>
        <p data-nodeid="9380">
          那么把这六道题目抽象起来，形成的思路以及代码模板大致如下：
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="java"><ol><li><div class="code-word"><span class="hljs-comment">// root为传入的二叉树</span>
</div></li><li><div class="code-word"><span class="hljs-keyword">var</span> XXXTraversal = function(root) {
</div></li><li><div class="code-word">    <span class="hljs-comment">// 定义一个返回的遍历结果的组数</span>
</div></li><li><div class="code-word">    let res = []
</div></li><li><div class="code-word">    <span class="hljs-comment">// 定义一个内部需要不断递归的函数</span>
</div></li><li><div class="code-word">    <span class="hljs-function">function <span class="hljs-title">traverse</span><span class="hljs-params">(r)</span> </span>{
</div></li><li><div class="code-word">        <span class="hljs-keyword">if</span>(!r) <span class="hljs-keyword">return</span>;
</div></li><li><div class="code-word">        traverse(r.left);  <span class="hljs-comment">// 递归遍历左子树</span>
</div></li><li><div class="code-word">        res.push(r.val);    <span class="hljs-comment">// 将根节点push进待返回的数组</span>
</div></li><li><div class="code-word">        traverse(r.right);  <span class="hljs-comment">// 递归遍历右子树</span>
</div></li><li><div class="code-word">    }
</div></li><li><div class="code-word">    traverse(root);    <span class="hljs-comment">// 循环遍历</span>
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> res;      <span class="hljs-comment">// 最后返回</span>
</div></li><li><div class="code-word">};
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="9382">
          那么根据这个基本的模板，我们就可以衍生出上面几道题的答案了。只需要把
          8、9、10
          行代码的位置稍做调整，二叉树的前、中、后序遍历的题目就迎刃而解了。对于层序遍历，我们只需要根据上面稍加改造就能通过
          LeetCode 的编译，如下所示。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-keyword">var</span>&nbsp;levelOrder&nbsp;=&nbsp;<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">root</span>)&nbsp;</span>{
</div></li><li><div class="code-word">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">let</span>&nbsp;arr&nbsp;=[];
</div></li><li><div class="code-word">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-function"><span class="hljs-keyword">function</span>&nbsp;<span class="hljs-title">traverse</span>(<span class="hljs-params">root,&nbsp;depth</span>)&nbsp;</span>{
</div></li><li><div class="code-word">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">if</span>(root&nbsp;===&nbsp;<span class="hljs-literal">null</span>)&nbsp;<span class="hljs-keyword">return</span>&nbsp;[];
</div></li><li><div class="code-word">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">if</span>(arr[depth]&nbsp;===&nbsp;<span class="hljs-literal">undefined</span>)&nbsp;{ <span class="hljs-comment">// 改造外面定义的待返回的数组变成二维</span>
</div></li><li><div class="code-word">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[depth]&nbsp;=&nbsp;[];
</div></li><li><div class="code-word">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
</div></li><li><div class="code-word">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[depth].push(root.val);    <span class="hljs-comment">// 把根节点在最先push进去</span>
</div></li><li><div class="code-word">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;traverse(root.left,&nbsp;depth&nbsp;+&nbsp;<span class="hljs-number">1</span>);  <span class="hljs-comment">// 层数+1对应arr里的二维数组的序号 </span>
</div></li><li><div class="code-word">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;traverse(root.right,&nbsp;depth&nbsp;+&nbsp;<span class="hljs-number">1</span>); <span class="hljs-comment">// 同上</span>
</div></li><li><div class="code-word">&nbsp;&nbsp;&nbsp;&nbsp;}
</div></li><li><div class="code-word">&nbsp;&nbsp;&nbsp;&nbsp;traverse(root,&nbsp;<span class="hljs-number">0</span>);
</div></li><li><div class="code-word">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">return</span>&nbsp;arr;
</div></li><li><div class="code-word">};
</div></li><li><div class="code-word"><span class="hljs-comment">/*
</span></div></li><li><div class="code-word">  通过测试得到的返回结果是一个二维数组：[[3],[9,20],[15,7]] 
</div></li><li><div class="code-word">*/
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="9384">
          那么第 102 道题的答案已经出来了。再看下第 199
          题，如何在中序遍历递归的基础上实现二叉树的右视图？这道题其实就是通过递归的方式找到二叉树的右子树进行遍历输出，它的逻辑和层序遍历其实类似，只不过在递归的过程中进行拦截，确保层数和数组个数一致的时候，只存储右子树的节点就好。
        </p>
        <p data-nodeid="9385">
          看一下基于层序遍历改造之后的实现 199 题的代码逻辑。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-keyword">var</span> rightSideView = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">root</span>) </span>{
</div></li><li><div class="code-word">    <span class="hljs-keyword">var</span> arr = [];
</div></li><li><div class="code-word">    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">traverse</span>(<span class="hljs-params">root, depth</span>) </span>{
</div></li><li><div class="code-word">        <span class="hljs-keyword">if</span>(root === <span class="hljs-literal">null</span>) <span class="hljs-keyword">return</span>;
</div></li><li><div class="code-word">        <span class="hljs-keyword">if</span>(depth === arr.length) {  <span class="hljs-comment">// 这加了逻辑拦截，只能push一个右节点</span>
</div></li><li><div class="code-word">            arr.push(root.val);
</div></li><li><div class="code-word">        }
</div></li><li><div class="code-word">        depth++;    <span class="hljs-comment">// 和层序遍历每进入一层 depth 加一逻辑基本一致</span>
</div></li><li><div class="code-word">        traverse(root.right, depth);  <span class="hljs-comment">// 先进入右子树遍历，上面的if拦截</span>
</div></li><li><div class="code-word">        traverse(root.left, depth);  <span class="hljs-comment">// 遍历的时候左子树已经存不进arr数组了</span>
</div></li><li><div class="code-word">    }
</div></li><li><div class="code-word">    traverse(root, <span class="hljs-number">0</span>);
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> arr;
</div></li><li><div class="code-word">};
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="9387">
          通过上面几道二叉树的遍历的题目，就可以总结出这一系列题目的解题思路了。其核心都是用递归的思路来解决二叉树的遍历问题，只不过通过调整遍历的顺序以及存储数据的方式，把最后遍历的节点数字存储到对应的返回数组中，最后都能通过代码变化得到想要的效果。
        </p>
        <p data-nodeid="9388">
          那么类似的题目也就能迎刃而解了，二叉树是应用递归思路最多的例子，那么除了这部分，例如动态规划如何来刷题呢？思路也类似，找到一两道动态规划比较典型的题目，总结和抽象出通用的解题思路，之后就可以更容易地去解决类似的题目了。
        </p>
        <h3 data-nodeid="9389">总结</h3>
        <p data-nodeid="9390">
          这一讲我们讨论了前端开发如何学习数据结构和刷题的方法，根据脑图复习了数据结构和算法。你要知道，算法可是通往大厂的必备技能，面试中一定会出现相应的题目。因此如果你不能有效地刷题、找到解决算法和数据结构的通用方法，是很难应对
          LeetCode
          中那么多算法编程题目的。因为随便出一个变形的算法题目你可能就不会了，你非常有必要从每道题目的细节中提炼出解决某一类题目的通用方法，这样你才能灵活从容地应对面试。
        </p>
        <p data-nodeid="9391">
          希望我的分享可以为你算法的提升带来帮助，也希望你能在各种面试中脱颖而出，成为一名优秀的前端人。
        </p>
      </div>
    </div>
  </div>
</template>
