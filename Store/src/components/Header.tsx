import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping, faHeart, faUser, faUserCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Nav from "./Nav";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <>
            <header className="h-24 p-4">
                <div className="w-11/12 mx-auto">
                    <div className="flex flex-col gap-4 items-center">
                        {/* LOGO Y BAR */}
                        <div className="w-full flex justify-between items-center">
                            {/* LOGO */}
                            <div className="logo">
                                <a href="index.html">
                                    <img src="/logo.jpg" className="w-52" />
                                </a>
                            </div>
                            {/* BAR */}
                            <div className="text-2xl">
                                <label onClick={toggleMenu}>
                                    <i className="text-primary" id="menuIcon">
                                        <FontAwesomeIcon icon={isMenuOpen ? faX : faBars} />
                                    </i>
                                </label>
                            </div>
                        </div>
                        {/* BUSQUEDA */}
                        <div className={`justify-center ${isMenuOpen ? 'hidden' : 'flex'}`}>
                            <form id="formulario">
                                <input className="h-6 rounded-lg border-2 border-primary w-[300px] border-solid p-5 text-xl focus:outline-none" type="text" placeholder="Búsqueda en catálogo" id="search" />
                            </form>
                        </div>
                        <div className="social hidden">
                            <ul className="flex justify-end list-none">
                                <li>
                                    <a id="iconoCarrito" href="cart.html">
                                        <i className="text-3xl text-primary px-2.5 py-0">
                                            <FontAwesomeIcon icon={faCartShopping} />
                                        </i>
                                    </a>
                                </li>
                                <li>
                                    <a id="iconoCorazon" href="favorite.html">
                                        <i className="text-3xl text-primary px-2.5 py-0">
                                            <FontAwesomeIcon icon={faHeart} />
                                        </i>
                                    </a>
                                </li>
                                <li>
                                    <a id="iconoUsuario" href="#">
                                        <i className="text-3xl text-primary px-2.5 py-0">
                                            <FontAwesomeIcon icon={faUser} />
                                        </i>
                                    </a>
                                </li>
                                <li>
                                    <a id="iconoPerfil" href="#">
                                        <i className="text-3xl text-primary px-2.5 py-0">
                                            <FontAwesomeIcon icon={faUserCheck} />
                                        </i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header >
            <div className={`w-full text-center ${isMenuOpen ? 'block' : 'hidden'}`} id="nav" >
                <Nav />
            </div>
        </>
    )
}