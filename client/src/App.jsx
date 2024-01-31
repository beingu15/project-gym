
// import 'bootstrap/dist/css/bootstrap.min.css'
// import Signup from './Signup'
// import {BrowserRouter, Route, Routes } from 'react-router-dom';
// // import Login from './Login';


// function App() {

//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path='/register' element={<Signup}></Route>
//       {/* <Route path='Login' element={<Login/>}></Route> */}
//     </Routes>
//     </BrowserRouter>
//     )
// }

// export default App

import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Dashboard from './Dashboard';



export default function App() {
  return (
    // <div>
    //   <h1>ghgfgfhgg</h1>
    // </div>
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/register' element={<Signup/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/dashboard' element={<Dashboard/>}></Route>
    
     </Routes>
     
    </BrowserRouter>
    
  
   
    
  )
}
