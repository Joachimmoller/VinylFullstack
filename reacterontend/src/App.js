import Header from "./components/Header";
import BackgroundImg from "./assets/record-black-background.jpg"
import Artists from "./pages/Artists";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
            <Header>
                <Routes>
                    <Route path="/artists" element={<Artists />} />
                </Routes>
            </Header>   
      </BrowserRouter>
  )
}
export default App;