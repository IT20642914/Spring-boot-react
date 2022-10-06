import React,{useState,useEffect} from 'react'
import axios from 'axios'
import ListEmployeeRow from './ListEmployeeRow';

function ListEmployeeComponents() {


const [EmployeeList, setEmployeeList] = useState([],)


useEffect(() => {
 getAllEmployees();

}, []);


const  getAllEmployees=(()=>{
    axios
    .get("http://localhost:8080/api/v1/employee")
    .then((data)=>{
       
        setEmployeeList(data.data);
        console.log(data.data);
    })
    .catch((err)=>{ alert(err)})
});







  return (
            <div>

<br></br>
        <div className="container">
            <div className="card shadow mb-4">

            <div className="card-header py-3"> <h6 className="m-2 font-weight-bold text-dark">View All Categories</h6>

            <form className="form-inline my-1 my-lg-0">
        <div className="serchbar">
        <input className="form-control mr-sm-1" type="search" placeholder="Search by name" />
        </div>
        </form>

            </div>
            
            <table className="table table-hover table-bordered table-responsive-md ">
            <thead className="thead-dark">
        
                <tr className="table-dark">  
                     <th scope="col">Id</th>
                    <th scope="col">Frist Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Age</th>
                    <th scope="col">Mobile Number</th>
                 
                    <th scope="col">Job Title</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Hire Date</th>
                </tr>
                
            </thead>
            <tbody>
                {/* using */}
            <ListEmployeeRow EmployeeList={EmployeeList}/>
        </tbody>
                    
        </table></div> </div> 
            




            
    </div>
  )
}

export default ListEmployeeComponents
