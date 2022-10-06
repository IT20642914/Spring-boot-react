import React from 'react'

function ListEmployeeRow(props) {
    // eslint-disable-next-line no-lone-blocks
    {
        return props.EmployeeList.map((EmployeeList)=>{
           return( <tr key={EmployeeList.id}>
                <th>{EmployeeList.id}</th>
                <th>{EmployeeList.fristName}</th>
                <th>{EmployeeList.lastName}</th>
                <th>{EmployeeList.email}</th>
                <th>{EmployeeList.age}</th> 
                <th>{EmployeeList.mobileNumber}</th>
                <th>{EmployeeList.jobTitle}</th>
                <th>{EmployeeList.salary}</th>
                <th>{EmployeeList.hireDate}</th>


            </tr>    

           )


        })
        }}

export default ListEmployeeRow;
