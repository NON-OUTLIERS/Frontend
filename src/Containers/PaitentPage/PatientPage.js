import {useState} from 'react';

import styles from './PatientPage.module.css';
import SideDrawer from '../../Components/SideDrawer/SideDrawer';
import TopNavBar from '../../Components/Navigation/TopNavbar/TopNavBar';
import Report from '../../Components/Report/Report';
import profile from '../../assets/Images/user.png';

const PatientPage = props => {
    const [patientReport, setPatientReport] = useState({});
    const [errors, setErrors] = useState(null);

    let content = null;
    let fakeReport = {
        patientName: 'Someone',
        patientID: '#121121',
        gender: 'male',
        email: 'somone@gmail.com',
        age: 30,
        mobile: 2424114423,
        img: profile,
        doctorName: 'Dr. Chadwick Hugh',
        diagnosis: 'Cancer',
        descDiagnosis: 'Some random text Some random text Some random text Some random text',
        prescription: 'some random text',
        startDate: '20/12/2021',
        endDate: null
    }
    const getReportData = () => {
        // get the data for report...
    }

    if(props.show === 'report')
        content = <Report {...fakeReport}/>
    else
        content = <h1>Medicine scheduler</h1>

    return (
        <div id = {styles.viewBox}>
            <SideDrawer 
                view = 'Patient' 
                link1 = 'Report' 
                link2 = 'Medicine'/>
            <div id = {styles.leftDiv}>
                <TopNavBar heading = {props.heading} img = {profile} type = 'patient'/>
                <div id = {styles.content}>
                    {errors ? <h1>error occurred!!!</h1>: content}
                </div>
            </div>
        </div>
    );
}

export default PatientPage;