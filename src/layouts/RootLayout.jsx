import { Layout } from "antd";
const { Header, Sider, Content } = Layout;
import AppSuspense from "../components/AppSuspense";

import Navbar from "../components/Navbar";
import AppSider from "../components/Sider";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
const RootLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <main className="flex h-screen">
      <Layout>
        <Sider
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
              <Outlet />
            </Content>
          </AppSuspense>
        </Layout>
      </Layout>
    </main>
  );
};
export default RootLayout;
