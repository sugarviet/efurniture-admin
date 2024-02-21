import { Form, Input, Button, Card, Divider } from "antd";
import styles from "./Login.module.css";
// import { useLogin } from "./hooks/useLogin";
import { useLoginIn } from "../../services/Auth/services";

const { Meta } = Card;

const Login = () => {
  // const {handleLogin} = useLogin();
  const { mutate } = useLoginIn();

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
