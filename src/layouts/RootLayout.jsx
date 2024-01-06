import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;

import Navbar from "../components/Navbar"
import AppSider from '../components/Sider';
import { Outlet } from 'react-router-dom';

const RootLayout = () => (
  <main
  className="flex h-screen"
  >
    <Layout>
      <Sider className="flex-none w-64 text-white h-screen">
        <AppSider />
      </Sider>
      <Layout className="flex-1 flex flex-col">
        <Header className="bg-white shadow-md h-20 w-full p-0">
          <Navbar />
        </Header>
        <Content className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  </main>
);
export default RootLayout;