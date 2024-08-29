import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping, faHeart, faUser, faUserCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <>
            <header className="h-24 p-4">
                <div className="w-11/12 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
                        {/* LOGO Y BAR */}
                        <div className="w-full flex justify-between items-center">
                            {/* LOGO */}
                            <div className="flex-shrink-0">
                                <Link to="/">
                                    <img src="/logo.jpg" className="w-36 sm:w-52" />
                                </Link>
                            </div>
                            {/* ICONOS */}
                            <div className="hidden sm:flex gap-4 mt-4 sm:mt-0">
                                <a id="iconoCarrito">
                                    <i className="text-3xl text-primary px-2.5 py-0">
                                        <FontAwesomeIcon icon={faCartShopping} />
                                    </i>
                                </a>
                                <a id="iconoCorazon">
                                    <i className="text-3xl text-primary px-2.5 py-0">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </i>
                                </a>
                                <a id="iconoUsuario">
                                    <i className="text-3xl text-primary px-2.5 py-0">
                                        <FontAwesomeIcon icon={faUser} />
                                    </i>
                                </a>
                                <a id="iconoPerfil">
                                    <i className="text-3xl text-primary px-2.5 py-0">
                                        <FontAwesomeIcon icon={faUserCheck} />
                                    </i>
                                </a>
                            </div>
                            {/* BAR */}
                            <div className="text-2xl sm:hidden">
                                <label onClick={toggleMenu}>
                                    <i className="text-primary" id="menuIcon">
                                        <FontAwesomeIcon icon={isMenuOpen ? faX : faBars} />
                                    </i>
                                </label>
                            </div>
                        </div>
                        {/* BUSQUEDA */}
                        <div className={`w-full justify-center ${isMenuOpen ? 'hidden' : 'flex'} justify-center mt-4 sm:mt-0 lg:absolute`}>
                            <form>
                                <input className="h-10 rounded-lg border-2 border-primary w-[300px] border-solid p-2 text-base sm:text-xl focus:outline-none" type="text" placeholder="Búsqueda en catálogo" />
                            </form>
                        </div>
                    </div>
                </div>
            </header >
            <div className={`w-full h-custom text-center ${isMenuOpen ? 'flex' : 'hidden'}`}>
                <Nav />
            </div>
        </>
    )
}
