import{_ as e,c as t,o as i,a4 as a}from"./chunks/framework.C3o_UkTa.js";const m=JSON.parse('{"title":"Install","description":"","frontmatter":{"title":"Install","order":1},"headers":[],"relativePath":"en/deploy/install.md","filePath":"en/deploy/install.md","lastUpdated":1725102337000}'),s={name:"en/deploy/install.md"},o=a(`<h1 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h1><h2 id="normal-installation" tabindex="-1"><strong>Normal Installation</strong> <a class="header-anchor" href="#normal-installation" aria-label="Permalink to &quot;**Normal Installation**&quot;">​</a></h2><ol><li>Install <a href="https://git-scm.com/download/" target="_blank" rel="noreferrer"><code>Git</code></a> and <a href="https://www.python.org/downloads/release/python-31010/" target="_blank" rel="noreferrer"><code>Python3.10+</code></a> Environment.</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Clone the project</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/LiteyukiStudio/LiteyukiBot</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --depth=1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># change directory</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> LiteyukiBot</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># install dependencies</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> requirements.txt</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># start the bot!</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main.py</span></span></code></pre></div><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>It is recommended to use a virtual environment to run Liteyuki to avoid dependency conflicts. You can use <code>python -m venv .venv</code> to create a virtual environment, and then use <code>.venv\\Scripts\\activate</code> to activate the virtual environment (use <code>source .venv/bin/activate</code> to activate on Linux).</p></div><h2 id="run-with-docker" tabindex="-1"><strong>Run with Docker</strong> <a class="header-anchor" href="#run-with-docker" aria-label="Permalink to &quot;**Run with Docker**&quot;">​</a></h2><ol><li>Install <a href="https://docs.docker.com/get-docker/" target="_blank" rel="noreferrer"><code>Docker</code></a></li><li>Clone Repo <code>git clone https://github.com/LiteyukiStudio/LiteyukiBot --depth=1</code></li><li>Change directory <code>cd LiteyukiBot</code></li><li>Build docker image <code>docker build -t liteyukibot .</code></li><li>Run container <code>docker run -p 20216:20216 -v $(pwd):/liteyukibot -v $(pwd)/.cache:/root/.cache liteyukibot</code></li></ol><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>If you are using Windows, please use the absolute project directory <code>/path/to/LiteyukiBot</code> instead of <code>$&amp;#40;pwd&amp;#41;</code> <br> If you have modified the port number, please replace <code>20216:20216</code> with your port number</p></div><h2 id="use-trss-script" tabindex="-1"><strong>Use TRSS Script</strong> <a class="header-anchor" href="#use-trss-script" aria-label="Permalink to &quot;**Use TRSS Script**&quot;">​</a></h2><p><a href="https://timerainstarsky.github.io/TRSS_Liteyuki/" target="_blank" rel="noreferrer">TRSS_Liteyuki Management Script</a>, which provides a more convenient way to manage LiteyukiBot, recommended to use <code>Arch Linux</code></p><h2 id="device-requirements" tabindex="-1"><strong>Device Requirements</strong> <a class="header-anchor" href="#device-requirements" aria-label="Permalink to &quot;**Device Requirements**&quot;">​</a></h2><ul><li>Windows system version minimum <code>Windows10+</code>/<code>Windows Server 2019+</code></li><li>Linux system requires Python3.10+, recommended <code>Ubuntu 20.04+</code></li><li>CPU: at least <code>1vCPU</code></li><li>Memory: Bot without other plugins will occupy <code>300~500MB</code>, including <code>chromium</code> and <code>node</code> processes, other plugins depend on specific plugins, recommended <code>1GB</code> or more</li><li>Disk: at least <code>1GB</code> of space</li></ul><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p>If there are multiple environments on the device, please use <code>path/to/python -m pip install -r requirements.txt</code> to install dependencies, <code>path/to/python</code> is the path to your Python executable</p></div><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p>Liteyuki&#39;s update function depends on Git. If you do not have Git installed and run the source code directly, you will not be able to use the update function</p></div><h4 id="for-other-questions-please-refer-to-faq" tabindex="-1">For other questions, please refer to <a href="./fandq.html">FAQ</a> <a class="header-anchor" href="#for-other-questions-please-refer-to-faq" aria-label="Permalink to &quot;For other questions, please refer to [FAQ](./fandq)&quot;">​</a></h4>`,15),n=[o];function l(r,c,d,h,p,u){return i(),t("div",null,n)}const y=e(s,[["render",l]]);export{m as __pageData,y as default};
