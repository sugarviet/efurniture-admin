import { Button, Result } from "antd";
const NotFound = () => {
  return (
    <section>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">Back Home</Button>}
      />
    </section>
  );
};

export default NotFound;
