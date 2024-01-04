import { Descriptions, Avatar, List } from "antd";
import { Comment } from "@ant-design/compatible";
import { UserOutlined } from "@ant-design/icons";

const ProductDetail = () => {
  const items = [
    {
      key: "1",
      label: "Product Name",
      children: "Viet",
    },
    {
      key: "2",
      label: "Price",
      children: "40$",
    },
    {
      key: "3",
      label: "Quantity",
      children: 200,
    },
    {
      key: "4",
      label: "Sales Amount",
      children: "300",
    },
  ];
  const comments = [
    {
      author: "John Doe",
      content: "This product is amazing!",
      datetime: "2022-01-01",
    },
    {
      author: "Jane Doe",
      content: "I love the quality of this product.",
      datetime: "2022-01-02",
    },
  ];
  return (
    <div className="container">
      {/* Left Col */}
      <div className="flex justify-between shadow-md rounded-lg py-2 px-3">
        <div className="flex flex-col justify-center items-center">
          <div className="rounded-full overflow-hidden w-40 h-40 mb-3">
            <img
              src="https://noithatm8.com/wp-content/uploads/sofffa-da-phong-khach-sang-trong.jpg"
              alt=""
            />
          </div>
        </div>

        {/* Right Col */}
        <div className="flex-1">
          <Descriptions title="Product Info" bordered items={items} />
        </div>
      </div>

      {/* Comments */}
      <div className="mt-4 px-4">
        <List
          dataSource={comments}
          renderItem={(comment) => (
            <Comment
            className="px-4"
              author={comment.author}
              avatar={<Avatar icon={<UserOutlined />} />}
              content={comment.content}
              datetime={comment.datetime}
            />
          )}
        />
      </div>
    </div>
  );
};

export default ProductDetail;
