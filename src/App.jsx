import "./App.css";
import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              algorithm: true,
              borderRadius: "12px",
            },
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </>
  );
}

export default App;
