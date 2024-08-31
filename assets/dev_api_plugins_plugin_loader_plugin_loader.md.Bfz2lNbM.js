import{_ as i,c as s,o as a,a4 as l}from"./chunks/framework.C3o_UkTa.js";const _=JSON.parse('{"title":"liteyuki.plugins.plugin_loader","description":"","frontmatter":{"title":"liteyuki.plugins.plugin_loader","collapsed":true},"headers":[],"relativePath":"dev/api/plugins/plugin_loader/plugin_loader.md","filePath":"zh/dev/api/plugins/plugin_loader/plugin_loader.md","lastUpdated":null}'),n={name:"dev/api/plugins/plugin_loader/plugin_loader.md"},t=l(`<h1 id="liteyuki-plugins-plugin-loader" tabindex="-1">liteyuki.plugins.plugin_loader <a class="header-anchor" href="#liteyuki-plugins-plugin-loader" aria-label="Permalink to &quot;liteyuki.plugins.plugin_loader&quot;">​</a></h1><p><strong>说明</strong>: Copyright (C) 2020-2024 LiteyukiStudio. All Rights Reserved</p><p>@Time : 2024/8/11 下午10:02 @Author : snowykami @Email : <a href="mailto:snowykami@outlook.com" target="_blank" rel="noreferrer">snowykami@outlook.com</a> @File : <strong>init</strong>.py.py @Software: PyCharm</p><h3 id="def-default-plugins-loader" tabindex="-1"><em><strong>def</strong></em> <code>default_plugins_loader()</code> <a class="header-anchor" href="#def-default-plugins-loader" aria-label="Permalink to &quot;***def*** \`default_plugins_loader()\`&quot;">​</a></h3><p><strong>说明</strong>: 默认插件加载器，应在初始化时调用</p><details><summary><b>源代码</b> 或 <a href="https://github.com/LiteyukiStudio/LiteyukiBot/tree/main/liteyuki/plugins/plugin_loader/__init__.py#L21" target="_blank">在GitHub上查看</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> default_plugins_loader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">():</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    默认插件加载器，应在初始化时调用</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> plugin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> get_config(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;liteyuki.plugins&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, []):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        load_plugin(plugin)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> plugin_dir </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> get_config(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;liteyuki.plugin_dirs&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;src/liteyuki_plugins&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        load_plugins(plugin_dir)</span></span></code></pre></div></details>`,6),e=[t];function p(r,o,h,d,k,u){return a(),s("div",null,e)}const y=i(n,[["render",p]]);export{_ as __pageData,y as default};
