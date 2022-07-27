import React from "react";

function DeleteAll(props) {
	function deleteAllTodos() {
		fetch("http://localhost:63281/api/TodoList/DeleteAll", {
			method: "DELETE",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			}
		})

		props.setTodos([])
	}

	const styles = {
		button: {
			marginTop: "2rem",
			display: "flex",
			justifyContent: "flex-end"
		}
	};



	return (
		<div style={styles.button}>
			<button onClick={() => { deleteAllTodos() }}>Delete all</button>
		</div>
	);
}

export default DeleteAll;
