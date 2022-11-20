// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import VowelCounter from './components/VowelCounter';




function App() {
  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const removeBodyclassNamees = ()=>{
    document.body.classNameList.remove('bg-light')
    document.body.classNameList.remove('bg-dark')
    document.body.classNameList.remove('bg-success')
    document.body.classNameList.remove('bg-warning')
    document.body.classNameList.remove('bg-danger')
  }
  const toggleMode = (cls)=>{
    removeBodyclassNamees();
    document.body.classNameList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled","success")
    }

  }
  return (
    <>
  <Router>
    <Navbar title="Abhinandan"  mode= {mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert}/>
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About mode = {mode}/>
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode ={mode}/>
          </Route>
     </Switch>
    </div>
 </Router>
    {/* <VowelCounter/> */}
    </>
  );
}

export default App;
