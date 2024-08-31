import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Components = () => {
  const navigate = useNavigate();

  return <div className="backdrop-blur-sm ml-auto mr-auto bg-white/50 mt-5 w-4/5 h-96 rounded-lg p-3 shadow-md text-center">
  <h1 className=" font-black text-3xl">网站还在建设中。。。</h1>
</div>
}

export default Components