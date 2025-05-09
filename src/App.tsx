import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Index from "./pages/Index"
function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/index" element={<Index />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
