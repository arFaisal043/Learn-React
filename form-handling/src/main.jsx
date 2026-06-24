import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactHookForm from './ReactHookForm.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReactHookForm />
  </StrictMode>,
);
