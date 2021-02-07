import './NotificationBlock.scss';

import NotificationBlockItem from './NotificationBlockItem/'
function NotificationBlock() {
    return (
        <div>
            <h3 className="notification-title">Сегодня</h3>
            <NotificationBlockItem/>
            <NotificationBlockItem/>
            <NotificationBlockItem/>
            <NotificationBlockItem/>
            <NotificationBlockItem/>
            <NotificationBlockItem/>
            <NotificationBlockItem/>
            <NotificationBlockItem/>
            <NotificationBlockItem/>
            <NotificationBlockItem/>
            <NotificationBlockItem/>
            <NotificationBlockItem/>
        </div>
    );
}

export default NotificationBlock;
