import { Card, Tag } from "antd";
import { LinkOutlined } from '@ant-design/icons'
import React from "react";

const Item = ({title, desc, tag, url}) => {
    return <Card 
        title={title} 
        className="mt-2 shadow-md hover:shadow-blue-400 cursor-pointer" 
        extra={<Tag color="#2db7f5" icon={<LinkOutlined />}>{tag}</Tag>}
        onClick={() => {
            window.open(url)
        }}
    >
        <font className="text-left">
            {desc}
        </font>
    </Card>
}

const Component = () => {

    const items = [
        {
            title: 'App加锁助手',
            desc: '一款提供越狱iOS设备App加锁的工具，支持多种加锁方式，支持iOS14-16设备有根及无根环境，已上传BigBoss及搞机软件源。',
            tag: 'iOS插件',
            url: 'https://apt.wanjitech.com/depictions/index.html?packageId=com.erik.AppLockPro'
        },
        {
            title: 'WinPE',
            desc: '一款简洁的PE启动盘制作工具。',
            tag: '网站',
            url: 'https://www.wepe.com.cn/download.html'
        },
        {
            title: 'MSDN',
            desc: '一个原版Windows系统下载网站。',
            tag: '网站',
            url: 'https://msdn.itellyou.cn'
        }
    ]

    return <div>
        {items.map(i => {
            return <Item {...i} />
        })}

        <div className="mt-4">
            <p>本站提供下载的所有内容均来自于互联网，仅用于学习和研究使用，不得用于任何商业用途。其真实性、准确性和合法性由作者负责，本站不提供任何保证，并不承担任何法律责任。</p>
            <p>如发布的内容侵犯您的版权或其他利益，请编辑邮件并加以说明到angel.erik@iCloud.com，我们会在收到您的消息后24小时内对相应内容进行处理。</p>
        </div>
    </div>

}

export default Component;