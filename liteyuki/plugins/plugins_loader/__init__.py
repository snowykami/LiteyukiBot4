# -*- coding: utf-8 -*-
"""
Copyright (C) 2020-2024 LiteyukiStudio. All Rights Reserved 

@Time    : 2024/8/11 下午10:02
@Author  : snowykami
@Email   : snowykami@outlook.com
@File    : __init__.py.py
@Software: PyCharm
"""
from liteyuki.plugin import PluginMetadata, load_plugins

__plugin_meta__ = PluginMetadata(
    name="外部轻雪插件加载器",
    version="0.1.0",
    author="snowykami",
    description="插件加载器，用于加载轻雪原生插件"
)

load_plugins("src/liteyuki_plugins")
