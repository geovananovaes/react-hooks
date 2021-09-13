import './Menu.css'
import React from "react"
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Hooks</Link>
                </li>
                <li>
                    <Link to="/UseState">useState()</Link>
                </li>
                <li>
                    <Link to="/UseEffect">useEffec()</Link>
                </li>
                <li>
                    <Link to="/useContext">useContext()</Link>
                </li>
            </ul>
        </nav>
    </aside>
)
export default Menu