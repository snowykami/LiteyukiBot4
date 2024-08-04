import{_ as s,r as a,o as c,c as l,b as e,d as t,a as o,e as i}from"./app-BPxgm-Hi.js";const r={},d=e("h2",{id:"开始安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#开始安装"},[e("span",null,[e("strong",null,"开始安装")])])],-1),p=e("h3",{id:"常规部署",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#常规部署"},[e("span",null,[e("strong",null,"常规部署")])])],-1),h={href:"https://git-scm.com/download/",target:"_blank",rel:"noopener noreferrer"},u=e("code",null,"Git",-1),m={href:"https://www.python.org/downloads/release/python-31010/",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"Python3.10+",-1),k=i(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 克隆项目到本地，轻雪使用Git进行版本管理，该步骤为必要项</span>
<span class="token function">git</span> clone https://github.com/LiteyukiStudio/LiteyukiBot <span class="token parameter variable">--depth</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token comment"># 切换到Bot目录下</span>
<span class="token builtin class-name">cd</span> LiteyukiBot
<span class="token comment"># 安装依赖</span>
pip <span class="token function">install</span> <span class="token parameter variable">-r</span> requirements.txt
<span class="token comment"># 启动Bot</span>
python main.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>推荐使用虚拟环境来运行轻雪，以避免依赖冲突，你可以使用<code>python -m venv venv</code>来创建虚拟环境，然后使用<code>venv\\Scripts\\activate</code>来激活虚拟环境</p></div><h3 id="使用docker构建镜像部署" tabindex="-1"><a class="header-anchor" href="#使用docker构建镜像部署"><span><strong>使用Docker构建镜像部署</strong></span></a></h3>`,3),_={href:"https://docs.docker.com/get-docker/",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"Docker",-1),g=e("li",null,[t("克隆项目 "),e("code",null,"git clone https://github.com/LiteyukiStudio/LiteyukiBot --depth=1")],-1),b=e("li",null,[t("进入轻雪目录 "),e("code",null,"cd LiteyukiBot")],-1),f=e("li",null,[t("构建镜像 "),e("code",null,"docker build -t liteyukibot .")],-1),S=e("li",null,[t("启动容器 "),e("code",null,"docker run -p 20216:20216 -v $(pwd):/liteyukibot -v $(pwd)/.cache:/root/.cache liteyukibot")],-1),w=i('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>Windows请使用项目绝对目录<code>/path/to/LiteyukiBot</code>代替<code>$(pwd)</code> <br> 若你修改了端口号请将<code>20216:20216</code>中的<code>20216</code>替换为你的端口号</p></div><h3 id="使用trss-scripts部署" tabindex="-1"><a class="header-anchor" href="#使用trss-scripts部署"><span><strong>使用TRSS Scripts部署</strong></span></a></h3>',2),x={href:"https://timerainstarsky.github.io/TRSS_Liteyuki/",target:"_blank",rel:"noopener noreferrer"},B=e("code",null,"Arch Linux",-1),L=i('<h2 id="设备要求" tabindex="-1"><a class="header-anchor" href="#设备要求"><span><strong>设备要求</strong></span></a></h2><ul><li>Windows系统版本最低<code>Windows10+</code>/<code>Windows Server 2019+</code></li><li>Linux系统要支持Python3.10+，推荐<code>Ubuntu 20.04+</code>(<s>别用你那b CentOS</s>)</li><li>CPU: 至少<code>1vCPU</code></li><li>内存: Bot无其他插件会占用<code>300~500MB</code>，包括<code>chromium</code> 及 <code>node</code>等进程，其他插件占用视具体插件而定，建议<code>1GB</code>以上</li><li>硬盘: 至少<code>1GB</code>空间</li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果设备上有多个环境，请使用<code>path/to/python -m pip install -r requirements.txt</code>来安装依赖，<code>path/to/python</code>为你的Python可执行文件路径</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>轻雪的更新功能依赖Git，如果你没有安装Git直接下载源代码运行，你将无法使用更新功能</p></div><h4 id="其他问题请移步至答疑" tabindex="-1"><a class="header-anchor" href="#其他问题请移步至答疑"><span>其他问题请移步至<a href="/deployment/fandq">答疑</a></span></a></h4>',5);function T(D,P){const n=a("ExternalLinkIcon");return c(),l("div",null,[d,p,e("ol",null,[e("li",null,[t("安装 "),e("a",h,[u,o(n)]),t(" 和 "),e("a",m,[v,o(n)]),t(" 环境")])]),k,e("ol",null,[e("li",null,[t("安装 "),e("a",_,[y,o(n)])]),g,b,f,S]),w,e("p",null,[e("a",x,[t("TRSS_Liteyuki轻雪机器人管理脚本"),o(n)]),t("，该功能由TRSS提供支持，不是LiteyukiBot官方提供的功能，推荐使用"),B]),L])}const N=s(r,[["render",T],["__file","install.html.vue"]]),C=JSON.parse('{"path":"/deployment/install.html","title":"安装","lang":"zh-CN","frontmatter":{"title":"安装","icon":"download","order":1,"category":"使用指南","tag":["安装"],"description":"开始安装 常规部署 安装 Git 和 Python3.10+ 环境 提示 推荐使用虚拟环境来运行轻雪，以避免依赖冲突，你可以使用python -m venv venv来创建虚拟环境，然后使用venv\\\\Scripts\\\\activate来激活虚拟环境 使用Docker构建镜像部署 安装 Docker 克隆项目 git clone https://githu...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/deployment/install.html"}],["meta",{"property":"og:site_name","content":"LiteyukiBot 轻雪机器人"}],["meta",{"property":"og:title","content":"安装"}],["meta",{"property":"og:description","content":"开始安装 常规部署 安装 Git 和 Python3.10+ 环境 提示 推荐使用虚拟环境来运行轻雪，以避免依赖冲突，你可以使用python -m venv venv来创建虚拟环境，然后使用venv\\\\Scripts\\\\activate来激活虚拟环境 使用Docker构建镜像部署 安装 Docker 克隆项目 git clone https://githu..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-04T22:05:37.000Z"}],["meta",{"property":"article:author","content":"远野千束"}],["meta",{"property":"article:tag","content":"安装"}],["meta",{"property":"article:modified_time","content":"2024-08-04T22:05:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"安装\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-04T22:05:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"远野千束\\",\\"url\\":\\"https://sfkm.me\\"}]}"]]},"headers":[{"level":2,"title":"开始安装","slug":"开始安装","link":"#开始安装","children":[{"level":3,"title":"常规部署","slug":"常规部署","link":"#常规部署","children":[]},{"level":3,"title":"使用Docker构建镜像部署","slug":"使用docker构建镜像部署","link":"#使用docker构建镜像部署","children":[]},{"level":3,"title":"使用TRSS Scripts部署","slug":"使用trss-scripts部署","link":"#使用trss-scripts部署","children":[]}]},{"level":2,"title":"设备要求","slug":"设备要求","link":"#设备要求","children":[]}],"git":{"createdTime":1711589926000,"updatedTime":1722809137000,"contributors":[{"name":"snowy","email":"snowykami@outlook.com","commits":13}]},"readingTime":{"minutes":1.52,"words":457},"filePathRelative":"deployment/install.md","localizedDate":"2024年3月28日","autoDesc":true}');export{N as comp,C as data};
