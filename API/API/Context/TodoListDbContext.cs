using API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Context
{
	public class TodoListDbContext : DbContext, ITodoListDbContext
	{

		private readonly IConfiguration _config;


		public TodoListDbContext(IConfiguration config)
		{
			_config = config;
		}

		public DbSet<TodoList> TodoList { get; set; }
		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseSqlServer(getConfiguration.getYamlSerialization("Config.yaml").DatabaseConnectionString);
		}
	}

	public interface ITodoListDbContext
	{

	}
}
