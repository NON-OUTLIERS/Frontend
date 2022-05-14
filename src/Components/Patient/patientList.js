import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './patientList.module.css';

import profile from '../../assets/Images/user.png';

const arrayOfObjects = [
  { patientName: "Someone 1", patientID: "1111", status: "A" },
  { patientName: "Someone 2", patientID: "2222", status: "B" },
  { patientName: "Someone 3", patientID: "3333", status: "C" },
  { patientName: "Someone 4", patientID: "4444", status: "D" },
  { patientName: "Someone 5", patientID: "5555", status: "E" },
  { patientName: "Someone 6", patientID: "6666", status: "F" }
];

function patientList() {
    return (
      <div className={styles.container}>
        {arrayOfObjects.map(({ patientName, patientID, status }) => (
        <div className={styles.clr} key = {patientID}>
          <div className="card-body">
            <div className="d-flex justify-content-between">
            <img className={styles.img} src={profile} alt="Logo"/>
            <div className={styles.flitm} ><strong>Name-</strong>{patientName}</div>
            <div className="p-2 col-example text-left flitm"><strong>ID-</strong>{patientID}</div>
            <div className="p-2 col-example text-left flitm"><strong>Status-</strong>{status}</div>
            </div>
        </div>
      </div>
      ))}
      </div>
      
    )
  }
export default patientList