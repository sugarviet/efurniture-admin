import { formatCurrency } from "../../utils/formatCurrency";

function OrderSummaryCard() {
  return (
    <section className="rounded-lg border bg-white px-8 py-4">
      <h1 className="text-3xl font-bold">Summary</h1>
      <ul>
        <li className="flex items-center justify-between my-2 text-lg">
          <span>Items subtotal: </span>
          <span>{formatCurrency(619000)}</span>
        </li>
        <li className="flex items-center justify-between my-2 text-lg">
          <span>Discount: </span>
          <span className="text-red-500">{formatCurrency(-59000)}</span>
        </li>
        <li className="flex items-center justify-between my-2 text-lg">
          <span>Tax: </span>
          <span>{formatCurrency(126000)}</span>
        </li>
        <li className="flex items-center justify-between my-2 text-lg">
          <span>Subtotal: </span>
          <span>{formatCurrency(665000)}</span>
        </li>
        <li className="flex items-center justify-between my-2 text-lg">
          <span>Shipping cost: </span>
          <span>{formatCurrency(30000)}</span>
        </li>
      </ul>
      <h1 className="text-2xl font-bold flex items-center justify-between border-t-[1px] py-6">
        <span>Total: </span>
        <span>{formatCurrency(695000)}</span>
      </h1>
    </section>
  );
}

export default OrderSummaryCard;
