import React from 'react'
import axios from 'axios';
import { useNavigate  } from "react-router-dom";

function ListEmployeeRow(props) {

  const navigate = useNavigate();
  

  const deleteEmployeebyid = (id)=>{

axios.delete(`http://localhost:8080/api/v1/employee/${id}`).then(res=>{
   alert("succesfully delete "+(res));
   navigate("/")
  
})


}





    const editeemplyee= (id)=>{
      
   navigate("/edite",{ 
    state :{ 
        userID :id,
     
    }
   })




 

    
    }
    // eslint-disable-next-line no-lone-blocks
    {
        return props.EmployeeList.filter(filt=>{
            return filt
            
         })
            .map((EmployeeList) => {
            return (<tr key={EmployeeList.id}>
                <th>{EmployeeList.id}</th>
                <th>{EmployeeList.fristName}</th>
                <th>{EmployeeList.lastName}</th>
                <th>{EmployeeList.email}</th>
                <th>{EmployeeList.age}</th>
                <th>{EmployeeList.mobileNumber}</th>
                <th>{EmployeeList.jobTitle}</th>
                <th>{EmployeeList.salary}</th>
                <th>{EmployeeList.hireDate}</th>
                <th> <button onClick={()=>editeemplyee(EmployeeList.id)} className='btn  btn btn-primary btn-sm'>Edite</button></th>
                
                <th><button    onClick={()=>deleteEmployeebyid(EmployeeList.id) }
                           className='btn  btn btn-danger btn-sm'  >Delete</button></th>
            </tr>

            )

        })
    }
}

export default ListEmployeeRow;
