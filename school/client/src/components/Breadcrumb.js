import { Link } from "react-router-dom";

const Breadcrumb = (props) => {
    return (
        <div className="content-header">
            <div className="container">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-0">{props.pageTitle}</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                            <li className="breadcrumb-item active">{props.pageTitle}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Breadcrumb;
