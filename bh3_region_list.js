/*
「崩坏3（iOS版）国服服务器列表补全计划」
By: Mornwind
Reference: FlintyLemming / 霞ヶ丘詩羽x

说明：渠道服登录入口已存在于桌面端，但目前被官方隐藏，可能是因为账号系统不同，尚未准备好，故暂时从本计划中删除。

README:
https://github.com/FlintyLemming/BH3_Region_Selector/blob/master/README.md
*/

let list = JSON.parse($response.body);

list = {
    "region_list": [
        {
            "dispatch_url": "http://106.14.51.73/query_gameserver", 
            "ext": {
                "data_use_asset_boundle": "1", 
                "res_use_asset_boundle": "1", 
                "server_state": "Recommend", 
                "server_stop_jump_name": "前往米游社", 
                "server_stop_jump_to_url": "https://m.bbs.mihayo.com/bh3ToBBS.html", 
                "update_streaming_asb": "1"
            }, 
            "name": "android01", 
            "retcode": 0, 
            "title": "安卓国服"
        }, 
        {
            "dispatch_url": "http://139.224.7.27/query_gameserver", 
            "ext": {
                "data_use_asset_boundle": "1", 
                "res_use_asset_boundle": "1", 
                "server_stop_jump_name": "前往米游社", 
                "server_stop_jump_to_url": "https://m.bbs.mihayo.com/bh3ToBBS.html", 
                "update_streaming_asb": "1"
            }, 
            "name": "ios01", 
            "retcode": 0, 
            "title": "ios"
        }, 
        {
            "dispatch_url": "http://106.15.162.73/query_gameserver", 
            "ext": {
                "data_use_asset_boundle": "1", 
                "res_use_asset_boundle": "1", 
                "server_stop_jump_name": "前往米游社", 
                "server_stop_jump_to_url": "https://m.bbs.mihayo.com/bh3ToBBS.html", 
                "update_streaming_asb": "1"
            }, 
            "name": "pc01", 
            "retcode": 0, 
            "title": "pc01"
        }
    ], 
    "retcode": 0
}

$done({body: JSON.stringify(list)});