import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UseRefComponents from './hooks/UseRefComponents.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UseRefComponents />
  </StrictMode>,
);
