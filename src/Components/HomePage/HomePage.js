import {Button} from 'react-bootstrap'
import './HomePage.scss';
import profileImage from '../../images/profile-image.jpg';

function HomePage() {
    return (
        <div className="App">
            <h2 className="title">Какую услугу Вы ищете?</h2>
            <ul className="list-unstyled items-list">
                <li className="">
                    <a href="" className="d-block text-decoration-none">
                        <figure className="m-0 image-container overflow-hidden position-relative d-block">
                            <img src={profileImage} className="w-100 h-100 position-absolute" alt=""/>
                        </figure>
                        <span className="text">Наращивание ресниц</span>
                    </a>
                </li>
                <li className="">
                    <a href="" className="d-block text-decoration-none">
                        <figure className="m-0 image-container overflow-hidden position-relative d-block">
                            <img src={profileImage} className="w-100 h-100 position-absolute" alt=""/>
                        </figure>
                        <span className="text">Наращивание ресниц</span>
                    </a>
                </li>
                <li className="">
                    <a href="" className="d-block text-decoration-none">
                        <figure className="m-0 image-container overflow-hidden position-relative d-block">
                            <img src={profileImage} className="w-100 h-100 position-absolute" alt=""/>
                        </figure>
                        <span className="text">Наращивание ресниц</span>
                    </a>
                </li>
                <li className="">
                    <a href="" className="d-block text-decoration-none">
                        <figure className="m-0 image-container overflow-hidden position-relative d-block">
                            <img src={profileImage} className="w-100 h-100 position-absolute" alt=""/>
                        </figure>
                        <span className="text">Наращивание ресниц</span>
                    </a>
                </li>
                <li className="">
                    <a href="" className="d-block text-decoration-none">
                        <figure className="m-0 image-container overflow-hidden position-relative d-block">
                            <img src={profileImage} className="w-100 h-100 position-absolute" alt=""/>
                        </figure>
                        <span className="text">Наращивание ресниц</span>
                    </a>
                </li>
                <li className="">
                    <Button className="add-btn d-block w-100 position-relative" variant="link">
                        <i className="icon-plus position-absolute w-100 h-100 d-flex align-items-center justify-content-center"/>
                    </Button>
                </li>
            </ul>
        </div>
    );
}

export default HomePage;
