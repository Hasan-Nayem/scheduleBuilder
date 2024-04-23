import { ListGroup } from "react-bootstrap";
import "./BuilderLayout.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const BuilderLayout = () => {
    const navigate = useNavigate();
    useEffect(()=> {
        navigate('/builder/schedule-build');
    },[]);
    return (
        <div className="container p-4">
            <div className="alert alert-primary" role="alert">
                <h2 className="text-center roboto-black-italic ">Session - July 2024</h2>
            </div>
            <div className="row">
                <div className="col-lg-3 text-default text-center">
                <div>
                    <ListGroup>
                    <ListGroup.Item>
                        <h4 className="roboto-bold">Build Menu</h4>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Link to={"/builder/schedule-build"} className="nav-link">
                        Build
                        </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Link to={"/builder/schedule-view"} className="nav-link">
                        View in tabular format
                        </Link>
                    </ListGroup.Item>
                    </ListGroup>
                </div>
                </div>
                <div className="col-lg-9">
                <Outlet />
                </div>
            </div>
        </div>
    );
};

export default BuilderLayout;
