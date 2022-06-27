import React from 'react';
import ReactDOM from 'react-dom/client';
import DatePicker from './lib/DatePicker';
import './style.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <div className="demo">
      <DatePicker label='date picker' name='date-picker' />
    </div>
  </React.StrictMode>
)
