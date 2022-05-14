import {useState} from 'react';
import axios from 'axios';

import styles from './DoctorPage.module.css';
import PatientList from '../../Components/Patient/patientList';
import Schedule from '../Schedule/Schedule';
import SideDrawer from "../../Components/SideDrawer/SideDrawer";
import TopNavBar from '../../Components/Navigation/TopNavbar/TopNavBar';
import profile from '../../assets/Images/user.png';

const DoctorPage = props => {
    //storing patientlist in the state patientList
    const [patientList, setPatientList] = useState([]);
    //storing the errors in the errors state
    const [errors, setErrors] = useState(null);

    let content = null;
    const patients = [
        {
            img: profile,
            patientName: 'Umesh',
            date: {
                day: 20,
                month: 12,
                year: 2021
            },
            patientId: '#13111',
            status: 1
        },
        {
            img: profile,
            patientName: 'Umesh',
            date: {
                day: 20,
                month: 12,
                year: 2021
            },
            patientId: '#13114',
            status: 0
        },
        {
            img: profile,
            patientName: 'Umesh',
            date: {
                day: 20,
                month: 12,
                year: 2021
            },
            patientId: '#13112',
            status: 1
        },
        {
            img: profile,
            patientName: 'Umesh',
            date: {
                day: 20,
                month: 12,
                year: 2021
            },
            patientId: '#13113',
            status: 0
        }
    ]

    //getting the patient data associated with the doctor from the backend
    const getPatientData = async () => {
        try{
            const response = await axios.get('#');
            setPatientList(response);
        }
        catch (e){
            setErrors(e);
        }
    }

    //checking the page to be displayed for the doctor...
    if(props.show === 'patients'){
        content = <PatientList />;
    }
    else{
        content = <Schedule patientList = {patients}/>;
    }

    return (
        <div id = {styles.viewBox}>
            <SideDrawer 
                view = 'doctor' 
                link1 = 'Schedule' 
                link2 = 'Patients'/>
            <div id = {styles.leftDiv}>
                <TopNavBar heading = {props.heading} img = {profile}/>
                <div id = {styles.content}>
                    {errors ? <h1>error occurred!!!</h1>: content}
                </div>
            </div>
        </div>
    )
}

export default DoctorPage;