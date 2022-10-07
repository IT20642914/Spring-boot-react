
import './App.css';
import ListEmployeeComponent from './Components/ListEmployeeComponents';
import AddEmployee from './Components/AddEmployee/AddEmployee';

import Header from './layout/header/Header';
import { BrowserRouter as Router,Routes, Route,  } from 'react-router-dom';
import EditeEmployee from './Components/EditeEmployee/EditeEmployee';
function App() {
  return (
    <div className="App">    


    
  <Router>
    <Header/>

       <Routes>    
            < Route exact path='/' element={<ListEmployeeComponent />}> </Route>
            < Route exact path='/add' element={<AddEmployee />}> </Route>
            < Route exact path='/edite' element={<EditeEmployee />}> </Route>
        </Routes>
        
  </Router>
 
     
    </div>
  );
}

export default App;
