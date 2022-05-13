import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


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
      <div className="container">
        <h3 className="text-center">Patient's List</h3>
        {arrayOfObjects.map(({ patientName, patientID, status }) => (
        <div class="card clr">
          <div class="card-body">
            <div className="d-flex justify-content-between">
            <div className="p-2 col-example text-left flitm">Name-{patientName}</div>
            <div className="p-2 col-example text-left flitm">ID-{patientID}</div>
            <div className="p-2 col-example text-left flitm">Status-{status}</div>
            </div>
        </div>
      </div>
      ))}
      </div>
      
    )
  }
export default patientList