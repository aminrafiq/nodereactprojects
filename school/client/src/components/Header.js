import { Link } from "react-router-dom";

const Header = () => {

    const logoStyle = {
        border: "1px solid #333",
        padding: "4px",
    };

    return (
        <nav className="main-header navbar navbar-expand-md navbar-light navbar-white">
            <div className="container">
                <Link to="/dashboard" className="navbar-brand" style={logoStyle}>
                    <span className="brand-text font-weight-light"><b>My School</b> Portal</span>
                </Link>
                <button
                    className="navbar-toggler order-1"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                    aria-controls="navbarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse order-3" id="navbarCollapse">
                    <ul className="navbar-nav">
                        <li className="nav-item<%=path === '/dashboards' ? 'nav-item active' : 'nav-item' %>">
                            <Link to="/dashboard" className="nav-link">Dashboard</Link>
                        </li>
                        <li className="nav-item<%=path === '/courses' ? 'nav-item active' : 'nav-item' %>">
                            <Link to="/courses" className="nav-link">Courses</Link>
                        </li>
                        <li className="nav-item<%=path === '/students' ? 'nav-item active' : 'nav-item' %>">
                            <Link to="/students" className="nav-link">Students</Link>
                        </li>
                        <li className="nav-item<%=path === '/teachers' ? 'nav-item active' : 'nav-item' %>">
                            <Link to="/teachers" className="nav-link">Teachers</Link>
                        </li>
                    </ul>
                </div>

                <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
                    <li className="nav-item dropdown">
                        <a
                            href="#"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            className="nav-link dropdown-toggle"
                        >
                        </a>
                        <ul className="dropdown-menu border-0 shadow">
                            <li><a href="logout" className="dropdown-item">Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav >
    );
}

export default Header;
