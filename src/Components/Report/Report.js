import styles from  './Report.module.css';

const Report = props => {
    return (
        <div id = {styles.outerBox}>
            <div id = {styles.contentContainer}>
                <div className = {styles.partReport}>Patient's Details</div>
                    <div className = {styles.header}>
                        <span><span className = {styles.label}>Name: &nbsp;</span>{props.patientName}</span>
                        <span><span className = {styles.label}>Patient ID: &nbsp;</span>{props.patientID}</span>
                    </div>
                <span className = {styles.fields}><span className = {styles.label}>Gender: &nbsp;</span>{props.gender}</span>
                <span className = {styles.fields}><span className = {styles.label}>Age: &nbsp;</span>{props.age}</span>
                <span className = {styles.fields}><span className = {styles.label}>Email: &nbsp;</span>{props.email}</span>
                <span className = {styles.fields}><span className = {styles.label}>Mobile: &nbsp;</span>{props.mobile}</span>

                <div className = {styles.partReport}>Treatment Details</div>
                <span className = {styles.fields}><span className = {styles.label}>Consulting Doctor: &nbsp;</span>{props.doctorName}</span>
                <span className = {styles.fields}><span className = {styles.label}>Medical Diagnosis: &nbsp;</span>{props.diagnosis}</span>
                <span className = {styles.fields}><span className = {styles.label}>Description of Diagnosis: &nbsp;</span>{props.descDiagnosis}</span>
                <span className = {styles.fields}><span className = {styles.label}>Medical Advice/Prescription: &nbsp;</span>{props.prescription}</span>
                <div className = {styles.header}>
                    <span><span className = {styles.label}>Start Date: &nbsp;</span>{props.startDate}</span>
                    <span><span className = {styles.label}>End Date: &nbsp;</span>{props.endDate ? props.endDate: 'Under Consultance'}</span>
                </div>
            </div>
            <div id = {styles.imageContainer}>
                <img src = {props.img} alt = 'profile-image' />
            </div>
        </div>
    );
}

export default Report;