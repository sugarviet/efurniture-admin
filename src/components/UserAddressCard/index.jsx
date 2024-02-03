import { formatPhoneNumber } from "../../utils/formatPhoneNumber";

function UserAddressCard() {
  return (
    <section className="bg-white border rounded-lg px-8 py-4">
      <h1 className="font-bold text-3xl my-2">Default Address</h1>
      <div className="flex flex-col my-2">
        <span className="font-semibold text-lg text-[#3E465B]">Address</span>
        <span>12A12 Nguyễn Trãi phường 7</span>
        <span>Thành phố Mỹ Tho</span>
        <span>Tỉnh Tiền Giang</span>
      </div>
      <div className="flex flex-col my-2">
        <span className="font-semibold text-lg text-[#3E465B]">Email</span>
        <span className="hover:cursor-pointer text-[#3874FF]">
          efurniture@gmail.com
        </span>
      </div>
      <div className="flex flex-col my-2">
        <span className="font-semibold text-lg text-[#3E465B]">Phone</span>
        <span>{formatPhoneNumber("0123456789")}</span>
      </div>
    </section>
  );
}

export default UserAddressCard;
