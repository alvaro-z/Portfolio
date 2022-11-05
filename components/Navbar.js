import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand">Portfolio</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link href="https://www.linkedin.com/in/alvaroz/">
                                <a className="nav-link">LinkedIn</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="https://github.com/alvaro-z">
                                <a className="nav-link">Github</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
