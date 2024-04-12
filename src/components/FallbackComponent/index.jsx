import { Layout } from "antd";
const { Sider, Content, Header } = Layout;
import AppSuspense from "../AppSuspense";
import Navbar from "../Navbar";
import { useErrorBoundary } from "react-error-boundary";
import AppSider from "../Sider";
import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
const FallbackComponent = () => {
  const { resetBoundary } = useErrorBoundary();
  const [collapsed, setCollapsed] = useState(false);



  return (
    <main className="flex h-screen">
    <Layout>
      <Sider
      onClick={resetBoundary}
        className="text-white h-screen relative"
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="lg"
        onBreakpoint={(broken) => setCollapsed(broken)}
      >
        <AppSider />
        <div
          className="w-full text-black text-xl cursor-pointer flex justify-center p-4 border absolute bottom-0"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <MenuUnfoldOutlined />
          ) : (
            <>
              <MenuFoldOutlined />{" "}
              <span className="text-xs ml-2 transition-all">
                Collapsed View
              </span>
            </>
          )}
        </div>
      </Sider>
      <Layout className="flex-1 flex flex-col">
        <Header className="bg-white shadow-md w-full p-0">
          <Navbar />
        </Header>
        <AppSuspense>
          <Content className="p-4 overflow-y-auto">
            <div className="flex flex-col justify-center mx-auto items-center translate-y-52">
            <h1 className='font-bold text-3xl text-center'>Opps ! Something went wrong :(</h1>
                <h2 className='text-center text-lg text-slate-500 font-bold'>Please try again !</h2>
                <button className="furniture-button mx-auto flex justify-center mt-6" onClick={resetBoundary}>Try Again</button>

            </div>
          </Content>
        </AppSuspense>
      </Layout>
    </Layout>
  </main>
  );
};
export default FallbackComponent;
