import{_ as n,o as t,c as e,d as s}from"./app-EhCe7g9m.js";const a={},p=s(`<h3 id="func-run-plugins" tabindex="-1"><a class="header-anchor" href="#func-run-plugins"><span><em>func</em> <code>run_plugins()</code></span></a></h3><p><strong>Description</strong>: 运行插件，无需手动初始化bot</p><p><strong>Arguments</strong>:</p><blockquote><ul><li>module_path: 插件路径，参考<code>liteyuki.load_plugin</code>的函数签名</li></ul></blockquote><details><summary><b>Source code</b></summary><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">run_plugins</span><span class="token punctuation">(</span><span class="token operator">*</span>module_path<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">|</span> Path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    运行插件，无需手动初始化bot
    Args:
        module_path: 插件路径，参考\`liteyuki.load_plugin\`的函数签名
    &quot;&quot;&quot;</span>
    cfg <span class="token operator">=</span> load_config_in_default<span class="token punctuation">(</span><span class="token punctuation">)</span>
    plugins <span class="token operator">=</span> cfg<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;liteyuki.plugins&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    plugins<span class="token punctuation">.</span>extend<span class="token punctuation">(</span>module_path<span class="token punctuation">)</span>
    cfg<span class="token punctuation">[</span><span class="token string">&#39;liteyuki.plugins&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> plugins
    bot <span class="token operator">=</span> LiteyukiBot<span class="token punctuation">(</span><span class="token operator">**</span>cfg<span class="token punctuation">)</span>
    bot<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,5),o=[p];function i(l,u){return t(),e("div",null,o)}const r=n(a,[["render",i],["__file","plugin.html.vue"]]),d=JSON.parse('{"path":"/en/api/dev/plugin.html","title":"liteyuki.dev.plugin","lang":"en-US","frontmatter":{"title":"liteyuki.dev.plugin","description":"func run_plugins() Description: 运行插件，无需手动初始化bot Arguments: module_path: 插件路径，参考liteyuki.load_plugin的函数签名 Source code","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuepress-theme-hope-docs-demo.netlify.app/api/dev/plugin.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/en/api/dev/plugin.html"}],["meta",{"property":"og:site_name","content":"LiteyukiBot"}],["meta",{"property":"og:title","content":"liteyuki.dev.plugin"}],["meta",{"property":"og:description","content":"func run_plugins() Description: 运行插件，无需手动初始化bot Arguments: module_path: 插件路径，参考liteyuki.load_plugin的函数签名 Source code"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"liteyuki.dev.plugin\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":3,"title":"func run_plugins()","slug":"func-run-plugins","link":"#func-run-plugins","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.28,"words":85},"filePathRelative":"en/api/dev/plugin.md","autoDesc":true}');export{r as comp,d as data};
