# 「崩坏3（iOS版）国服服务器列表补全计划」
> By: [Mornwind](https://github.com/Mornwind/BH3_Region_Selector)
> 
> Reference: [FlintyLemming](https://git.flinty.moe/root/bh3-switch) / [霞ヶ丘詩羽x](https://www.bilibili.com/read/cv3610324)
>
> Modify: [FlintyLemming](https://git.flinty.moe/root/bh3-switch)

说明：渠道服登录入口已存在于桌面端，但目前被官方隐藏，可能是因为账号系统不同，尚未准备好，故暂时从本计划中删除。

## 效果
![](https://ddns.flinty.moe:8857/%E5%B4%A9%E5%9D%8F3%20%E8%B7%A8%E6%9C%8D%E5%8E%9F%E7%90%86%E6%B5%85%E6%9E%90/1.PNG)

## 配置信息
### Surge 4:
```
[URL Rewrite]
# 官服
# > 安卓国服
^http:\/\/106\.14\.51\.73\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://106.14.51.73/query_gameserver?version=$1_gf_android 302
# > iOS国服
^http:\/\/139\.224\.7\.27\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://139.224.7.27/query_gameserver?version=$1_gf_ios 302
# > 全平台（桌面）服
^http:\/\/106\.15\.162\.73\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*)&uid=(\d*) http://106.15.162.73/query_gameserver?version=$1_gf_pc 302

[Script]
http-response ^https:\/\/global(\d*)\.bh3\.com\/query_dispatch\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*) requires-body=1,max-size=0,script-path=https://github.com/FlintyLemming/BH3_Region_Selector/raw/master/bh3_region_list.js

[MITM]
hostname = global*.bh3.com
```

### Quantumult X：
```
[rewrite_remote]
https://github.com/FlintyLemming/BH3_Region_Selector/raw/master/bh3_region_rewrite_remote.conf, tag=BH3 Region Rewrite, enabled=true

[rewrite_local]
^https:\/\/global(\d*)\.bh3\.com\/query_dispatch\?version=(\d*\.\d*\.\d*)_gf_(.*)&t=(\d*) url script-response-body bh3_region_list.js

[MITM]
hostname = *.bh3.com
```
