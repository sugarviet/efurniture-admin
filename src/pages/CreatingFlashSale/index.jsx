import FlashSaleForm from '../FlashSale/components/FlashSaleForm'

const CreatingFlashSale = () => {
  return (
    <main className="flex flex-col shadow-xl rounded-xl bg-white p-4">
      <span className="tracking-wider text-xl font-semibold mb-4">
        Create New Flashsale
      </span>
      <FlashSaleForm />
    </main>
  )
}

export default CreatingFlashSale