import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { ToastContainer } from 'react-toastify';
// import { transitions, positions, Provider as AlertProvider } from 'react-alert'
// import AlertTemplate from "react-alert-template-basic";

// try different option react-tostify or sonner for alerts 

// const options = {
//   // you can also just use 'bottom center'
//   position: positions.BOTTOM_CENTER,
//   timeout: 5000,
//   offset: '30px',
//   // you can also just use 'scale'
//   transition: transitions.SCALE
// }
// console.log('alertProvider-',AlertProvider)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* <AlertProvider template={AlertTemplate} {...options} > */}
        <App />
        <ToastContainer />
      {/* </AlertProvider> */}
    </Provider>
  </StrictMode>,
)
