import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.C3o_UkTa.js";const u=JSON.parse('{"title":"liteyuki.comm.rpc","description":"","frontmatter":{"title":"liteyuki.comm.rpc"},"headers":[],"relativePath":"dev/api/comm/rpc.md","filePath":"zh/dev/api/comm/rpc.md","lastUpdated":null}'),e={name:"dev/api/comm/rpc.md"},n=t('<h1 id="liteyuki-comm-rpc" tabindex="-1">liteyuki.comm.rpc <a class="header-anchor" href="#liteyuki-comm-rpc" aria-label="Permalink to &quot;liteyuki.comm.rpc&quot;">​</a></h1><p><strong>说明</strong>: 本模块用于实现RPC(基于IPC)通信</p><h3 id="class-rpc" tabindex="-1"><em><strong>class</strong></em> <code>RPC</code> <a class="header-anchor" href="#class-rpc" aria-label="Permalink to &quot;***class*** `RPC`&quot;">​</a></h3><h4 id="def-init-self-on-calling-on-calling-func-none" tabindex="-1"><em><strong>def</strong></em> <code>__init__(self, on_calling: ON_CALLING_FUNC) -&gt; None</code> <a class="header-anchor" href="#def-init-self-on-calling-on-calling-func-none" aria-label="Permalink to &quot;***def*** `__init__(self, on_calling: ON_CALLING_FUNC) -&gt; None`&quot;">​</a></h4><details><summary><b>源代码</b> 或 <a href="https://github.com/LiteyukiStudio/LiteyukiBot/tree/main/liteyuki/comm/rpc.py#L18" target="_blank">在GitHub上查看</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __init__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, on_calling: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ON_CALLING_FUNC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.on_calling </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> on_calling</span></span></code></pre></div></details><h4 id="def-call-self-args-tuple-kwargs-dict-any" tabindex="-1"><em><strong>def</strong></em> <code>call(self, args: tuple, kwargs: dict) -&gt; Any</code> <a class="header-anchor" href="#def-call-self-args-tuple-kwargs-dict-any" aria-label="Permalink to &quot;***def*** `call(self, args: tuple, kwargs: dict) -&gt; Any`&quot;">​</a></h4><p><strong>说明</strong>: 调用</p><details><summary><b>源代码</b> 或 <a href="https://github.com/LiteyukiStudio/LiteyukiBot/tree/main/liteyuki/comm/rpc.py#L21" target="_blank">在GitHub上查看</a></summary><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, args: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tuple</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, kwargs: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">dict</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; Any:</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        调用</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;&quot;&quot;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.on_calling(args, kwargs)</span></span></code></pre></div></details>',8),l=[n];function p(h,r,o,c,k,d){return a(),i("div",null,l)}const m=s(e,[["render",p]]);export{u as __pageData,m as default};
