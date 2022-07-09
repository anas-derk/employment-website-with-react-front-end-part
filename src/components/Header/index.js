import { Link } from "react-router-dom";
import "./style.min.css";

function Header() {
    return (
        // Start Header Section
        <header className="header-section">
            {/* Start Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                {/* Start Container */}
                <div className="container">
                    <a className="navbar-brand" href="/">موقع توظيف</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <i className="fas fa-home"></i>
                                <Link to="/" >الرئيسية</Link>
                            </li>
                            <li className="nav-item">
                                <i className="fas fa-folder-open"></i>
                                <Link to="/" >عروض العمل</Link>
                            </li>
                            <li className="nav-item">
                                <i className="fas fa-info-circle"></i>
                                <Link to="/" >حول الموقع</Link>
                            </li>
                            <li className="nav-item">
                                <i className="fas fa-phone-square-alt"></i>
                                <Link to="/" >إتصل بنا</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav align-items-center" style={{ marginRight: "auto" }}>
                            <li className="nav-item">
                                <i className="fas fa-sign-out-alt"></i>
                                <Link to="/login">
                                    تسجيل الدخول
                                </Link>
                            </li>
                            <li className="nav-item">
                                <i className="fas fa-sign-in-alt"></i>
                                <Link to="/sign-up">
                                    إشتراك
                                </Link>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="nav-link btn btn-danger text-white"
                                    aria-current="page"
                                >
                                    <i className="fas fa-sign-out-alt"></i>
                                    تسجيل الخروج
                                </button>
                            </li>
                        </ul>
                    </div >
                </div >
                {/* End Container */}
            </nav >
            {/* End Navbar */}
        </header >
        //   End Header
    );
}

export default Header;