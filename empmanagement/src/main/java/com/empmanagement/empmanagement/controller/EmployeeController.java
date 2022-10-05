package com.empmanagement.empmanagement.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	//get employee by id
	@GetMapping("/employee/{id}")
	public Optional<Employee> getEmployeeById(@PathVariable("id") String id){
		
		return employeeService.getEmployeeById(Integer.parseInt(id));
	}




//add emoloyee
	@PostMapping("/employee/add")
	public Employee addEmployee(@Validated @RequestBody Employee employee){
		
		return employeeService.addEmployees(employee);
	}
//update Emplyee
	@PutMapping("/employee/add/{id}")
	public Optional<Employee> updateEmployee(@PathVariable("id") String id ,@Validated @RequestBody Employee employee){
		
		return employeeService.updateEmployee(Integer.parseInt(id),employee);
	}


	//deleteEmployee

	@DeleteMapping("/employee/{id}")
	public ResponseEntity<?> deletEmployeeById(@PathVariable("id") String id){
		
	 employeeService.deletEmployeeById(Integer.parseInt(id));
	return ResponseEntity.ok().body("Employee "+id+"has benn Remove");


	
	}	
	
	
	
	
	
	
	

}
