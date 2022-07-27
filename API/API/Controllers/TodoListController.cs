using API.Context;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class TodoListController : Controller
	{
		private readonly IConfiguration _configuration;

		public TodoListController(IConfiguration configuration)
		{
			_configuration = configuration;
		}

		[HttpPost]
		public IEnumerable<TodoList> Post(TodoList todoList)
		{
			using (var context = new TodoListDbContext(_configuration))
			{
				context.Add(todoList);
				context.SaveChanges();
			}
			return Get();
		}

		[HttpGet]
		public IEnumerable<TodoList> Get()
		{
			using (var context = new TodoListDbContext(_configuration))
			{
				return context.TodoList.ToList();
			}
		}


		[HttpDelete]
		public TodoList Delete(int id)
		{
			using (var context = new TodoListDbContext(_configuration))
			{
				var recordToDelete = context.TodoList.FirstOrDefault(x => x.ID == id);
				if (recordToDelete != null)
				{
					context.TodoList.Remove(recordToDelete);
					context.SaveChanges();
				}
				return recordToDelete;
			}
		}

		[HttpDelete("deleteAll")]
		public List<TodoList> DeleteAll()
		{
			using (var context = new TodoListDbContext(_configuration))
			{
				var allTodos = context.TodoList.ToList();

				foreach (var todo in allTodos)
				{

					context.TodoList.Remove(todo);
					context.SaveChanges();
				}
				return allTodos;

			}
		}
	}
}
