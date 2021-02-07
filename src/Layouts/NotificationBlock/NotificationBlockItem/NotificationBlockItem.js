import {NavDropdown} from 'react-bootstrap'

import profileImage from '../../../images/profile-image.jpg';

import './NotificationBlockItem.scss';

function NotificationBlockItem() {
    return (
        <div className="d-flex notification-item p-0 bg-transparent align-items-start">
            <a href="" className="flex-shrink-0  notification-item-image overflow-hidden rounded-circle text-decoration-none">
                <img src={profileImage} className="w-100 h-100" alt=""/>
            </a>
            <div className="flex-grow-1 notification-item-content">
                <a href="" className="notification-item-user-name text-decoration-none d-inline-flex">Иванова Елена</a>
                <a href="#" className="d-block notification-item-info m-0">Нравится Ваша публикация <span className="notification-item-content-time">2 часа</span></a>
            </div>
            <a href="#" className="flex-shrink-0 notification-item-image rounded overflow-hidden m-0">
                <img src={profileImage} className="w-100 h-100" alt=""/>
            </a>
        </div>
    );
}

export default NotificationBlockItem;
