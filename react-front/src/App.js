
import './App.css';
import ListEmployeeComponent from './Components/ListEmployeeComponents';
import { BrowserRouter as Router,Routes, Route,  } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="container">
      <Router>
 
     


      <Routes> 
      <Route path='/register' element={<ListEmployeeComponent />} />
        
         </Routes>
      </Router>
 
      </header>
    </div>
  );
}

export default App;
