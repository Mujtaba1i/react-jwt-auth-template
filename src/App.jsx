import NavBar from "./components/NavBar/NavBar"
import SignUpForm from "./components/SignUpForm/SignUpForm"
import Homepage from "./components/Homepage/Homepage"
import { Route,Routes } from "react-router"

function App() {
  return (
    <>
    <div>
      <NavBar/> 
      <h1>MAMAMIA!!</h1> 
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/Sign-up" element={<SignUpForm/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App