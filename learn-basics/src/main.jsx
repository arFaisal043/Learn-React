import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UseEffectComponent from './hooks/UseEffectComponent.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UseEffectComponent />
  </StrictMode>,
);
