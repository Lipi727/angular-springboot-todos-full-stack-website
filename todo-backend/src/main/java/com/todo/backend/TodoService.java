package com.todo.backend;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoService {
	
	//Here hard coded data are used. In the real time we will get data by a database.
	private static List<Todo> todos = new ArrayList<Todo>();
	private static int idCounter=0;
	
	static {
		todos.add(new Todo(++idCounter, "Hitesh", "Learn to Angular", new Date(), false));
		todos.add(new Todo(++idCounter, "Susmita", "Learn to SpringBoot", new Date(), true));
		todos.add(new Todo(++idCounter, "Susmita", "Make project on C", new Date(), true));
		todos.add(new Todo(++idCounter, "Ayan", "Learn Java", new Date(), true));
		todos.add(new Todo(++idCounter, "Yuvansh", "Angular hands on practice", new Date(), false));
		todos.add(new Todo(++idCounter, "Yuvansh", "Java hands on practice", new Date(), true));
	}
	
	public List<Todo> getAll(){
		return todos;
	}

}
