import{_ as e,o as n,c as a,e as s}from"./app-DeoZdSx1.js";const t={},o=s(`<h3 id="async-def-empty-rule-event-messageevent-bool" tabindex="-1"><a class="header-anchor" href="#async-def-empty-rule-event-messageevent-bool"><span><em><strong>async def</strong></em> <code>empty_rule(event: MessageEvent) -&gt; bool</code></span></a></h3><details><summary>源代码</summary><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@Rule</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">empty_rule</span><span class="token punctuation">(</span>event<span class="token punctuation">:</span> MessageEvent<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="async-def-combined-handler-event-messageevent-bool" tabindex="-1"><a class="header-anchor" href="#async-def-combined-handler-event-messageevent-bool"><span><em><strong>async def</strong></em> <code>combined_handler(event: MessageEvent) -&gt; bool</code></span></a></h3><details><summary>源代码</summary><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">combined_handler</span><span class="token punctuation">(</span>event<span class="token punctuation">:</span> MessageEvent<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> self<span class="token punctuation">.</span>handler<span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token keyword">or</span> <span class="token keyword">await</span> other<span class="token punctuation">.</span>handler<span class="token punctuation">(</span>event<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="async-def-combined-handler-event-messageevent-bool-1" tabindex="-1"><a class="header-anchor" href="#async-def-combined-handler-event-messageevent-bool-1"><span><em><strong>async def</strong></em> <code>combined_handler(event: MessageEvent) -&gt; bool</code></span></a></h3><details><summary>源代码</summary><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">combined_handler</span><span class="token punctuation">(</span>event<span class="token punctuation">:</span> MessageEvent<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> self<span class="token punctuation">.</span>handler<span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token keyword">await</span> other<span class="token punctuation">.</span>handler<span class="token punctuation">(</span>event<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="class-rule" tabindex="-1"><a class="header-anchor" href="#class-rule"><span><em><strong>class</strong></em> <code>Rule</code></span></a></h3><h3 id="def-init-self-handler-rulehandlerfunc-none" tabindex="-1"><a class="header-anchor" href="#def-init-self-handler-rulehandlerfunc-none"><span>  <em><strong>def</strong></em> <code>__init__(self, handler: RuleHandlerFunc) -&gt; None</code></span></a></h3><p> </p><details><summary>源代码</summary><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> handler<span class="token punctuation">:</span> RuleHandlerFunc<span class="token punctuation">)</span><span class="token punctuation">:</span>
    self<span class="token punctuation">.</span>handler <span class="token operator">=</span> handler
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details>`,10),l=[o];function c(p,d){return n(),a("div",null,l)}const i=e(t,[["render",c],["__file","rule.html.vue"]]),u=JSON.parse('{"path":"/en/dev/api/message/rule.html","title":"liteyuki.message.rule","lang":"en-US","frontmatter":{"title":"liteyuki.message.rule","order":1,"icon":"laptop-code","category":"API","description":"async def empty_rule(event: MessageEvent) -> bool 源代码 async def combined_handler(event: MessageEvent) -> bool 源代码 async def combined_handler(event: MessageEvent) -> bool 源代码 cla...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuepress-theme-hope-docs-demo.netlify.app/dev/api/message/rule.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/en/dev/api/message/rule.html"}],["meta",{"property":"og:site_name","content":"LiteyukiBot"}],["meta",{"property":"og:title","content":"liteyuki.message.rule"}],["meta",{"property":"og:description","content":"async def empty_rule(event: MessageEvent) -> bool 源代码 async def combined_handler(event: MessageEvent) -> bool 源代码 async def combined_handler(event: MessageEvent) -> bool 源代码 cla..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-21T09:59:21.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-21T09:59:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"liteyuki.message.rule\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-21T09:59:21.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"async def empty_rule(event: MessageEvent) -> bool","slug":"async-def-empty-rule-event-messageevent-bool","link":"#async-def-empty-rule-event-messageevent-bool","children":[]},{"level":3,"title":"async def combined_handler(event: MessageEvent) -> bool","slug":"async-def-combined-handler-event-messageevent-bool","link":"#async-def-combined-handler-event-messageevent-bool","children":[]},{"level":3,"title":"async def combined_handler(event: MessageEvent) -> bool","slug":"async-def-combined-handler-event-messageevent-bool-1","link":"#async-def-combined-handler-event-messageevent-bool-1","children":[]},{"level":3,"title":"class Rule","slug":"class-rule","link":"#class-rule","children":[]},{"level":3,"title":"def __init__(self, handler: RuleHandlerFunc) -> None","slug":"def-init-self-handler-rulehandlerfunc-none","link":"#def-init-self-handler-rulehandlerfunc-none","children":[]}],"git":{"createdTime":1724234361000,"updatedTime":1724234361000,"contributors":[{"name":"snowy","email":"snowykami@outlook.com","commits":1}]},"readingTime":{"minutes":0.38,"words":113},"filePathRelative":"en/dev/api/message/rule.md","localizedDate":"August 21, 2024","autoDesc":true}');export{i as comp,u as data};
