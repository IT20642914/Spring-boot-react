package com.empmanagement.empmanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.empmanagement.empmanagement.repository.EmployeeRepository;
import com.empmanagement.empmanagement.model.Employee;


@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
	
	@Autowired //
	private  EmployeeRepository employeeRepository;
	
	//get all employees
	@GetMapping("/employee")
	public List<Employee> getAllEmployees(){
		
		return employeeRepository.findAll();
	}
	
	
	
	
	
	
	
	
	

}
