import React, { useState ,useEffect} from "react"

import axios from "axios";

export default function ListEmployeeComponent(){


    const[EmployeeList,setEmployeeList]=useState("");

    this.state = {
        EmployeeList: []
    }



   



return(


    <div className="container-fluid">
    <div className="card shadow mb-4">

    <div className="card-header py-3"> <h6 className="m-0 font-weight-bold text-primary">View All Categories</h6>

    <form className="form-inline my-1 my-lg-0">
<div className="serchbar">
<input className="form-control mr-sm-1" type="search" placeholder="Search by name" />
</div>
</form>

    </div>
    
    <table className="table">
    <thead className="thead-dark">
   
        <tr>  
              
            <th scope="col">frist_name</th>
            <th scope="col">last_name</th>
            <th scope="col">email</th>
            <th scope="col">age</th>
            <th scope="col">mobile_number</th>
            <th scope="col">salary</th>
            <th scope="col">job_title</th>
            <th scope="col">salary</th>
            <th scope="col">hire_date</th>
        </tr>
        
    </thead>
    <tbody>
        {
            EmployeeList.localeCompare((EmployeeList)=>{
                return(<tr key={EmployeeList.id}>
                    <th>{EmployeeList.fristName}</th>
                    <th>{EmployeeList.lasName}</th>


                </tr>)       

          


            })
        }
        
    
</tbody>
            
            </table></div> </div> 
    

)



}
