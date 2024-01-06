import './App.css';
import React from 'react';
import {BrowserRouter as Router,Route, Routes,Link} from 'react-router-dom'
import AddStudent from './components/addstudent';
import PayFee from './components/payfee';
import GetStudent from './components/getstudent';



function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/addStudent">Add Student</Link>
            </li>
            <li>
              <Link to="/payFee">Pay Fee</Link>
            </li>
            <li>
              <Link to="/getStudent">Get Student</Link>
            </li>
            {/* <li>
              <Link to="/option4">Option 4</Link>
            </li> */}
          </ul>
        </nav>
        <div>
          <p> This is Home Page</p>
        </div>
        <hr />

        {/* <Route exact path="/" component={Home} /> */}
        <Routes>
            <Route path="/addStudent" element={<AddStudent/>} />
            <Route path="/payFee" element={<PayFee/>}/>
            <Route path="/getStudent" element={<GetStudent/>}/>
        </Routes>
   
        {/* <Route path="/option2" component={Option2} />
        <Route path="/option3" component={Option3} />
        <Route path="/option4" component={Option4} /> */}
      </div>
    </Router>
  );
}

export default App;
