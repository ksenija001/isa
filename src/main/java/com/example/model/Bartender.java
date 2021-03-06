package com.example.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Bartender {

	@Id
	@GeneratedValue
	public long id;
	
	@Column(nullable=false)
	public String name;
	
	@Column(nullable=false)
	public String lastname;
	
	@Column
	public Date birthDate;

	@Column
	public int shoeSize;
	
	@Column
	public int clothesSize;
	
	@Column
	public String password;
	
	@Column
	public long restaurantId;
	
	
	public Bartender() {
		
	}


	public Bartender(long id, String name, String lastname, Date birthDate, int shoeSize, int clothesSize) {
		super();
		this.id = id;
		this.name = name;
		this.lastname = lastname;
		this.birthDate = birthDate;
		this.shoeSize = shoeSize;
		this.clothesSize = clothesSize;
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getLastname() {
		return lastname;
	}


	public void setLastname(String lastname) {
		this.lastname = lastname;
	}


	public Date getBirthDate() {
		return birthDate;
	}


	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}


	public int getShoeSize() {
		return shoeSize;
	}


	public void setShoeSize(int shoeSize) {
		this.shoeSize = shoeSize;
	}


	public int getClothesSize() {
		return clothesSize;
	}


	public void setClothesSize(int clothesSize) {
		this.clothesSize = clothesSize;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public long getRestaurantId() {
		return restaurantId;
	}


	public void setRestaurantId(long restaurantId) {
		this.restaurantId = restaurantId;
	}
	
	
	
	
	
	
}
