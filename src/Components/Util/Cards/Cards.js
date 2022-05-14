import styles from './Cards.module.css';

const card = props => {
    return (
        <div className = {[styles.container, props.status === 1 ? styles.critical: styles.moderate].join(' ')}>
            <div className = {styles.container1}>
                <img src = {props.img} alt = 'profile pic'/>
                <div className = {styles.name}>{props.patientName}</div>
            </div>
            <div className = {styles.details}>
                <u>Last Visit:</u> &nbsp;{props.date.day}/{props.date.month}/{props.date.year}
            </div>  
            <div className = {styles.details}>
                <u>Patient Id:</u> &nbsp;{props.patientId}
            </div>  
            <div className = {styles.details}>
                <u>Status:</u> &nbsp;{props.status === 1 ? 'Critical': 'Moderate'}
            </div>  
        </div>
    );
}

export default card;