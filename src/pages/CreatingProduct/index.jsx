import { CreatingProductProvider } from "./CreatingProductContext";
import CreatingProductForm from "./components/CreatingProductForm";

const CreatingProduct = () => {
  return (
    <CreatingProductProvider>
      <CreatingProductForm />
    </CreatingProductProvider>
  );
};

export default CreatingProduct;
