import Employees from "./Pages/Employees";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customers from "./Pages/Customers";
import Dictionary from "./Pages/Dictionary";
import Definition from "./Pages/Definition";
import NotFound from "./Components/NotFound";

function App() {
    return (
        
        <BrowserRouter>
            <Header>
                <Routes>
                    <Route path="/employees" element={<Employees />} />
                    <Route path="/dictionary" element={<Dictionary />} />
                    <Route path="/definition/:search" element={<Definition />} />
                    <Route path="/404" element={<NotFound />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="*" element={<NotFound />} />
                    
                </Routes>
            </Header>
        </BrowserRouter>
    )
}

export default App;

