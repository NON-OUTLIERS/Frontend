import SideDrawer from "../../Components/SideDrawer/SideDrawer";

import styles from './DoctorPage.module.css';
import PatientList from '../../Components/Patient/patientList';

const DoctorPage = props => {
    let content = null;

    if(props.show === 'patients'){
        content = <PatientList />;
    }
    else{
        content = (
            <div>

            </div>
        );
    }
    return (
        <div id = {styles.viewBox}>
            <SideDrawer 
                view = 'doctor' 
                link1 = 'Schedule' 
                link2 = 'Patients'/>
            <div id = {styles.leftDiv}>
                <div id = {styles.heading}>{props.heading}</div>
                <span id = {styles.lineF}></span>
                {content}
            </div>
        </div>
    )
}

export default DoctorPage;