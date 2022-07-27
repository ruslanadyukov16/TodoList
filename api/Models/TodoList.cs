using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
	public class TodoList
	{
		public int ID { get; set; }
		public string Title { get; set; }
		public bool Flagdeleted { get; set; } = false;
		public bool FlagCompleted { get; set; }
	}
}
