import { Card, Grid } from "antd";
import React from "react";
import logo from '../asset/logo.png';

const { useBreakpoint } = Grid;

const Item = ({ title, desc, url, logo }) => {

    const screens = useBreakpoint();

    const isMobile = !screens.md;

    return <div className={isMobile ? 'w-full p-1' : 'w-1/2 p-1'}>
        <Card className="mt-2 shadow-md hover:shadow-blue-400 cursor-pointer text-left" onClick={() => {
            window.open(url)
        }}>
            <div className="flex">
                <img src={logo} alt="tlogo" className="h-10 mr-3" />
                <div>
                    <div>{title}</div>
                    <div className=" line-clamp-2 text-gray-500 h-10">{desc}</div>
                </div>
            </div>
        </Card>
    </div>
}

const Component = () => {

    const items = [
        {
            "logo": logo,
            "title": "越狱插件使用教程",
            "desc": "介绍越狱插件如何注入",
            "url": "https://mp.weixin.qq.com/s?__biz=Mzg3NTY1NzU0NQ==&mid=2247484596&idx=1&sn=e6c4b4a151d3875a2edd06f6945ceefd&chksm=cf3f6492f848ed84220ba0195aa088c7bc770b77f1513a8da6f2aaff61f97017670d50ca0adf#rd"
        },
        {
            "logo": logo,
            "title": "iOS软件多开",
            "desc": "解密iOS软件多开的本质",
            "url": "https://mp.weixin.qq.com/s?__biz=Mzg3NTY1NzU0NQ==&mid=2247484194&idx=1&sn=3d3801197c44b341420a834f2c5178fa&chksm=cf3f6304f848ea123e6e5a9a3b16eb88ab4b45b7500cf0e8344c234c237023ce434c5cae4ecf#rd"
        },
        {
            "logo": logo,
            "title": "iOS自签IPA教程",
            "desc": "非越狱设备如何安装IPA，手把手教你签名IPA",
            "url": "https://mp.weixin.qq.com/s?__biz=Mzg3NTY1NzU0NQ==&mid=2247484085&idx=1&sn=65ac3679f87509b95bdcec6b0aaa86fe&chksm=cf3f6293f848eb855a538aa1c252eb8fdc87f3788f2dd1ee249e4c2cc1b6f0a25cabe531586a#rd"
        },
        {
            "logo": logo,
            "title": "华为手机安装Google全家桶",
            "desc": "介绍鸿蒙系统如何安装Google软件",
            "url": "https://mp.weixin.qq.com/s?__biz=Mzg3NTY1NzU0NQ==&mid=2247484007&idx=1&sn=dffa58e815fc69fb15ff6b9eb13e349e&chksm=cf3f6241f848eb57e8e71de0f0eb5a3b421a459187d999be2bba78fc04638c7ae83d4ad0037a#rd"
        }
    ]

    return <div className=" flex flex-wrap">
        {items.map(i => {
            return <Item {...i} />
        })}
    </div>

}

export default Component;