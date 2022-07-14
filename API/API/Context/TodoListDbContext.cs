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
		private readonly Configuration _config = getConfiguration.getYamlSerialization("Config.yaml");


		public DbSet<TodoList> TodoList { get; set; }
		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseSqlServer(_config.databaseConnectionString);
		}
	}

	public interface ITodoListDbContext
	{

	}
}
