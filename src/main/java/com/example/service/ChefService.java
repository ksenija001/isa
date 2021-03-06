package com.example.service;

import com.example.model.Chef;
import com.example.model.User;

public interface ChefService {

	public String createChef(Chef newChef);
	
	public String updateChefProfile(Chef chef);
	
	public String updatePassword(Chef chef);
	
	public String logInChef(Chef chef);
	
}
