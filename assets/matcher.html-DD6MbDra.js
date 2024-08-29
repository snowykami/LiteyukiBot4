import{_ as n,o as e,c as s,d as a}from"./app-EhCe7g9m.js";const t={},l=a(`<h3 id="class-matcher" tabindex="-1"><a class="header-anchor" href="#class-matcher"><span><strong>class</strong> <code>Matcher</code></span></a></h3><h3 id="method-init-self-rule-rule-priority-int-block-bool" tabindex="-1"><a class="header-anchor" href="#method-init-self-rule-rule-priority-int-block-bool"><span><em>method</em> <code>__init__(self, rule: Rule, priority: int, block: bool)</code></span></a></h3><p><strong>说明</strong>: 匹配器</p><p><strong>参数</strong>:</p><blockquote><ul><li>rule: 规则</li><li>priority: 优先级 &gt;= 0</li><li>block: 是否阻断后续优先级更低的匹配器</li></ul></blockquote><details><summary><b>源代码</b></summary><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> rule<span class="token punctuation">:</span> Rule<span class="token punctuation">,</span> priority<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> block<span class="token punctuation">:</span> <span class="token builtin">bool</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
        匹配器
        Args:
            rule: 规则
            priority: 优先级 &gt;= 0
            block: 是否阻断后续优先级更低的匹配器
        &quot;&quot;&quot;</span>
    self<span class="token punctuation">.</span>rule <span class="token operator">=</span> rule
    self<span class="token punctuation">.</span>priority <span class="token operator">=</span> priority
    self<span class="token punctuation">.</span>block <span class="token operator">=</span> block
    self<span class="token punctuation">.</span>handlers<span class="token punctuation">:</span> <span class="token builtin">list</span><span class="token punctuation">[</span>EventHandler<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="method-handle-self-callable-eventhandler-eventhandler" tabindex="-1"><a class="header-anchor" href="#method-handle-self-callable-eventhandler-eventhandler"><span><em>method</em> <code>handle(self) -&gt; Callable[[EventHandler], EventHandler]</code></span></a></h3><p><strong>说明</strong>: 添加处理函数，装饰器</p><p><strong>返回</strong>: 装饰器 handler</p><details><summary><b>源代码</b></summary><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">handle</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> Callable<span class="token punctuation">[</span><span class="token punctuation">[</span>EventHandler<span class="token punctuation">]</span><span class="token punctuation">,</span> EventHandler<span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
        添加处理函数，装饰器
        Returns:
            装饰器 handler
        &quot;&quot;&quot;</span>

    <span class="token keyword">def</span> <span class="token function">decorator</span><span class="token punctuation">(</span>handler<span class="token punctuation">:</span> EventHandler<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> EventHandler<span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>handlers<span class="token punctuation">.</span>append<span class="token punctuation">(</span>handler<span class="token punctuation">)</span>
        <span class="token keyword">return</span> handler
    <span class="token keyword">return</span> decorator
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="async-method-run-self-event-messageevent-none" tabindex="-1"><a class="header-anchor" href="#async-method-run-self-event-messageevent-none"><span><em>async method</em> <code>run(self, event: MessageEvent) -&gt; None</code></span></a></h3><p><strong>说明</strong>: 运行处理函数</p><p><strong>参数</strong>:</p><blockquote><ul><li>event:</li></ul></blockquote><details><summary><b>源代码</b></summary><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> event<span class="token punctuation">:</span> MessageEvent<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
        运行处理函数
        Args:
            event:
        Returns:
        &quot;&quot;&quot;</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token keyword">await</span> self<span class="token punctuation">.</span>rule<span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span>
    <span class="token keyword">for</span> handler <span class="token keyword">in</span> self<span class="token punctuation">.</span>handlers<span class="token punctuation">:</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            <span class="token keyword">await</span> handler<span class="token punctuation">(</span>event<span class="token punctuation">)</span>
        <span class="token keyword">except</span> Exception<span class="token punctuation">:</span>
            traceback<span class="token punctuation">.</span>print_exc<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="var-eventhandler-callable-messageevent-coroutine-none-none-any" tabindex="-1"><a class="header-anchor" href="#var-eventhandler-callable-messageevent-coroutine-none-none-any"><span><em><strong>var</strong></em> <code>EventHandler = Callable[[MessageEvent], Coroutine[None, None, Any]]</code></span></a></h3><ul><li><strong>类型</strong>: <code>TypeAlias</code></li></ul>`,17),o=[l];function i(p,c){return e(),s("div",null,o)}const u=n(t,[["render",i],["__file","matcher.html.vue"]]),d=JSON.parse('{"path":"/api/message/matcher.html","title":"liteyuki.message.matcher","lang":"zh-CN","frontmatter":{"title":"liteyuki.message.matcher","description":"class Matcher method __init__(self, rule: Rule, priority: int, block: bool) 说明: 匹配器 参数: rule: 规则 priority: 优先级 >= 0 block: 是否阻断后续优先级更低的匹配器 源代码 method handle(self) -> Callable[[E...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope-docs-demo.netlify.app/en/api/message/matcher.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/api/message/matcher.html"}],["meta",{"property":"og:site_name","content":"LiteyukiBot 轻雪机器人"}],["meta",{"property":"og:title","content":"liteyuki.message.matcher"}],["meta",{"property":"og:description","content":"class Matcher method __init__(self, rule: Rule, priority: int, block: bool) 说明: 匹配器 参数: rule: 规则 priority: 优先级 >= 0 block: 是否阻断后续优先级更低的匹配器 源代码 method handle(self) -> Callable[[E..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"liteyuki.message.matcher\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":3,"title":"class Matcher","slug":"class-matcher","link":"#class-matcher","children":[]},{"level":3,"title":"method __init__(self, rule: Rule, priority: int, block: bool)","slug":"method-init-self-rule-rule-priority-int-block-bool","link":"#method-init-self-rule-rule-priority-int-block-bool","children":[]},{"level":3,"title":"method handle(self) -> Callable[[EventHandler], EventHandler]","slug":"method-handle-self-callable-eventhandler-eventhandler","link":"#method-handle-self-callable-eventhandler-eventhandler","children":[]},{"level":3,"title":"async method run(self, event: MessageEvent) -> None","slug":"async-method-run-self-event-messageevent-none","link":"#async-method-run-self-event-messageevent-none","children":[]},{"level":3,"title":"var EventHandler = Callable[[MessageEvent], Coroutine[None, None, Any]]","slug":"var-eventhandler-callable-messageevent-coroutine-none-none-any","link":"#var-eventhandler-callable-messageevent-coroutine-none-none-any","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.79,"words":236},"filePathRelative":"api/message/matcher.md","autoDesc":true}');export{u as comp,d as data};
