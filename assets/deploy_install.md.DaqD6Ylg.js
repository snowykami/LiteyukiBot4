import{_ as i,c as e,o as t,a4 as s}from"./chunks/framework.C3o_UkTa.js";const g=JSON.parse('{"title":"安装","description":"","frontmatter":{"title":"安装","order":1},"headers":[],"relativePath":"deploy/install.md","filePath":"zh/deploy/install.md","lastUpdated":1725102337000}'),a={name:"deploy/install.md"},o=s(`<h1 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h1><h2 id="常规部署" tabindex="-1"><strong>常规部署</strong> <a class="header-anchor" href="#常规部署" aria-label="Permalink to &quot;**常规部署**&quot;">​</a></h2><ol><li>安装 <a href="https://git-scm.com/download/" target="_blank" rel="noreferrer"><code>Git</code></a> 和 <a href="https://www.python.org/downloads/release/python-31010/" target="_blank" rel="noreferrer"><code>Python3.10+</code></a> 环境</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 克隆项目到本地，轻雪使用Git进行版本管理，该步骤为必要项</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/LiteyukiStudio/LiteyukiBot</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --depth=1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 切换到Bot目录下</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> LiteyukiBot</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装依赖</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> requirements.txt</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启动Bot</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main.py</span></span></code></pre></div><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>推荐使用虚拟环境来运行轻雪，以避免依赖冲突，你可以使用<code>python -m venv .venv</code>来创建虚拟环境，然后使用<code>.venv\\Scripts\\activate</code>来激活虚拟环境（Linux下使用<code>source .venv/bin/activate</code>激活）</p></div><h2 id="使用docker构建" tabindex="-1"><strong>使用Docker构建</strong> <a class="header-anchor" href="#使用docker构建" aria-label="Permalink to &quot;**使用Docker构建**&quot;">​</a></h2><ol><li>安装 <a href="https://docs.docker.com/get-docker/" target="_blank" rel="noreferrer"><code>Docker</code></a></li><li>克隆项目 <code>git clone https://github.com/LiteyukiStudio/LiteyukiBot --depth=1</code></li><li>进入轻雪目录 <code>cd LiteyukiBot</code></li><li>构建镜像 <code>docker build -t liteyukibot .</code></li><li>启动容器 <code>docker run -p 20216:20216 -v $(pwd):/liteyukibot -v $(pwd)/.cache:/root/.cache liteyukibot</code></li></ol><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>Windows请使用项目绝对目录<code>/path/to/LiteyukiBot</code>代替<code>$(pwd)</code> <br> 若你修改了端口号请将<code>20216:20216</code>中的<code>20216</code>替换为你的端口号</p></div><h2 id="使用trss-scripts部署" tabindex="-1"><strong>使用TRSS Scripts部署</strong> <a class="header-anchor" href="#使用trss-scripts部署" aria-label="Permalink to &quot;**使用TRSS Scripts部署**&quot;">​</a></h2><p><a href="https://timerainstarsky.github.io/TRSS_Liteyuki/" target="_blank" rel="noreferrer">TRSS_Liteyuki轻雪机器人管理脚本</a>，该功能由TRSS提供支持，不是LiteyukiBot官方提供的功能，推荐使用<code>Arch Linux</code></p><h2 id="装置要求" tabindex="-1"><strong>装置要求</strong> <a class="header-anchor" href="#装置要求" aria-label="Permalink to &quot;**装置要求**&quot;">​</a></h2><ul><li>Windows系统版本最低<code>Windows10+</code>/<code>Windows Server 2019+</code></li><li>Linux系统要支持Python3.10+，推荐<code>Ubuntu 20.04+</code>(<s>别用你那b CentOS</s>)</li><li>CPU: 至少<code>1vCPU</code></li><li>内存: Bot无其他插件会占用<code>300~500MB</code>，包括<code>chromium</code> 及 <code>node</code>等进程，其他插件占用视具体插件而定，建议<code>1GB</code>以上</li><li>硬盘: 至少<code>1GB</code>空间</li></ul><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p>如果装置上有多个环境，请使用<code>path/to/python -m pip install -r requirements.txt</code>来安装依赖，<code>path/to/python</code>为你的Python可执行文件路径</p></div><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p>轻雪的更新功能依赖Git，如果你没有安装Git直接下载源代码运行，你将无法使用更新功能</p></div><h4 id="其他问题请移步至答疑" tabindex="-1">其他问题请移步至<a href="./fandq.html">答疑</a> <a class="header-anchor" href="#其他问题请移步至答疑" aria-label="Permalink to &quot;其他问题请移步至[答疑](./fandq)&quot;">​</a></h4>`,15),l=[o];function n(c,d,r,h,p,k){return t(),e("div",null,l)}const b=i(a,[["render",n]]);export{g as __pageData,b as default};
