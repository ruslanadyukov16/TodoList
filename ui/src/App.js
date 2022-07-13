import React, { useEffect, useState } from "react";
import AddTodo from "./Todo/AddTodo";
import TodoList from "./Todo/TodoList";
import DeleteAll from "./Todo/DeleteAll";

function App() {
	function getTodos() {
		fetch("http://localhost:63281/api/TodoList")
			.then((response) => response.json())
			.then((data) => {
				setTodos(data);
			});

	}
	const [todos, setTodos] = useState([]);

	useEffect(() => getTodos(), [])
	function toggleTodo(id) {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) todo.flagCompleted = !todo.flagCompleted;
				return todo;
			})
		);
	}

	return (
		<div className="wrapper">
			<h1>Список дел</h1>
			<AddTodo setTodos={setTodos} getTodos={getTodos} todos={todos}></AddTodo>
			<TodoList todos={todos} setTodos={setTodos} onToggle={toggleTodo} key={Date.now()} />
			<DeleteAll setTodos={setTodos}></DeleteAll>
		</div>
	);
}

export default App;
