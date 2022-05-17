import {NavLink} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './patientList.module.css';
import profile from '../../assets/Images/user.png';
import { propTypes } from 'react-bootstrap/esm/Image';

function patientList(props) {
    return (
      <div className={styles.container}>
        {props.patients.map(({ patientName, patientId, status }) => (
          <NavLink to = {'/view-report/' + patientId} key = {patientId} className = {styles.removeDecoration}>
            <div className={styles.clr}>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <img className={styles.img} src={profile} alt="Logo"/>
                  <div className={styles.flitm} ><strong>Name-</strong>{patientName}</div>
                  <div className="p-2 col-example text-left flitm"><strong>ID-</strong>{patientId}</div>
                  <div className="p-2 col-example text-left flitm"><strong>Status-</strong>{status}</div>
                </div>
              </div>
            </div>
          </NavLink>
      ))}
      </div>
      
    )
  }
export default patientList