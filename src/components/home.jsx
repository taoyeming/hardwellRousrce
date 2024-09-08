import React, { useEffect, useState } from "react";
import * as jinrishici from 'jinrishici';
import Recommand from './recommand';

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
      {
        content ? <div className="mt-10">
          <div>念两句诗</div>
          <div className=" text-3xl mb-2">{content}</div>
          {
            origin ? <div className=" text-xs">【{origin.dynasty}】{origin.author}《{origin.title}》</div> : <></>
          }
          </div> 
        : <></>
      }
      <div className="mt-10" />
      <Recommand />
      <div className="mt-10" />
    </font>
  </div>
}

export default Components