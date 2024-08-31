import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Components = () => {
  const navigate = useNavigate();

  return <div>
    未找到相关内容
    <Button onClick={() => {
      navigate('/')
    }}>返回首页</Button>
  </div>
}

export default Components