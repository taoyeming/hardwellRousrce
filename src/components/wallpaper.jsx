import React, { useState } from "react";
import { Tabs, Grid } from 'antd'
import { wallpaperData } from '../utils/data';

const { useBreakpoint } = Grid;

const download = url => {
    const eleLink = document.createElement('a');
    eleLink.style.display = 'none';
    eleLink.href = url;
    document.body.appendChild(eleLink);
    eleLink.click();
    document.body.removeChild(eleLink);
};

const Item = ({ url }) => {
    const screens = useBreakpoint();
    const isMobile = !screens.md;
    return <div className={isMobile ? 'w-1/3 p-1' : 'w-1/5 p-1'} onClick={() => {
        download(url)
    }}>
        <div className="flex mt-2 shadow-md hover:shadow-blue-400 cursor-pointer text-left">
            <img src={url} alt="tlogo" className="flex-1" />
        </div>
    </div>
}

const Component = () => {
    const [selected, setSelected] = useState(wallpaperData[0])

    const picturelist = selected?.picturelist

    return <div>
        <Tabs defaultActiveKey={wallpaperData[0]} items={wallpaperData} onChange={v => {
            setSelected(wallpaperData.find(i => i.key === v))
        }} centered />
        <div className=" flex flex-wrap">
            {
                picturelist?.map(i => {
                    return <Item url={i} />
                })
            }
        </div>
    </div>
}

export default Component;