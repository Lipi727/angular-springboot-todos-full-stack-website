package com.todo.backend.todo.service;

import com.todo.backend.todo.modal.Todo;

import java.util.List;

public interface TodoService {
    public List<Todo> getAll();
    public Todo save(Todo todo);
    public Todo deleteById(long id);
    public Todo findById(long id);
}
