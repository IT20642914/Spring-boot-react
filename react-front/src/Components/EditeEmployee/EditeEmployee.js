
import React, { useState, useEffect } from 'react';
import { useLocation,useNavigate  } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function EditeEmployee(props) {
  const location = useLocation();
  const navigate = useNavigate();

const [StateEmployee, setStateEmployee] = useState({})







  useEffect(() => {
    const id = location.state.userID
    getEmployeeByID(id);

  }, []);
//get employyee buy id
  const getEmployeeByID = (id) => {
    axios.get(`http://localhost:8080/api/v1/employee/${id}`)
      .then(d => {
        let Employee =d.data;
        setStateEmployee({
          id: Employee.id,
          fristName:Employee.fristName,
          lastName:Employee.lastName,
          email:Employee.email,
          age:Employee.age,
          mobileNumber:Employee.mobileNumber,
          jobTitle:Employee.jobTitle,
          salary:Employee.salary,
          hireDate:Employee.hireDate


        }

        );
      console.log(Employee)
   
      

      })
      .catch(err => alert(err));

  }




  const PutEmployee = (id) => {    console.log(StateEmployee.mobileNumber)
    axios.put(`http://localhost:8080/api/v1/employee/add/${StateEmployee.id}`,StateEmployee)

      .then(d => {
        toast.success("Successfully  Updated ! ", {
          position: toast.POSITION.TOP_RIGHT
        });
     console.log(d);
     navigate("/")
     
      })
      .catch(err =>toast.error("Erro ! "+err, {
        position: toast.POSITION.TOP_RIGHT
      }));

  }
















  return (



    <div>
      <br></br>
      <div className='container'>
        <div className="card shadow mb-4">
          <div className="card-header py-3"><h5 className="m-2 card-title">Update Employee</h5>
            <form onSubmit={(e) => {
              e.preventDefault();
              PutEmployee(e);
            
            }}>
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="Nameinput" className="form-label"> Frist Name</label>
                  <input type="text"
                    value={StateEmployee.fristName}
                    onChange={e =>{
                      let value = e.target.value
                      setStateEmployee({fristName:value,
                      
                        id: StateEmployee.id,
                 
                        lastName:StateEmployee.lastName,
                        email:StateEmployee.email,
                        age:StateEmployee.age,
                        mobileNumber:StateEmployee.mobileNumber,
                        jobTitle:StateEmployee.jobTitle,
                        salary:StateEmployee.salary,
                        hireDate:StateEmployee.hireDate
                      
                      
                      
                      })
                    }}
                
                  className="form-control" id="Name" placeholder="Frist name"></input>
                </div>

                <div className="mb-3">
                  <label htmlFor="Nameinput" className="form-label"> Last Name</label>
                  <input type="text" value={StateEmployee.lastName}  
                  onChange={e =>{
                    let value = e.target.value
                    setStateEmployee({lastName:value,
                      id: StateEmployee.id,
                      fristName:StateEmployee.fristName,
                      email:StateEmployee.email,
                      age:StateEmployee.age,
                      mobileNumber:StateEmployee.mobileNumber,
                      jobTitle:StateEmployee.jobTitle,
                      salary:StateEmployee.salary,
                      hireDate:StateEmployee.hireDate
                    
                    })
                  }}
                   className="form-control" id="Name" placeholder="Last name"></input>
                </div>

                <div className="mb-3">
                  <label htmlFor="Nameinput" className="form-label"> Email</label>
                  <input type="email"  value={StateEmployee.email} 
                       onChange={e =>{
                        let value = e.target.value
                        setStateEmployee({email:value,
                          id: StateEmployee.id,
                          fristName:StateEmployee.fristName,
                          lastName:StateEmployee.lastName,
                         
                          age:StateEmployee.age,
                          mobileNumber:StateEmployee.mobileNumber,
                          jobTitle:StateEmployee.jobTitle,
                          salary:StateEmployee.salary,
                          hireDate:StateEmployee.hireDate
                        
                        
                        })
                      }}
                   className="form-control" id="Name" placeholder="Email"></input>

                </div>

                <div className="mb-3">
                  <label htmlFor="Nameinput" className="form-label"> Age</label>
                  <input type="Number"value={StateEmployee.age}
                      onChange={e =>{
                        let value = e.target.value
                        setStateEmployee({age:value,
                          id: StateEmployee.id,
                          fristName:StateEmployee.fristName,
                          lastName:StateEmployee.lastName,
                          email:StateEmployee.email,
                     
                          mobileNumber:StateEmployee.mobileNumber,
                          jobTitle:StateEmployee.jobTitle,
                          salary:StateEmployee.salary,
                          hireDate:StateEmployee.hireDate
                        
                        })
                      }} className="form-control" id="Name" placeholder="Age"></input>
                </div>

                <div className="mb-3">
                  <label htmlFor="Nameinput" className="form-label"> Mobile number</label>
                  <input type="tel"   value={StateEmployee.mobileNumber} 
                      onChange={e =>{
                        let value = e.target.value
                        setStateEmployee({mobileNumber:value ,
                          id: StateEmployee.id,
                          fristName:StateEmployee.fristName,
                          lastName:StateEmployee.lastName,
                          email:StateEmployee.email,
                          age:StateEmployee.age,
                     
                          jobTitle:StateEmployee.jobTitle,
                          salary:StateEmployee.salary,
                          hireDate:StateEmployee.hireDate
                        
                        
                        })
                      }}className="form-control" id="phone" name="phone" placeholder="123-456-789"  pattern="[0-9]{3}[0-9]{3}[0-9]{3}"></input>

                </div>
                <div className="mb-3">
                  <label htmlFor="Nameinput" className="form-label"> Job title</label>
                  <input type="text" value={StateEmployee.jobTitle} 
                      onChange={e =>{
                        let value = e.target.value
                        setStateEmployee({jobTitle:value,
                          id: StateEmployee.id,
                          fristName:StateEmployee.fristName,
                          lastName:StateEmployee.lastName,
                          email:StateEmployee.email,
                          age:StateEmployee.age,
                          mobileNumber:StateEmployee.mobileNumber,
                
                          salary:StateEmployee.salary,
                          hireDate:StateEmployee.hireDate
                        
                        
                        })
                      }}className="form-control" id="Name" placeholder="Job title"></input>
                </div>

                <div className="mb-3">
                  <label htmlFor="Nameinput" className="form-label"> Salary</label>
                  <input type="text"  value={StateEmployee.salary} 
                      onChange={e =>{
                        let value = e.target.value
                        setStateEmployee({salary:value,
                          id: StateEmployee.id,
                          fristName:StateEmployee.fristName,
                          lastName:StateEmployee.lastName,
                          email:StateEmployee.email,
                          age:StateEmployee.age,
                          mobileNumber:StateEmployee.mobileNumber,
                          jobTitle:StateEmployee.jobTitle,
                         
                          hireDate:StateEmployee.hireDate
                        
                        
                        })
                      }}className="form-control" id="Name"></input>
                </div>



                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1">Hire Date</label>
                  <input type="date" value={StateEmployee.hireDate}
                      onChange={e =>{
                        let value = e.target.value
                        setStateEmployee({hireDate:value ,
                          id: StateEmployee.id,
                          fristName:StateEmployee.fristName,
                          lastName:StateEmployee.lastName,
                          email:StateEmployee.email,
                          age:StateEmployee.age,
                          mobileNumber:StateEmployee.mobileNumber,
                          jobTitle:StateEmployee.jobTitle,
                          salary:StateEmployee.salary,
                    
                        })
                      }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />

                </div>






   



                <div className="mb-2">
                  <button type="Save" className="btn btn-primary">Save changes</button>
                </div></div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default EditeEmployee;
