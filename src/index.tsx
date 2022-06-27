import React from 'react';
import ReactDOM from 'react-dom/client';
import DatePicker from './lib/DatePicker';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <DatePicker label='date picker' name='date-picker' />
  </React.StrictMode>
)
