import Header from "./components/Header";
import Artists from "./pages/Artists";
import Albums from "./pages/Albums";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
            <Header>
                <Routes>
                    <Route path="/artists" element={<Artists />} />
                    <Route path="/albums" element={<Albums />} />
                </Routes>
            </Header>   
      </BrowserRouter>
  )
}
export default App;