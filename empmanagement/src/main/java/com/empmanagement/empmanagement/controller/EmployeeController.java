package com.empmanagement.empmanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.empmanagement.empmanagement.Services.EmployeeService;
import com.empmanagement.empmanagement.model.Employee;


@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
	
	@Autowired //
	private  EmployeeService employeeService;
	
	//get all employees
	@GetMapping("/employee")
	public List<Employee> getAllEmployees(){
		
		return employeeService.getAllEmployees();
	}
	@PostMapping("/employee/add")
	public Employee addEmployee(@valid @RequestBody Employee employee){
		
		return employeeService.addEmployees(employee);
	}

	
	
	
	
	
	
	
	
	

}
