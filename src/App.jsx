import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainTable from './pages/MainTable';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/MainTable' element={<MainTable/>}></Route>
      </Routes>
    </Router>
  )
}

export default App