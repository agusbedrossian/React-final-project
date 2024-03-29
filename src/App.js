import NavBar from "./components/NavBar";
import "bulma/css/bulma.css";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
    return <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
                <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>
    </div>
}

export default App;