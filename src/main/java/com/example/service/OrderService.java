package com.example.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.domain.Page;

import com.example.model.MenuItem;
import com.example.model.OrderR;
import com.example.model.User;


public interface OrderService {

	public String createOrder(OrderR order);
	
	public ArrayList<MenuItem> getAllMeals();	

	public ArrayList<MenuItem> getAllDrinks();

}
