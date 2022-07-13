import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const styles = {
	ul: {
		listStyle: "none",
		margin: 0,
		padding: 0
	}
};

function TodoList(props) {
	return (
		<ul style={styles.ul}>
			{props.todos.map((todo, index) => {
				return (
					<TodoItem
						todo={todo}
						key={todo.id}
						idx={index}
						checked={todo.flagCompleted}
						onChange={props.onToggle}
						todos={props.todos}
						setTodos={props.setTodos}
					/>
				);
			})}
		</ul>
	);
}

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object).isRequired,
	onToggle: PropTypes.func.isRequired
};

export default TodoList;
