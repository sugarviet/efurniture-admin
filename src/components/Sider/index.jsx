import { Menu } from 'antd';
import { HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Dashboard', '/', <HomeOutlined />),
  getItem('Products', '/products', <HomeOutlined />),
  getItem('Events', '/events', <HomeOutlined />),
  getItem('Account', '/account', <SettingOutlined />, [
    getItem('User', '/users'),
    getItem('Partner', '/partners'),
  ]),
  getItem('Vouchers', '/vouchers', <HomeOutlined />),

  {
    type: 'divider',
  },
];

const AppSider = () => {
  const navigate = useNavigate();
  const onClick = (e) => {
    navigate(e.key);
  };

  return (
    <Menu
    theme='dark'
      onClick={onClick}
      style={{
        height: '100%',
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};

export default AppSider;
