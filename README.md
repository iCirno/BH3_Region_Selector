# 「崩坏3（iOS版）服务器列表补全」
> By: [Mornwind](https://github.com/Mornwind/BH3_Region_Selector)
> 
> Reference: [FlintyLemming](https://git.flinty.moe/root/bh3-switch) / [霞ヶ丘詩羽x](https://www.bilibili.com/read/cv3610324)
>
> Modify: [FlintyLemming](https://git.flinty.moe/root/bh3-switch)

## Surge 4:
```
[URL Rewrite]
# > 安卓国服
^http:\/\/106\.14\.51\.73\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(android(|_bilibili)|ios|pc)&t=(\d*)&uid=(\d*) http://106.14.51.73/query_gameserver?version=$1_gf_android 302
# > iOS 国服
^http:\/\/139\.224\.7\.27\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(android(|_bilibili)|ios|pc)&t=(\d*)&uid=(\d*) http://139.224.7.27/query_gameserver?version=$1_gf_ios 302
# > 全平台（桌面）服
^http:\/\/106\.15\.162\.73\/query_gameserver\?version=(\d*\.\d*\.\d*)_gf_(android(|_bilibili)|ios|pc)&t=(\d*)&uid=(\d*) http://106.15.162.73/query_gameserver?version=$1_gf_pc 302

[Script]
http-response ^https:\/\/global(\d*)\.bh3\.com\/query_dispatch\?version=(\d*\.\d*\.\d*)_gf_(android(|_bilibili)|ios|pc)&t=(\d*) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Mornwind/BH3_Region_Selector/master/bh3_region_list.js

[MITM]
hostname = global*.bh3.com
```

## QuanX：
```
[rewrite_remote]
https://raw.githubusercontent.com/Mornwind/BH3_Region_Selector/master/bh3_region_rewrite_remote.conf, tag=BH3 Region Rewrite, enabled=true

[rewrite_local]
^https:\/\/global(\d*)\.bh3\.com\/query_dispatch\?version=(\d*\.\d*\.\d*)_gf_(android(|_bilibili)|ios|pc)&t=(\d*) url script-response-body bh3_region_list.js

[MITM]
hostname = *.bh3.com
```