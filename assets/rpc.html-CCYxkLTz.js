import{_ as n,o as a,c as e,d as t}from"./app-EhCe7g9m.js";const s={},l=t(`<h3 id="class-rpc" tabindex="-1"><a class="header-anchor" href="#class-rpc"><span><strong>class</strong> <code>RPC</code></span></a></h3><h3 id="method-init-self-on-calling-on-calling-func-none" tabindex="-1"><a class="header-anchor" href="#method-init-self-on-calling-on-calling-func-none"><span><em>method</em> <code>__init__(self, on_calling: ON_CALLING_FUNC) -&gt; None</code></span></a></h3><details><summary><b>源代码</b></summary><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> on_calling<span class="token punctuation">:</span> ON_CALLING_FUNC<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    self<span class="token punctuation">.</span>on_calling <span class="token operator">=</span> on_calling
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="method-call-self-args-tuple-kwargs-dict-any" tabindex="-1"><a class="header-anchor" href="#method-call-self-args-tuple-kwargs-dict-any"><span><em>method</em> <code>call(self, args: tuple, kwargs: dict) -&gt; Any</code></span></a></h3><p><strong>说明</strong>: 调用</p><details><summary><b>源代码</b></summary><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">call</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> args<span class="token punctuation">:</span> <span class="token builtin">tuple</span><span class="token punctuation">,</span> kwargs<span class="token punctuation">:</span> <span class="token builtin">dict</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> Any<span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
        调用
        &quot;&quot;&quot;</span>
    <span class="token keyword">return</span> self<span class="token punctuation">.</span>on_calling<span class="token punctuation">(</span>args<span class="token punctuation">,</span> kwargs<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="var-on-calling-func-callable-tuple-dict-any" tabindex="-1"><a class="header-anchor" href="#var-on-calling-func-callable-tuple-dict-any"><span><em><strong>var</strong></em> <code>ON_CALLING_FUNC = Callable[[tuple, dict], Any]</code></span></a></h3><ul><li><strong>类型</strong>: <code>TypeAlias</code></li></ul>`,8),o=[l];function c(i,p){return a(),e("div",null,o)}const d=n(s,[["render",c],["__file","rpc.html.vue"]]),u=JSON.parse('{"path":"/api/comm/rpc.html","title":"liteyuki.comm.rpc","lang":"zh-CN","frontmatter":{"title":"liteyuki.comm.rpc","description":"class RPC method __init__(self, on_calling: ON_CALLING_FUNC) -> None 源代码 method call(self, args: tuple, kwargs: dict) -> Any 说明: 调用 源代码 var ON_CALLING_FUNC = Callable[[tuple, di...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope-docs-demo.netlify.app/en/api/comm/rpc.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/api/comm/rpc.html"}],["meta",{"property":"og:site_name","content":"LiteyukiBot 轻雪机器人"}],["meta",{"property":"og:title","content":"liteyuki.comm.rpc"}],["meta",{"property":"og:description","content":"class RPC method __init__(self, on_calling: ON_CALLING_FUNC) -> None 源代码 method call(self, args: tuple, kwargs: dict) -> Any 说明: 调用 源代码 var ON_CALLING_FUNC = Callable[[tuple, di..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"liteyuki.comm.rpc\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":3,"title":"class RPC","slug":"class-rpc","link":"#class-rpc","children":[]},{"level":3,"title":"method __init__(self, on_calling: ON_CALLING_FUNC) -> None","slug":"method-init-self-on-calling-on-calling-func-none","link":"#method-init-self-on-calling-on-calling-func-none","children":[]},{"level":3,"title":"method call(self, args: tuple, kwargs: dict) -> Any","slug":"method-call-self-args-tuple-kwargs-dict-any","link":"#method-call-self-args-tuple-kwargs-dict-any","children":[]},{"level":3,"title":"var ON_CALLING_FUNC = Callable[[tuple, dict], Any]","slug":"var-on-calling-func-callable-tuple-dict-any","link":"#var-on-calling-func-callable-tuple-dict-any","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.24,"words":73},"filePathRelative":"api/comm/rpc.md","autoDesc":true}');export{d as comp,u as data};
