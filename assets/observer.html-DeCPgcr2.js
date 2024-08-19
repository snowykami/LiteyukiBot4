import{_ as e,o as n,c as t,e as o}from"./app-DuYQPtzk.js";const a={},d=o(`<h3 id="def-debounce-wait-any-none" tabindex="-1"><a class="header-anchor" href="#def-debounce-wait-any-none"><span><em><strong>def</strong></em> <code>debounce(wait: Any) -&gt; None</code></span></a></h3><p>防抖函数</p><h3 id="def-on-file-system-event-directories-tuple-str-recursive-bool-event-filter-filter-func-callable-callback-func-callback-func" tabindex="-1"><a class="header-anchor" href="#def-on-file-system-event-directories-tuple-str-recursive-bool-event-filter-filter-func-callable-callback-func-callback-func"><span><em><strong>def</strong></em> <code>on_file_system_event(directories: tuple[str], recursive: bool, event_filter: FILTER_FUNC) -&gt; Callable[[CALLBACK_FUNC], CALLBACK_FUNC]</code></span></a></h3><p>注册文件系统变化监听器</p><p>Args:</p><pre><code>directories: 监听目录们

recursive: 是否递归监听子目录

event_filter: 事件过滤器, 返回True则执行回调函数
</code></pre><p>Returns:</p><pre><code>装饰器，装饰一个函数在接收到数据后执行
</code></pre><h3 id="def-decorator-func-any-none" tabindex="-1"><a class="header-anchor" href="#def-decorator-func-any-none"><span><em><strong>def</strong></em> <code>decorator(func: Any) -&gt; None</code></span></a></h3><h3 id="def-decorator-func-callback-func-callback-func" tabindex="-1"><a class="header-anchor" href="#def-decorator-func-callback-func-callback-func"><span><em><strong>def</strong></em> <code>decorator(func: CALLBACK_FUNC) -&gt; CALLBACK_FUNC</code></span></a></h3><h3 id="def-wrapper-none" tabindex="-1"><a class="header-anchor" href="#def-wrapper-none"><span><em><strong>def</strong></em> <code>wrapper() -&gt; None</code></span></a></h3><h3 id="def-wrapper-event-filesystemevent-none" tabindex="-1"><a class="header-anchor" href="#def-wrapper-event-filesystemevent-none"><span><em><strong>def</strong></em> <code>wrapper(event: FileSystemEvent) -&gt; None</code></span></a></h3><h3 id="class-codemodifiedhandler-filesystemeventhandler" tabindex="-1"><a class="header-anchor" href="#class-codemodifiedhandler-filesystemeventhandler"><span><em><strong>class</strong></em> <code>CodeModifiedHandler(FileSystemEventHandler)</code></span></a></h3><p>Handler for code file changes</p><h3 id="def-on-modified-self-event-any-none" tabindex="-1"><a class="header-anchor" href="#def-on-modified-self-event-any-none"><span>  <em><strong>def</strong></em> <code>on_modified(self, event: Any) -&gt; None</code></span></a></h3><p> </p><h3 id="def-on-created-self-event-any-none" tabindex="-1"><a class="header-anchor" href="#def-on-created-self-event-any-none"><span>  <em><strong>def</strong></em> <code>on_created(self, event: Any) -&gt; None</code></span></a></h3><p> </p><h3 id="def-on-deleted-self-event-any-none" tabindex="-1"><a class="header-anchor" href="#def-on-deleted-self-event-any-none"><span>  <em><strong>def</strong></em> <code>on_deleted(self, event: Any) -&gt; None</code></span></a></h3><p> </p><h3 id="def-on-moved-self-event-any-none" tabindex="-1"><a class="header-anchor" href="#def-on-moved-self-event-any-none"><span>  <em><strong>def</strong></em> <code>on_moved(self, event: Any) -&gt; None</code></span></a></h3><p> </p><h3 id="def-on-any-event-self-event-any-none" tabindex="-1"><a class="header-anchor" href="#def-on-any-event-self-event-any-none"><span>  <em><strong>def</strong></em> <code>on_any_event(self, event: Any) -&gt; None</code></span></a></h3><p> </p>`,24),l=[d];function r(c,s){return n(),t("div",null,l)}const f=e(a,[["render",r],["__file","observer.html.vue"]]),p=JSON.parse('{"path":"/dev/api/dev/observer.html","title":"liteyuki.dev.observer","lang":"zh-CN","frontmatter":{"title":"liteyuki.dev.observer","order":1,"icon":"laptop-code","category":"API","description":"def debounce(wait: Any) -> None 防抖函数 def on_file_system_event(directories: tuple[str], recursive: bool, event_filter: FILTER_FUNC) -> Callable[[CALLBACK_FUNC], CALLBACK_FUNC] 注册...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/dev/api/dev/observer.html"}],["meta",{"property":"og:site_name","content":"LiteyukiBot 轻雪机器人"}],["meta",{"property":"og:title","content":"liteyuki.dev.observer"}],["meta",{"property":"og:description","content":"def debounce(wait: Any) -> None 防抖函数 def on_file_system_event(directories: tuple[str], recursive: bool, event_filter: FILTER_FUNC) -> Callable[[CALLBACK_FUNC], CALLBACK_FUNC] 注册..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-19T02:04:24.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-19T02:04:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"liteyuki.dev.observer\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-19T02:04:24.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"def debounce(wait: Any) -> None","slug":"def-debounce-wait-any-none","link":"#def-debounce-wait-any-none","children":[]},{"level":3,"title":"def on_file_system_event(directories: tuple[str], recursive: bool, event_filter: FILTER_FUNC) -> Callable[[CALLBACK_FUNC], CALLBACK_FUNC]","slug":"def-on-file-system-event-directories-tuple-str-recursive-bool-event-filter-filter-func-callable-callback-func-callback-func","link":"#def-on-file-system-event-directories-tuple-str-recursive-bool-event-filter-filter-func-callable-callback-func-callback-func","children":[]},{"level":3,"title":"def decorator(func: Any) -> None","slug":"def-decorator-func-any-none","link":"#def-decorator-func-any-none","children":[]},{"level":3,"title":"def decorator(func: CALLBACK_FUNC) -> CALLBACK_FUNC","slug":"def-decorator-func-callback-func-callback-func","link":"#def-decorator-func-callback-func-callback-func","children":[]},{"level":3,"title":"def wrapper() -> None","slug":"def-wrapper-none","link":"#def-wrapper-none","children":[]},{"level":3,"title":"def wrapper(event: FileSystemEvent) -> None","slug":"def-wrapper-event-filesystemevent-none","link":"#def-wrapper-event-filesystemevent-none","children":[]},{"level":3,"title":"class CodeModifiedHandler(FileSystemEventHandler)","slug":"class-codemodifiedhandler-filesystemeventhandler","link":"#class-codemodifiedhandler-filesystemeventhandler","children":[]},{"level":3,"title":"def on_modified(self, event: Any) -> None","slug":"def-on-modified-self-event-any-none","link":"#def-on-modified-self-event-any-none","children":[]},{"level":3,"title":"def on_created(self, event: Any) -> None","slug":"def-on-created-self-event-any-none","link":"#def-on-created-self-event-any-none","children":[]},{"level":3,"title":"def on_deleted(self, event: Any) -> None","slug":"def-on-deleted-self-event-any-none","link":"#def-on-deleted-self-event-any-none","children":[]},{"level":3,"title":"def on_moved(self, event: Any) -> None","slug":"def-on-moved-self-event-any-none","link":"#def-on-moved-self-event-any-none","children":[]},{"level":3,"title":"def on_any_event(self, event: Any) -> None","slug":"def-on-any-event-self-event-any-none","link":"#def-on-any-event-self-event-any-none","children":[]}],"git":{"createdTime":1724031826000,"updatedTime":1724033064000,"contributors":[{"name":"snowy","email":"snowykami@outlook.com","commits":3}]},"readingTime":{"minutes":0.53,"words":159},"filePathRelative":"dev/api/dev/observer.md","localizedDate":"2024年8月19日","autoDesc":true}');export{f as comp,p as data};
