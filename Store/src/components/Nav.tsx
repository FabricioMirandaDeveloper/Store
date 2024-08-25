const optionsNav = [
    { title: "PRODUCTOS", linkTo: "#" },
    { title: "GUÍA PARA COMPRAR", linkTo: "./orders.html" },
    { title: "CATALOGOS", linkTo: "#" },
    { title: "OFERTAS", linkTo: "#" },
    { title: "BLOG", linkTo: "#" },
    { title: "CONTACTENOS", linkTo: "#" },
];
export default function Nav() {
    return(
        <ul className="h-custom flex flex-col justify-around list-none bg-primary">
            {optionsNav.map((option, index) => (
                <li key={index}>
                    <a className="font-bold text-white" href={option.linkTo}>
                        {option.title}
                    </a>
                </li>
            ))}
        </ul>
    )
}