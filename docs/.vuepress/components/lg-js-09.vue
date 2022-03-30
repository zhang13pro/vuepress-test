<template>
  <div data-v-1605a430="">
    <h1 data-v-1605a430="" class="main-title">
      09 | 数组原理（下）：实现数组扁平化的 6 种方式
    </h1>
    <div data-v-1605a430="" class="main-tips">
      2021/02/03
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
                    aria-valuetext="00:00/07:43"
                    class="vue-slider-dot vue-slider-dot-hover"
                    role="slider"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="463"
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
                          >00:00/07:43</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-6ecd2302="" class="detail-wrap">
              <div data-v-6ecd2302="" class="detail-one">20.13M</div>
              <div data-v-6ecd2302="" class="detail-two">00:00/07:43</div>
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
        <p data-nodeid="1912" class="">
          我在前两讲给你介绍了类数组的相关知识，那么这一讲会结合之前的内容，来聊聊数组相关的应用——如何实现数组扁平化。数组扁平化在一些多维数组的应用场景中会出现，我将围绕
          6 种方式来带你实现它。
        </p>
        <p data-nodeid="1913">
          此外，关于数组除了扁平化也有其他问题，比如数组去重等，也是面试中经常会问到的。本讲的目的是将扁平化作为一个切入点，这种思路对于你解决其他类似的问题也是一个很好的启发。
        </p>
        <p data-nodeid="1914">按照惯例，在课程开始前请你先思考几个问题：</p>
        <ol data-nodeid="1915">
          <li data-nodeid="1916">
            <p data-nodeid="1917">怎样用最普通的方法解决数组扁平化问题？</p>
          </li>
          <li data-nodeid="1918">
            <p data-nodeid="1919">ES6 里面是否有一些高级的方法能够直接实现？</p>
          </li>
        </ol>
        <p data-nodeid="1920">下面开始说说什么是数组扁平化，如何实现它呢？</p>
        <h3 data-nodeid="1921">扁平化的实现</h3>
        <p data-nodeid="1922">
          数组的扁平化其实就是将一个嵌套多层的数组
          array（嵌套可以是任何层数）转换为只有一层的数组。举个简单的例子，假设有个名为
          flatten 的函数可以做到数组扁平化，效果如下面这段代码所示。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-keyword">var</span> arr = [<span class="hljs-number">1</span>, [<span class="hljs-number">2</span>, [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>，<span class="hljs-number">5</span>]]];
</div></li><li><div class="code-word"><span class="hljs-built_in">console</span>.log(flatten(arr)); <span class="hljs-comment">// [1, 2, 3, 4，5]</span>
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="1924">
          其实就是把多维的数组“拍平”，输出最后的一维数组。那么你知道了效果是什么样的了，下面就尝试着写一个
          flatten 函数吧。实现方式有下述几种。
        </p>
        <h4 data-nodeid="1925">方法一：普通的递归实</h4>
        <p data-nodeid="1926">
          普通的递归思路很容易理解，就是通过循环递归的方式，一项一项地去遍历，如果每一项还是一个数组，那么就继续往下遍历，利用递归程序的方法，来实现数组的每一项的连接。我们来看下这个方法是如何实现的，如下所示。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-comment">// 方法1</span>
