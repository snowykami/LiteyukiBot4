import{_ as s,c as a,o as i,a4 as e}from"./chunks/framework.C3o_UkTa.js";const m=JSON.parse('{"title":"资源包开发","description":"","frontmatter":{"title":"资源包开发","order":1},"headers":[],"relativePath":"en/dev/resource.md","filePath":"en/dev/resource.md","lastUpdated":1725102337000}'),l={name:"en/dev/resource.md"},t=e(`<h1 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h1><p>资源包,亦可根据用途称为主题包、字体包、语言包等，它允许你一定程度上自定义轻雪的外观,并且不用修改源代码</p><ul><li><a href="./../store/resource.html">资源/主题商店</a>提供了一些资源包供你选择，你也可以自己制作资源包</li><li>资源包的制作很简单，如果你接触过<code>Minecraft</code>的资源包，那么你能够很快就上手，仅需按照原有路径进行文件替换即可，讲起打包成一个新的资源包。</li><li>部分内容制作需要一点点前端基础,例如<code>html</code>，<code>css</code></li><li>轻雪原版资源包请查看<code>LiteyukiBot/liteyuki/resources</code>，可以在此基础上进行修改</li><li>欢迎各位投稿资源包到轻雪资源商店</li></ul><p>请注意，主题包中的html渲染使用Js来规定数据的渲染位置，请确保您所编写的html代码能被Bot解析，否则会导致渲染失败或渲染结果不理想/异常/错位等无法预料的事情发生。推荐在编写html时同时更改对应Js代码，以避免出现无法预料的问题。</p><hr><h2 id="加载资源包" tabindex="-1">加载资源包 <a class="header-anchor" href="#加载资源包" aria-label="Permalink to &quot;加载资源包&quot;">​</a></h2><ul><li>资源包通常是以<code>.zip</code>格式压缩的，只需要将其解压到根目录<code>resources</code>目录下即可，注意不要嵌套文件夹,正常的路径应该是这样的</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">main.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resources</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└─resource_pack_1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ├─metadata.yml</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ├─templates</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    └───...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└─resource_pack_2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ├─metadata.yml</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    └─...</span></span></code></pre></div><ul><li>你自己制作的资源包也应该遵循这个规则,并且应该在<code>metadata.yml</code>中填写一些信息</li><li>若没有<code>metadata.yml</code>文件，则该文件夹不会被识别为资源包</li></ul><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;资源包名称&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;资源包描述&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 你可以自定义一些信息,但请保证以上三个字段</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">...</span></span></code></pre></div><ul><li>资源包加载遵循一个优先级，即后加载的资源包会覆盖前面的资源包，例如，你在A包中定义了一个<code>index.html</code>文件，B包也定义了一个<code>index.html</code>文件，那么加载B包后，A包中的<code>index.html</code>文件会被覆盖</li><li>对于不同资源包的不同文件，是可以相对引用的，例如你在A中定义了<code>templates/index.html</code>，在B中定义了<code>templates/style.css</code>，可以在A的<code>index.html</code>中用<code>./style.css</code>相对路径引用B中的css</li></ul><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>资源包的结构会随着轻雪的更新而有变动，第三方资源包开发者需要注意版本兼容性，同时用户也应该自行选择可用的资源包</p></div>`,12),n=[t];function p(c,d,h,o,r,k){return i(),a("div",null,n)}const y=s(l,[["render",p]]);export{m as __pageData,y as default};
