import { Badge, Card, Grid } from "antd";
import React from "react";

const { useBreakpoint } = Grid;

const Components = () => {

    const screens = useBreakpoint();

    const isMobile = !screens.md;

    const item = [
        // {
        //     title: 'App加锁助手',
        //     desc: '一款提供越狱iOS设备App加锁的工具，支持多种加锁方式，支持iOS14-16设备有根及无根环境，已上传BigBoss及搞机软件源。',
        //     tag: 'iOS插件',
        //     url: 'https://apt.wanjitech.com/depictions/index.html?packageId=com.erik.AppLockPro',
        //     date: '2024-09-08',
        // },
        {
            title: 'WinPE',
            desc: '一款简洁的PE启动盘制作工具。',
            tag: '网站',
            url: 'https://www.wepe.com.cn/download.html',
            date: '2024-09-08',
        },
        {
            title: 'MSDN',
            desc: '一个原版Windows系统下载网站。',
            tag: '网站',
            url: 'https://msdn.itellyou.cn',
            date: '2024-09-08',
        }
    ]

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

export default Components;