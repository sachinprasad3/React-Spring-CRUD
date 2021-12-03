package com.silent.reactjs.service;

import java.util.List;
import java.util.Optional;

import com.silent.reactjs.model.Employee;

public interface EmployeeService {
	
	public Employee save(Employee employee);
	
	public List<Employee> getAllEmployee();
	
	public Employee getById(int id);
	
	public Employee update(Employee employee);
	
	public void delete(int id);
	
	
}
