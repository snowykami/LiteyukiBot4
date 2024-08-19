import{_ as e,o as n,c as s,e as f}from"./app-DuYQPtzk.js";const t={},o=f(`<h3 id="def-run-funcs-funcs-list-lifespan-func-process-lifespan-func-none" tabindex="-1"><a class="header-anchor" href="#def-run-funcs-funcs-list-lifespan-func-process-lifespan-func-none"><span><em><strong>def</strong></em> <code>run_funcs(funcs: list[LIFESPAN_FUNC | PROCESS_LIFESPAN_FUNC]) -&gt; None</code></span></a></h3><p>运行函数</p><p>Args:</p><pre><code>funcs:
</code></pre><p>Returns:</p><h3 id="class-lifespan" tabindex="-1"><a class="header-anchor" href="#class-lifespan"><span><em><strong>class</strong></em> <code>Lifespan</code></span></a></h3><h3 id="def-init-self-none" tabindex="-1"><a class="header-anchor" href="#def-init-self-none"><span>  <em><strong>def</strong></em> <code>__init__(self) -&gt; None</code></span></a></h3><p> 轻雪生命周期管理，启动、停止、重启</p><h3 id="staticmethod" tabindex="-1"><a class="header-anchor" href="#staticmethod"><span>  <em><strong>@staticmethod</strong></em></span></a></h3><h3 id="def-run-funcs-funcs-list-lifespan-func-process-lifespan-func-none-1" tabindex="-1"><a class="header-anchor" href="#def-run-funcs-funcs-list-lifespan-func-process-lifespan-func-none-1"><span>  <em><strong>def</strong></em> <code>run_funcs(funcs: list[LIFESPAN_FUNC | PROCESS_LIFESPAN_FUNC]) -&gt; None</code></span></a></h3><p> 运行函数</p><p>Args:</p><pre><code>funcs:
</code></pre><p>Returns:</p><h3 id="def-on-before-start-self-func-lifespan-func-lifespan-func" tabindex="-1"><a class="header-anchor" href="#def-on-before-start-self-func-lifespan-func-lifespan-func"><span>  <em><strong>def</strong></em> <code>on_before_start(self, func: LIFESPAN_FUNC) -&gt; LIFESPAN_FUNC</code></span></a></h3><p> 注册启动时的函数</p><p>Args:</p><pre><code>func:
</code></pre><p>Returns:</p><pre><code>LIFESPAN_FUNC:
</code></pre><h3 id="def-on-after-start-self-func-lifespan-func-lifespan-func" tabindex="-1"><a class="header-anchor" href="#def-on-after-start-self-func-lifespan-func-lifespan-func"><span>  <em><strong>def</strong></em> <code>on_after_start(self, func: LIFESPAN_FUNC) -&gt; LIFESPAN_FUNC</code></span></a></h3><p> 注册启动时的函数</p><p>Args:</p><pre><code>func:
</code></pre><p>Returns:</p><pre><code>LIFESPAN_FUNC:
</code></pre><h3 id="def-on-before-process-shutdown-self-func-lifespan-func-lifespan-func" tabindex="-1"><a class="header-anchor" href="#def-on-before-process-shutdown-self-func-lifespan-func-lifespan-func"><span>  <em><strong>def</strong></em> <code>on_before_process_shutdown(self, func: LIFESPAN_FUNC) -&gt; LIFESPAN_FUNC</code></span></a></h3><p> 注册停止前的函数</p><p>Args:</p><pre><code>func:
</code></pre><p>Returns:</p><pre><code>LIFESPAN_FUNC:
</code></pre><h3 id="def-on-after-shutdown-self-func-lifespan-func-lifespan-func" tabindex="-1"><a class="header-anchor" href="#def-on-after-shutdown-self-func-lifespan-func-lifespan-func"><span>  <em><strong>def</strong></em> <code>on_after_shutdown(self, func: LIFESPAN_FUNC) -&gt; LIFESPAN_FUNC</code></span></a></h3><p> 注册停止后的函数</p><p>Args:</p><pre><code>func:
</code></pre><p>Returns:</p><pre><code>LIFESPAN_FUNC:
</code></pre><h3 id="def-on-before-process-restart-self-func-lifespan-func-lifespan-func" tabindex="-1"><a class="header-anchor" href="#def-on-before-process-restart-self-func-lifespan-func-lifespan-func"><span>  <em><strong>def</strong></em> <code>on_before_process_restart(self, func: LIFESPAN_FUNC) -&gt; LIFESPAN_FUNC</code></span></a></h3><p> 注册重启时的函数</p><p>Args:</p><pre><code>func:
</code></pre><p>Returns:</p><pre><code>LIFESPAN_FUNC:
</code></pre><h3 id="def-on-after-restart-self-func-lifespan-func-lifespan-func" tabindex="-1"><a class="header-anchor" href="#def-on-after-restart-self-func-lifespan-func-lifespan-func"><span>  <em><strong>def</strong></em> <code>on_after_restart(self, func: LIFESPAN_FUNC) -&gt; LIFESPAN_FUNC</code></span></a></h3><p> 注册重启后的函数</p><p>Args:</p><pre><code>func:
</code></pre><p>Returns:</p><pre><code>LIFESPAN_FUNC:
</code></pre><h3 id="def-on-after-nonebot-init-self-func-any-none" tabindex="-1"><a class="header-anchor" href="#def-on-after-nonebot-init-self-func-any-none"><span>  <em><strong>def</strong></em> <code>on_after_nonebot_init(self, func: Any) -&gt; None</code></span></a></h3><p> 注册 NoneBot 初始化后的函数</p><p>Args:</p><pre><code>func:
</code></pre><p>Returns:</p><h3 id="def-before-start-self-none" tabindex="-1"><a class="header-anchor" href="#def-before-start-self-none"><span>  <em><strong>def</strong></em> <code>before_start(self) -&gt; None</code></span></a></h3><p> 启动前</p><p>Returns:</p><h3 id="def-after-start-self-none" tabindex="-1"><a class="header-anchor" href="#def-after-start-self-none"><span>  <em><strong>def</strong></em> <code>after_start(self) -&gt; None</code></span></a></h3><p> 启动后</p><p>Returns:</p><h3 id="def-before-process-shutdown-self-none" tabindex="-1"><a class="header-anchor" href="#def-before-process-shutdown-self-none"><span>  <em><strong>def</strong></em> <code>before_process_shutdown(self) -&gt; None</code></span></a></h3><p> 停止前</p><p>Returns:</p><h3 id="def-after-shutdown-self-none" tabindex="-1"><a class="header-anchor" href="#def-after-shutdown-self-none"><span>  <em><strong>def</strong></em> <code>after_shutdown(self) -&gt; None</code></span></a></h3><p> 停止后</p><p>Returns:</p><h3 id="def-before-process-restart-self-none" tabindex="-1"><a class="header-anchor" href="#def-before-process-restart-self-none"><span>  <em><strong>def</strong></em> <code>before_process_restart(self) -&gt; None</code></span></a></h3><p> 重启前</p><p>Returns:</p><h3 id="def-after-restart-self-none" tabindex="-1"><a class="header-anchor" href="#def-after-restart-self-none"><span>  <em><strong>def</strong></em> <code>after_restart(self) -&gt; None</code></span></a></h3><p> 重启后</p><p>Returns:</p>`,73),r=[o];function a(c,l){return n(),s("div",null,r)}const p=e(t,[["render",a],["__file","lifespan.html.vue"]]),i=JSON.parse('{"path":"/en/dev/api/liteyuki/bot/lifespan.html","title":"liteyuki.bot.lifespan","lang":"en-US","frontmatter":{"title":"liteyuki.bot.lifespan","order":1,"icon":"laptop-code","category":"API","description":"def run_funcs(funcs: list[LIFESPAN_FUNC | PROCESS_LIFESPAN_FUNC]) -> None 运行函数 Args: Returns: class Lifespan def __init__(self) -> None 轻雪生命周期管理，启动、停止、重启 @staticmethod def run_f...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/en/dev/api/liteyuki/bot/lifespan.html"}],["meta",{"property":"og:site_name","content":"LiteyukiBot"}],["meta",{"property":"og:title","content":"liteyuki.bot.lifespan"}],["meta",{"property":"og:description","content":"def run_funcs(funcs: list[LIFESPAN_FUNC | PROCESS_LIFESPAN_FUNC]) -> None 运行函数 Args: Returns: class Lifespan def __init__(self) -> None 轻雪生命周期管理，启动、停止、重启 @staticmethod def run_f..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-19T02:04:24.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-19T02:04:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"liteyuki.bot.lifespan\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-19T02:04:24.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"def run_funcs(funcs: list[LIFESPAN_FUNC | PROCESS_LIFESPAN_FUNC]) -> None","slug":"def-run-funcs-funcs-list-lifespan-func-process-lifespan-func-none","link":"#def-run-funcs-funcs-list-lifespan-func-process-lifespan-func-none","children":[]},{"level":3,"title":"class Lifespan","slug":"class-lifespan","link":"#class-lifespan","children":[]},{"level":3,"title":"def __init__(self) -> None","slug":"def-init-self-none","link":"#def-init-self-none","children":[]},{"level":3,"title":"@staticmethod","slug":"staticmethod","link":"#staticmethod","children":[]},{"level":3,"title":"def run_funcs(funcs: list[LIFESPAN_FUNC | PROCESS_LIFESPAN_FUNC]) -> None","slug":"def-run-funcs-funcs-list-lifespan-func-process-lifespan-func-none-1","link":"#def-run-funcs-funcs-list-lifespan-func-process-lifespan-func-none-1","children":[]},{"level":3,"title":"def on_before_start(self, func: LIFESPAN_FUNC) -> LIFESPAN_FUNC","slug":"def-on-before-start-self-func-lifespan-func-lifespan-func","link":"#def-on-before-start-self-func-lifespan-func-lifespan-func","children":[]},{"level":3,"title":"def on_after_start(self, func: LIFESPAN_FUNC) -> LIFESPAN_FUNC","slug":"def-on-after-start-self-func-lifespan-func-lifespan-func","link":"#def-on-after-start-self-func-lifespan-func-lifespan-func","children":[]},{"level":3,"title":"def on_before_process_shutdown(self, func: LIFESPAN_FUNC) -> LIFESPAN_FUNC","slug":"def-on-before-process-shutdown-self-func-lifespan-func-lifespan-func","link":"#def-on-before-process-shutdown-self-func-lifespan-func-lifespan-func","children":[]},{"level":3,"title":"def on_after_shutdown(self, func: LIFESPAN_FUNC) -> LIFESPAN_FUNC","slug":"def-on-after-shutdown-self-func-lifespan-func-lifespan-func","link":"#def-on-after-shutdown-self-func-lifespan-func-lifespan-func","children":[]},{"level":3,"title":"def on_before_process_restart(self, func: LIFESPAN_FUNC) -> LIFESPAN_FUNC","slug":"def-on-before-process-restart-self-func-lifespan-func-lifespan-func","link":"#def-on-before-process-restart-self-func-lifespan-func-lifespan-func","children":[]},{"level":3,"title":"def on_after_restart(self, func: LIFESPAN_FUNC) -> LIFESPAN_FUNC","slug":"def-on-after-restart-self-func-lifespan-func-lifespan-func","link":"#def-on-after-restart-self-func-lifespan-func-lifespan-func","children":[]},{"level":3,"title":"def on_after_nonebot_init(self, func: Any) -> None","slug":"def-on-after-nonebot-init-self-func-any-none","link":"#def-on-after-nonebot-init-self-func-any-none","children":[]},{"level":3,"title":"def before_start(self) -> None","slug":"def-before-start-self-none","link":"#def-before-start-self-none","children":[]},{"level":3,"title":"def after_start(self) -> None","slug":"def-after-start-self-none","link":"#def-after-start-self-none","children":[]},{"level":3,"title":"def before_process_shutdown(self) -> None","slug":"def-before-process-shutdown-self-none","link":"#def-before-process-shutdown-self-none","children":[]},{"level":3,"title":"def after_shutdown(self) -> None","slug":"def-after-shutdown-self-none","link":"#def-after-shutdown-self-none","children":[]},{"level":3,"title":"def before_process_restart(self) -> None","slug":"def-before-process-restart-self-none","link":"#def-before-process-restart-self-none","children":[]},{"level":3,"title":"def after_restart(self) -> None","slug":"def-after-restart-self-none","link":"#def-after-restart-self-none","children":[]}],"git":{"createdTime":1724031826000,"updatedTime":1724033064000,"contributors":[{"name":"snowy","email":"snowykami@outlook.com","commits":3}]},"readingTime":{"minutes":0.88,"words":264},"filePathRelative":"en/dev/api/liteyuki/bot/lifespan.md","localizedDate":"August 19, 2024","autoDesc":true}');export{p as comp,i as data};
