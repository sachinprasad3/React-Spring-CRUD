package com.silent.reactjs.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.silent.reactjs.model.Employee;

public interface EmployeeRepo extends JpaRepository<Employee, Integer>{
	public Employee findByEmpID(int id);
}
