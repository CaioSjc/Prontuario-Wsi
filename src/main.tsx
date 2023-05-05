import React from 'react'
import ReactDOM from 'react-dom/client'
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import  Router  from './Routes/Router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>    
    <Router/>
  </React.StrictMode>
)
