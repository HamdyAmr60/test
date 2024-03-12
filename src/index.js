import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Dashboard from './Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container'>
    <div className='dash-board'>
    <Dashboard/>
    </div>
    <div className='app-card'><h2 style={{
      color: "hsl(234, 85%, 45%)"
    }}>Summary</h2><App/><button style={{
      color :"white",
      backgroundColor :"hsl(224, 30%, 27%)",
      width:"90%",
      margin : "20px auto" ,
      padding : "10px 40px",
      borderRadius : "30px",
      border :"none",
      fontSize : "16px",
      fontWeight:"bold",

    }}>Continue</button>
    </div>
  </div>
);

