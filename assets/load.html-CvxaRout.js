import{_ as e,o as a,c as t,e as l}from"./app-ClSKFI0Z.js";const o={},n=l(`<h3 id="def-load-plugin-module-path-str-path-optional-plugin" tabindex="-1"><a class="header-anchor" href="#def-load-plugin-module-path-str-path-optional-plugin"><span><em><strong>def</strong></em> <code>load_plugin(module_path: str | Path) -&gt; Optional[Plugin]</code></span></a></h3><p>加载单个插件，可以是本地插件或是通过 <code>pip</code> 安装的插件。</p><p>参数:</p><pre><code>module_path: 插件名称 \`path.to.your.plugin\`

或插件路径 \`pathlib.Path(path/to/your/plugin)\`
</code></pre><h3 id="def-load-plugins-set-plugin" tabindex="-1"><a class="header-anchor" href="#def-load-plugins-set-plugin"><span><em><strong>def</strong></em> <code>load_plugins() -&gt; set[Plugin]</code></span></a></h3><p>导入文件夹下多个插件</p><p>参数:</p><pre><code>plugin_dir: 文件夹路径

ignore_warning: 是否忽略警告，通常是目录不存在或目录为空
</code></pre><h3 id="def-format-display-name-display-name-str-plugin-type-plugintype-str" tabindex="-1"><a class="header-anchor" href="#def-format-display-name-display-name-str-plugin-type-plugintype-str"><span><em><strong>def</strong></em> <code>format_display_name(display_name: str, plugin_type: PluginType) -&gt; str</code></span></a></h3><p>设置插件名称颜色，根据不同类型插件设置颜色</p><p>Args:</p><pre><code>display_name: 插件名称

plugin_type: 插件类型
</code></pre><p>Returns:</p><pre><code>str: 设置后的插件名称 &lt;y&gt;name&lt;/y&gt;
</code></pre><h3 id="var-module-path-path-to-module-name-path-module-path-if-isinstance-module-path-path-else-module-path" tabindex="-1"><a class="header-anchor" href="#var-module-path-path-to-module-name-path-module-path-if-isinstance-module-path-path-else-module-path"><span><em><strong>var</strong></em> <code>module_path = path_to_module_name(Path(module_path)) if isinstance(module_path, Path) else module_path</code></span></a></h3><h3 id="var-plugins-set" tabindex="-1"><a class="header-anchor" href="#var-plugins-set"><span><em><strong>var</strong></em> <code>plugins = set()</code></span></a></h3><h3 id="var-color-y" tabindex="-1"><a class="header-anchor" href="#var-color-y"><span><em><strong>var</strong></em> <code>color = &#39;y&#39;</code></span></a></h3><h3 id="var-module-import-module-module-path" tabindex="-1"><a class="header-anchor" href="#var-module-import-module-module-path"><span><em><strong>var</strong></em> <code>module = import_module(module_path)</code></span></a></h3><h3 id="var-display-name-module-name-split-1" tabindex="-1"><a class="header-anchor" href="#var-display-name-module-name-split-1"><span><em><strong>var</strong></em> <code>display_name = module.__name__.split(&#39;.&#39;)[-1]</code></span></a></h3><h3 id="var-display-name-format-display-name-f-metadata-name-module-name-split-1-metadata-type" tabindex="-1"><a class="header-anchor" href="#var-display-name-format-display-name-f-metadata-name-module-name-split-1-metadata-type"><span><em><strong>var</strong></em> <code>display_name = format_display_name(f&quot;{metadata.name}({module.__name__.split(&#39;.&#39;)[-1]})&quot;, metadata.type)</code></span></a></h3><h3 id="var-path-path-os-path-join-dir-path-f" tabindex="-1"><a class="header-anchor" href="#var-path-path-os-path-join-dir-path-f"><span><em><strong>var</strong></em> <code>path = Path(os.path.join(dir_path, f))</code></span></a></h3><h3 id="var-module-name-none" tabindex="-1"><a class="header-anchor" href="#var-module-name-none"><span><em><strong>var</strong></em> <code>module_name = None</code></span></a></h3><h3 id="var-color-m" tabindex="-1"><a class="header-anchor" href="#var-color-m"><span><em><strong>var</strong></em> <code>color = &#39;m&#39;</code></span></a></h3><h3 id="var-color-g" tabindex="-1"><a class="header-anchor" href="#var-color-g"><span><em><strong>var</strong></em> <code>color = &#39;g&#39;</code></span></a></h3><h3 id="var-color-e" tabindex="-1"><a class="header-anchor" href="#var-color-e"><span><em><strong>var</strong></em> <code>color = &#39;e&#39;</code></span></a></h3><h3 id="var-color-c" tabindex="-1"><a class="header-anchor" href="#var-color-c"><span><em><strong>var</strong></em> <code>color = &#39;c&#39;</code></span></a></h3><h3 id="var-module-name-f-path-to-module-name-path-dir-path-f-3" tabindex="-1"><a class="header-anchor" href="#var-module-name-f-path-to-module-name-path-dir-path-f-3"><span><em><strong>var</strong></em> <code>module_name = f&#39;{path_to_module_name(Path(dir_path))}.{f[:-3]}&#39;</code></span></a></h3><h3 id="var-module-name-path-to-module-name-path" tabindex="-1"><a class="header-anchor" href="#var-module-name-path-to-module-name-path"><span><em><strong>var</strong></em> <code>module_name = path_to_module_name(path)</code></span></a></h3>`,28),d=[n];function p(r,i){return a(),t("div",null,d)}const s=e(o,[["render",p],["__file","load.html.vue"]]),h=JSON.parse(`{"path":"/dev/api/plugin/load.html","title":"liteyuki.plugin.load","lang":"zh-CN","frontmatter":{"title":"liteyuki.plugin.load","order":1,"icon":"laptop-code","category":"API","description":"def load_plugin(module_path: str | Path) -> Optional[Plugin] 加载单个插件，可以是本地插件或是通过 pip 安装的插件。 参数: def load_plugins() -> set[Plugin] 导入文件夹下多个插件 参数: def format_display_name(display_n...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/dev/api/plugin/load.html"}],["meta",{"property":"og:site_name","content":"LiteyukiBot 轻雪机器人"}],["meta",{"property":"og:title","content":"liteyuki.plugin.load"}],["meta",{"property":"og:description","content":"def load_plugin(module_path: str | Path) -> Optional[Plugin] 加载单个插件，可以是本地插件或是通过 pip 安装的插件。 参数: def load_plugins() -> set[Plugin] 导入文件夹下多个插件 参数: def format_display_name(display_n..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-19T02:22:24.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-19T02:22:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"liteyuki.plugin.load\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-19T02:22:24.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"def load_plugin(module_path: str | Path) -> Optional[Plugin]","slug":"def-load-plugin-module-path-str-path-optional-plugin","link":"#def-load-plugin-module-path-str-path-optional-plugin","children":[]},{"level":3,"title":"def load_plugins() -> set[Plugin]","slug":"def-load-plugins-set-plugin","link":"#def-load-plugins-set-plugin","children":[]},{"level":3,"title":"def format_display_name(display_name: str, plugin_type: PluginType) -> str","slug":"def-format-display-name-display-name-str-plugin-type-plugintype-str","link":"#def-format-display-name-display-name-str-plugin-type-plugintype-str","children":[]},{"level":3,"title":"var module_path = path_to_module_name(Path(module_path)) if isinstance(module_path, Path) else module_path","slug":"var-module-path-path-to-module-name-path-module-path-if-isinstance-module-path-path-else-module-path","link":"#var-module-path-path-to-module-name-path-module-path-if-isinstance-module-path-path-else-module-path","children":[]},{"level":3,"title":"var plugins = set()","slug":"var-plugins-set","link":"#var-plugins-set","children":[]},{"level":3,"title":"var color = 'y'","slug":"var-color-y","link":"#var-color-y","children":[]},{"level":3,"title":"var module = import_module(module_path)","slug":"var-module-import-module-module-path","link":"#var-module-import-module-module-path","children":[]},{"level":3,"title":"var display_name = module.__name__.split('.')[-1]","slug":"var-display-name-module-name-split-1","link":"#var-display-name-module-name-split-1","children":[]},{"level":3,"title":"var display_name = format_display_name(f\\"{metadata.name}({module.__name__.split('.')[-1]})\\", metadata.type)","slug":"var-display-name-format-display-name-f-metadata-name-module-name-split-1-metadata-type","link":"#var-display-name-format-display-name-f-metadata-name-module-name-split-1-metadata-type","children":[]},{"level":3,"title":"var path = Path(os.path.join(dir_path, f))","slug":"var-path-path-os-path-join-dir-path-f","link":"#var-path-path-os-path-join-dir-path-f","children":[]},{"level":3,"title":"var module_name = None","slug":"var-module-name-none","link":"#var-module-name-none","children":[]},{"level":3,"title":"var color = 'm'","slug":"var-color-m","link":"#var-color-m","children":[]},{"level":3,"title":"var color = 'g'","slug":"var-color-g","link":"#var-color-g","children":[]},{"level":3,"title":"var color = 'e'","slug":"var-color-e","link":"#var-color-e","children":[]},{"level":3,"title":"var color = 'c'","slug":"var-color-c","link":"#var-color-c","children":[]},{"level":3,"title":"var module_name = f'{path_to_module_name(Path(dir_path))}.{f[:-3]}'","slug":"var-module-name-f-path-to-module-name-path-dir-path-f-3","link":"#var-module-name-f-path-to-module-name-path-dir-path-f-3","children":[]},{"level":3,"title":"var module_name = path_to_module_name(path)","slug":"var-module-name-path-to-module-name-path","link":"#var-module-name-path-to-module-name-path","children":[]}],"git":{"createdTime":1724031826000,"updatedTime":1724034144000,"contributors":[{"name":"snowy","email":"snowykami@outlook.com","commits":3}]},"readingTime":{"minutes":0.72,"words":216},"filePathRelative":"dev/api/plugin/load.md","localizedDate":"2024年8月19日","autoDesc":true}`);export{s as comp,h as data};
