import Student from './Student/page.js'
import Admin from './Admin/page.js';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin/*' element={<Admin />} />
        <Route path='/student/*' element={<Student />} />
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;