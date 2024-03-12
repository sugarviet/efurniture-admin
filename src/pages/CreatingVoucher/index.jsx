import VoucherForm from "../../components/VoucherForm";

const CreatingVoucher = () => {
  return (
    <main className="flex flex-col shadow-xl rounded-xl bg-white p-4">
      <span className="tracking-wider text-xl font-semibold mb-4">
        Create New Voucher
      </span>
      <VoucherForm />
    </main>
  );
};

export default CreatingVoucher;
