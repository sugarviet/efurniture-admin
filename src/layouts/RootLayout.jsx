import { Layout } from "antd";
const { Sider, Content } = Layout;
import AppSuspense from "../components/AppSuspense";

import AppSider from "../components/Sider";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Logo from "../components/Logo";
import AccountInfo from "../components/AccountInfo";
import Notification from "../components/Notification";
const RootLayout = () => {
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);

  return (
    <main className="flex h-screen">
      <Layout>
        <Sider
          className="text-white h-screen relative"
          theme="light"
          trigger={null}
          collapsible
          collapsed={leftCollapsed}
          breakpoint="lg"
          onBreakpoint={(broken) => setLeftCollapsed(broken)}
        >
          <Logo className="h-12 my-12" />
          <AppSider />
          <div
            className="w-full text-black text-xl cursor-pointer flex justify-center p-4 border absolute bottom-0"
            onClick={() => setLeftCollapsed(!leftCollapsed)}
          >
            {leftCollapsed ? (
              <MenuUnfoldOutlined />
            ) : (
              <>
                <MenuFoldOutlined />{" "}
                <span className="text-xs ml-2 transition-all">
                  Collapse View
                </span>
              </>
            )}
          </div>
        </Sider>

        <Layout className="flex-1 flex flex-col">
          <AppSuspense>
            <Content className="p-4 overflow-y-auto">
              <Outlet />
            </Content>
          </AppSuspense>
        </Layout>

        <Sider
          className="text-white h-screen relative"
          theme="light"
          trigger={null}
          collapsible
          collapsed={rightCollapsed}
          breakpoint="lg"
          onBreakpoint={(broken) => setRightCollapsed(broken)}
        >
          <AccountInfo />
          <Notification />
          <div
            className="w-full text-black text-xl cursor-pointer flex justify-center p-4 border absolute bottom-0"
            onClick={() => setRightCollapsed(!rightCollapsed)}
          >
            {rightCollapsed ? (
              <MenuUnfoldOutlined />
            ) : (
              <>
                <MenuFoldOutlined />{" "}
                <span className="text-xs ml-2 transition-all">
                  Collapse View
                </span>
              </>
            )}
          </div>
        </Sider>
      </Layout>
    </main>
  );
};
export default RootLayout;
