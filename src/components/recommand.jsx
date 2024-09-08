import { Badge, Card, Grid } from "antd";
import React from "react";

const { useBreakpoint } = Grid;

export default () => {

    const screens = useBreakpoint();

    const isMobile = !screens.md;

    const item = [{
        title: 'App加锁助手(App Lock)',
        desc: '为App加锁，支持密码，图形及指纹/面容,关注微信公众号：搞机分享汇及小程序：搞机资源库，获取更多资源。',
        url: 'https://apt.wanjitech.com/depictions/index.html?packageId=com.erik.AppLockPro',
        date: '2024-06-23',
        isHot: true,
    }, {
        title: 'App Hider Pro(应用隐藏Pro)',
        desc: 'Hide your Apps from SpringBoard',
        url: 'https://apt.wanjitech.com/depictions/index.html?packageId=com.erik.apphiderpro',
        date: '2024-07-23',
    }, {
        title: 'In-App Lock(App内部锁)',
        desc: 'Lock the App, lock inside the App. Support graphic lock, pay attention to wechat public number and Tiktok:搞机分享汇 to get free access .为App加锁，在App内部加锁。支持图形锁,关注微信公众号及抖音：搞机分享汇,免费获取使用权限。',
        url: 'https://apt.wanjitech.com/depictions/index.html?packageId=com.erik.inapplock.rootless',
        date: '2024-07-08',
    }]

    const renderItem = (item) => {
        
        return <div className={isMobile ? 'w-full mt-2' : ' flex-1'}>
            <Badge.Ribbon text="Hot" color="red">
            <Card className="hover:shadow-gray-500 shadow-md text-left cursor-pointer" onClick={() => {
                window.open(item.url)
            }}>
                <div className="font-medium line-clamp-1">{item.title}</div>
                <div className=" text-gray-500 h-10 line-clamp-2">{item.desc}</div>
                <div className="mt-4 line-clamp-1">{item.date}</div>
            </Card>
            </Badge.Ribbon>
        </div>
    }

    return <div className={isMobile ? 'flex flex-wrap' : 'flex gap-2'}>
        {
            item.map(i => {
                return renderItem(i)
            })
        }
    </div>
}