</div></li><li><div class="code-word"><span class="hljs-keyword">var</span> a = [<span class="hljs-number">1</span>, [<span class="hljs-number">2</span>, [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>]]];
</div></li><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">flatten</span>(<span class="hljs-params">arr</span>) </span>{
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> result = [];
</div></li><li><div class="code-word">
</div></li><li><div class="code-word">  <span class="hljs-keyword">for</span>(<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; arr.length; i++) {
</div></li><li><div class="code-word">    <span class="hljs-keyword">if</span>(<span class="hljs-built_in">Array</span>.isArray(arr[i])) {
</div></li><li><div class="code-word">      result = result.concat(flatten(arr[i]));
</div></li><li><div class="code-word">    } <span class="hljs-keyword">else</span> {
</div></li><li><div class="code-word">      result.push(arr[i]);
</div></li><li><div class="code-word">    }
</div></li><li><div class="code-word">  }
</div></li><li><div class="code-word">  <span class="hljs-keyword">return</span> result;
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word">flatten(a);  <span class="hljs-comment">// &nbsp;[1, 2, 3, 4，5]</span>
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="1928">
          从上面这段代码可以看出，最后返回的结果是扁平化的结果，这段代码核心就是循环遍历过程中的递归操作，就是在遍历过程中发现数组元素还是数组的时候进行递归操作，把数组的结果通过数组的
          concat 方法拼接到最后要返回的 result
          数组上，那么最后输出的结果就是扁平化后的数组。
        </p>
        <p data-nodeid="1929">下面我们来看看另一种实现方式。</p>
        <h4 data-nodeid="1930">方法二：利用 reduce 函数迭代</h4>
        <p data-nodeid="1931">
          从上面普通的递归函数中可以看出，其实就是对数组的每一项进行处理，那么我们其实也可以用第
          7 讲中说的 reduce
          来实现数组的拼接，从而简化第一种方法的代码，改造后的代码如下所示。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-comment">// 方法2</span>
</div></li><li><div class="code-word"><span class="hljs-keyword">var</span> arr = [<span class="hljs-number">1</span>, [<span class="hljs-number">2</span>, [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>]]];
</div></li><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">flatten</span>(<span class="hljs-params">arr</span>) </span>{
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> arr.reduce(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">prev, next</span>)</span>{
</div></li><li><div class="code-word">        <span class="hljs-keyword">return</span> prev.concat(<span class="hljs-built_in">Array</span>.isArray(next) ? flatten(next) : next)
</div></li><li><div class="code-word">    }, [])
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-built_in">console</span>.log(flatten(arr));<span class="hljs-comment">// &nbsp;[1, 2, 3, 4，5]</span>
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="1933">
          这段代码在控制台执行之后，也可以得到想要的结果。这里你可以回忆一下之前说的
          reduce 的参数问题，我们可以看到 reduce
          的第一个参数用来返回最后累加的结果，思路和第一种递归方法是一样的，但是通过使用
          reduce 之后代码变得更简洁了，也同样解决了扁平化的问题。
        </p>
        <p data-nodeid="1934">下面我们来看看下一种实现方式。</p>
        <h4 data-nodeid="1935">方法三：扩展运算符实现</h4>
        <p data-nodeid="1936">
          这个方法的实现，采用了扩展运算符和 some
          的方法，两者共同使用，达到数组扁平化的目的，还是来看一下代码。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-comment">// 方法3</span>
</div></li><li><div class="code-word"><span class="hljs-keyword">var</span> arr = [<span class="hljs-number">1</span>, [<span class="hljs-number">2</span>, [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>]]];
</div></li><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">flatten</span>(<span class="hljs-params">arr</span>) </span>{
</div></li><li><div class="code-word">    <span class="hljs-keyword">while</span> (arr.some(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> <span class="hljs-built_in">Array</span>.isArray(item))) {
</div></li><li><div class="code-word">        arr = [].concat(...arr);
</div></li><li><div class="code-word">    }
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> arr;
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-built_in">console</span>.log(flatten(arr)); <span class="hljs-comment">// &nbsp;[1, 2, 3, 4，5]</span>
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="1938">
          从执行的结果中可以发现，我们先用数组的 some
          方法把数组中仍然是组数的项过滤出来，然后执行 concat 操作，利用 ES6
          的展开运算符，将其拼接到原数组中，最后返回原数组，达到了预期的效果。
        </p>
        <p data-nodeid="1939">
          前三种实现数组扁平化的方式其实是最基本的思路，都是通过最普通递归思路衍生的方法，尤其是前两种实现方法比较类似。值得注意的是
          reduce 方法，它可以在很多应用场景中实现，由于 reduce
          这个方法提供的几个参数比较灵活，能解决很多问题，所以是值得熟练使用并且精通的。
        </p>
        <p data-nodeid="1940">
          那么除此之外，是否还有其他实现方式呢？请你接着往下看。
        </p>
        <h4 data-nodeid="1941">方法四：split 和 toString 共同处理</h4>
        <p data-nodeid="1942">
          我们也可以通过 split 和 toString
          两个方法，来共同实现数组扁平化，由于数组会默认带一个 toString
          的方法，所以可以把数组直接转换成逗号分隔的字符串，然后再用 split
          方法把字符串重新转换为数组，如下面的代码所示。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-comment">// 方法4</span>
