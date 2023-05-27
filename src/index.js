import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Toaster
      containerStyle={{
        marginTop: '15vh',
      }}
      toastOptions={{
        duration: 3000,
        style: {
          background: 'LavenderBlush',

          maxWidth: '100%',
          fontSize: '1.3rem',
          lineHeight: '2.5rem',
          padding: '15px 30px',
          // paddingLeft: '20px',
        },
      }}
    />
  </React.StrictMode>
);
