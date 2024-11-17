import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from './Create';
import BlogDetails from './BlogDetail';
import NotFound from './NotFound'

function App() {
  return (
    <Router>
			<div className="App">
				<Navbar></Navbar>
          <div className="content">
				    <Routes>
					    <Route path='/' element={ <Home /> } />
              <Route path ='/create' element = {<Create/>}/>
              <Route path ='/blogs/:id'
                element = {<BlogDetails/>}/>
              <Route path = "*" element = {<NotFound/>}/>
				    </Routes>
        </div>
			</div>
		</Router>
  );
}

export default App;
