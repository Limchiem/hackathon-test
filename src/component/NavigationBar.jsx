import { NavLink } from "react-router-dom";

export default function NavigationBar(props) {
    return(
        <nav>
            <ol>
                <li>
                    <NavLink to="/Kanto">Kanto</NavLink>
                </li>
                <li>
                    <NavLink to="/Johto">Johto</NavLink>
                </li>
            </ol>
        </nav>
    )
}