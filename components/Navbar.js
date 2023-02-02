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
                            <a className="nav-link" href="https://www.linkedin.com/in/alvaroz/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/alvaro-z" target="_blank" rel="noreferrer noopener">Github</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
