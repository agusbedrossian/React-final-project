import NavBarItem from "./NavBarItem";
import { GiClothes } from "react-icons/gi";
import CartWidget from "./CartWidget";
import "../style/NavBar.css"

function NavBar() {
    return <div>
        <section className="hero is-info is-small">
            <div className="menu-header">
                <div>
                    <h1 className="title menu-title">ModaExpress</h1>
                    <h2 className="subtitle">Renova tu vestidor <GiClothes /> </h2>
                </div>
                <CartWidget />
            </div>
            <aside className="menu hero-body">
                <ul className="navbar">
                    <NavBarItem description="Mujer" />
                    <NavBarItem description="Hombre" />
                    <NavBarItem description="Marcas" />
                    <NavBarItem description="Vender" />
                    <NavBarItem description="Log in" />
                </ul>
            </aside>

        </section>

    </div>
}

export default NavBar;