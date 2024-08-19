import{_ as e,o as t,c as a,e as r}from"./app-Dk7jq3Nw.js";const n={},o=r(`<h3 id="def-get-relative-path-base-path-str-target-path-str-str" tabindex="-1"><a class="header-anchor" href="#def-get-relative-path-base-path-str-target-path-str-str"><span><em><strong>def</strong></em> <code>get_relative_path(base_path: str, target_path: str) -&gt; str</code></span></a></h3><p>获取相对路径</p><p>Args:</p><pre><code>base_path: 基础路径

target_path: 目标路径
</code></pre><h3 id="def-write-to-files-file-data-dict-str-str-none" tabindex="-1"><a class="header-anchor" href="#def-write-to-files-file-data-dict-str-str-none"><span><em><strong>def</strong></em> <code>write_to_files(file_data: dict[str, str]) -&gt; None</code></span></a></h3><p>输出文件</p><p>Args:</p><pre><code>file_data: 文件数据 相对路径
</code></pre><h3 id="def-get-file-list-module-folder-str-none" tabindex="-1"><a class="header-anchor" href="#def-get-file-list-module-folder-str-none"><span><em><strong>def</strong></em> <code>get_file_list(module_folder: str) -&gt; None</code></span></a></h3><h3 id="def-get-module-info-normal-file-path-str-ignore-private-bool-moduleinfo" tabindex="-1"><a class="header-anchor" href="#def-get-module-info-normal-file-path-str-ignore-private-bool-moduleinfo"><span><em><strong>def</strong></em> <code>get_module_info_normal(file_path: str, ignore_private: bool) -&gt; ModuleInfo</code></span></a></h3><p>获取函数和类</p><p>Args:</p><pre><code>file_path: Python 文件路径

ignore_private: 忽略私有函数和类
</code></pre><p>Returns:</p><pre><code>模块信息
</code></pre><h3 id="def-generate-markdown-module-info-moduleinfo-front-matter-any-str" tabindex="-1"><a class="header-anchor" href="#def-generate-markdown-module-info-moduleinfo-front-matter-any-str"><span><em><strong>def</strong></em> <code>generate_markdown(module_info: ModuleInfo, front_matter: Any) -&gt; str</code></span></a></h3><p>生成模块的Markdown</p><p>你可在此自定义生成的Markdown格式</p><p>Args:</p><pre><code>module_info: 模块信息

front_matter: 自定义选项title, index, icon, category
</code></pre><p>Returns:</p><pre><code>Markdown 字符串
</code></pre><h3 id="def-generate-docs-module-folder-str-output-dir-str-with-top-bool-ignored-paths-any-none" tabindex="-1"><a class="header-anchor" href="#def-generate-docs-module-folder-str-output-dir-str-with-top-bool-ignored-paths-any-none"><span><em><strong>def</strong></em> <code>generate_docs(module_folder: str, output_dir: str, with_top: bool, ignored_paths: Any) -&gt; None</code></span></a></h3><p>生成文档</p><p>Args:</p><pre><code>module_folder: 模块文件夹

output_dir: 输出文件夹

with_top: 是否包含顶层文件夹 False时例如docs/api/module_a, docs/api/module_b， True时例如docs/api/module/module_a.md， docs/api/module/module_b.md

ignored_paths: 忽略的路径
</code></pre><h3 id="class-deftype-enum" tabindex="-1"><a class="header-anchor" href="#class-deftype-enum"><span><em><strong>class</strong></em> <code>DefType(Enum)</code></span></a></h3><h3 id="attr-function-function" tabindex="-1"><a class="header-anchor" href="#attr-function-function"><span>  <em><strong>attr</strong></em> <code>FUNCTION: &#39;function&#39;</code></span></a></h3><h3 id="attr-method-method" tabindex="-1"><a class="header-anchor" href="#attr-method-method"><span>  <em><strong>attr</strong></em> <code>METHOD: &#39;method&#39;</code></span></a></h3><h3 id="attr-static-method-staticmethod" tabindex="-1"><a class="header-anchor" href="#attr-static-method-staticmethod"><span>  <em><strong>attr</strong></em> <code>STATIC_METHOD: &#39;staticmethod&#39;</code></span></a></h3><h3 id="attr-class-method-classmethod" tabindex="-1"><a class="header-anchor" href="#attr-class-method-classmethod"><span>  <em><strong>attr</strong></em> <code>CLASS_METHOD: &#39;classmethod&#39;</code></span></a></h3><h3 id="attr-property-property" tabindex="-1"><a class="header-anchor" href="#attr-property-property"><span>  <em><strong>attr</strong></em> <code>PROPERTY: &#39;property&#39;</code></span></a></h3><h3 id="class-functioninfo-basemodel" tabindex="-1"><a class="header-anchor" href="#class-functioninfo-basemodel"><span><em><strong>class</strong></em> <code>FunctionInfo(BaseModel)</code></span></a></h3><h3 id="class-attributeinfo-basemodel" tabindex="-1"><a class="header-anchor" href="#class-attributeinfo-basemodel"><span><em><strong>class</strong></em> <code>AttributeInfo(BaseModel)</code></span></a></h3><h3 id="class-classinfo-basemodel" tabindex="-1"><a class="header-anchor" href="#class-classinfo-basemodel"><span><em><strong>class</strong></em> <code>ClassInfo(BaseModel)</code></span></a></h3><h3 id="class-moduleinfo-basemodel" tabindex="-1"><a class="header-anchor" href="#class-moduleinfo-basemodel"><span><em><strong>class</strong></em> <code>ModuleInfo(BaseModel)</code></span></a></h3><h3 id="var-no-type-any-any" tabindex="-1"><a class="header-anchor" href="#var-no-type-any-any"><span><em><strong>var</strong></em> <code>NO_TYPE_ANY = &#39;Any&#39;</code></span></a></h3><h3 id="var-no-type-hint-notypehint" tabindex="-1"><a class="header-anchor" href="#var-no-type-hint-notypehint"><span><em><strong>var</strong></em> <code>NO_TYPE_HINT = &#39;NoTypeHint&#39;</code></span></a></h3><h3 id="var-function-function" tabindex="-1"><a class="header-anchor" href="#var-function-function"><span><em><strong>var</strong></em> <code>FUNCTION = &#39;function&#39;</code></span></a></h3><h3 id="var-method-method" tabindex="-1"><a class="header-anchor" href="#var-method-method"><span><em><strong>var</strong></em> <code>METHOD = &#39;method&#39;</code></span></a></h3><h3 id="var-static-method-staticmethod" tabindex="-1"><a class="header-anchor" href="#var-static-method-staticmethod"><span><em><strong>var</strong></em> <code>STATIC_METHOD = &#39;staticmethod&#39;</code></span></a></h3><h3 id="var-class-method-classmethod" tabindex="-1"><a class="header-anchor" href="#var-class-method-classmethod"><span><em><strong>var</strong></em> <code>CLASS_METHOD = &#39;classmethod&#39;</code></span></a></h3><h3 id="var-property-property" tabindex="-1"><a class="header-anchor" href="#var-property-property"><span><em><strong>var</strong></em> <code>PROPERTY = &#39;property&#39;</code></span></a></h3><h3 id="var-file-list" tabindex="-1"><a class="header-anchor" href="#var-file-list"><span><em><strong>var</strong></em> <code>file_list = []</code></span></a></h3><h3 id="var-dot-sep-module-path-file-path-replace-os-sep-replace-py-replace-pyi" tabindex="-1"><a class="header-anchor" href="#var-dot-sep-module-path-file-path-replace-os-sep-replace-py-replace-pyi"><span><em><strong>var</strong></em> <code>dot_sep_module_path = file_path.replace(os.sep, &#39;.&#39;).replace(&#39;.py&#39;, &#39;&#39;).replace(&#39;.pyi&#39;, &#39;&#39;)</code></span></a></h3><h3 id="var-module-docstring-ast-get-docstring-tree" tabindex="-1"><a class="header-anchor" href="#var-module-docstring-ast-get-docstring-tree"><span><em><strong>var</strong></em> <code>module_docstring = ast.get_docstring(tree)</code></span></a></h3><h3 id="var-module-info-moduleinfo-module-path-dot-sep-module-path-functions-classes-attributes-docstring-module-docstring-if-module-docstring-else" tabindex="-1"><a class="header-anchor" href="#var-module-info-moduleinfo-module-path-dot-sep-module-path-functions-classes-attributes-docstring-module-docstring-if-module-docstring-else"><span><em><strong>var</strong></em> <code>module_info = ModuleInfo(module_path=dot_sep_module_path, functions=[], classes=[], attributes=[], docstring=module_docstring if module_docstring else &#39;&#39;)</code></span></a></h3><h3 id="var-content" tabindex="-1"><a class="header-anchor" href="#var-content"><span><em><strong>var</strong></em> <code>content = &#39;&#39;</code></span></a></h3><h3 id="var-front-matter-n-n-join-f-k-v-for-k-v-in-front-matter-items-n-n-n" tabindex="-1"><a class="header-anchor" href="#var-front-matter-n-n-join-f-k-v-for-k-v-in-front-matter-items-n-n-n"><span><em><strong>var</strong></em> <code>front_matter = &#39;---\\n&#39; + &#39;\\n&#39;.join([f&#39;{k}: {v}&#39; for (k, v) in front_matter.items()]) + &#39;\\n---\\n\\n&#39;</code></span></a></h3><h3 id="var-file-list-get-file-list-module-folder" tabindex="-1"><a class="header-anchor" href="#var-file-list-get-file-list-module-folder"><span><em><strong>var</strong></em> <code>file_list = get_file_list(module_folder)</code></span></a></h3><h3 id="var-replace-data-init-readme-py-md" tabindex="-1"><a class="header-anchor" href="#var-replace-data-init-readme-py-md"><span><em><strong>var</strong></em> <code>replace_data = {&#39;__init__&#39;: &#39;README&#39;, &#39;.py&#39;: &#39;.md&#39;}</code></span></a></h3><h3 id="var-file-content-file-read" tabindex="-1"><a class="header-anchor" href="#var-file-content-file-read"><span><em><strong>var</strong></em> <code>file_content = file.read()</code></span></a></h3><h3 id="var-tree-ast-parse-file-content" tabindex="-1"><a class="header-anchor" href="#var-tree-ast-parse-file-content"><span><em><strong>var</strong></em> <code>tree = ast.parse(file_content)</code></span></a></h3><h3 id="var-args-with-type-f-arg-0-arg-1-if-arg-1-else-arg-0-for-arg-in-func-args" tabindex="-1"><a class="header-anchor" href="#var-args-with-type-f-arg-0-arg-1-if-arg-1-else-arg-0-for-arg-in-func-args"><span><em><strong>var</strong></em> <code>args_with_type = [f&#39;{arg[0]}: {arg[1]}&#39; if arg[1] else arg[0] for arg in func.args]</code></span></a></h3><h3 id="var-ignored-paths" tabindex="-1"><a class="header-anchor" href="#var-ignored-paths"><span><em><strong>var</strong></em> <code>ignored_paths = []</code></span></a></h3><h3 id="var-no-module-name-pyfile-path-get-relative-path-module-folder-pyfile-path" tabindex="-1"><a class="header-anchor" href="#var-no-module-name-pyfile-path-get-relative-path-module-folder-pyfile-path"><span><em><strong>var</strong></em> <code>no_module_name_pyfile_path = get_relative_path(module_folder, pyfile_path)</code></span></a></h3><h3 id="var-rel-md-path-pyfile-path-if-with-top-else-no-module-name-pyfile-path" tabindex="-1"><a class="header-anchor" href="#var-rel-md-path-pyfile-path-if-with-top-else-no-module-name-pyfile-path"><span><em><strong>var</strong></em> <code>rel_md_path = pyfile_path if with_top else no_module_name_pyfile_path</code></span></a></h3><h3 id="var-abs-md-path-os-path-join-output-dir-rel-md-path" tabindex="-1"><a class="header-anchor" href="#var-abs-md-path-os-path-join-output-dir-rel-md-path"><span><em><strong>var</strong></em> <code>abs_md_path = os.path.join(output_dir, rel_md_path)</code></span></a></h3><h3 id="var-module-info-get-module-info-normal-pyfile-path" tabindex="-1"><a class="header-anchor" href="#var-module-info-get-module-info-normal-pyfile-path"><span><em><strong>var</strong></em> <code>module_info = get_module_info_normal(pyfile_path)</code></span></a></h3><h3 id="var-md-content-generate-markdown-module-info-front-matter" tabindex="-1"><a class="header-anchor" href="#var-md-content-generate-markdown-module-info-front-matter"><span><em><strong>var</strong></em> <code>md_content = generate_markdown(module_info, front_matter)</code></span></a></h3><h3 id="var-inherit-f-join-cls-inherit-if-cls-inherit-else" tabindex="-1"><a class="header-anchor" href="#var-inherit-f-join-cls-inherit-if-cls-inherit-else"><span><em><strong>var</strong></em> <code>inherit = f&quot;({&#39;, &#39;.join(cls.inherit)})&quot; if cls.inherit else &#39;&#39;</code></span></a></h3><h3 id="var-rel-md-path-rel-md-path-replace-rk-rv" tabindex="-1"><a class="header-anchor" href="#var-rel-md-path-rel-md-path-replace-rk-rv"><span><em><strong>var</strong></em> <code>rel_md_path = rel_md_path.replace(rk, rv)</code></span></a></h3><h3 id="var-front-matter-title-module-info-module-path-replace-init-replace-n-index-true-icon-laptop-code-category-api" tabindex="-1"><a class="header-anchor" href="#var-front-matter-title-module-info-module-path-replace-init-replace-n-index-true-icon-laptop-code-category-api"><span><em><strong>var</strong></em> <code>front_matter = {&#39;title&#39;: module_info.module_path.replace(&#39;.__init__&#39;, &#39;&#39;).replace(&#39;_&#39;, &#39;\\\\n&#39;), &#39;index&#39;: &#39;true&#39;, &#39;icon&#39;: &#39;laptop-code&#39;, &#39;category&#39;: &#39;API&#39;}</code></span></a></h3><h3 id="var-front-matter-title-module-info-module-path-replace-n-order-1-icon-laptop-code-category-api" tabindex="-1"><a class="header-anchor" href="#var-front-matter-title-module-info-module-path-replace-n-order-1-icon-laptop-code-category-api"><span><em><strong>var</strong></em> <code>front_matter = {&#39;title&#39;: module_info.module_path.replace(&#39;_&#39;, &#39;\\\\n&#39;), &#39;order&#39;: &#39;1&#39;, &#39;icon&#39;: &#39;laptop-code&#39;, &#39;category&#39;: &#39;API&#39;}</code></span></a></h3><h3 id="var-function-docstring-ast-get-docstring-node" tabindex="-1"><a class="header-anchor" href="#var-function-docstring-ast-get-docstring-node"><span><em><strong>var</strong></em> <code>function_docstring = ast.get_docstring(node)</code></span></a></h3><h3 id="var-func-info-functioninfo-name-node-name-args-arg-arg-ast-unparse-arg-annotation-if-arg-annotation-else-no-type-any-for-arg-in-node-args-args-return-type-ast-unparse-node-returns-if-node-returns-else-none-docstring-function-docstring-if-function-docstring-else-type-deftype-function-is-async-isinstance-node-ast-asyncfunctiondef" tabindex="-1"><a class="header-anchor" href="#var-func-info-functioninfo-name-node-name-args-arg-arg-ast-unparse-arg-annotation-if-arg-annotation-else-no-type-any-for-arg-in-node-args-args-return-type-ast-unparse-node-returns-if-node-returns-else-none-docstring-function-docstring-if-function-docstring-else-type-deftype-function-is-async-isinstance-node-ast-asyncfunctiondef"><span><em><strong>var</strong></em> <code>func_info = FunctionInfo(name=node.name, args=[(arg.arg, ast.unparse(arg.annotation) if arg.annotation else NO_TYPE_ANY) for arg in node.args.args], return_type=ast.unparse(node.returns) if node.returns else &#39;None&#39;, docstring=function_docstring if function_docstring else &#39;&#39;, type=DefType.FUNCTION, is_async=isinstance(node, ast.AsyncFunctionDef))</code></span></a></h3><h3 id="var-class-docstring-ast-get-docstring-node" tabindex="-1"><a class="header-anchor" href="#var-class-docstring-ast-get-docstring-node"><span><em><strong>var</strong></em> <code>class_docstring = ast.get_docstring(node)</code></span></a></h3><h3 id="var-class-info-classinfo-name-node-name-docstring-class-docstring-if-class-docstring-else-methods-attributes-inherit-ast-unparse-base-for-base-in-node-bases" tabindex="-1"><a class="header-anchor" href="#var-class-info-classinfo-name-node-name-docstring-class-docstring-if-class-docstring-else-methods-attributes-inherit-ast-unparse-base-for-base-in-node-bases"><span><em><strong>var</strong></em> <code>class_info = ClassInfo(name=node.name, docstring=class_docstring if class_docstring else &#39;&#39;, methods=[], attributes=[], inherit=[ast.unparse(base) for base in node.bases])</code></span></a></h3><h3 id="var-args-with-type-f-arg-0-arg-1-if-arg-1-else-arg-0-for-arg-in-method-args" tabindex="-1"><a class="header-anchor" href="#var-args-with-type-f-arg-0-arg-1-if-arg-1-else-arg-0-for-arg-in-method-args"><span><em><strong>var</strong></em> <code>args_with_type = [f&#39;{arg[0]}: {arg[1]}&#39; if arg[1] else arg[0] for arg in method.args]</code></span></a></h3><h3 id="var-args-with-type-f-arg-0-arg-1-if-arg-1-and-arg-0-self-else-arg-0-for-arg-in-method-args" tabindex="-1"><a class="header-anchor" href="#var-args-with-type-f-arg-0-arg-1-if-arg-1-and-arg-0-self-else-arg-0-for-arg-in-method-args"><span><em><strong>var</strong></em> <code>args_with_type = [f&#39;{arg[0]}: {arg[1]}&#39; if arg[1] and arg[0] != &#39;self&#39; else arg[0] for arg in method.args]</code></span></a></h3><h3 id="var-first-arg-node-args-args-0" tabindex="-1"><a class="header-anchor" href="#var-first-arg-node-args-args-0"><span><em><strong>var</strong></em> <code>first_arg = node.args.args[0]</code></span></a></h3><h3 id="var-method-docstring-ast-get-docstring-class-node" tabindex="-1"><a class="header-anchor" href="#var-method-docstring-ast-get-docstring-class-node"><span><em><strong>var</strong></em> <code>method_docstring = ast.get_docstring(class_node)</code></span></a></h3><h3 id="var-def-type-deftype-method" tabindex="-1"><a class="header-anchor" href="#var-def-type-deftype-method"><span><em><strong>var</strong></em> <code>def_type = DefType.METHOD</code></span></a></h3><h3 id="var-def-type-deftype-static-method" tabindex="-1"><a class="header-anchor" href="#var-def-type-deftype-static-method"><span><em><strong>var</strong></em> <code>def_type = DefType.STATIC_METHOD</code></span></a></h3><h3 id="var-attr-type-no-type-hint" tabindex="-1"><a class="header-anchor" href="#var-attr-type-no-type-hint"><span><em><strong>var</strong></em> <code>attr_type = NO_TYPE_HINT</code></span></a></h3><h3 id="var-def-type-deftype-class-method" tabindex="-1"><a class="header-anchor" href="#var-def-type-deftype-class-method"><span><em><strong>var</strong></em> <code>def_type = DefType.CLASS_METHOD</code></span></a></h3><h3 id="var-attr-type-ast-unparse-node-value-annotation" tabindex="-1"><a class="header-anchor" href="#var-attr-type-ast-unparse-node-value-annotation"><span><em><strong>var</strong></em> <code>attr_type = ast.unparse(node.value.annotation)</code></span></a></h3><h3 id="var-def-type-deftype-property" tabindex="-1"><a class="header-anchor" href="#var-def-type-deftype-property"><span><em><strong>var</strong></em> <code>def_type = DefType.PROPERTY</code></span></a></h3>`,78),s=[o];function i(d,l){return t(),a("div",null,s)}const p=e(n,[["render",i],["__file","mkdoc.html.vue"]]),h=JSON.parse(`{"path":"/dev/api/mkdoc.html","title":"liteyuki.mkdoc","lang":"zh-CN","frontmatter":{"title":"liteyuki.mkdoc","order":1,"icon":"laptop-code","category":"API","description":"def get_relative_path(base_path: str, target_path: str) -> str 获取相对路径 Args: def write_to_files(file_data: dict[str, str]) -> None 输出文件 Args: def get_file_list(module_folder: str...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope-docs-demo.netlify.app/en/dev/api/mkdoc.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/dev/api/mkdoc.html"}],["meta",{"property":"og:site_name","content":"LiteyukiBot 轻雪机器人"}],["meta",{"property":"og:title","content":"liteyuki.mkdoc"}],["meta",{"property":"og:description","content":"def get_relative_path(base_path: str, target_path: str) -> str 获取相对路径 Args: def write_to_files(file_data: dict[str, str]) -> None 输出文件 Args: def get_file_list(module_folder: str..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-19T02:24:13.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-19T02:24:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"liteyuki.mkdoc\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-19T02:24:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"def get_relative_path(base_path: str, target_path: str) -> str","slug":"def-get-relative-path-base-path-str-target-path-str-str","link":"#def-get-relative-path-base-path-str-target-path-str-str","children":[]},{"level":3,"title":"def write_to_files(file_data: dict[str, str]) -> None","slug":"def-write-to-files-file-data-dict-str-str-none","link":"#def-write-to-files-file-data-dict-str-str-none","children":[]},{"level":3,"title":"def get_file_list(module_folder: str) -> None","slug":"def-get-file-list-module-folder-str-none","link":"#def-get-file-list-module-folder-str-none","children":[]},{"level":3,"title":"def get_module_info_normal(file_path: str, ignore_private: bool) -> ModuleInfo","slug":"def-get-module-info-normal-file-path-str-ignore-private-bool-moduleinfo","link":"#def-get-module-info-normal-file-path-str-ignore-private-bool-moduleinfo","children":[]},{"level":3,"title":"def generate_markdown(module_info: ModuleInfo, front_matter: Any) -> str","slug":"def-generate-markdown-module-info-moduleinfo-front-matter-any-str","link":"#def-generate-markdown-module-info-moduleinfo-front-matter-any-str","children":[]},{"level":3,"title":"def generate_docs(module_folder: str, output_dir: str, with_top: bool, ignored_paths: Any) -> None","slug":"def-generate-docs-module-folder-str-output-dir-str-with-top-bool-ignored-paths-any-none","link":"#def-generate-docs-module-folder-str-output-dir-str-with-top-bool-ignored-paths-any-none","children":[]},{"level":3,"title":"class DefType(Enum)","slug":"class-deftype-enum","link":"#class-deftype-enum","children":[]},{"level":3,"title":"attr FUNCTION: 'function'","slug":"attr-function-function","link":"#attr-function-function","children":[]},{"level":3,"title":"attr METHOD: 'method'","slug":"attr-method-method","link":"#attr-method-method","children":[]},{"level":3,"title":"attr STATIC_METHOD: 'staticmethod'","slug":"attr-static-method-staticmethod","link":"#attr-static-method-staticmethod","children":[]},{"level":3,"title":"attr CLASS_METHOD: 'classmethod'","slug":"attr-class-method-classmethod","link":"#attr-class-method-classmethod","children":[]},{"level":3,"title":"attr PROPERTY: 'property'","slug":"attr-property-property","link":"#attr-property-property","children":[]},{"level":3,"title":"class FunctionInfo(BaseModel)","slug":"class-functioninfo-basemodel","link":"#class-functioninfo-basemodel","children":[]},{"level":3,"title":"class AttributeInfo(BaseModel)","slug":"class-attributeinfo-basemodel","link":"#class-attributeinfo-basemodel","children":[]},{"level":3,"title":"class ClassInfo(BaseModel)","slug":"class-classinfo-basemodel","link":"#class-classinfo-basemodel","children":[]},{"level":3,"title":"class ModuleInfo(BaseModel)","slug":"class-moduleinfo-basemodel","link":"#class-moduleinfo-basemodel","children":[]},{"level":3,"title":"var NO_TYPE_ANY = 'Any'","slug":"var-no-type-any-any","link":"#var-no-type-any-any","children":[]},{"level":3,"title":"var NO_TYPE_HINT = 'NoTypeHint'","slug":"var-no-type-hint-notypehint","link":"#var-no-type-hint-notypehint","children":[]},{"level":3,"title":"var FUNCTION = 'function'","slug":"var-function-function","link":"#var-function-function","children":[]},{"level":3,"title":"var METHOD = 'method'","slug":"var-method-method","link":"#var-method-method","children":[]},{"level":3,"title":"var STATIC_METHOD = 'staticmethod'","slug":"var-static-method-staticmethod","link":"#var-static-method-staticmethod","children":[]},{"level":3,"title":"var CLASS_METHOD = 'classmethod'","slug":"var-class-method-classmethod","link":"#var-class-method-classmethod","children":[]},{"level":3,"title":"var PROPERTY = 'property'","slug":"var-property-property","link":"#var-property-property","children":[]},{"level":3,"title":"var file_list = []","slug":"var-file-list","link":"#var-file-list","children":[]},{"level":3,"title":"var dot_sep_module_path = file_path.replace(os.sep, '.').replace('.py', '').replace('.pyi', '')","slug":"var-dot-sep-module-path-file-path-replace-os-sep-replace-py-replace-pyi","link":"#var-dot-sep-module-path-file-path-replace-os-sep-replace-py-replace-pyi","children":[]},{"level":3,"title":"var module_docstring = ast.get_docstring(tree)","slug":"var-module-docstring-ast-get-docstring-tree","link":"#var-module-docstring-ast-get-docstring-tree","children":[]},{"level":3,"title":"var module_info = ModuleInfo(module_path=dot_sep_module_path, functions=[], classes=[], attributes=[], docstring=module_docstring if module_docstring else '')","slug":"var-module-info-moduleinfo-module-path-dot-sep-module-path-functions-classes-attributes-docstring-module-docstring-if-module-docstring-else","link":"#var-module-info-moduleinfo-module-path-dot-sep-module-path-functions-classes-attributes-docstring-module-docstring-if-module-docstring-else","children":[]},{"level":3,"title":"var content = ''","slug":"var-content","link":"#var-content","children":[]},{"level":3,"title":"var front_matter = '---\\\\n' + '\\\\n'.join([f'{k}: {v}' for (k, v) in front_matter.items()]) + '\\\\n---\\\\n\\\\n'","slug":"var-front-matter-n-n-join-f-k-v-for-k-v-in-front-matter-items-n-n-n","link":"#var-front-matter-n-n-join-f-k-v-for-k-v-in-front-matter-items-n-n-n","children":[]},{"level":3,"title":"var file_list = get_file_list(module_folder)","slug":"var-file-list-get-file-list-module-folder","link":"#var-file-list-get-file-list-module-folder","children":[]},{"level":3,"title":"var replace_data = {'__init__': 'README', '.py': '.md'}","slug":"var-replace-data-init-readme-py-md","link":"#var-replace-data-init-readme-py-md","children":[]},{"level":3,"title":"var file_content = file.read()","slug":"var-file-content-file-read","link":"#var-file-content-file-read","children":[]},{"level":3,"title":"var tree = ast.parse(file_content)","slug":"var-tree-ast-parse-file-content","link":"#var-tree-ast-parse-file-content","children":[]},{"level":3,"title":"var args_with_type = [f'{arg[0]}: {arg[1]}' if arg[1] else arg[0] for arg in func.args]","slug":"var-args-with-type-f-arg-0-arg-1-if-arg-1-else-arg-0-for-arg-in-func-args","link":"#var-args-with-type-f-arg-0-arg-1-if-arg-1-else-arg-0-for-arg-in-func-args","children":[]},{"level":3,"title":"var ignored_paths = []","slug":"var-ignored-paths","link":"#var-ignored-paths","children":[]},{"level":3,"title":"var no_module_name_pyfile_path = get_relative_path(module_folder, pyfile_path)","slug":"var-no-module-name-pyfile-path-get-relative-path-module-folder-pyfile-path","link":"#var-no-module-name-pyfile-path-get-relative-path-module-folder-pyfile-path","children":[]},{"level":3,"title":"var rel_md_path = pyfile_path if with_top else no_module_name_pyfile_path","slug":"var-rel-md-path-pyfile-path-if-with-top-else-no-module-name-pyfile-path","link":"#var-rel-md-path-pyfile-path-if-with-top-else-no-module-name-pyfile-path","children":[]},{"level":3,"title":"var abs_md_path = os.path.join(output_dir, rel_md_path)","slug":"var-abs-md-path-os-path-join-output-dir-rel-md-path","link":"#var-abs-md-path-os-path-join-output-dir-rel-md-path","children":[]},{"level":3,"title":"var module_info = get_module_info_normal(pyfile_path)","slug":"var-module-info-get-module-info-normal-pyfile-path","link":"#var-module-info-get-module-info-normal-pyfile-path","children":[]},{"level":3,"title":"var md_content = generate_markdown(module_info, front_matter)","slug":"var-md-content-generate-markdown-module-info-front-matter","link":"#var-md-content-generate-markdown-module-info-front-matter","children":[]},{"level":3,"title":"var inherit = f\\"({', '.join(cls.inherit)})\\" if cls.inherit else ''","slug":"var-inherit-f-join-cls-inherit-if-cls-inherit-else","link":"#var-inherit-f-join-cls-inherit-if-cls-inherit-else","children":[]},{"level":3,"title":"var rel_md_path = rel_md_path.replace(rk, rv)","slug":"var-rel-md-path-rel-md-path-replace-rk-rv","link":"#var-rel-md-path-rel-md-path-replace-rk-rv","children":[]},{"level":3,"title":"var front_matter = {'title': module_info.module_path.replace('.__init__', '').replace('_', '\\\\\\\\n'), 'index': 'true', 'icon': 'laptop-code', 'category': 'API'}","slug":"var-front-matter-title-module-info-module-path-replace-init-replace-n-index-true-icon-laptop-code-category-api","link":"#var-front-matter-title-module-info-module-path-replace-init-replace-n-index-true-icon-laptop-code-category-api","children":[]},{"level":3,"title":"var front_matter = {'title': module_info.module_path.replace('_', '\\\\\\\\n'), 'order': '1', 'icon': 'laptop-code', 'category': 'API'}","slug":"var-front-matter-title-module-info-module-path-replace-n-order-1-icon-laptop-code-category-api","link":"#var-front-matter-title-module-info-module-path-replace-n-order-1-icon-laptop-code-category-api","children":[]},{"level":3,"title":"var function_docstring = ast.get_docstring(node)","slug":"var-function-docstring-ast-get-docstring-node","link":"#var-function-docstring-ast-get-docstring-node","children":[]},{"level":3,"title":"var func_info = FunctionInfo(name=node.name, args=[(arg.arg, ast.unparse(arg.annotation) if arg.annotation else NO_TYPE_ANY) for arg in node.args.args], return_type=ast.unparse(node.returns) if node.returns else 'None', docstring=function_docstring if function_docstring else '', type=DefType.FUNCTION, is_async=isinstance(node, ast.AsyncFunctionDef))","slug":"var-func-info-functioninfo-name-node-name-args-arg-arg-ast-unparse-arg-annotation-if-arg-annotation-else-no-type-any-for-arg-in-node-args-args-return-type-ast-unparse-node-returns-if-node-returns-else-none-docstring-function-docstring-if-function-docstring-else-type-deftype-function-is-async-isinstance-node-ast-asyncfunctiondef","link":"#var-func-info-functioninfo-name-node-name-args-arg-arg-ast-unparse-arg-annotation-if-arg-annotation-else-no-type-any-for-arg-in-node-args-args-return-type-ast-unparse-node-returns-if-node-returns-else-none-docstring-function-docstring-if-function-docstring-else-type-deftype-function-is-async-isinstance-node-ast-asyncfunctiondef","children":[]},{"level":3,"title":"var class_docstring = ast.get_docstring(node)","slug":"var-class-docstring-ast-get-docstring-node","link":"#var-class-docstring-ast-get-docstring-node","children":[]},{"level":3,"title":"var class_info = ClassInfo(name=node.name, docstring=class_docstring if class_docstring else '', methods=[], attributes=[], inherit=[ast.unparse(base) for base in node.bases])","slug":"var-class-info-classinfo-name-node-name-docstring-class-docstring-if-class-docstring-else-methods-attributes-inherit-ast-unparse-base-for-base-in-node-bases","link":"#var-class-info-classinfo-name-node-name-docstring-class-docstring-if-class-docstring-else-methods-attributes-inherit-ast-unparse-base-for-base-in-node-bases","children":[]},{"level":3,"title":"var args_with_type = [f'{arg[0]}: {arg[1]}' if arg[1] else arg[0] for arg in method.args]","slug":"var-args-with-type-f-arg-0-arg-1-if-arg-1-else-arg-0-for-arg-in-method-args","link":"#var-args-with-type-f-arg-0-arg-1-if-arg-1-else-arg-0-for-arg-in-method-args","children":[]},{"level":3,"title":"var args_with_type = [f'{arg[0]}: {arg[1]}' if arg[1] and arg[0] != 'self' else arg[0] for arg in method.args]","slug":"var-args-with-type-f-arg-0-arg-1-if-arg-1-and-arg-0-self-else-arg-0-for-arg-in-method-args","link":"#var-args-with-type-f-arg-0-arg-1-if-arg-1-and-arg-0-self-else-arg-0-for-arg-in-method-args","children":[]},{"level":3,"title":"var first_arg = node.args.args[0]","slug":"var-first-arg-node-args-args-0","link":"#var-first-arg-node-args-args-0","children":[]},{"level":3,"title":"var method_docstring = ast.get_docstring(class_node)","slug":"var-method-docstring-ast-get-docstring-class-node","link":"#var-method-docstring-ast-get-docstring-class-node","children":[]},{"level":3,"title":"var def_type = DefType.METHOD","slug":"var-def-type-deftype-method","link":"#var-def-type-deftype-method","children":[]},{"level":3,"title":"var def_type = DefType.STATIC_METHOD","slug":"var-def-type-deftype-static-method","link":"#var-def-type-deftype-static-method","children":[]},{"level":3,"title":"var attr_type = NO_TYPE_HINT","slug":"var-attr-type-no-type-hint","link":"#var-attr-type-no-type-hint","children":[]},{"level":3,"title":"var def_type = DefType.CLASS_METHOD","slug":"var-def-type-deftype-class-method","link":"#var-def-type-deftype-class-method","children":[]},{"level":3,"title":"var attr_type = ast.unparse(node.value.annotation)","slug":"var-attr-type-ast-unparse-node-value-annotation","link":"#var-attr-type-ast-unparse-node-value-annotation","children":[]},{"level":3,"title":"var def_type = DefType.PROPERTY","slug":"var-def-type-deftype-property","link":"#var-def-type-deftype-property","children":[]}],"git":{"createdTime":1724034253000,"updatedTime":1724034253000,"contributors":[{"name":"snowy","email":"snowykami@outlook.com","commits":1}]},"readingTime":{"minutes":1.76,"words":528},"filePathRelative":"dev/api/mkdoc.md","localizedDate":"2024年8月19日","autoDesc":true}`);export{p as comp,h as data};
