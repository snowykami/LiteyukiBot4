import{_ as n,o as s,c as a,d as e}from"./app-EhCe7g9m.js";const t={},o=e(`<h3 id="class-lifespan" tabindex="-1"><a class="header-anchor" href="#class-lifespan"><span><strong>class</strong> <code>Lifespan</code></span></a></h3><h3 id="method-init-self-none" tabindex="-1"><a class="header-anchor" href="#method-init-self-none"><span><em>method</em> <code>__init__(self) -&gt; None</code></span></a></h3><p><strong>说明</strong>: 轻雪生命周期管理，启动、停止、重启</p><details><summary><b>源代码</b></summary><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
        轻雪生命周期管理，启动、停止、重启
        &quot;&quot;&quot;</span>
    self<span class="token punctuation">.</span>life_flag<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    self<span class="token punctuation">.</span>_before_start_funcs<span class="token punctuation">:</span> <span class="token builtin">list</span><span class="token punctuation">[</span>LIFESPAN_FUNC<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    self<span class="token punctuation">.</span>_after_start_funcs<span class="token punctuation">:</span> <span class="token builtin">list</span><span class="token punctuation">[</span>LIFESPAN_FUNC<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    self<span class="token punctuation">.</span>_before_process_shutdown_funcs<span class="token punctuation">:</span> <span class="token builtin">list</span><span class="token punctuation">[</span>LIFESPAN_FUNC<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    self<span class="token punctuation">.</span>_after_shutdown_funcs<span class="token punctuation">:</span> <span class="token builtin">list</span><span class="token punctuation">[</span>LIFESPAN_FUNC<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    self<span class="token punctuation">.</span>_before_process_restart_funcs<span class="token punctuation">:</span> <span class="token builtin">list</span><span class="token punctuation">[</span>LIFESPAN_FUNC<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    self<span class="token punctuation">.</span>_after_restart_funcs<span class="token punctuation">:</span> <span class="token builtin">list</span><span class="token punctuation">[</span>LIFESPAN_FUNC<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="staticmethod" tabindex="-1"><a class="header-anchor" href="#staticmethod"><span><code>@staticmethod</code></span></a></h3><h3 id="async-method-run-funcs-funcs-list-async-lifespan-func-process-lifespan-func-none" tabindex="-1"><a class="header-anchor" href="#async-method-run-funcs-funcs-list-async-lifespan-func-process-lifespan-func-none"><span><em>async method</em> <code>run_funcs(funcs: list[ASYNC_LIFESPAN_FUNC | PROCESS_LIFESPAN_FUNC]) -&gt; None</code></span></a></h3><p><strong>说明</strong>: 并发运行异步函数</p><p><strong>参数</strong>:</p><blockquote><ul><li>funcs:</li></ul></blockquote><details><summary><b>源代码</b></summary><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@staticmethod</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">run_funcs</span><span class="token punctuation">(</span>funcs<span class="token punctuation">:</span> <span class="token builtin">list</span><span class="token punctuation">[</span>ASYNC_LIFESPAN_FUNC <span class="token operator">|</span> PROCESS_LIFESPAN_FUNC<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
        并发运行异步函数
        Args:
            funcs:
        Returns:
        &quot;&quot;&quot;</span>
    loop <span class="token operator">=</span> asyncio<span class="token punctuation">.</span>get_running_loop<span class="token punctuation">(</span><span class="token punctuation">)</span>
    tasks <span class="token operator">=</span> <span class="token punctuation">[</span>func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span> <span class="token keyword">if</span> is_coroutine_callable<span class="token punctuation">(</span>func<span class="token punctuation">)</span> <span class="token keyword">else</span> async_wrapper<span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span> <span class="token keyword">for</span> func <span class="token keyword">in</span> funcs<span class="token punctuation">]</span>
    <span class="token keyword">await</span> asyncio<span class="token punctuation">.</span>gather<span class="token punctuation">(</span><span class="token operator">*</span>tasks<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="method-on-before-start-self-func-lifespan-func-lifespan-func" tabindex="-1"><a class="header-anchor" href="#method-on-before-start-self-func-lifespan-func-lifespan-func"><span><em>method</em> <code>on_before_start(self, func: LIFESPAN_FUNC) -&gt; LIFESPAN_FUNC</code></span></a></h3><p><strong>说明</strong>: 注册启动时的函数</p><p><strong>返回</strong>: LIFESPAN_FUNC:</p><p><strong>参数</strong>:</p><blockquote><ul><li>func:</li></ul></blockquote><details><summary><b>源代码</b></summary><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">on_before_start</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> func<span class="token punctuation">:</span> LIFESPAN_FUNC<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> LIFESPAN_FUNC<span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
        注册启动时的函数
        Args:
            func:
        Returns:
            LIFESPAN_FUNC:
        &quot;&quot;&quot;</span>
    self<span class="token punctuation">.</span>_before_start_funcs<span class="token punctuation">.</span>append<span class="token punctuation">(</span>func<span class="token punctuation">)</span>
    <span class="token keyword">return</span> func
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="method-on-after-start-self-func-lifespan-func-lifespan-func" tabindex="-1"><a class="header-anchor" href="#method-on-after-start-self-func-lifespan-func-lifespan-func"><span><em>method</em> <code>on_after_start(self, func: LIFESPAN_FUNC) -&gt; LIFESPAN_FUNC</code></span></a></h3><p><strong>说明</strong>: 注册启动时的函数</p><p><strong>返回</strong>: LIFESPAN_FUNC:</p><p><strong>参数</strong>:</p><blockquote><ul><li>func:</li></ul></blockquote><details><summary><b>源代码</b></summary><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">on_after_start</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> func<span class="token punctuation">:</span> LIFESPAN_FUNC<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> LIFESPAN_FUNC<span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
        注册启动时的函数
        Args:
            func:
        Returns:
            LIFESPAN_FUNC:
        &quot;&quot;&quot;</span>
    self<span class="token punctuation">.</span>_after_start_funcs<span class="token punctuation">.</span>append<span class="token punctuation">(</span>func<span class="token punctuation">)</span>
    <span class="token keyword">return</span> func
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="method-on-before-process-shutdown-self-func-lifespan-func-lifespan-func" tabindex="-1"><a class="header-anchor" href="#method-on-before-process-shutdown-self-func-lifespan-func-lifespan-func"><span><em>method</em> <code>on_before_process_shutdown(self, func: LIFESPAN_FUNC) -&gt; LIFESPAN_FUNC</code></span></a></h3><p><strong>说明</strong>: 注册停止前的函数</p><p><strong>返回</strong>: LIFESPAN_FUNC:</p><p><strong>参数</strong>:</p><blockquote><ul><li>func:</li></ul></blockquote><details><summary><b>源代码</b></summary><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">on_before_process_shutdown</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> func<span class="token punctuation">:</span> LIFESPAN_FUNC<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> LIFESPAN_FUNC<span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
        注册停止前的函数
        Args:
            func:
        Returns:
            LIFESPAN_FUNC:
        &quot;&quot;&quot;</span>
    self<span class="token punctuation">.</span>_before_process_shutdown_funcs<span class="token punctuation">.</span>append<span class="token punctuation">(</span>func<span class="token punctuation">)</span>
    <span class="token keyword">return</span> func
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="method-on-after-shutdown-self-func-lifespan-func-lifespan-func" tabindex="-1"><a class="header-anchor" href="#method-on-after-shutdown-self-func-lifespan-func-lifespan-func"><span><em>method</em> <code>on_after_shutdown(self, func: LIFESPAN_FUNC) -&gt; LIFESPAN_FUNC</code></span></a></h3><p><strong>说明</strong>: 注册停止后的函数</p><p><strong>返回</strong>: LIFESPAN_FUNC:</p><p><strong>参数</strong>:</p><blockquote><ul><li>func:</li></ul></blockquote><details><summary><b>源代码</b></summary><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">on_after_shutdown</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> func<span class="token punctuation">:</span> LIFESPAN_FUNC<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> LIFESPAN_FUNC<span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
        注册停止后的函数
        Args:
            func:

        Returns:
            LIFESPAN_FUNC:

        &quot;&quot;&quot;</span>
    self<span class="token punctuation">.</span>_after_shutdown_funcs<span class="token punctuation">.</span>append<span class="token punctuation">(</span>func<span class="token punctuation">)</span>
    <span class="token keyword">return</span> func
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="method-on-before-process-restart-self-func-lifespan-func-lifespan-func" tabindex="-1"><a class="header-anchor" href="#method-on-before-process-restart-self-func-lifespan-func-lifespan-func"><span><em>method</em> <code>on_before_process_restart(self, func: LIFESPAN_FUNC) -&gt; LIFESPAN_FUNC</code></span></a></h3><p><strong>说明</strong>: 注册重启时的函数</p><p><strong>返回</strong>: LIFESPAN_FUNC:</p><p><strong>参数</strong>:</p><blockquote><ul><li>func:</li></ul></blockquote><details><summary><b>源代码</b></summary><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">on_before_process_restart</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> func<span class="token punctuation">:</span> LIFESPAN_FUNC<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> LIFESPAN_FUNC<span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
        注册重启时的函数
        Args:
            func:
        Returns:
            LIFESPAN_FUNC:
        &quot;&quot;&quot;</span>
    self<span class="token punctuation">.</span>_before_process_restart_funcs<span class="token punctuation">.</span>append<span class="token punctuation">(</span>func<span class="token punctuation">)</span>
    <span class="token keyword">return</span> func
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="method-on-after-restart-self-func-lifespan-func-lifespan-func" tabindex="-1"><a class="header-anchor" href="#method-on-after-restart-self-func-lifespan-func-lifespan-func"><span><em>method</em> <code>on_after_restart(self, func: LIFESPAN_FUNC) -&gt; LIFESPAN_FUNC</code></span></a></h3><p><strong>说明</strong>: 注册重启后的函数</p><p><strong>返回</strong>: LIFESPAN_FUNC:</p><p><strong>参数</strong>:</p><blockquote><ul><li>func:</li></ul></blockquote><details><summary><b>源代码</b></summary><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">on_after_restart</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> func<span class="token punctuation">:</span> LIFESPAN_FUNC<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> LIFESPAN_FUNC<span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
        注册重启后的函数
        Args:
            func:
        Returns:
            LIFESPAN_FUNC:
        &quot;&quot;&quot;</span>
    self<span class="token punctuation">.</span>_after_restart_funcs<span class="token punctuation">.</span>append<span class="token punctuation">(</span>func<span class="token punctuation">)</span>
    <span class="token keyword">return</span> func
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="async-method-before-start-self-none" tabindex="-1"><a class="header-anchor" href="#async-method-before-start-self-none"><span><em>async method</em> <code>before_start(self) -&gt; None</code></span></a></h3><p><strong>说明</strong>: 启动前</p><details><summary><b>源代码</b></summary><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">before_start</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
        启动前
        Returns:
        &quot;&quot;&quot;</span>
    logger<span class="token punctuation">.</span>debug<span class="token punctuation">(</span><span class="token string">&#39;Running before_start functions&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> self<span class="token punctuation">.</span>run_funcs<span class="token punctuation">(</span>self<span class="token punctuation">.</span>_before_start_funcs<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="async-method-after-start-self-none" tabindex="-1"><a class="header-anchor" href="#async-method-after-start-self-none"><span><em>async method</em> <code>after_start(self) -&gt; None</code></span></a></h3><p><strong>说明</strong>: 启动后</p><details><summary><b>源代码</b></summary><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">after_start</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
        启动后
        Returns:
        &quot;&quot;&quot;</span>
    logger<span class="token punctuation">.</span>debug<span class="token punctuation">(</span><span class="token string">&#39;Running after_start functions&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> self<span class="token punctuation">.</span>run_funcs<span class="token punctuation">(</span>self<span class="token punctuation">.</span>_after_start_funcs<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="async-method-before-process-shutdown-self-none" tabindex="-1"><a class="header-anchor" href="#async-method-before-process-shutdown-self-none"><span><em>async method</em> <code>before_process_shutdown(self) -&gt; None</code></span></a></h3><p><strong>说明</strong>: 停止前</p><details><summary><b>源代码</b></summary><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">before_process_shutdown</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
        停止前
        Returns:
        &quot;&quot;&quot;</span>
    logger<span class="token punctuation">.</span>debug<span class="token punctuation">(</span><span class="token string">&#39;Running before_shutdown functions&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> self<span class="token punctuation">.</span>run_funcs<span class="token punctuation">(</span>self<span class="token punctuation">.</span>_before_process_shutdown_funcs<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="async-method-after-shutdown-self-none" tabindex="-1"><a class="header-anchor" href="#async-method-after-shutdown-self-none"><span><em>async method</em> <code>after_shutdown(self) -&gt; None</code></span></a></h3><p><strong>说明</strong>: 停止后</p><details><summary><b>源代码</b></summary><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">after_shutdown</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
        停止后
        Returns:
        &quot;&quot;&quot;</span>
    logger<span class="token punctuation">.</span>debug<span class="token punctuation">(</span><span class="token string">&#39;Running after_shutdown functions&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> self<span class="token punctuation">.</span>run_funcs<span class="token punctuation">(</span>self<span class="token punctuation">.</span>_after_shutdown_funcs<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="async-method-before-process-restart-self-none" tabindex="-1"><a class="header-anchor" href="#async-method-before-process-restart-self-none"><span><em>async method</em> <code>before_process_restart(self) -&gt; None</code></span></a></h3><p><strong>说明</strong>: 重启前</p><details><summary><b>源代码</b></summary><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">before_process_restart</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
        重启前
        Returns:
        &quot;&quot;&quot;</span>
    logger<span class="token punctuation">.</span>debug<span class="token punctuation">(</span><span class="token string">&#39;Running before_restart functions&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> self<span class="token punctuation">.</span>run_funcs<span class="token punctuation">(</span>self<span class="token punctuation">.</span>_before_process_restart_funcs<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="async-method-after-restart-self-none" tabindex="-1"><a class="header-anchor" href="#async-method-after-restart-self-none"><span><em>async method</em> <code>after_restart(self) -&gt; None</code></span></a></h3><p><strong>说明</strong>: 重启后</p><details><summary><b>源代码</b></summary><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">after_restart</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
        重启后
        Returns:

        &quot;&quot;&quot;</span>
    logger<span class="token punctuation">.</span>debug<span class="token punctuation">(</span><span class="token string">&#39;Running after_restart functions&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> self<span class="token punctuation">.</span>run_funcs<span class="token punctuation">(</span>self<span class="token punctuation">.</span>_after_restart_funcs<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="var-sync-lifespan-func-callable-any" tabindex="-1"><a class="header-anchor" href="#var-sync-lifespan-func-callable-any"><span><em><strong>var</strong></em> <code>SYNC_LIFESPAN_FUNC = Callable[[], Any]</code></span></a></h3><ul><li><strong>类型</strong>: <code>TypeAlias</code></li></ul><h3 id="var-async-lifespan-func-callable-awaitable-any" tabindex="-1"><a class="header-anchor" href="#var-async-lifespan-func-callable-awaitable-any"><span><em><strong>var</strong></em> <code>ASYNC_LIFESPAN_FUNC = Callable[[], Awaitable[Any]]</code></span></a></h3><ul><li><strong>类型</strong>: <code>TypeAlias</code></li></ul><h3 id="var-lifespan-func-sync-lifespan-func-async-lifespan-func" tabindex="-1"><a class="header-anchor" href="#var-lifespan-func-sync-lifespan-func-async-lifespan-func"><span><em><strong>var</strong></em> <code>LIFESPAN_FUNC = SYNC_LIFESPAN_FUNC | ASYNC_LIFESPAN_FUNC</code></span></a></h3><ul><li><strong>类型</strong>: <code>TypeAlias</code></li></ul><h3 id="var-sync-process-lifespan-func-callable-str-any" tabindex="-1"><a class="header-anchor" href="#var-sync-process-lifespan-func-callable-str-any"><span><em><strong>var</strong></em> <code>SYNC_PROCESS_LIFESPAN_FUNC = Callable[[str], Any]</code></span></a></h3><ul><li><strong>类型</strong>: <code>TypeAlias</code></li></ul><h3 id="var-async-process-lifespan-func-callable-str-awaitable-any" tabindex="-1"><a class="header-anchor" href="#var-async-process-lifespan-func-callable-str-awaitable-any"><span><em><strong>var</strong></em> <code>ASYNC_PROCESS_LIFESPAN_FUNC = Callable[[str], Awaitable[Any]]</code></span></a></h3><ul><li><strong>类型</strong>: <code>TypeAlias</code></li></ul><h3 id="var-process-lifespan-func-sync-process-lifespan-func-async-process-lifespan-func" tabindex="-1"><a class="header-anchor" href="#var-process-lifespan-func-sync-process-lifespan-func-async-process-lifespan-func"><span><em><strong>var</strong></em> <code>PROCESS_LIFESPAN_FUNC = SYNC_PROCESS_LIFESPAN_FUNC | ASYNC_PROCESS_LIFESPAN_FUNC</code></span></a></h3><ul><li><strong>类型</strong>: <code>TypeAlias</code></li></ul>`,76),l=[o];function p(c,i){return s(),a("div",null,l)}const r=n(t,[["render",p],["__file","lifespan.html.vue"]]),d=JSON.parse('{"path":"/api/bot/lifespan.html","title":"liteyuki.bot.lifespan","lang":"zh-CN","frontmatter":{"title":"liteyuki.bot.lifespan","description":"class Lifespan method __init__(self) -> None 说明: 轻雪生命周期管理，启动、停止、重启 源代码 @staticmethod async method run_funcs(funcs: list[ASYNC_LIFESPAN_FUNC | PROCESS_LIFESPAN_FUNC]) -> None 说明:...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope-docs-demo.netlify.app/en/api/bot/lifespan.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/api/bot/lifespan.html"}],["meta",{"property":"og:site_name","content":"LiteyukiBot 轻雪机器人"}],["meta",{"property":"og:title","content":"liteyuki.bot.lifespan"}],["meta",{"property":"og:description","content":"class Lifespan method __init__(self) -> None 说明: 轻雪生命周期管理，启动、停止、重启 源代码 @staticmethod async method run_funcs(funcs: list[ASYNC_LIFESPAN_FUNC | PROCESS_LIFESPAN_FUNC]) -> None 说明:..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"liteyuki.bot.lifespan\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":3,"title":"class Lifespan","slug":"class-lifespan","link":"#class-lifespan","children":[]},{"level":3,"title":"method __init__(self) -> None","slug":"method-init-self-none","link":"#method-init-self-none","children":[]},{"level":3,"title":"@staticmethod","slug":"staticmethod","link":"#staticmethod","children":[]},{"level":3,"title":"async method run_funcs(funcs: list[ASYNC_LIFESPAN_FUNC | PROCESS_LIFESPAN_FUNC]) -> None","slug":"async-method-run-funcs-funcs-list-async-lifespan-func-process-lifespan-func-none","link":"#async-method-run-funcs-funcs-list-async-lifespan-func-process-lifespan-func-none","children":[]},{"level":3,"title":"method on_before_start(self, func: LIFESPAN_FUNC) -> LIFESPAN_FUNC","slug":"method-on-before-start-self-func-lifespan-func-lifespan-func","link":"#method-on-before-start-self-func-lifespan-func-lifespan-func","children":[]},{"level":3,"title":"method on_after_start(self, func: LIFESPAN_FUNC) -> LIFESPAN_FUNC","slug":"method-on-after-start-self-func-lifespan-func-lifespan-func","link":"#method-on-after-start-self-func-lifespan-func-lifespan-func","children":[]},{"level":3,"title":"method on_before_process_shutdown(self, func: LIFESPAN_FUNC) -> LIFESPAN_FUNC","slug":"method-on-before-process-shutdown-self-func-lifespan-func-lifespan-func","link":"#method-on-before-process-shutdown-self-func-lifespan-func-lifespan-func","children":[]},{"level":3,"title":"method on_after_shutdown(self, func: LIFESPAN_FUNC) -> LIFESPAN_FUNC","slug":"method-on-after-shutdown-self-func-lifespan-func-lifespan-func","link":"#method-on-after-shutdown-self-func-lifespan-func-lifespan-func","children":[]},{"level":3,"title":"method on_before_process_restart(self, func: LIFESPAN_FUNC) -> LIFESPAN_FUNC","slug":"method-on-before-process-restart-self-func-lifespan-func-lifespan-func","link":"#method-on-before-process-restart-self-func-lifespan-func-lifespan-func","children":[]},{"level":3,"title":"method on_after_restart(self, func: LIFESPAN_FUNC) -> LIFESPAN_FUNC","slug":"method-on-after-restart-self-func-lifespan-func-lifespan-func","link":"#method-on-after-restart-self-func-lifespan-func-lifespan-func","children":[]},{"level":3,"title":"async method before_start(self) -> None","slug":"async-method-before-start-self-none","link":"#async-method-before-start-self-none","children":[]},{"level":3,"title":"async method after_start(self) -> None","slug":"async-method-after-start-self-none","link":"#async-method-after-start-self-none","children":[]},{"level":3,"title":"async method before_process_shutdown(self) -> None","slug":"async-method-before-process-shutdown-self-none","link":"#async-method-before-process-shutdown-self-none","children":[]},{"level":3,"title":"async method after_shutdown(self) -> None","slug":"async-method-after-shutdown-self-none","link":"#async-method-after-shutdown-self-none","children":[]},{"level":3,"title":"async method before_process_restart(self) -> None","slug":"async-method-before-process-restart-self-none","link":"#async-method-before-process-restart-self-none","children":[]},{"level":3,"title":"async method after_restart(self) -> None","slug":"async-method-after-restart-self-none","link":"#async-method-after-restart-self-none","children":[]},{"level":3,"title":"var SYNC_LIFESPAN_FUNC = Callable[[], Any]","slug":"var-sync-lifespan-func-callable-any","link":"#var-sync-lifespan-func-callable-any","children":[]},{"level":3,"title":"var ASYNC_LIFESPAN_FUNC = Callable[[], Awaitable[Any]]","slug":"var-async-lifespan-func-callable-awaitable-any","link":"#var-async-lifespan-func-callable-awaitable-any","children":[]},{"level":3,"title":"var LIFESPAN_FUNC = SYNC_LIFESPAN_FUNC | ASYNC_LIFESPAN_FUNC","slug":"var-lifespan-func-sync-lifespan-func-async-lifespan-func","link":"#var-lifespan-func-sync-lifespan-func-async-lifespan-func","children":[]},{"level":3,"title":"var SYNC_PROCESS_LIFESPAN_FUNC = Callable[[str], Any]","slug":"var-sync-process-lifespan-func-callable-str-any","link":"#var-sync-process-lifespan-func-callable-str-any","children":[]},{"level":3,"title":"var ASYNC_PROCESS_LIFESPAN_FUNC = Callable[[str], Awaitable[Any]]","slug":"var-async-process-lifespan-func-callable-str-awaitable-any","link":"#var-async-process-lifespan-func-callable-str-awaitable-any","children":[]},{"level":3,"title":"var PROCESS_LIFESPAN_FUNC = SYNC_PROCESS_LIFESPAN_FUNC | ASYNC_PROCESS_LIFESPAN_FUNC","slug":"var-process-lifespan-func-sync-process-lifespan-func-async-process-lifespan-func","link":"#var-process-lifespan-func-sync-process-lifespan-func-async-process-lifespan-func","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.45,"words":734},"filePathRelative":"api/bot/lifespan.md","autoDesc":true}');export{r as comp,d as data};
