import React from "react"
import douyin from '../asset/douyin.jpg';
import fenxianghui from '../asset/fenxianghui.jpg';
import weixin from '../asset/weixin.jpg'

const Component = () => {

    return <div>
        <h3 className=" font-medium text-3xl mb-4">联系方式</h3>

        <div className="flex justify-around mb-4 max-w-[800px] mr-auto ml-auto">
            <div className='flex-1 mr-4'>
                <img src={douyin} className="w-full" alt="gzh" />
                <span>公众号：搞机分享汇</span>
            </div>
            <div className='flex-1 mr-4'>
                <img src={fenxianghui} className="w-full" alt="wx" />
                <span>微信：iOSRE-Erik</span>
            </div>
            <div className='flex-1'>
                <img src={weixin} className="w-full" alt="dy" />
                <span>抖音：搞机分享汇</span>
            </div>
        </div>
        <span>
            一条略懂iOS正逆向开发的咸鱼，接iOS软件开发，插件定制（App Store内插件定制勿扰）<br/>
            其他搞机需求可联系详谈包括但不限于PC,Switch,手机等软硬件需求
        </span>
    </div>
}

export default Component