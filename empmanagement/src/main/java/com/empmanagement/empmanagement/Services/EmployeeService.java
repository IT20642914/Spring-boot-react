package com.empmanagement.empmanagement.Services;

import java.util.List;
import java.util.Optional;

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
    
    //
    public  Boolean existbyid(Integer id){
        return employeeRepository.existsById(id);
    }
    
    public Optional<Employee> getEmployeeById(Integer id){
        return employeeRepository.findById(id);
    }

    public Optional<Employee> updateEmployee(Integer id,Employee employee){
        return employeeRepository.findById(id).map((d)->{
            d.setFristName(employee.getFristName());
            d.setLastName(employee.getLastName());
            d.setEmail(employee.getEmail());
            d.setAge(employee.getAge());
            d.setJobTitle(employee.getJobTitle());
            d.setHireDate(employee.getHireDate());
            d.setSalary(employee.getSalary());
            return employeeRepository.save(d);

        });
    }

    public void deletEmployeeById(Integer id){
         employeeRepository.deleteById(id);
    }


    
}
