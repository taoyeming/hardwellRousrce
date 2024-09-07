import React, { useEffect, useState } from "react";
import * as jinrishici from 'jinrishici';

const Components = () => {

  const [content, setContent] = useState(null)
  const [origin, setOrigin] = useState(null)

  useEffect(() => {
    jinrishici.load(result => {
      setContent(result?.data?.content)
      setOrigin(result?.data?.origin)
    })
  }, [])
  return <div>
    <h1 className=" font-black text-3xl">玩机资源网</h1>
    <font className=" text-xl">
    <p>欢迎来到玩机资源网</p>
    <p>网站内容：</p>
    <p>iOS正逆向软件资源</p>
    <p>各种搞机资源教程</p>
    {/* <p>旨在成为软硬件一站式教程资源网~</p> */}
    {
      content ? <div className="mt-3">
        <div>念两句诗</div>
        <div className=" text-3xl mb-2">{content}</div>
        {
          origin ? <div className=" text-xs">【{origin.dynasty}】{origin.author}《{origin.title}》</div> : <></>
        }
        </div> 
      : <></>
    }
    </font>
  </div>
}

export default Components