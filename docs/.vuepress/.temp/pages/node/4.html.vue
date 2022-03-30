<template><h1 id="_04-3-大主流系统框架-由浅入深分析-express、koa-和-egg-js" tabindex="-1"><a class="header-anchor" href="#_04-3-大主流系统框架-由浅入深分析-express、koa-和-egg-js" aria-hidden="true">#</a> 04 | 3 大主流系统框架：由浅入深分析 Express、Koa 和 Egg.js</h1>
<p>上一讲我们没有应用任何框架实现了一个简单后台服务，以及一个简单版本的 MSVC 框架。本讲将介绍一些目前主流框架的设计思想，同时介绍其核心代码部分的实现，为后续使用框架优化我们上一讲实现的 MSVC 框架做一定的准备。</p>
<h2 id="主流框架介绍" tabindex="-1"><a class="header-anchor" href="#主流框架介绍" aria-hidden="true">#</a> 主流框架介绍</h2>
<p>目前比较流行的 Node.js 框架有 Express、KOA 和 Egg.js，其次是另外一个正在兴起的与 TypeScript 相关的框架——Nest.js，接下来我们分析三个主流框架之间的关系。</p>
<p>在介绍框架之前，我们先了解一个非常重要的概念——洋葱模型，这是一个在 Node.js 中比较重要的面试考点，掌握这个概念，当前各种框架的原理学习都会驾轻就熟。无论是哪个 Node.js 框架，都是基于中间件来实现的，而中间件（可以理解为一个类或者函数模块）的执行方式就需要依据洋葱模型来介绍。Express 和 KOA 之间的区别也在于洋葱模型的执行方式上。</p>
<h3 id="洋葱模型" tabindex="-1"><a class="header-anchor" href="#洋葱模型" aria-hidden="true">#</a> 洋葱模型</h3>
<p>洋葱我们都知道，一层包裹着一层，层层递进，但是现在不是看其立体的结构，而是需要将洋葱切开来，从切开的平面来看，如图 1 所示。</p>
<p><img src="https://cdn.jsdelivr.net/gh/zhang13pro/blogImg/img/20220329174835.png" alt="洋葱切面图">
图 1 洋葱切面图</p>
<p>可以看到要从洋葱中心点穿过去，就必须先一层层向内穿入洋葱表皮进入中心点，然后再从中心点一层层向外穿出表皮，这里有个特点：进入时穿入了多少层表皮，出去时就必须穿出多少层表皮。先穿入表皮，后穿出表皮，符合我们所说的栈列表，<strong>先进后出</strong>的原则。</p>
<p>然后再回到 Node.js 框架，洋葱的表皮我们可以思考为<strong>中间件</strong>：</p>
<p>从外向内的过程是一个关键词 next()；</p>
<p>而从内向外则是每个中间件执行完毕后，进入下一层中间件，一直到最后一层。</p>
<h3 id="中间件执行" tabindex="-1"><a class="header-anchor" href="#中间件执行" aria-hidden="true">#</a> 中间件执行</h3>
<p>为了理解上面的洋葱模型以及其执行过程，我们用 Express 作为框架例子，来实现一个后台服务。在应用 Express 前，需要做一些准备工作，你按照如下步骤初始化项目即可。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> myapp
<span class="token builtin class-name">cd</span> myapp
<span class="token function">npm</span> init
<span class="token function">npm</span> <span class="token function">install</span> express --save
<span class="token function">touch</span> app.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>然后输入以下代码，其中的 app.use 部分的就是 3 个中间件，从上到下代表的是洋葱的从外向内的各个层：1 是最外层，2 是中间层，3 是最内层。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"express"</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> port <span class="token operator">=</span> <span class="token number">3000</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Example app listening on port: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"1"</span><span class="token punctuation">)</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"1 end"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"2"</span><span class="token punctuation">)</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"2 end"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"3"</span><span class="token punctuation">)</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"3 end"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"GoodBye World"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>启动项目 <code>node app.js</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token number">3</span> end
<span class="token number">2</span> end
<span class="token number">1</span> end
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>先执行第一个中间件，输出 1</p>
<p>遇到 next() 执行第二个中间件，输出 2</p>
<p>再遇到 next() 执行第三个中间件，输出 3</p>
<p>中间件都执行完毕后，往外一层层剥离，先输出 3 end；</p>
<p>再输出 2 end</p>
<p>最后输出 1 end。</p>
<p>以上就是中间件的执行过程，不过 Express 和 KOA 在中间件执行过程中还是存在一些差异的。</p>
<h3 id="express-koa" tabindex="-1"><a class="header-anchor" href="#express-koa" aria-hidden="true">#</a> Express &amp; KOA</h3>
<p>Express 框架出来比较久了，它在 Node.js 初期就是一个热度较高、成熟的 Web 框架，并且包括的应用场景非常齐全。同时基于 Express，也诞生了一些场景型的框架，常见的就如上面我们提到的 Nest.js 框架。</p>
<p>随着 Node.js 的不断迭代，出现了以 await/async 为核心的语法糖，Express 原班人马为了实现一个高可用、高性能、更健壮，并且符合当前 Node.js 版本的框架，开发出了 KOA 框架。</p>
<p>那么两者存在哪些方面的<strong>差异</strong>呢：</p>
<ul>
<li>
<p>Express 封装、内置了很多中间件，比如 connect 和 router ，而 KOA 则比较轻量，开发者可以根据自身需求定制框架；</p>
</li>
<li>
<p>Express 是基于 callback 来处理中间件的，而 KOA 则是基于 await/async；</p>
</li>
<li>
<p>在异步执行中间件时，Express 并非严格按照洋葱模型执行中间件，而 KOA 则是严格遵循的。</p>
</li>
</ul>
<p>为了更清晰地对比两者在中间件上的差异，我们对上面那段代码进行修改，其次用 KOA 来重新实现，看下两者的运行差异。</p>
<p>因为两者在中间件为异步函数的时候处理会有不同，因此我们保留原来三个中间件，同时在 2 和 3 之间插入一个新的异步中间件，代码如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**

 * 异步中间件

 */</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"async"</span><span class="token punctuation">)</span>

  <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">wait 1000 ms end</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>

        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token number">1000</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">)</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"async end"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>然后将其他中间件修改为 await next() 方式，如下中间件 1 的方式：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**

 * 中间件 1

 */</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"1"</span><span class="token punctuation">)</span>

  <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"1 end"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>你会发现输出如下数据：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
