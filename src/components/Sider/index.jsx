import { Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { key: 'home', label: 'Home', icon: <HomeOutlined />, to: '/' },
  { key: 'about', label: 'About', icon: <HomeOutlined />, to: '/about' },
  { key: 'contact', label: 'Contact', icon: <HomeOutlined />, to: '/contact' },
];

const AppSider = () => {
  const location = useLocation();

  return (
    <Menu mode="vertical" theme="dark" style={{ height: '100%' }} selectedKeys={[location.pathname]}>
      {menuItems.map((menuItem) => (
        <Menu.Item key={menuItem.to} icon={menuItem.icon}>
          <Link to={menuItem.to}>{menuItem.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default AppSider;
