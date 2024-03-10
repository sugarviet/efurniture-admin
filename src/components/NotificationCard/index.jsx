import { StockOutlined } from "@ant-design/icons";

function NotificationCard() {
  return (
    <section className="flex gap-2">
      <div className="bg-zinc-700 p-2 flex items-center justify-center rounded-md">
        <StockOutlined />
      </div>
      <div className="relative">
        <span className="text-black text-xs line-clamp-2">
          Sofa Chairs is on low stock: 7 quantity left
        </span>
        <span className="text-gray-500 text-[10px] absolute">Just Now</span>
      </div>
    </section>
  );
}

export default NotificationCard;
