import React from "react";
import PropTypes from "prop-types";

const styles = {
	txt: {
		fontFamily: "cursive"
	},
	li: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: ".5rem 1rem",
		border: "2px solid #ccc",
		borderRadius: "5px",
		marginBottom: ".5rem"
	}
};

function TodoItem(props) {
	function deleteTodo(id) {
		fetch("http://localhost:63281/api/TodoList?id=" + id, {
			method: "DELETE",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			}
		})

		props.setTodos(props.todos.filter(todo => todo.id !== id))
	}

	let classes = [];
	if (props.todo.flagCompleted) {
		classes.push("through");
	}
	return (
		<li style={styles.li}>
			<span>
				<input
					type="checkbox"
					onChange={() => props.onChange(props.todo.id)}
					checked={props.todo.flagCompleted}
				/>
				<strong className={classes.join(" ")} style={styles.txt}>
					{props.idx + 1} {props.todo.title}{" "}
				</strong>
			</span>

			<button
				className="delete-button"
				onClick={() => {
					deleteTodo(props.todo.id)}
				}
			>
				delete
			</button>
		</li>
	);
}

TodoItem.propTypes = {
	idx: PropTypes.number,
	onChange: PropTypes.func.isRequired
};
export default TodoItem;
