import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Counter from '../src/components/Counter.jsx'
import FormHandler from "../src/components/FormHandler.jsx"
import './index.css'
import Card from './components/Card.jsx'
import ApiCalling from './components/ApiCalling.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Counter /> */}
    {/* <FormHandler /> */}
    {/* <Card /> */}
    <ApiCalling />
  </StrictMode>,
)
