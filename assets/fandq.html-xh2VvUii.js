import{_ as l,r,o as a,c as i,b as e,d as t,a as n,e as c}from"./app-SlpTmndF.js";const p={},s=e("h2",{id:"常见问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#常见问题"},[e("span",null,[e("strong",null,"常见问题")])])],-1),h=c("<li><p>设备上Python环境太乱了，pip和python不对应怎么办？</p><ul><li>请使用<code>/path/to/python -m pip install -r requirements.txt</code>来安装依赖， 然后用<code>/path/to/python main.py</code>来启动Bot， 其中<code>/path/to/python</code>是你要用来运行Bot的可执行文件</li></ul></li><li><p>为什么我启动后机器人没有反应？</p><ul><li>请检查配置文件的<code>command_start</code>或<code>superusers</code>，确认你有权限使用命令并按照正确的命令发送</li><li>确认命令头没有和<code>nickname{}</code>冲突，例如一个命令是<code>help</code>，但是<code>Bot</code>昵称有一个<code>help</code>，那么将会被解析为nickname而不是命令</li></ul></li><li><p>更新轻雪失败，报错<code>InvalidGitRepositoryError</code></p><ul><li>请正确安装<code>Git</code>，并使用克隆而非直接下载的方式部署轻雪</li></ul></li><li><p>怎么登录聊天平台，例如QQ？</p><ul><li>你有这个问题说明你不是很了解这个项目，本项目不负责实现登录功能，只负责处理和回应消息，登录功能由实现端（协议端）提供， 实现端本身不负责处理响应逻辑，将消息按照OneBot标准处理好上报给轻雪 你需要使用Onebot标准的实现端来连接到轻雪并将消息上报给轻雪，下面已经列出一些推荐的实现端</li></ul></li><li><p><code>Playwright</code>安装失败</p><ul><li>输入<code>playwright install</code>安装浏览器</li></ul></li><li><p>有的插件安装后报错无法启动</p><ul><li>请先查阅插件文档，确认插件必要配置项完好后，仍然出现问题，请联系插件作者或在安全模式<code>safe_mode: true</code>下启动轻雪，在安全模式下你可以使用<code>npm uninstall</code>卸载问题插件</li></ul></li>",6),d=e("h2",{id:"其他问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#其他问题"},[e("span",null,"其他问题")])],-1),u={href:"http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=SzmDYbfR6jY94o9KFNon7AwelRyI6M_u&authKey=ygeBdEmdFNyCWuNR4w0M1M8%2B5oDg7k%2FDfN0tzBkYcnbB%2FGHNnlVEnCIGbdftsnn7&noverify=0&group_code=775840726",target:"_blank",rel:"noopener noreferrer"},m=e("h2",{id:"推荐方案-qq",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#推荐方案-qq"},[e("span",null,[e("strong",null,"推荐方案(QQ)")])])],-1),_={href:"https://github.com/KonataDev/Lagrange.Core",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/LLOneBot/LLOneBot",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/whitechi73/OpenShamrock",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/TimeRainStarSky/Yunzai",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"node.js",-1),b=e("code",null,"ws-plugin",-1),B={href:"https://github.com/Mrs4s/go-cqhttp",target:"_blank",rel:"noopener noreferrer"},q=e("code",null,"go",-1),O={href:"https://github.com/Hoshinonyaruko/Gensokyo",target:"_blank",rel:"noopener noreferrer"},Q=e("li",null,[t("人工实现的"),e("code",null,"Onebot"),t("协议，自己整一个WebSocket客户端，看着QQ的消息，然后给轻雪传输数据")],-1),M=e("h2",{id:"推荐方案-minecraft",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#推荐方案-minecraft"},[e("span",null,[e("strong",null,"推荐方案(Minecraft)")])])],-1),N={href:"https://github.com/snowykami/MinecraftOnebot",target:"_blank",rel:"noopener noreferrer"},v=e("p",null,"使用其他项目连接请先自行查阅文档，若有困难请联系对应开发者而不是Liteyuki的开发者",-1),x=e("h2",{id:"鸣谢",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#鸣谢"},[e("span",null,[e("strong",null,"鸣谢")])])],-1),L={href:"https://nonebot.dev",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/ArcletProject/nonebot-plugin-alconna",target:"_blank",rel:"noopener noreferrer"},S={href:"https://hyperos.mi.com/font/zh/",target:"_blank",rel:"noopener noreferrer"},T={href:"https://gitee.com/mirrors/Maple-Mono",target:"_blank",rel:"noopener noreferrer"};function z(D,E){const o=r("ExternalLinkIcon");return a(),i("div",null,[s,e("ul",null,[h,e("li",null,[d,e("p",null,[t("加入QQ群"),e("a",u,[t("775840726"),n(o)])])])]),m,e("ol",null,[e("li",null,[e("a",_,[t("Lagrange.OneBot"),n(o)]),t("，基于NTQQ的OneBot实现，目前Markdown消息支持Lagrange")]),e("li",null,[e("a",g,[t("LLOneBot"),n(o)]),t("，NTQQ的OneBot插件，需要安装NTQQ")]),e("li",null,[e("a",f,[t("OpenShamrock"),n(o)]),t("，基于Lsposed的OneBot11实现")]),e("li",null,[e("a",y,[t("TRSS-Yunzai"),n(o)]),t("，基于"),k,t("，可使用"),b,t("进行通信")]),e("li",null,[e("a",B,[t("go-cqhttp"),n(o)]),t("，"),q,t("语言实现的OneBot11实现端，目前可用性较低")]),e("li",null,[e("a",O,[t("Gensokyo"),n(o)]),t("，基于 OneBot QQ官方机器人Api Golang 原生实现，需要官方机器人权限")]),Q]),M,e("ol",null,[e("li",null,[e("a",N,[t("MinecraftOneBot"),n(o)]),t("，我们专门为Minecraft开发的服务器Bot，支持OneBotV11标准")])]),v,x,e("ul",null,[e("li",null,[e("a",L,[t("Nonebot2"),n(o)]),t("提供的框架支持")]),e("li",null,[e("a",w,[t("nonebot-plugin-alconna"),n(o)]),t("提供的命令解析功能")]),e("li",null,[e("a",S,[t("MiSans"),n(o)]),t("，"),e("a",T,[t("MapleMono"),n(o)]),t("提供的字体，且遵守了相关字体开源协议")])])])}const I=l(p,[["render",z],["__file","fandq.html.vue"]]),R=JSON.parse('{"path":"/deploy/fandq.html","title":"答疑","lang":"zh-CN","frontmatter":{"title":"答疑","icon":"question","order":3,"category":"使用指南","tag":["配置","部署"],"description":"常见问题 设备上Python环境太乱了，pip和python不对应怎么办？ 请使用/path/to/python -m pip install -r requirements.txt来安装依赖， 然后用/path/to/python main.py来启动Bot， 其中/path/to/python是你要用来运行Bot的可执行文件 为什么我启动后机器人没...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope-docs-demo.netlify.app/en/deploy/fandq.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/deploy/fandq.html"}],["meta",{"property":"og:site_name","content":"LiteyukiBot 轻雪机器人"}],["meta",{"property":"og:title","content":"答疑"}],["meta",{"property":"og:description","content":"常见问题 设备上Python环境太乱了，pip和python不对应怎么办？ 请使用/path/to/python -m pip install -r requirements.txt来安装依赖， 然后用/path/to/python main.py来启动Bot， 其中/path/to/python是你要用来运行Bot的可执行文件 为什么我启动后机器人没..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-23T09:58:36.000Z"}],["meta",{"property":"article:tag","content":"配置"}],["meta",{"property":"article:tag","content":"部署"}],["meta",{"property":"article:modified_time","content":"2024-08-23T09:58:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"答疑\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-23T09:58:36.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[]},{"level":2,"title":"推荐方案(QQ)","slug":"推荐方案-qq","link":"#推荐方案-qq","children":[]},{"level":2,"title":"推荐方案(Minecraft)","slug":"推荐方案-minecraft","link":"#推荐方案-minecraft","children":[]},{"level":2,"title":"鸣谢","slug":"鸣谢","link":"#鸣谢","children":[]}],"git":{"createdTime":1723832665000,"updatedTime":1724407116000,"contributors":[{"name":"EillesWan","email":"W-YI_DoctorYI@outlook.com","commits":1},{"name":"snowy","email":"snowykami@outlook.com","commits":1}]},"readingTime":{"minutes":2.39,"words":716},"filePathRelative":"deploy/fandq.md","localizedDate":"2024年8月16日","autoDesc":true}');export{I as comp,R as data};
