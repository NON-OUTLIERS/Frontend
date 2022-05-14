import {Routes, Route, useNavigate} from 'react-router-dom';

import styles from './App.module.css';
import Frontpage from '../Components/Frontpage/Frontpage';
import DoctorLogin from '../Components/Login_Signup/doctors/login';
import Patients from '../Components/Patient/patientList'
import DoctorPage from './DoctorPage/DoctorPage';
import PatientPage from  './PaitentPage/PatientPage';

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path = "/" element = {<Frontpage />} />
        <Route path = "/login/doctor" element = {<DoctorLogin name = 'Doctor Login'/>} />
        <Route path = "/login/patient" element = {<Patients />} />
        <Route path = "/doctor/patients" element = {<DoctorPage show = 'patients' heading = "Patient's List"/>} />
        <Route path = "/doctor/schedule" element = {<DoctorPage show = 'schedule' heading = 'Schedule'/>} />
        <Route path = "/patient/report" element = {<PatientPage show = 'report' heading = "Medical Report" />} />
        <Route path = "/patient/medicine" element = {<PatientPage show = 'medicine' heading = "Schedule Medicines" />} />
      </Routes>
    </div>
  );
}

export default App;
