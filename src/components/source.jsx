import { Card, Tag, Modal } from "antd";
import { LinkOutlined } from '@ant-design/icons'
import React from "react";
import { sourceData as items } from '../utils/data'

const Item = ({title, desc, tag, url, password}) => {
    return <Card 
        title={title} 
        className="mt-2 shadow-md hover:shadow-blue-400 cursor-pointer" 
        extra={<Tag color="#2db7f5" icon={<LinkOutlined />}>{tag}</Tag>}
        onClick={() => {
            if (password) {
                navigator.clipboard.writeText(password).then(() => {
                    Modal.info({
                        content: `已复制密码，点击确定转跳`,
                        onOk: () => {
                            window.open(url)
                        }
                    })
                }).catch(() => {
                    Modal.info({
                        content: `请手动复制密码：${password}`,
                        onOk: () => {
                            window.open(url)
                        }
                    })
                })
            } else {
                window.open(url)
            }
        }}
    >
        <font className="text-left">
            {desc}
        </font>
    </Card>
}

const Component = () => {
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