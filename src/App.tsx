
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { ScrollToServiceUtils } from "./utils/ScrollToServiceUtils";

function App() {
  useEffect(() => {
    ScrollToServiceUtils.setupScrollHandlers();
  }, []);

  return (
    <div className="mobile-overflow-fix">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
