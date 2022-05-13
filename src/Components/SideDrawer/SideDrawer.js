import {NavLink} from 'react-router-dom';

import styles from './SideDrawer.module.css';

const sideDrawer = props => {
    return (
        <div className = {styles.container}>
            <NavLink to = '/' className = {styles.home}>Home</NavLink>
            <span id = {styles.line}></span>
            <div id = {styles.navContainer}>
                <NavLink to = {'/' + props.view + '/' + props.link1}  className = {({isActive}) => [styles.navBtn, isActive ? styles.active : ""].join(' ')}>{props.link1}</NavLink>
                <NavLink to = {'/' + props.view + '/' + props.link2} className = {({isActive}) => [styles.navBtn, isActive ? styles.active : ""].join(' ')}>{props.link2}</NavLink>
            </div>
        </div>
    );
}

export default sideDrawer;