Example app listening on port <span class="token number">3000</span><span class="token operator">!</span>

first

second

<span class="token keyword">async</span>

third

third end

second end

first end

wait <span class="token number">1000</span> ms end

<span class="token keyword">async</span> end

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>可以看出，从内向外的是正常的，一层层往里进行调用，从外向内时则发生了一些变化，最主要的原因是异步中间件并没有按照顺序输出执行结果。</p>
<p>接下来我们看看 KOA 的效果。在应用 KOA 之前，我们需要参照如下命令进行初始化。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> -p koa/myapp-async

<span class="token builtin class-name">cd</span> koa/myapp-async

<span class="token function">npm</span> init

<span class="token function">npm</span> i koa --save

<span class="token function">touch</span> app.js

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>然后我们打开 app.js 添加如下代码，这部分我们只看中间件 1 和异步中间件即可，其他在 GitHub 源码中，你可以自行查看。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> Koa <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"koa"</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Koa</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**

 * 中间件 1

 */</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"first"</span><span class="token punctuation">)</span>

  <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"first end"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**

 * 异步中间件

 */</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"async"</span><span class="token punctuation">)</span>

  <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">wait 1000 ms end</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>

        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token number">1000</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">)</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"async end"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token string">"Hello World"</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Example app listening on port 3000!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><p>和 express 代码基本没有什么差异，只是将中间件中的 res、req 参数替换为 ctx</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Example app listening on port <span class="token number">3000</span><span class="token operator">!</span>

