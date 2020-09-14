package com.todo.backend;

import java.util.Date;

public class Todo {
	private long id;
	private String username;
	private String discription;
	private Date targetDate;
	private boolean isDone;
	
	public Todo(long id, String username, String discription, Date targetDate, boolean isDone) {
		super();
		this.id = id;
		this.username = username;
		this.discription = discription;
		this.targetDate = targetDate;
		this.isDone = isDone;
	}
	
	public Todo() {
		super();
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getDiscription() {
		return discription;
	}

	public void setDiscription(String discription) {
		this.discription = discription;
	}

	public Date getTargetDate() {
		return targetDate;
	}

	public void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}

	public boolean isDone() {
		return isDone;
	}

	public void setDone(boolean isDone) {
		this.isDone = isDone;
	}

	public long getId() {
		return id;
	}
	
}
