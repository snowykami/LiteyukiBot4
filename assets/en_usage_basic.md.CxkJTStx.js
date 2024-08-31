import{_ as t,c as e,o as d,a4 as l}from"./chunks/framework.C3o_UkTa.js";const u=JSON.parse('{"title":"基础插件","description":"","frontmatter":{"title":"基础插件","order":1},"headers":[],"relativePath":"en/usage/basic.md","filePath":"en/usage/basic.md","lastUpdated":1725101868000}'),n={name:"en/usage/basic.md"},r=l('<h1 id="基础插件" tabindex="-1">基础插件 <a class="header-anchor" href="#基础插件" aria-label="Permalink to &quot;基础插件&quot;">​</a></h1><hr><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p><strong>参数</strong>：<code>&lt;param&gt;</code>为必填参数，<code>[option]</code>为可选参数。</p><p><strong>命令别名</strong>：配置了命令别名的命令可以使用别名代替原命令，例如<code>npm install ~</code>可以使用<code>插件 安装 ~</code>代替。</p></div><h2 id="轻雪命令liteyuki-command" tabindex="-1"><strong>轻雪命令<code>liteyuki_command</code></strong> <a class="header-anchor" href="#轻雪命令liteyuki-command" aria-label="Permalink to &quot;**轻雪命令`liteyuki_command`**&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:center;">命令</th><th style="text-align:center;">说明</th><th style="text-align:center;">权限</th><th style="text-align:center;">举例</th><th style="text-align:center;">可用参数</th></tr></thead><tbody><tr><td style="text-align:center;"><code>reload-liteyuki</code></td><td style="text-align:center;">重载轻雪</td><td style="text-align:center;">超级用户</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td></tr><tr><td style="text-align:center;"><code>update-liteyuki</code></td><td style="text-align:center;">更新轻雪</td><td style="text-align:center;">超级用户</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td></tr><tr><td style="text-align:center;"><code>liteecho</code></td><td style="text-align:center;">查看当前bot 版本</td><td style="text-align:center;">超级用户</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td></tr><tr><td style="text-align:center;"><code>status</code></td><td style="text-align:center;">查看统计信息和状态</td><td style="text-align:center;">超级用户</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td></tr><tr><td style="text-align:center;"><code>config set &lt;key&gt; value</code></td><td style="text-align:center;">添加配置项，若存在则会覆盖，输入值会被执行以转换为正确的类型，&quot;10&quot;和10是不一样的</td><td style="text-align:center;">超级用户</td><td style="text-align:center;"><code>config set name &#39;liteyuki-bot&#39;</code></td><td style="text-align:center;"><code>&lt;key&gt;</code>: 若存在则覆盖, 若不存在则创建于<code>config.yml</code> ; <code>value</code>: yml格式的所有合法内容</td></tr><tr><td style="text-align:center;"><code>config get [key] </code></td><td style="text-align:center;">查询配置项，不带key返回配置项列表，推荐私聊使用</td><td style="text-align:center;">超级用户</td><td style="text-align:center;"><code>config get name</code></td><td style="text-align:center;"><code>&lt;key&gt;</code>: 若存在则返回, 若不存在则返回空</td></tr><tr><td style="text-align:center;"><code>switch-image-mode </code></td><td style="text-align:center;">在普通图片和Markdown大图之间切换，该功能需要commit:505468b及以后的Lagrange.OneBot，默认普通图片</td><td style="text-align:center;">超级用户</td><td style="text-align:center;"><code>switch-image-mode</code></td><td style="text-align:center;">❌</td></tr><tr><td style="text-align:center;"><code>/api api_name [args] </code></td><td style="text-align:center;">调用机器人API</td><td style="text-align:center;">超级用户</td><td style="text-align:center;"><code>/api get_group_member_list group_id=1234567</code></td><td style="text-align:center;"><code>&lt;args&gt;</code>: 参数列表, 格式为onebot v11协议api, 可用%20代替空格</td></tr><tr><td style="text-align:center;"><code>/function function_name [args] [kwargs] </code></td><td style="text-align:center;">调用机器人函数(<code>.lyfunction</code>语法)</td><td style="text-align:center;">超级用户</td><td style="text-align:center;"><code>/function send_group_msg group_id=1234567 message=&#39;hello&#39;</code></td><td style="text-align:center;"><code>&lt;args&gt;</code>和<code>&lt;kwargs&gt;</code>: 参数列表, api格式为onebot v11协议api</td></tr><tr><td style="text-align:center;">group enable/disable [group_id]</td><td style="text-align:center;">在群聊启用/停用机器人，group_id仅超级用户可用</td><td style="text-align:center;">超级用户，群聊仅群主、管理员、超级用户可用</td><td style="text-align:center;"><code>group enable 1145141919810</code></td><td style="text-align:center;"><code>&lt;group_id&gt;</code>: 群号</td></tr><tr><td style="text-align:center;">liteyuki-docs</td><td style="text-align:center;">查看轻雪文档</td><td style="text-align:center;">所有人</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td></tr></tbody></table><hr><h3 id="命令别名" tabindex="-1"><strong>命令别名</strong> <a class="header-anchor" href="#命令别名" aria-label="Permalink to &quot;**命令别名**&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:center;">命令</th><th style="text-align:center;">别名</th></tr></thead><tbody><tr><td style="text-align:center;">status</td><td style="text-align:center;">状态</td></tr><tr><td style="text-align:center;">reload-liteyuki</td><td style="text-align:center;">重启轻雪</td></tr><tr><td style="text-align:center;">update-liteyuki</td><td style="text-align:center;">更新轻雪</td></tr><tr><td style="text-align:center;">reload-resources</td><td style="text-align:center;">重载资源</td></tr><tr><td style="text-align:center;">config</td><td style="text-align:center;">配置, <code>set</code> 设置 / <code>get</code> 查询</td></tr><tr><td style="text-align:center;">switch-image-mode</td><td style="text-align:center;">切换图片模式</td></tr><tr><td style="text-align:center;">liteyuki-docs</td><td style="text-align:center;">轻雪文档</td></tr><tr><td style="text-align:center;">group</td><td style="text-align:center;">群聊, <code>enable</code> 启用 / <code>disable</code> 停用</td></tr></tbody></table><hr><h2 id="插件-包管理器-liteyuki-pacman" tabindex="-1"><strong>插件/包管理器 <code>liteyuki_pacman</code></strong> <a class="header-anchor" href="#插件-包管理器-liteyuki-pacman" aria-label="Permalink to &quot;**插件/包管理器 `liteyuki_pacman`**&quot;">​</a></h2><ul><li>插件管理</li></ul><table tabindex="0"><thead><tr><th style="text-align:center;">命令</th><th style="text-align:center;">说明</th><th style="text-align:center;">权限</th></tr></thead><tbody><tr><td style="text-align:center;"><code>npm update</code></td><td style="text-align:center;">更新插件商店索引</td><td style="text-align:center;">超级用户</td></tr><tr><td style="text-align:center;"><code>npm install &lt;plugin_name&gt;</code></td><td style="text-align:center;">安装插件</td><td style="text-align:center;">超级用户</td></tr><tr><td style="text-align:center;"><code>npm uninstall &lt;plugin_name&gt;</code></td><td style="text-align:center;">卸载插件</td><td style="text-align:center;">超级用户</td></tr><tr><td style="text-align:center;"><code>npm search &lt;keywords...&gt;</code></td><td style="text-align:center;">通过关键词搜索插件</td><td style="text-align:center;">超级用户</td></tr><tr><td style="text-align:center;"><code>npm enable-global/disable-global &lt;plugin_name&gt;</code></td><td style="text-align:center;">全局启用/停用插件</td><td style="text-align:center;">超级用户</td></tr><tr><td style="text-align:center;"><code>npm enable/disable &lt;plugin_name&gt; [--group &lt;group_id&gt;]</code></td><td style="text-align:center;">当前会话启用/停用插件</td><td style="text-align:center;">群聊仅群主、管理员、超级用户可用，私聊所有人可用</td></tr><tr><td style="text-align:center;"><code>npm list [page] [num]</code></td><td style="text-align:center;">列出所有插件 page为页数，num为每页显示数量</td><td style="text-align:center;">群聊仅群主、管理员、超级用户可用，私聊所有人可用</td></tr><tr><td style="text-align:center;"><code>help &lt;plugin_name&gt;</code></td><td style="text-align:center;">查看插件帮助</td><td style="text-align:center;">所有人</td></tr></tbody></table><ul><li>资源包管理</li></ul><table tabindex="0"><thead><tr><th style="text-align:center;">命令</th><th style="text-align:center;">说明</th><th style="text-align:center;">权限</th></tr></thead><tbody><tr><td style="text-align:center;"><code>rpm list [page] [num]</code></td><td style="text-align:center;">列出所有资源包 page为页数，num为每页显示数量</td><td style="text-align:center;">超级用户</td></tr><tr><td style="text-align:center;"><code>rpm load &lt;pack_name&gt;</code></td><td style="text-align:center;">加载资源包</td><td style="text-align:center;">超级用户</td></tr><tr><td style="text-align:center;"><code>rpm unload &lt;pack_name&gt;</code></td><td style="text-align:center;">卸载资源包</td><td style="text-align:center;">超级用户</td></tr><tr><td style="text-align:center;"><code>rpm change &lt;pack_name&gt;</code></td><td style="text-align:center;">修改优先级</td><td style="text-align:center;">超级用户</td></tr><tr><td style="text-align:center;"><code>rpm reload</code></td><td style="text-align:center;">重载所有资源包</td><td style="text-align:center;">超级用户</td></tr></tbody></table><h3 id="命令别名-1" tabindex="-1">命令别名 <a class="header-anchor" href="#命令别名-1" aria-label="Permalink to &quot;命令别名&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:center;">命令</th><th style="text-align:center;">别名</th></tr></thead><tbody><tr><td style="text-align:center;"><code>npm</code></td><td style="text-align:center;">插件管理</td></tr><tr><td style="text-align:center;"><code>update</code></td><td style="text-align:center;">更新</td></tr><tr><td style="text-align:center;"><code>install</code></td><td style="text-align:center;">安装</td></tr><tr><td style="text-align:center;"><code>uninstall</code></td><td style="text-align:center;">卸载</td></tr><tr><td style="text-align:center;"><code>search</code></td><td style="text-align:center;">搜索</td></tr><tr><td style="text-align:center;"><code>enable</code></td><td style="text-align:center;">启用</td></tr><tr><td style="text-align:center;"><code>disable</code></td><td style="text-align:center;">停用</td></tr><tr><td style="text-align:center;"><code>enable-global</code></td><td style="text-align:center;">全局启用</td></tr><tr><td style="text-align:center;"><code>disable-global</code></td><td style="text-align:center;">全局停用</td></tr><tr><td style="text-align:center;"><code>rpm</code></td><td style="text-align:center;">资源包</td></tr><tr><td style="text-align:center;"><code>load</code></td><td style="text-align:center;">加载</td></tr><tr><td style="text-align:center;"><code>unload</code></td><td style="text-align:center;">卸载</td></tr><tr><td style="text-align:center;"><code>change</code></td><td style="text-align:center;">更改</td></tr><tr><td style="text-align:center;"><code>reload</code></td><td style="text-align:center;">重载</td></tr><tr><td style="text-align:center;"><code>list</code></td><td style="text-align:center;">列表</td></tr><tr><td style="text-align:center;"><code>help</code></td><td style="text-align:center;">帮助</td></tr></tbody></table><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p>受限于NoneBot2钩子函数的依赖注入参数，插件停用只能阻断传入响应，对于主动推送的插件不生效，请阅读插件主页的说明。</p></div><hr><h2 id="用户管理liteyuki-user" tabindex="-1"><strong>用户管理<code>liteyuki_user</code></strong> <a class="header-anchor" href="#用户管理liteyuki-user" aria-label="Permalink to &quot;**用户管理`liteyuki_user`**&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:center;">命令</th><th style="text-align:center;">说明</th><th style="text-align:center;">权限</th></tr></thead><tbody><tr><td style="text-align:center;"><code>profile</code></td><td style="text-align:center;">查看用户信息菜单</td><td style="text-align:center;">所有人</td></tr><tr><td style="text-align:center;"><code>profile set &lt;key&gt; [value]</code></td><td style="text-align:center;">设置用户信息或打开属性设置菜单</td><td style="text-align:center;">所有人</td></tr><tr><td style="text-align:center;"><code>profile get &lt;key&gt;</code></td><td style="text-align:center;">获取用户信息</td><td style="text-align:center;">所有人</td></tr></tbody></table><p>###命令别名</p><table tabindex="0"><thead><tr><th style="text-align:center;">命令</th><th style="text-align:center;">别名</th></tr></thead><tbody><tr><td style="text-align:center;"><code>profile</code></td><td style="text-align:center;">个人信息</td></tr><tr><td style="text-align:center;"><code>set</code></td><td style="text-align:center;">设置</td></tr><tr><td style="text-align:center;"><code>get</code></td><td style="text-align:center;">查询</td></tr></tbody></table>',22),a=[r];function c(i,s,o,g,y,x){return d(),e("div",null,a)}const p=t(n,[["render",c]]);export{u as __pageData,p as default};
