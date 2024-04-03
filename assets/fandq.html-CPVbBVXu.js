import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as l,c as i,d as e,e as t,a as n,b as p}from"./app-CVpKyZT9.js";const c={},s=p('<h3 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h3><ul><li><p>设备上Python环境太乱了，pip和python不对应怎么办？</p><ul><li>请使用<code>/path/to/python -m pip install -r requirements.txt</code>来安装依赖， 然后用<code>/path/to/python main.py</code>来启动Bot， 其中<code>/path/to/python</code>是你要用来运行Bot的可执行文件</li></ul></li><li><p>为什么我启动后机器人没有反应？</p><ul><li>请检查配置文件的<code>command_start</code>或<code>superusers</code>，确认你有权限使用命令并按照正确的命令发送</li></ul></li><li><p>怎么登录聊天平台，例如QQ？</p><ul><li>你有这个问题说明你不是很了解这个项目，本项目不负责实现登录功能，只负责处理和回应消息，登录功能由实现端（协议端）提供， 实现端本身不负责处理响应逻辑，将消息按照OneBot标准处理好上报给轻雪 你需要使用Onebot标准的实现端来连接到轻雪并将消息上报给轻雪，下面已经列出一些推荐的实现端</li></ul></li><li><p><code>Playwright</code>安装失败</p><ul><li>输入<code>playwright install</code>安装浏览器</li></ul></li></ul><h4 id="推荐方案-qq" tabindex="-1"><a class="header-anchor" href="#推荐方案-qq"><span>推荐方案(QQ)</span></a></h4>',3),h={href:"https://github.com/KonataDev/Lagrange.Core",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/LLOneBot/LLOneBot",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/whitechi73/OpenShamrock",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/TimeRainStarSky/Yunzai",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"node.js",-1),g=e("code",null,"ws-plugin",-1),y={href:"https://github.com/Mrs4s/go-cqhttp",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"go",-1),b={href:"https://github.com/Hoshinonyaruko/Gensokyo",target:"_blank",rel:"noopener noreferrer"},k=e("li",null,[t("人工实现的"),e("code",null,"Onebot"),t("协议，自己整一个WebSocket客户端，看着QQ的消息，然后给轻雪传输数据")],-1),B=e("h4",{id:"推荐方案-minecraft",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#推荐方案-minecraft"},[e("span",null,"推荐方案(Minecraft)")])],-1),O={href:"https://github.com/snowykami/MinecraftOnebot",target:"_blank",rel:"noopener noreferrer"},q=e("p",null,"使用其他项目连接请先自行查阅文档，若有困难请联系对应开发者而不是Liteyuki的开发者",-1),x=e("h3",{id:"鸣谢",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#鸣谢"},[e("span",null,"鸣谢")])],-1),L={href:"https://nonebot.dev",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://github.com/kexue-z/nonebot-plugin-htmlrender/tree/master",target:"_blank",rel:"noopener noreferrer"},T={href:"https://github.com/ArcletProject/nonebot-plugin-alconna",target:"_blank",rel:"noopener noreferrer"};function N(w,v){const o=a("ExternalLinkIcon");return l(),i("div",null,[s,e("ol",null,[e("li",null,[e("a",h,[t("Lagrange.OneBot"),n(o)]),t("，基于NTQQ的OneBot实现，目前Markdown消息支持Lagrange")]),e("li",null,[e("a",d,[t("LLOneBot"),n(o)]),t("，NTQQ的OneBot插件，需要安装NTQQ")]),e("li",null,[e("a",m,[t("OpenShamrock"),n(o)]),t("，基于Lsposed的OneBot11实现")]),e("li",null,[e("a",u,[t("TRSS-Yunzai"),n(o)]),t("，基于"),_,t("，可使用"),g,t("进行通信")]),e("li",null,[e("a",y,[t("go-cqhttp"),n(o)]),t("，"),f,t("语言实现的OneBot11实现端，目前可用性较低")]),e("li",null,[e("a",b,[t("Gensokyo"),n(o)]),t("，基于 OneBot QQ官方机器人Api Golang 原生实现，需要官方机器人权限")]),k]),B,e("ol",null,[e("li",null,[e("a",O,[t("MinecraftOneBot"),n(o)]),t("，我们专门为Minecraft开发的服务器Bot，支持OneBotV11标准")])]),q,x,e("ul",null,[e("li",null,[e("a",L,[t("Nonebot2"),n(o)]),t("提供的框架支持")]),e("li",null,[e("a",Q,[t("nonebot-plugin-htmlrender"),n(o)]),t("提供的渲染功能")]),e("li",null,[e("a",T,[t("nonebot-plugin-alconna"),n(o)]),t("提供的命令解析功能")])])])}const P=r(c,[["render",N],["__file","fandq.html.vue"]]),z=JSON.parse('{"path":"/deployment/fandq.html","title":"答疑","lang":"zh-CN","frontmatter":{"title":"答疑","icon":"question","order":3,"category":"使用指南","tag":["配置","部署"],"description":"常见问题 设备上Python环境太乱了，pip和python不对应怎么办？ 请使用/path/to/python -m pip install -r requirements.txt来安装依赖， 然后用/path/to/python main.py来启动Bot， 其中/path/to/python是你要用来运行Bot的可执行文件 为什么我启动后机器人没...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/deployment/fandq.html"}],["meta",{"property":"og:site_name","content":"LiteyukiBot 轻雪机器人"}],["meta",{"property":"og:title","content":"答疑"}],["meta",{"property":"og:description","content":"常见问题 设备上Python环境太乱了，pip和python不对应怎么办？ 请使用/path/to/python -m pip install -r requirements.txt来安装依赖， 然后用/path/to/python main.py来启动Bot， 其中/path/to/python是你要用来运行Bot的可执行文件 为什么我启动后机器人没..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-03T06:18:41.000Z"}],["meta",{"property":"article:author","content":"远野千束"}],["meta",{"property":"article:tag","content":"配置"}],["meta",{"property":"article:tag","content":"部署"}],["meta",{"property":"article:modified_time","content":"2024-04-03T06:18:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"答疑\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-03T06:18:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"远野千束\\",\\"url\\":\\"https://snowykami.me\\"}]}"]]},"headers":[{"level":3,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[]},{"level":3,"title":"鸣谢","slug":"鸣谢","link":"#鸣谢","children":[]}],"git":{"createdTime":1711695504000,"updatedTime":1712125121000,"contributors":[{"name":"snowy","email":"snowykami@outlook.com","commits":5}]},"readingTime":{"minutes":1.76,"words":529},"filePathRelative":"deployment/fandq.md","localizedDate":"2024年3月29日","autoDesc":true}');export{P as comp,z as data};
