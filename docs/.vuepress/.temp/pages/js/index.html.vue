<template><h1 id="开篇词-打好-js-基石-走稳前端进阶之路" tabindex="-1"><a class="header-anchor" href="#开篇词-打好-js-基石-走稳前端进阶之路" aria-hidden="true">#</a> 开篇词 | 打好 JS 基石，走稳前端进阶之路</h1>
<p>你好，我是若离，从事 Web 前端开发工作将近 9 年，前美团前端技术专家。</p>
<p>我在美团工作期间，负责和参与过“到家”“团购”及“电影”等业务的前端研发，以及团队搭建。其间，我还致力于前端性能优化、质量保证、效率提升、跨端融合等方向的研究，并且都有一定的技术落地，得到了超出预期的结果。</p>
<p>我也持续为公司进行前端岗位的社招、校招面试近 6 年多，面试候选人近千人，深谙大厂面试套路及定级之道，因此也总结了很多前端面试经验、技术提升心得，希望通过这个专栏分享给你。</p>
<h2 id="为什么要学习这门课" tabindex="-1"><a class="header-anchor" href="#为什么要学习这门课" aria-hidden="true">#</a> 为什么要学习这门课</h2>
<p>随着前端技术的日新月异，前端应用的复杂度日益提升。与此同时，市场上对于前端人才的要求也愈加严格。</p>
<p>通过招聘网站可以看出，大厂普遍要求前端人才精通 JavaScript，其他各种高薪岗位也不乏“理解并掌握 JavaScript”等字眼。</p>
<p><img src="https://cdn.jsdelivr.net/gh/zhang13pro/blogImg/img/20220327170637.png" alt="招聘要求"></p>
<p>作为前端人，我们必须认识到这样一个现状：想要在这一领域走得长远，就必须具备扎实的 JavaScript 编码能力，它既是前端人的自检清单，更是进阶的必修课。</p>
<p>而经过多年的面试招聘，我发现了一个“通病”：很大一部分候选人的技术水平，只停留在前端框架（如 Vue、React）API 的使用层面，对于框架的源码逻辑一知半解，甚至对源码的思路也只是依靠死记硬背，很少愿意花时间去深入研究原生 JavaScript 的底层逻辑，因此造成了一系列的问题：</p>
<ol>
<li>对框架的源码理解起来比较困难，导致在编码过程中只会写业务逻辑，却又不注重代码性能；</li>
<li>只会简单地调用 JS 框架的 API，而对于复杂的、非常依赖原生 JavaScript 实现的组件，实现的过程很吃力，甚至难以完成开发需求；</li>
<li>工作中往往需要通过阅读别人的代码去了解当前项目状况，而对于公司内其他人自研的前端组件的实现方式和原理，理解起来又较为困难，更别说在这个基础上进行维护了。</li>
</ol>
<p>也正是这些问题，往往让初级开发者在业务场景里面无法呈现优秀的工作表现，做出更多的创新，更何况开发出更高效的前端工具。</p>
<p>很显然，正是自身的技术差异，导致了这些人职业发展停滞不前——职级晋升、面试大厂无果。</p>
<p>尤其是想进大厂的前端同学，如果能力仅仅停留在使用层面，是很难通过大厂层层考核的，因为面试官将会通过深挖技术背后的实现原理，来判断你对技术的掌握程度，以及是否对技术有钻研精神。如果你只是以熟练使用 Vue 或者 React 框架作为靠山，而 JavaScript 技术基础能力不过关，那么将在行业中举步维艰。</p>
<p>至此，以我多年的从业经验和招聘经验来看，未来互联网行业对候选人的能力要求只会越来越高，总结下来就是：扎实掌握并加强原生 JavaScript 的核心原理及编码功底、深入理解前端框架源代码，对于提升自己的前端技术能力、提高职业生涯天花板是非常有必要的。</p>
<h2 id="我要带你怎么学" tabindex="-1"><a class="header-anchor" href="#我要带你怎么学" aria-hidden="true">#</a> 我要带你怎么学</h2>
<p>那么，怎样才能有效地提升原生 JS 能力，从而摆脱上面所说的那些困境呢？</p>
<p>这个专栏就是为帮你夯实前端 JavaScript 核心基础知识而写就。我将围绕基础原理、数组、异步编程、V8 引擎几个核心知识点展开，通过 4 个模块、22 讲内容，带你深挖 JavaScript 底层原理。</p>
<p>模块一，我会深入讲解 JavaScript 数据类型、继承、闭包等核心基础知识，分析它们的底层原理。这是构建前端工具的基础，只有掌握好这部分内容，你才能为以后的编码能力打下基础。</p>
<p>并且这其中的一些知识点，比如深浅拷贝和自己手工实现 JSON.Stringify 这样的题目，是大厂面试官经常会问到的内容，所以这部分我将以进阶练习的形式帮你轻松掌握。</p>
<p>模块二，我会介绍 JavaScript 的数组相关知识。要知道，在日常开发中，数组是经常会用到的数据类型，使用和出现频率非常之高。所以我会从数组原理、数组排序两大方向带你了解它，比如梳理数组 API、实现数组扁平化，以及数组 sort 方法。</p>
<p>掌握这部分知识，你可以在每次写前端业务逻辑、处理一些数组数据的时候，不用再去翻看相关的数组 API 文档，从而提升你的开发效率。</p>
<p>此外，由于 Javascript 语言的执行环境是“单线程”，如果有多个任务，就必须排队，前面一个任务完成，再执行后面的任务，因此在浏览器端比较耗时的操作都应该进行异步操作来减少等待时间。由此可见，异步编程在浏览器端是非常重要的，如果不采用异步编程模式，大量的同步代码会造成浏览器的性能急剧下降。</p>
<p>因此，模块三会从 JavaScript 最基础的异步编程方式讲起，比如 Promise、Async/await、Co 等。当掌握了 JavaScript 异步编程源码精髓，你就可以摆脱前端代码的“回调地狱”，更优雅地实现并解决业务场景的复杂问题、提升页面性能。</p>
<p>模块四是浏览器核心 V8 引擎相关的内容，它是执行 JavaScript 代码的程序或解释器，可以使得 JS 的执行性能大幅提升，这也是目前大多数浏览器普遍使用的引擎。</p>
<p>这一模块我会通过讲解浏览器垃圾回收机制、浏览器核心引擎的工作逻辑等内容，帮助你理解 JavaScript 代码是如何被 V8 引擎编译和执行的。这对于写出高性能的 JavaScript 代码帮助甚大。</p>
<p>在最后的彩蛋部分，我也会带你剖析一些互联网大厂的面试题目，让你真正了解互联网大厂的职级体系和面试定级标准，梳理面试思路和前端知识的学习方法，实现自身的突破和提升。</p>
<p>除此之外，每一个模块的最后我都会专门拿出 1~2 讲来带你实操，手把手帮助你实践，比如实现一个 JSON.Stringify 方法、手写 JS 数组多个 API 的底层实现、实现一个 EventEmitter 等。这种更贴合实践的学习方式，会比你天天抱着编程的书啃，学习效率要高很多。</p>
<ul>
<li>基石</li>
<li>深入数组</li>
<li>异步编程</li>
<li>JS 引擎</li>
<li>彩蛋</li>
</ul>
<h2 id="讲师寄语" tabindex="-1"><a class="header-anchor" href="#讲师寄语" aria-hidden="true">#</a> 讲师寄语</h2>
<p>前端技术的快速发展和充满希望的前景，也吸引了更多人加入前端工程师的行列，各种前端新技术、新框架的出现，也在考验前端工程师的能力。那么如何提升技术能力、建立自己的“核心竞争力”，是每一位优秀的前端工程师应该思考的问题。</p>
<p>希望你不仅跟着我的思路去理解内容本身，还能在学习过程中在 IDE 里面亲自动手实现一遍，从而深刻体会程序实现逻辑的一些细节，进而加深对每一部分知识点的理解，做到融会贯通。</p>
<p>你也不妨给自己养成一个好习惯，每看完一篇文章就对知识点进行总结，形成自己的学习思维脑图，等到学完全部课程以后再来回顾，以便加深知识理解。</p>
<p>希望这个专栏，能够带你了解原生 JS 的底层原理，更好地掌握 JS 框架源码的代码实现逻辑，在写业务代码时可以做到游刃有余，提升工作效率，加强自身技术储备，拿高薪，进大厂！</p>
</template>
