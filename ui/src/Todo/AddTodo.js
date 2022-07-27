import React, {  useState } from "react";

function AddTodo(props) {
	const [value, setValue] = useState("");

	function submitHandler(e) {
		e.preventDefault();
		fetch("http://localhost:63281/api/TodoList", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				Title: value,
				FlagCompleted: false
			})
		}).then((response) => response.json())
			.then((data) => {
				props.setTodos(data);
			});

		if (value.trim().length > 0) {
			setValue("");
		}
	}

	return (
		<form onSubmit={submitHandler}>
			<input
				type={"text"}
				style={{ margin: "1rem 1rem 1rem 0rem " }}
				value={value}
				onChange={(e) => { setValue(e.target.value); }}
			></input>
			<button className="add-button" type="submit">
				Add
			</button>
		</form >
	);
}
export default AddTodo;
