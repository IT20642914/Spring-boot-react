package com.empmanagement.empmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.empmanagement.empmanagement.model.Employee;

//jpaRepository , it contains API for basic CRUD operations and also API for pagination and sorting. 

@Repository
public interface EmployeeRepository  extends JpaRepository<Employee, Long> {
	

}
