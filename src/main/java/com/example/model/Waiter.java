package com.example.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Waiter {

	@Id
	@GeneratedValue
	private long id;
	
	@Column(nullable = false)
	private String name;
	
	@Column(nullable = false)
	private String lastname;
	
	@Column
	private Date birthDate;
	
	@Column
	private int clothesSize;
	
	@Column
	private int shoeSize;
	
	@Column(nullable = false)
	private String password;
	
	@OneToMany(mappedBy = "waiter")
	@Column
	private List<OrderR> orders; 
	
		
	public Waiter() {

	}
	
	
	
	public Waiter( String name, String lastname, Date birthDate, int clothesSize, int shoeSize) {
		super();
		this.name = name;
		this.lastname = lastname;
		this.birthDate = birthDate;
		this.clothesSize = clothesSize;
		this.shoeSize = shoeSize;
	}

	

	public Waiter(String name, String lastname, Date birthDate, int clothesSize, int shoeSize, String password) {
		super();
		this.name = name;
		this.lastname = lastname;
		this.birthDate = birthDate;
		this.clothesSize = clothesSize;
		this.shoeSize = shoeSize;
		this.password = password;
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
	public int getClothesSize() {
		return clothesSize;
	}
	public void setClothesSize(int clothesSize) {
		this.clothesSize = clothesSize;
	}
	public int getShoeSize() {
		return shoeSize;
	}
	public void setShoeSize(int shoeSize) {
		this.shoeSize = shoeSize;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	public List<OrderR> getOrders() {
		return orders;
	}



	public void setOrders(List<OrderR> orders) {
		this.orders = orders;
	}
	
	
	
	
}