</div></li><li><div class="code-word"><span class="hljs-keyword">var</span> arr = [<span class="hljs-number">1</span>, [<span class="hljs-number">2</span>, [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>]]];
</div></li><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">flatten</span>(<span class="hljs-params">arr</span>) </span>{
</div></li><li><div class="code-word">    <span class="hljs-keyword">return</span> arr.toString().split(<span class="hljs-string">','</span>);
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-built_in">console</span>.log(flatten(arr)); <span class="hljs-comment">// &nbsp;[1, 2, 3, 4]</span>
</div></li></ol></code></pre>
        </div>

        <p data-nodeid="1944">
          通过这两个方法可以将多维数组直接转换成逗号连接的字符串，然后再重新分隔成数组，你可以在控制台执行一下查看结果。
        </p>
        <p data-nodeid="1945">
          下面我们看看 ES6 有什么方式可以直接实现数组的扁平化。
        </p>
        <h4 data-nodeid="1946">方法五：调用 ES6 中的 flat</h4>
        <p data-nodeid="1947">
          我们还可以直接调用 ES6 中的 flat
          方法，可以直接实现数组扁平化。先来看下 flat 方法的语法：
        </p>
        <blockquote data-nodeid="1948">
          <p data-nodeid="1949">arr.flat([depth])</p>
        </blockquote>
        <p data-nodeid="1950">
          其中 depth 是 flat 的参数，depth
          是可以传递数组的展开深度（默认不填、数值是
          1），即展开一层数组。那么如果多层的该怎么处理呢？参数也可以传进
          Infinity，代表不论多少层都要展开。那么我们来看下，用 flat
          方法怎么实现，请看下面的代码。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-comment">// 方法5</span>
</div></li><li><div class="code-word"><span class="hljs-keyword">var</span> arr = [<span class="hljs-number">1</span>, [<span class="hljs-number">2</span>, [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>]]];
</div></li><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">flatten</span>(<span class="hljs-params">arr</span>) </span>{
</div></li><li><div class="code-word">  <span class="hljs-keyword">return</span> arr.flat(<span class="hljs-literal">Infinity</span>);
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-built_in">console</span>.log(flatten(arr)); <span class="hljs-comment">// &nbsp;[1, 2, 3, 4，5]</span>
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="1952">
          可以看出，一个嵌套了两层的数组，通过将 flat 方法的参数设置为
          Infinity，达到了我们预期的效果。其实同样也可以设置成
          2，也能实现这样的效果。
        </p>
        <p data-nodeid="1953">
          因此，你在编程过程中，发现对数组的嵌套层数不确定的时候，最好直接使用
          Infinity，可以达到扁平化。下面我们再来看最后一种场景。
        </p>
        <h4 data-nodeid="1954">方法六：正则和 JSON 方法共同处理</h4>
        <p data-nodeid="1955">
          我们在第四种方法中已经尝试了用 toString 方法，其中仍然采用了将
          JSON.stringify
          的方法先转换为字符串，然后通过正则表达式过滤掉字符串中的数组的方括号，最后再利用
          JSON.parse 把它转换成数组。请看下面的代码。
        </p>
        <div class="course-code-area">
          <div class="copy-btn">
            <div class="copy-icon"></div>
            复制代码
          </div>
          <pre><code data-language="javascript"><ol><li><div class="code-word"><span class="hljs-comment">// 方法 6</span>
