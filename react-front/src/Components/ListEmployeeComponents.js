import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';





function ListEmployeeComponents() {


  
    const [EmployeeList, setEmployeeList] = useState([])


    const [filter, selFilter] = useState("");


    const navigate = useNavigate();

    useEffect(() => {
        getAllEmployees();

    }, []);







    //delet employee by id
    const deleteEmployeebyid = (id) => {

        axios.delete(`http://localhost:8080/api/v1/employee/${id}`).then(res => {
            //alert("succesfully delete " + (res));

            toast.success("Successfully  Deleted ! ", {
                position: toast.POSITION.TOP_RIGHT
              });
            getAllEmployees();

           

        }).catch(err =>toast.error("Erro ! "+err, {
            position: toast.POSITION.TOP_RIGHT
          }));
    
      


    }






    const getAllEmployees = (() => {
        axios
            .get("http://localhost:8080/api/v1/employee")
            .then((res) => {

                setEmployeeList(res.data);

                console.log(res.data)





            })
            .catch((err) => { alert(err) })
    });



    //navigate with id
    const editeemplyee = (id) => {

        navigate("/edite", {
            state: {
                userID: id,

            }
        })
    }





    return (
        <div>

            <br></br>

            <div className="container">
                <Link to="/add"><button type='button' className="mb-3 btn btn-primary btn-sm">Add Employee</button></Link>
                <div className="card shadow mb-4">

                    <div className="card-header py-3"> <h6 className="m-2 font-weight-bold text-dark">View All Categories</h6>

                        <form className="form-inline my-1 my-lg-0">
                            <div className="serchbar">
                                <input className="form-control mr-sm-1" type="search" placeholder="Search by name" value={filter} onChange={(e) => selFilter(e.target.value)} />
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
                                <th scope="col">Edite</th>
                                <th scope="col">Delete</th>
                            </tr>

                        </thead>
                        <tbody>
                        

                            {EmployeeList.filter(emp => { return emp.fristName.toLowerCase().includes(filter.toLowerCase()) || emp.lastName.toLowerCase().includes(filter.toLowerCase()) || emp.jobTitle.toLowerCase().includes(filter.toLowerCase()) })

                                .map((EmployeeList) => {


                                    return (

                                        <tr key={EmployeeList.id}>
                                            <th>{EmployeeList.id}</th>
                                            <th>{EmployeeList.fristName}</th>
                                            <th>{EmployeeList.lastName}</th>
                                            <th>{EmployeeList.email}</th>
                                            <th>{EmployeeList.age}</th>
                                            <th>{EmployeeList.mobileNumber}</th>
                                            <th>{EmployeeList.jobTitle}</th>
                                            <th>{EmployeeList.salary}</th>
                                            <th>{EmployeeList.hireDate}</th>
                                            <th> <button onClick={() => { editeemplyee(EmployeeList.id) }} className='btn  btn btn-primary btn-sm'>Edite</button></th>

                                            <th><button onClick={() => deleteEmployeebyid(EmployeeList.id)}
                                                className='btn  btn btn-danger btn-sm'  >Delete</button></th>

                                        </tr>

                                    )




                                })








                            }

                        </tbody>

                    </table></div> </div>






        </div>
    )
}

export default ListEmployeeComponents
