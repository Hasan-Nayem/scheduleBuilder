import './SideNavigation.css';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

export default function SideNavigation() {
    return (
        <div>
            <ListGroup>
                <ListGroup.Item>
                    <h4 className='roboto-bold'>Menu</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p className='roboto-medium'>Specialty Management</p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Link to={'/manage/sp-manage/manage'} className='nav-link'>Manage</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Link to={'/manage/sp-manage/create'} className='nav-link'>Create New</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p className='roboto-medium'>Exam Management</p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Link to={'/manage/ex-manage/manage'} className='nav-link'>Manage</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Link to={'/manage/ex-manage/create'} className='nav-link'>Create New</Link>
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}