</div></li><li><div class="code-word"><span class="hljs-keyword">let</span> arr = [<span class="hljs-number">1</span>, [<span class="hljs-number">2</span>, [<span class="hljs-number">3</span>, [<span class="hljs-number">4</span>, <span class="hljs-number">5</span>]]], <span class="hljs-number">6</span>];
</div></li><li><div class="code-word"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">flatten</span>(<span class="hljs-params">arr</span>) </span>{
</div></li><li><div class="code-word">  <span class="hljs-keyword">let</span> str = <span class="hljs-built_in">JSON</span>.stringify(arr);
</div></li><li><div class="code-word">  str = str.replace(<span class="hljs-regexp">/(\[|\])/g</span>, <span class="hljs-string">''</span>);
</div></li><li><div class="code-word">  str = <span class="hljs-string">'['</span> + str + <span class="hljs-string">']'</span>;
</div></li><li><div class="code-word">  <span class="hljs-keyword">return</span> <span class="hljs-built_in">JSON</span>.parse(str); 
</div></li><li><div class="code-word">}
</div></li><li><div class="code-word"><span class="hljs-built_in">console</span>.log(flatten(arr)); <span class="hljs-comment">// &nbsp;[1, 2, 3, 4，5]</span>
</div></li></ol></code></pre>
        </div>
        <p data-nodeid="1957">
          可以看到，其中先把传入的数组转换成字符串，然后通过正则表达式的方式把括号过滤掉，这部分正则的表达式你不太理解的话，可以看看下面的图片。<br />
          <img
            src="https://s0.lgstatic.com/i/image/M00/94/9B/Ciqc1GAY_EWAE3pDAAERgfI0plY241.png"
            alt="Lark20210202-151541.png"
            data-nodeid="2010"
          />
        </p>
        <p data-nodeid="1958">
          通过这个在线网站
          <a href="https://regexper.com/" data-nodeid="2014"
            >https://regexper.com/</a
          >
          可以把正则分析成容易理解的可视化的逻辑脑图。其中我们可以看到，匹配规则是：全局匹配（g）左括号或者右括号，将它们替换成空格，最后返回处理后的结果。之后拿着正则处理好的结果重新在外层包裹括号，最后通过
          JSON.parse 转换成数组返回。
        </p>
        <p data-nodeid="1959">
          以上就是这六种实现数组扁平化的方式，你可以再思考下看看是否还有更多的实现方式，我们可以交流一下。
        </p>
        <h3 data-nodeid="1960">总结</h3>
        <p data-nodeid="1961">
          本讲的内容就介绍这么多了。我将日常开发中有可能遇到数组扁平化的几种方法分别讲了一遍，又在最后一个方法中给你推荐了一个比较容易理解的正则表达式的分析工具。希望这几种方法能为你提升
          JS 编码能力带来帮助和启发。
        </p>
        <p data-nodeid="1962">
          综上我们可以看到，数组扁平化这节课的知识点结合了数组 API、ES6，以及
          JSON
          方法的相关知识。你可以通过下面的表格再来看一下这六种方式的代码思路。
        </p>
        <p data-nodeid="1963">
          <img
            src="https://s0.lgstatic.com/i/image2/M01/0C/93/CgpVE2AY_DiAQNC5AAFrgibLZp4762.png"
            alt="Lark20210202-151546.png"
            data-nodeid="2022"
          />
        </p>
        <p data-nodeid="1964">
          表格列举了这几种方法实现的难易程度，以及编码思路的描述。希望你能对这几种方法融会贯通，如果在未来的面试中遇到这样的题目，愿你能够轻松应对，给面试官一个满意的答复。
        </p>
        <p data-nodeid="1965">
          在日常的前端开发工作中，你往往会在业务开发的时候遇到各种数组问题，所以你要思考最合适的解决方式。其实扁平化只是其中的一个引子，其他涉及数组的相关知识点还有很多。
        </p>
        <p data-nodeid="1966">
          我最后给你留一个和数组相关的作业：试着写出实现数组去重的方式，看看你能够写出几种呢？
        </p>
        <p data-nodeid="1967" class="">
          下一讲，我们来说说数组排序，这也是数据结构中必不可少的知识，我们到时见。
        </p>
      </div>
    </div>
  </div>
</template>