first

second

async

third

third end

<span class="token function">wait</span> <span class="token number">1000</span> ms end

async end

second end

first end

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>你会发现，<strong>KOA 严格按照了洋葱模型</strong>的执行，从上到下，也就是从洋葱的内部向外部，输出 first、second、async、third；接下来从内向外输出 third end、async end、second end、first end。</p>
<p>因为两者基于的 Node.js 版本不同，所以只是出现的时间点不同而已，并没有孰优孰劣之分。Express 功能较全，发展时间比较长，也经受了不同程度的历练，因此在一些项目上是一个不错的选择。当然你也可以选择 KOA，虽然刚诞生不久，但它是未来的一个趋势。</p>
<h3 id="koa-egg-js" tabindex="-1"><a class="header-anchor" href="#koa-egg-js" aria-hidden="true">#</a> KOA &amp; Egg.js</h3>
<p>上面我们说了 KOA 是一个可定制的框架，开发者可以根据自己的需要，定制各种机制，比如多进程处理、路由处理、上下文 context 的处理、异常处理等，非常灵活。而 Egg.js 就是在 KOA 基础上，做了各种比较成熟的中间件和模块，可以说是在 KOA 框架基础上的最佳实践，用以满足开发者开箱即用的特性。</p>
<p>我们说到 KOA 是未来的一个趋势，然后 Egg.js 是目前 KOA 的最佳实践，因此在一些企业级应用后台服务时，可以使用 Egg.js 框架，如果你需要做一些高性能、高定制化的框架也可以在 KOA 基础上扩展出新的框架。本专栏为了实践教学，我们会在 KOA 基础上将上一讲的框架进行优化和扩展。</p>
<h2 id="原理实现" tabindex="-1"><a class="header-anchor" href="#原理实现" aria-hidden="true">#</a> 原理实现</h2>
<p>以上简单介绍了几个框架的知识点，接下来我们再来看下其核心实现原理，这里只介绍底层的两个框架 Express 和 KOA，如果你对 Egg.js 有兴趣的话，可以参照我们的方法进行学习。</p>
<h3 id="express" tabindex="-1"><a class="header-anchor" href="#express" aria-hidden="true">#</a> Express</h3>
<p>Express 涉及 app 函数、中间件、Router 和视图四个核心部分，这里我们只介绍 app 函数、中间件和 Router 原理，因为视图在后台服务中不是特别关键的部分。</p>
<p>它涉及的源码不多，其中：</p>
<p>middleware 是部分中间件模块；</p>
<p>router 是 Router 核心代码；</p>
<p>application.js 就是我们所说的 app 函数核心处理部分；</p>
<p>express.js 是我们 express() 函数的执行模块，实现比较简单，主要是创建 application 对象，将 application 对象返回；</p>
<p>request.js 是对 HTTP 请求处理部分；</p>
<p>response.js 是对 HTTP 响应处理部分；</p>
<p>utils.js 是一些工具函数；</p>
<p>view.js 是视图处理部分。</p>
<p><strong>express.js</strong></p>
<p>在 express 整个代码架构中核心是创建 application 对象，那么我们先来看看这部分的核心实现部分。在 Express 中的例子都是下面这样的：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"express"</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> port <span class="token operator">=</span> <span class="token number">3000</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Example app listening on port </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>其中我们所说的 app ，就是 express() 函数执行的返回，该 express.js 模块中核心代码是一个叫作 createApplication 函数，代码如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createApplication</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> <span class="token function-variable function">app</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">mixin</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token function">mixin</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> proto<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token comment">// expose the prototype that will get set on requests</span>
  app<span class="token punctuation">.</span>request <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">app</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> app <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// expose the prototype that will get set on responses</span>
  app<span class="token punctuation">.</span>response <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">app</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> app <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  app<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> app
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>代码中最主要的部分是创建了一个 app 函数，并将 application 中的函数继承给 app 。因此 app 包含了 application 中所有的属性和方法，而其中的 app.init() 也是调用了 application.js 中的 app.init 函数。在 application.js 核心代码逻辑中，我们最常用到 app.use 、app.get 以及 app.post 方法，这三个原理都是一样的，我们主要看下 app.use 的代码实现。</p>
<p><strong>application.js</strong></p>
<p>app.use，用于<strong>中间件以及路由的处理</strong>，是我们常用的一个核心函数。</p>
<p>在只传入一个函数参数时，将会匹配所有的请求路径。</p>
<p>当传递的是具体的路径时，只有匹配到具体路径才会执行该函数。</p>
<p>如下代码所示：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"express"</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> port <span class="token operator">=</span> <span class="token number">3000</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Example app listening on port </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"first"</span><span class="token punctuation">)</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"first end"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">"/a"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"a end"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/a"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"Hello World! a"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>当我们只请求如下端口时，只执行第 6 ~ 10 行的 app.use。</p>
<p><code>http://127.0.0.1:3000/</code></p>
<p>而当请求如下端口时，两个中间件都会执行。</p>
<p><code>http://127.0.0.1:3000/a</code></p>
<p>再来看下 Express 代码实现，如图 3 所示：</p>
<p><img src="https://cdn.jsdelivr.net/gh/zhang13pro/blogImg/img/20220329181944.png" alt="app.use">
图 3 Express app.use 代码实现</p>
<p>当没有传入 path 时，会默认设置 path 为 / ，而 / 则是匹配任何路径，最终都是调用 router.use 将 fn 中间件函数传入到 router 中。</p>
<p>接下来我们看下 router.use 的代码实现。</p>
<p><strong>router/index.js</strong></p>
<p>这个文件在当前目录 router 下的 index.js 中，有一个方法叫作 proto.use，即 application.js 中调用的 router.use 。</p>
<p><img src="https://cdn.jsdelivr.net/gh/zhang13pro/blogImg/img/20220329182052.png" alt="push">
图 4 中间件 push 实现</p>
<p>图 4 中的代码经过一系列处理，最终将中间件函数通过 Layer 封装后放到栈列表中。就完成了中间件的处理，最后我们再来看下用户请求时，是如何在栈列表执行的。</p>
<p>所有请求进来后都会调用 application.js 中的 app.handle 方法，该方法最终调用的是 router/index.js 中的 proto.handle 方法，所以我们主要看下 router.handle 的实现。在这个函数中有一个 next 方法非常关键，用于判断执行下一层中间件的逻辑，它的原理是从栈列表中取出一个 layer 对象，判断是否满足当前匹配，如果满足则执行该中间件函数，如图 5 所示。</p>
<p><img src="https://cdn.jsdelivr.net/gh/zhang13pro/blogImg/img/20220329182154.png" alt="中间件执行逻辑">
图 5 中间件执行逻辑</p>
<p>接下来我们再看看 layer.handle_request 的代码逻辑：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token class-name">Layer</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">handle_request</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">handle</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> fn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handle

  <span class="token keyword">if</span> <span class="token punctuation">(</span>fn<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token function">fn</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">next</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>代码 try 部分，会执行 fn 函数，而 fn 中的 next 为下一个中间件，因此中间件栈执行代码，过程如下所示：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span>
  <span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"b"</span><span class="token punctuation">)</span>
    <span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"c"</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"d"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"e"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"f"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>如果没有异步逻辑，那肯定是 a → b → c → d → e → f 的执行流程，如果这时我们在第二层增加一些异步处理函数时，情况如下代码所示：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span>
  <span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"b"</span><span class="token punctuation">)</span>
    <span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"c"</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"d"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">async end</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"e"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"f"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>再执行这部分代码时，你会发现整个输出流程就不是原来的模式了，这也印证了 Express 的中间件执行方式并不是完全的洋葱模型。</p>
