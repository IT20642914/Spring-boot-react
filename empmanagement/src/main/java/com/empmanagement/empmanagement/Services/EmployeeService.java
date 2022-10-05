package com.empmanagement.empmanagement.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.empmanagement.empmanagement.model.Employee;
import com.empmanagement.empmanagement.repository.EmployeeRepository;

@Service
public class EmployeeService {

    @Autowired
    private  EmployeeRepository employeeRepository;


    public List<Employee> getAllEmployees(){
		
		return employeeRepository.findAll();
	}
    public Employee addEmployees(Employee employee){
		
		return employeeRepository.save(employee);
	}
    
}
