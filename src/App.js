import NavBar from "./components/NavBar";
import "bulma/css/bulma.css";
import ItemListContainer from "./components/ItemListContainer";

function App() {
    return <div>
        <NavBar />
        <ItemListContainer title="Item List Container" description="Bienvenido a mi primer e-commerce" />
    </div>
}

export default App;