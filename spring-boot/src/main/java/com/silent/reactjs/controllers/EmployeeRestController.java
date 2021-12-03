package com.silent.reactjs.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.silent.reactjs.model.Employee;
import com.silent.reactjs.service.EmployeeServiceImpl;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
//@CrossOrigin
@RequestMapping("/api")
public class EmployeeRestController {
	
	@Autowired
	private EmployeeServiceImpl employeeServiceImpl; 
	
	@GetMapping(path = "/employees")
	public ResponseEntity<List<Employee>> getAllEmployee(){		
		return new ResponseEntity<List<Employee>>(employeeServiceImpl.getAllEmployee(), HttpStatus.OK);		
	}
	
	@GetMapping(path = "/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") int id){		
		return new ResponseEntity<Employee>(employeeServiceImpl.getById(id), HttpStatus.OK);		
	}
	
	@PostMapping(path = "/employees")
	public ResponseEntity<Employee> insert(@RequestBody Employee employee){
		return new ResponseEntity<Employee>(employeeServiceImpl.save(employee), HttpStatus.CREATED);		
	}
	
	@PutMapping(path = "/employees")
	public ResponseEntity<Employee> update(@RequestBody Employee employee){
		return new ResponseEntity<Employee>(employeeServiceImpl.update(employee), HttpStatus.OK);		
	}
	
	@DeleteMapping(path = "/employees/{id}")
	public HttpStatus delete(@PathVariable("id") int id) {
		employeeServiceImpl.delete(id);
		return HttpStatus.OK;
		
	}
}
