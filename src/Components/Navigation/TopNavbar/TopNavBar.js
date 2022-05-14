import { useNavigate } from 'react-router-dom';

import styles from './TopNavBar.module.css';

const TopNavBar = props => {
    let navigate =  useNavigate();
    const logoutHandler = () => {
        //logout handler function...
        navigate('/');
    }

    return (
        <div id = {styles.headerContainer}>
            <div id = {styles.firstDivContainer}>
                <div id = {styles.heading}>{props.heading}</div>
                <div id = {styles.logoutBtn} onClick = {logoutHandler}>
                    <img src = {props.img} alt = 'profile-image'/>
                    Logout
                </div>
            </div>
            <span id = {styles.lineF}></span>   
        </div>
    );
}

export default TopNavBar;