import {Routes, Route} from 'react-router-dom';

import styles from './App.module.css';
import Frontpage from '../Components/Frontpage/Frontpage';

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path = "/" element = {<Frontpage />} />
        <Route path = "/login/doctor" element = {<h1>Login as a doctor</h1>} />
        <Route path = "/login/patient" element = {<h1>Login as a patient</h1>} />
        <Route path = "/doctor/queue" element = {<h1>Patient queue for doctor</h1>} />
        <Route path = "/doctor/schedule" element = {<h1>Doctor's schedule</h1>} />
        <Route path = "/patient/report" element = {<h1>Patient's report</h1>} />
        <Route path = "/patient/medicine" element = {<h1>Medicine reminder</h1>} />
      </Routes>
    </div>
  );
}

export default App;
