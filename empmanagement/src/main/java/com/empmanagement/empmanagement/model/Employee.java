package com.empmanagement.empmanagement.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
//Annotation 
@Entity //map this model to relational db table
@Table(name="employees") //to provide a table name
public class Employee {
    @Id //set primarykey
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
 @Column(name="frist_name")
 private String fristName;
 @Column(name="last_name")
 private String lastName;
 @Column(name="email")
 private String email;
 @Column(name="age")
 private int age;
 @Column(name="mobile_number")
 private int mobileNumber;
 @Column(name="salary")
 private int salary;
 @Column(name="job_title")
 private String jobTitle;
 @Column(name="hire_date")
 private Date hireDate;

 
 //default Constructor
 public Employee() {
	 
 }
 
 
 //Overload Contractor
 public Employee(long id, String fristName, String lastName, String email, int age, int mobileNumber, int salary,
		String jobTitle, Date hireDate) {
	super();
	this.id = id;
	this.fristName = fristName;
	this.lastName = lastName;
	this.email = email;
	this.age = age;
	this.mobileNumber = mobileNumber;
	this.salary = salary;
	this.jobTitle = jobTitle;
	this.hireDate = hireDate;
}
 
 //geter and setters
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getFristName() {
	return fristName;
}
public void setFristName(String fristName) {
	this.fristName = fristName;
}
public String getLastName() {
	return lastName;
}
public void setLastName(String lastName) {
	this.lastName = lastName;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public int getAge() {
	return age;
}
public void setAge(int age) {
	this.age = age;
}
public int getMobileNumber() {
	return mobileNumber;
}
public void setMobileNumber(int mobileNumber) {
	this.mobileNumber = mobileNumber;
}
public int getSalary() {
	return salary;
}
public void setSalary(int salary) {
	this.salary = salary;
}
public String getJobTitle() {
	return jobTitle;
}
public void setJobTitle(String jobTitle) {
	this.jobTitle = jobTitle;
}
public Date getHireDate() {
	return hireDate;
}
public void setHireDate(Date hireDate) {
	this.hireDate = hireDate;
}
	
 
 
 
}
