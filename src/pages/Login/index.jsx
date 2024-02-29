import { Form, Input, Button, Card, Divider } from "antd";
import styles from "./Login.module.css";
import { usePost } from "../../hooks/api-hooks";
import { get_login } from "../../api/authApi";
import { jwtDecode } from "jwt-decode";
import { getCurrentUserRole } from "@utils/getCurrentUserRole";
import { useNavigate } from "react-router-dom";
import useAuth from "../../stores/useAuth";

const { Meta } = Card;
const init_route = {
  superAdmin: "/users",
  admin: "/",
  staff: "/products",
};

const Login = () => {
  const {setTokens} = useAuth();
  const navigate = useNavigate();
  const { mutate } = usePost(
    get_login(),
    undefined,
    (data) => {

      const {access_token, refresh_token} = data.data.metaData;
      const decode = jwtDecode(data.data.metaData.access_token);
      const role = getCurrentUserRole(decode.role);

      setTokens(access_token, refresh_token, decode.account_id ,role)
      navigate(init_route[role]);
      alert('thanh cong')
    },
    () => {
      console.log("sd");
    }
  );

  const onFinish = (values) => {
    mutate(values);
  };

  return (
    <div className={styles.container}>
      <Card style={{ width: 400, height: 300 }}>
        <Meta title="Login" />
        <Divider />
        <Form onFinish={onFinish}>
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: "Please enter your username" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button
              // type="primary"
              htmlType="submit"
              className={styles.btnSubmit}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
