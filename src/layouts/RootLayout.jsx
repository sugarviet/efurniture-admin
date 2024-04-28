import { Layout } from "antd";
const { Sider, Content, Header } = Layout;
import AppSuspense from "../components/AppSuspense";
import Navbar from "../components/Navbar";
import AppSider from "../components/Sider";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import useSocket from "../hooks/useSocket";
import useAuth from "../stores/useAuth";
const RootLayout = () => {
  const { subcribeToNoti } = useSocket()
  const {accessToken} = useAuth()
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    subcribeToNoti();
  }, [])

  return (
    <main className="flex h-screen">
      <Layout>
        <Sider
          className="text-white h-screen relative border border-r-2"
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
            <Content className="overflow-y-auto mt-1">
              <Outlet />
            </Content>
          </AppSuspense>
        </Layout>
      </Layout>
    </main>
  );
};
export default RootLayout;
