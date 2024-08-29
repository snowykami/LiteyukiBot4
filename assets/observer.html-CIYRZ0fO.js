import{_ as n,o as e,c as s,d as a}from"./app-EhCe7g9m.js";const t={},o=a(`<h3 id="func-debounce" tabindex="-1"><a class="header-anchor" href="#func-debounce"><span><em>func</em> <code>debounce()</code></span></a></h3><p><strong>说明</strong>: 防抖函数</p><details><summary><b>源代码</b></summary><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">debounce</span><span class="token punctuation">(</span>wait<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    防抖函数
    &quot;&quot;&quot;</span>

    <span class="token keyword">def</span> <span class="token function">decorator</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>

        <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">nonlocal</span> last_call_time
            current_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> current_time <span class="token operator">-</span> last_call_time <span class="token operator">&gt;</span> wait<span class="token punctuation">:</span>
                last_call_time <span class="token operator">=</span> current_time
                <span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        last_call_time <span class="token operator">=</span> <span class="token boolean">None</span>
        <span class="token keyword">return</span> wrapper
    <span class="token keyword">return</span> decorator
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="func-on-file-system-event-directories-tuple-str-true-recursive-bool-none-callable-callback-func-callback-func" tabindex="-1"><a class="header-anchor" href="#func-on-file-system-event-directories-tuple-str-true-recursive-bool-none-callable-callback-func-callback-func"><span><em>func</em> <code>on_file_system_event(directories: tuple[str] = True, recursive: bool = None) -&gt; Callable[[CALLBACK_FUNC], CALLBACK_FUNC]</code></span></a></h3><p><strong>说明</strong>: 注册文件系统变化监听器</p><p><strong>返回</strong>: 装饰器，装饰一个函数在接收到数据后执行</p><p><strong>参数</strong>:</p><blockquote><ul><li>directories: 监听目录们</li><li>recursive: 是否递归监听子目录</li><li>event_filter: 事件过滤器, 返回True则执行回调函数</li></ul></blockquote><details><summary><b>源代码</b></summary><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">on_file_system_event</span><span class="token punctuation">(</span>directories<span class="token punctuation">:</span> <span class="token builtin">tuple</span><span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span><span class="token punctuation">,</span> recursive<span class="token punctuation">:</span> <span class="token builtin">bool</span><span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> event_filter<span class="token punctuation">:</span> FILTER_FUNC<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> Callable<span class="token punctuation">[</span><span class="token punctuation">[</span>CALLBACK_FUNC<span class="token punctuation">]</span><span class="token punctuation">,</span> CALLBACK_FUNC<span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    注册文件系统变化监听器
    Args:
        directories: 监听目录们
        recursive: 是否递归监听子目录
        event_filter: 事件过滤器, 返回True则执行回调函数
    Returns:
        装饰器，装饰一个函数在接收到数据后执行
    &quot;&quot;&quot;</span>

    <span class="token keyword">def</span> <span class="token function">decorator</span><span class="token punctuation">(</span>func<span class="token punctuation">:</span> CALLBACK_FUNC<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> CALLBACK_FUNC<span class="token punctuation">:</span>

        <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span>event<span class="token punctuation">:</span> FileSystemEvent<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> event_filter <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token keyword">not</span> event_filter<span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span>
            func<span class="token punctuation">(</span>event<span class="token punctuation">)</span>
        code_modified_handler <span class="token operator">=</span> CodeModifiedHandler<span class="token punctuation">(</span><span class="token punctuation">)</span>
        code_modified_handler<span class="token punctuation">.</span>on_modified <span class="token operator">=</span> wrapper
        <span class="token keyword">for</span> directory <span class="token keyword">in</span> directories<span class="token punctuation">:</span>
            observer<span class="token punctuation">.</span>schedule<span class="token punctuation">(</span>code_modified_handler<span class="token punctuation">,</span> directory<span class="token punctuation">,</span> recursive<span class="token operator">=</span>recursive<span class="token punctuation">)</span>
        <span class="token keyword">return</span> func
    <span class="token keyword">return</span> decorator
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="class-codemodifiedhandler-filesystemeventhandler" tabindex="-1"><a class="header-anchor" href="#class-codemodifiedhandler-filesystemeventhandler"><span><strong>class</strong> <code>CodeModifiedHandler(FileSystemEventHandler)</code></span></a></h3><h3 id="debounce-1" tabindex="-1"><a class="header-anchor" href="#debounce-1"><span><code>@debounce(1)</code></span></a></h3><h3 id="method-on-modified-self-event" tabindex="-1"><a class="header-anchor" href="#method-on-modified-self-event"><span><em>method</em> <code>on_modified(self, event)</code></span></a></h3><details><summary><b>源代码</b></summary><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@debounce</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">on_modified</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">raise</span> NotImplementedError<span class="token punctuation">(</span><span class="token string">&#39;on_modified must be implemented&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="method-on-created-self-event" tabindex="-1"><a class="header-anchor" href="#method-on-created-self-event"><span><em>method</em> <code>on_created(self, event)</code></span></a></h3><details><summary><b>源代码</b></summary><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">on_created</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">:</span>
    self<span class="token punctuation">.</span>on_modified<span class="token punctuation">(</span>event<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="method-on-deleted-self-event" tabindex="-1"><a class="header-anchor" href="#method-on-deleted-self-event"><span><em>method</em> <code>on_deleted(self, event)</code></span></a></h3><details><summary><b>源代码</b></summary><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">on_deleted</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">:</span>
    self<span class="token punctuation">.</span>on_modified<span class="token punctuation">(</span>event<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="method-on-moved-self-event" tabindex="-1"><a class="header-anchor" href="#method-on-moved-self-event"><span><em>method</em> <code>on_moved(self, event)</code></span></a></h3><details><summary><b>源代码</b></summary><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">on_moved</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">:</span>
    self<span class="token punctuation">.</span>on_modified<span class="token punctuation">(</span>event<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="method-on-any-event-self-event" tabindex="-1"><a class="header-anchor" href="#method-on-any-event-self-event"><span><em>method</em> <code>on_any_event(self, event)</code></span></a></h3><details><summary><b>源代码</b></summary><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">on_any_event</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">:</span>
    self<span class="token punctuation">.</span>on_modified<span class="token punctuation">(</span>event<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="var-callback-func-callable-filesystemevent-none" tabindex="-1"><a class="header-anchor" href="#var-callback-func-callable-filesystemevent-none"><span><em><strong>var</strong></em> <code>CALLBACK_FUNC = Callable[[FileSystemEvent], None]</code></span></a></h3><ul><li><p><strong>类型</strong>: <code>TypeAlias</code></p></li><li><p><strong>说明</strong>: 位置1为FileSystemEvent</p></li></ul><h3 id="var-filter-func-callable-filesystemevent-bool" tabindex="-1"><a class="header-anchor" href="#var-filter-func-callable-filesystemevent-bool"><span><em><strong>var</strong></em> <code>FILTER_FUNC = Callable[[FileSystemEvent], bool]</code></span></a></h3><ul><li><p><strong>类型</strong>: <code>TypeAlias</code></p></li><li><p><strong>说明</strong>: 位置1为FileSystemEvent</p></li></ul>`,25),l=[o];function i(c,p){return e(),s("div",null,l)}const r=n(t,[["render",i],["__file","observer.html.vue"]]),u=JSON.parse('{"path":"/api/dev/observer.html","title":"liteyuki.dev.observer","lang":"zh-CN","frontmatter":{"title":"liteyuki.dev.observer","description":"func debounce() 说明: 防抖函数 源代码 func on_file_system_event(directories: tuple[str] = True, recursive: bool = None) -> Callable[[CALLBACK_FUNC], CALLBACK_FUNC] 说明: 注册文件系统变化监听器 返回: 装饰...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope-docs-demo.netlify.app/en/api/dev/observer.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/api/dev/observer.html"}],["meta",{"property":"og:site_name","content":"LiteyukiBot 轻雪机器人"}],["meta",{"property":"og:title","content":"liteyuki.dev.observer"}],["meta",{"property":"og:description","content":"func debounce() 说明: 防抖函数 源代码 func on_file_system_event(directories: tuple[str] = True, recursive: bool = None) -> Callable[[CALLBACK_FUNC], CALLBACK_FUNC] 说明: 注册文件系统变化监听器 返回: 装饰..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"liteyuki.dev.observer\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":3,"title":"func debounce()","slug":"func-debounce","link":"#func-debounce","children":[]},{"level":3,"title":"func on_file_system_event(directories: tuple[str] = True, recursive: bool = None) -> Callable[[CALLBACK_FUNC], CALLBACK_FUNC]","slug":"func-on-file-system-event-directories-tuple-str-true-recursive-bool-none-callable-callback-func-callback-func","link":"#func-on-file-system-event-directories-tuple-str-true-recursive-bool-none-callable-callback-func-callback-func","children":[]},{"level":3,"title":"class CodeModifiedHandler(FileSystemEventHandler)","slug":"class-codemodifiedhandler-filesystemeventhandler","link":"#class-codemodifiedhandler-filesystemeventhandler","children":[]},{"level":3,"title":"@debounce(1)","slug":"debounce-1","link":"#debounce-1","children":[]},{"level":3,"title":"method on_modified(self, event)","slug":"method-on-modified-self-event","link":"#method-on-modified-self-event","children":[]},{"level":3,"title":"method on_created(self, event)","slug":"method-on-created-self-event","link":"#method-on-created-self-event","children":[]},{"level":3,"title":"method on_deleted(self, event)","slug":"method-on-deleted-self-event","link":"#method-on-deleted-self-event","children":[]},{"level":3,"title":"method on_moved(self, event)","slug":"method-on-moved-self-event","link":"#method-on-moved-self-event","children":[]},{"level":3,"title":"method on_any_event(self, event)","slug":"method-on-any-event-self-event","link":"#method-on-any-event-self-event","children":[]},{"level":3,"title":"var CALLBACK_FUNC = Callable[[FileSystemEvent], None]","slug":"var-callback-func-callable-filesystemevent-none","link":"#var-callback-func-callable-filesystemevent-none","children":[]},{"level":3,"title":"var FILTER_FUNC = Callable[[FileSystemEvent], bool]","slug":"var-filter-func-callable-filesystemevent-bool","link":"#var-filter-func-callable-filesystemevent-bool","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.33,"words":399},"filePathRelative":"api/dev/observer.md","autoDesc":true}');export{r as comp,u as data};
