import React from 'react'
import axios from 'axios';
import { useNavigate  } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AddEmployee() {










  const navigate = useNavigate();
 //geting values from form
const Submit=(e)=>{
  let fristName=e.target[0].value;
  let lastName=e.target[1].value;
  let email=e.target[2].value;
  let age=e.target[3].value;
  let mobileNumber=e.target[4].value;
  let jobTitle=e.target[5].value; 
  let salary=e.target[6].value; 
  let hireDate=e.target[7].value;


  let data ={fristName,lastName,email,age,mobileNumber,jobTitle,salary,hireDate};
  console.log(data);
postEmployee(data)

}

//post values
const postEmployee=(data)=>{

  axios.post("http://localhost:8080/api/v1/employee/add",data).then((res)=>{

    console.log(res);
  //  alert("successfuly added")
  toast.success("Successfully add !", {
    position: toast.POSITION.TOP_RIGHT
  });
   navigate("/")
  }).catch(err=> 
  
  toast.error("Erro ! "+err, {
    position: toast.POSITION.TOP_RIGHT
  })
  
  );




}








  return (
    <div> 
        <br></br>
    <div className='container'>
<div className="card shadow mb-4">
<div className="card-header py-3"><h5 className="m-2 card-title">Add Employee</h5> 
<form onSubmit={(e)=>{
  e.preventDefault();
  Submit(e);

 
}}>
<div className="card-body">
            <div className="mb-3">
                        <label htmlFor="Nameinput" className="form-label"> Frist Name</label>
                        <input type="text" className="form-control" id="Name" placeholder="Frist name"required></input>
            </div>

            <div className="mb-3">
                        <label htmlFor="Nameinput" className="form-label"> Last Name</label>
                        <input type="text" className="form-control" id="Name" placeholder="Last name"></input>
            </div>

            <div className="mb-3">
                        <label htmlFor="Nameinput" className="form-label"> Email</label>
                        <input type="email" className="form-control" id="Name" placeholder="Email"></input>
            </div>

            <div className="mb-3">
                        <label htmlFor="Nameinput" className="form-label"> Age</label>
                        <input type="Number" className="form-control" id="Name" placeholder="Age"></input>
            </div>

            <div className="mb-3">
                        <label htmlFor="Nameinput" className="form-label"> Mobile number</label>
                        <input type="tel" className="form-control" id="phone" name="phone" placeholder="123-456-789" pattern="[0-9]{3}[0-9]{3}[0-9]{3}"></input>
                     
            </div>
            <div className="mb-3">
                        <label htmlFor="Nameinput" className="form-label"> Job title</label>
                        <input type="text" className="form-control" id="Name" placeholder="Job title"></input>
            </div>

            <div className="mb-3">
                        <label htmlFor="Nameinput" className="form-label"> Salary</label>
                        <input type="text" className="form-control" id="Name"></input>
            </div>


        
             <div className="mb-3">
                        <label htmlFor="exampleInputEmail1">Hire Date</label>
                        <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""requird/>

            </div> 

          

  
  
   
   


    <div className="mb-2">

    
    <button type="submit"   className="btn btn-primary">Submit</button>
    </div></div>
</form>

</div>
</div>
</div>
</div>
  )
}

export default AddEmployee
