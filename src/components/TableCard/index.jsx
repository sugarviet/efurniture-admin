function TableCard({ label, children }) {
  return (
    <section className="flex flex-col bg-white rounded-xl shadow-xl p-4 my-4">
      <span className="font-semibold tracking-wider text-xl mb-4">{label}</span>
      {children}
    </section>
  );
}

export default TableCard;
