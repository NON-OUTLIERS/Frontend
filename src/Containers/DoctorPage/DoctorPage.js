import {useState} from 'react';
import axios from 'axios';

import styles from './DoctorPage.module.css';
import PatientList from '../../Components/Patient/patientList';
import Schedule from '../Schedule/Schedule';
import SideDrawer from "../../Components/SideDrawer/SideDrawer";

const DoctorPage = props => {
    const [patientList, setPatientList] = useState([]);
    const [errors, setErrors] = useState(null);

    let content = null;
    const patients = [
        {
            img: '#',
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
            img: '#',
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
            img: '#',
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
            img: '#',
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
    let error = errors ? <div className = {styles.error}>{errors.message}</div> : null
    const getPatientData = async () => {
        try{
            const response = await axios.get('#');
            setPatientList(response);
        }
        catch (e){
            setErrors(e);
        }
    }

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
                <div id = {styles.headerContainer}>
                    <div id = {styles.heading}>{props.heading}</div>
                    <span id = {styles.lineF}></span>   
                </div>
                <div id = {styles.content}>
                    {errors ? error: content}
                </div>
            </div>
        </div>
    )
}

export default DoctorPage;