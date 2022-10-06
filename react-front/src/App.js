
import './App.css';
import ListEmployeeComponent from './Components/ListEmployeeComponents';
import { BrowserRouter as Router,Routes, Route,  } from 'react-router-dom';
import Header from './layout/header/Header';
function App() {
  return (
    <div className="App">    


    
      <Router>
      <Header/>
      <ListEmployeeComponent />
      <header className="container">


      <Routes> 
      
      
        
         </Routes>
         </header>
      </Router>
 
     
    </div>
  );
}

export default App;