<p>Express 源码当然不止这些，这里只是介绍了部分核心代码，其他部分建议你按照这种方式自我学习。</p>
<h3 id="koa" tabindex="-1"><a class="header-anchor" href="#koa" aria-hidden="true">#</a> KOA</h3>
<p>和 Express 相似，我们只看 app 函数、中间件和 Router 三个部分的核心代码实现。在 app.use 中的逻辑非常相似，唯一的区别是，在 KOA 中使用的是 await/async 语法，因此需要判断中间件是否为异步方法，如果是则使用 koa-convert 将其转化为 Promise 方法，代码如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> fn <span class="token operator">!==</span> <span class="token string">"function"</span><span class="token punctuation">)</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">"middleware must be a function!"</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isGeneratorFunction</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">deprecate</span><span class="token punctuation">(</span>
      <span class="token string">"Support for generators will be removed in v3. "</span> <span class="token operator">+</span>
        <span class="token string">"See the documentation for examples of how to convert old middleware "</span> <span class="token operator">+</span>
        <span class="token string">"https://github.com/koajs/koa/blob/master/docs/migration.md"</span>
    <span class="token punctuation">)</span>
    fn <span class="token operator">=</span> <span class="token function">convert</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">"use %s"</span><span class="token punctuation">,</span> fn<span class="token punctuation">.</span>_name <span class="token operator">||</span> fn<span class="token punctuation">.</span>name <span class="token operator">||</span> <span class="token string">"-"</span><span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>middleware<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>最终都是将中间件函数放入中间件的一个数组中。接下来我们再看下 KOA 是如何执行中间件的代码逻辑的，其核心是 koa-compose 模块中的这部分代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// last called middleware #</span>
  <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token keyword">return</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">function</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> index<span class="token punctuation">)</span>
      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"next() called multiple times"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    index <span class="token operator">=</span> i
    <span class="token keyword">let</span> fn <span class="token operator">=</span> middleware<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> middleware<span class="token punctuation">.</span>length<span class="token punctuation">)</span> fn <span class="token operator">=</span> next
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>fn<span class="token punctuation">)</span> <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> <span class="token function">dispatch</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>在代码中首先获取第一层级的中间件，也就是数组 middleware 的第一个元素，这里不同点在于使用了 Promise.resolve 来执行中间件，根据上面的代码我们可以假设 KOA 代码逻辑是这样的：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span>
  <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"b"</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"c"</span><span class="token punctuation">)</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">async end</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"d"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"e"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"f"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>可以看到所有 next() 后面的代码逻辑都包裹在 next() 中间件的 then 逻辑中，这样就可以确保上一个异步函数执行完成后才会执行到 then 的逻辑，也就保证了洋葱模型的先进后出原则，这点是 KOA 和 Express 的本质区别。这里要注意，如果需要确保中间件的执行顺序，必须使用 await next()。</p>
<p>Express 和 KOA 的源代码还有很多，这里就不一一分析了，其他的部分你可以自行学习，在学习中，可以进一步提升自己的编码能力，同时改变部分编码陋习。在此过程中有任何问题，都欢迎留言与我交流。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>本讲先介绍了洋葱模型，其次根据洋葱模型详细分析了 Express 和 KOA 框架的区别和联系，最后介绍了两个核心框架的 app 函数、中间件和 Router 三个部分的核心代码实现。学完本讲，你需要掌握洋葱模型，特别是在面试环节中要着重介绍；能够讲解清楚在 Express 与 KOA 中的洋葱模型差异；以及掌握 Express 和 KOA 中的核心代码实现部分原理；其次了解 Egg.js 框架。</p>
<p>下一讲，我们将会介绍 Node.js 多进程方案，在介绍该方案时，我们还会应用 KOA 框架来优化我们第 03 讲的基础框架，使其成为一个比较通用的框架。</p>
</template>
