package com.silent.reactjs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.silent.reactjs.model.Employee;
import com.silent.reactjs.repository.EmployeeRepo;

@Service
public class EmployeeServiceImpl implements EmployeeService{
	
	@Autowired
	private EmployeeRepo empRepo;
	

	@Override
	public Employee save(Employee employee) {
		return empRepo.save(employee);
	}

	@Override
	public List<Employee> getAllEmployee() {
		return empRepo.findAll();
	}

	@Override
	public Employee getById(int id) {
		return empRepo.findByEmpID(id);
	}

	@Override
	public Employee update(Employee employee) {
		return empRepo.save(employee);
	}

	@Override
	public void delete(int id) {
		empRepo.deleteById(id);
		
	}

}
