import { Link } from "react-router-dom";


import "./header.css";

function Header() {


    return (
        <>
            <div className="container-fixed">
            <div className="pt3 mt-4 header">
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/home">View all characters</Link>
                    </li>
                    <li>
                        <Link to="/favorites">See your pick</Link>
                    </li>
                </ul>
            </nav>
            </div>
        </>
    );
}

export default Header;