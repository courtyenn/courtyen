import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import { Footer } from "./pages/Footer";
import { Home } from "./pages/Home";

function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <div className="grid grid-rows-layout grid-cols-layout">
        <Home />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
