import {NavLink} from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = props => {
    return (
        <div className = {styles.navigationContainer}>
            <div>
                <NavLink to = '/' className = {styles.NavBtns}>Home</NavLink>
                <NavLink to = '/#about-us' className = {styles.NavBtns}>About Us</NavLink>
                <NavLink to = '#' className = {styles.NavBtns}>Sign Up</NavLink>
            </div>
        </div>
    )
}

export default Navigation;