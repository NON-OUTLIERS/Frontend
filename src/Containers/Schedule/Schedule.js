import styles from './Schedule.module.css';
import Card from '../../Components/Util/Cards/Cards';

const Schedule = props => {
    // cards list initialization...
    let cards = null;
    if(props.patientList.length === 0)
        cards = 'No patient data available!!!';
    else{
        cards = props.patientList.map(patient => 
            <Card {...patient} key = {patient.patientId}/>
        );
    }
    return (
        <div id = {styles.outerBox}>
            {cards}
        </div>
    );
}

export default Schedule;