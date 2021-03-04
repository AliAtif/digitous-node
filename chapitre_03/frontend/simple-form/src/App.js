import { useEffect, useState } from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import logo from './logo.svg';
import AddForm from './components/AddForm';
import StudentsList from './components/StudentsList';
import './App.css';

function App() {

  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/students")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setStudents(response);
      });
  }, []);
  return (
    <>
       <BrowserRouter>
      <h1>Students</h1>
      <Switch>
        <Route path="/" exact>
          <StudentsList students={students}/>
        </Route>

        <Route path="/add">
          <AddForm/>
        </Route>
      </Switch>
    </BrowserRouter>
    
    </>
  );
}

export default App;
