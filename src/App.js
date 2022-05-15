import React from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

const App=()=> {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
  <>
  <div className="container">
    <h1 className="text-center  text-captitalize my-5 " >Medicine Schedule</h1>
    <hr/>
    <h3>{date}</h3>
    <br/>
    <h4>Set a Reminder for your medicines</h4>
    <br/>
    <div className="row">
    <div className="col-sm"><div class="card" >
  <img src="images/med.jpeg" class="card-img-top" alt="..." height="150px" background-size="cover" resizeMode="cover"/>
  <div class="card-body">
    <h5 class="card-title">Before Breakfast</h5>
    <ul className="no-bullets">
      <li>Combiflame   2tbs</li>
      <li>Parcacetamol   2tbs</li>
    </ul>
  </div>
</div></div>
    <div className="col-sm"><div class="card" >
  <img src="images/med.jpeg" 
  class="card-img-top" 
  alt="..."
  height="150px"/>
  <div class="card-body">
    <h5 class="card-title">After Lunch</h5>
    <ul className="no-bullets">
      <li>Combiflame   2tbs</li>
      <li>Parcacetamol   2tbs</li>
    </ul>
  </div>
</div></div>
    <div className="col-sm"><div class="card" >
  <img src="images/med.jpeg" class="card-img-top" alt="..." height="150px"/>
  <div class="card-body">
    <h5 class="card-title">After Dinner</h5>
    <ul className="no-bullets">
      <li>Combiflame   2tbs</li>
      <li>Parcacetamol   2tbs</li>
    </ul>
  </div>
</div></div>
  </div>
  <br/>
  <br/>
  <div className="ss">
  <a href="">Set Reminder</a>
  </div>
 
  </div>

    </>
  );
};

export default App;
