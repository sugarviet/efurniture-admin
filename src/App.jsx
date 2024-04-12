import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ErrorBoundary } from "react-error-boundary";
function App() {

  return (
    <>
      <ErrorBoundary FallbackComponent={<div>Something went wrong</div>} onError={() => alert('error')}>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </>
  );
}

export default App;
