import { Form, Input, Button, Card, Divider } from "antd";
import styles from "./Login.module.css";
import { useAuthentication } from "../../hooks/useAuthentication";

const { Meta } = Card;


const Login = () => {
  const { login } = useAuthentication();

  const onFinish = (values) => {
    login(values);
  };

  return (
    <div className={styles.container}>
      <Card style={{ width: 400, height: 300 }}>
        <Meta title="Login" />
        <Divider />
        <Form onFinish={onFinish} requiredMark="optional">
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
    // <FallbackComponent />
  );
};

export default Login;
