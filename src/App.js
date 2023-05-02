import './App.css';
// import About from './Components/About';
import Nabvar from './Components/Navbar'
import TextForm from './Components/TextForm'
import About from './Components/About'
import React , { useState } from 'react'
import Alerts from './Components/Alerts';
import {
  BrowserRouter,
  // Switch,
  Route,
  // Link,
  Routes
} from "react-router-dom";

function App() {
  const [alert, setalert] = useState(null)
  const showAlert = (message,type) =>  {
    setalert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const [mode, setMode] = useState("light")
  const remClass = () => {
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
  }
  const toggleMode = (clss) => {
    remClass()
    document.body.classList.add('bg-'+clss)
    if (mode === "light") {
      setMode("dark")
      document.body.style.background = "#042743"
      showAlert("Dark Mode Enabled" ,"success")
      // document.title = "Text Utils - Dark"
    } else  {
      setMode("light")
      document.body.style.background = "white"
      showAlert("Light Mode Enabled" ,"success")
      // document.title = "Text Utils - Light"
    }
    
  }

  return (
    // <>
    // <Nabvar title="Amaan" text="About Proj" mode={mode} toggleMode={toggleMode}/>
    // <Alerts alert={alert}/>
    // <div className="container my-3">

           
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" exact element={ <TextForm showAlert={showAlert} heading="Please Enter Text Here!" mode={mode} />}>
    //       <Route path='/' exact element={ <TextForm showAlert={showAlert} heading="Please Enter Text Here!" mode={mode} />} />
    //       <Route path="about" exact element={<About />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>

    // </div>
    // </>
    <>
    <BrowserRouter>
    <Nabvar title="Amaan" text="About Proj" mode={mode} toggleMode={toggleMode}/>
    <Alerts alert={alert}/>

      <Routes>
        <Route exact path="/" element={<TextForm mode={mode}  />}/> 
          <Route exact path="/About" element={<About mode={mode} />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
