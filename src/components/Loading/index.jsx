import { Spin } from "antd";

const Loading = () => {
  return (
    <Spin
      size="large"
      style={{ position: "absolute", left: "60%", top: "50%", zIndex: 100 }}
    />
  );
};

export default Loading;