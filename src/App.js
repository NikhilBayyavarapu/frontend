import './App.css';
import React from 'react';
import {BrowserRouter as Router,Route, Routes,Link} from 'react-router-dom'
import AddStudent from './components/addstudent';



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
            {/* <li>
              <Link to="/option2">Option 2</Link>
            </li>
            <li>
              <Link to="/option3">Option 3</Link>
            </li>
            <li>
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
            <Route path="/addStudent" element={<AddStudent />} />
        </Routes>
   
        {/* <Route path="/option2" component={Option2} />
        <Route path="/option3" component={Option3} />
        <Route path="/option4" component={Option4} /> */}
      </div>
    </Router>
  );
}

export default App;
