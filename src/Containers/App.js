import {Routes, Route} from 'react-router-dom';

import styles from './App.module.css';
import Frontpage from '../Components/Frontpage/Frontpage';
import DoctorLogin from '../Components/Login_Signup/doctors/login';
import PatientLogin from '../Components/Login_Signup/Patients/login';
import Patients from '../Components/Patient/PatientList'
import DoctorPage from './DoctorPage/DoctorPage';
import PatientPage from  './PaitentPage/PatientPage';
import PatientSignup from '../Components/Login_Signup/Patients/signupP';


function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path = "/" element = {<Frontpage />} />
        <Route path = "/doctor/login" element = {<DoctorLogin name = 'Doctor Login'/>} />
        <Route path = "/patient/login" element = {<PatientLogin name = 'Patient Login' />} />
        <Route path = "/doctor/all-patients/*" element = {<DoctorPage show = 'patients' heading = "Patient's List"/>} />
        <Route path = "/patient/signup" element = {<PatientSignup />} />
        <Route path = "/doctor/queue" element = {<DoctorPage show = 'schedule' heading = "Patient's Queue"/>} />
        <Route path = "/doctor/appointments" element = {<DoctorPage show = 'Appointments' heading = "Appointments"/>} />
        <Route path = "/patient/report" element = {<PatientPage show = 'report' heading = "Medical Report" />} />
        <Route path = "/patient/medicine" element = {<PatientPage show = 'medicine' heading = "Schedule Medicines" />} />
      </Routes>
    </div>
  );
}

export default App;
