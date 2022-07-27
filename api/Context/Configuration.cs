using YamlDotNet.Serialization.NamingConventions;

namespace API.Context
{
	public class Configuration : IConfiguration
	{
		public string DatabaseConnectionString { get; set; }
	}

	public interface IConfiguration
	{
		public string DatabaseConnectionString { get; set; }
	}

	public static class getConfiguration
	{
		public static Configuration getYamlSerialization(string fileName)
		{
			using (var input = System.IO.File.OpenText(fileName))
			{
				var deserializer = new YamlDotNet.Serialization.DeserializerBuilder()
					.WithNamingConvention(PascalCaseNamingConvention.Instance)
					.Build();

				var myConfig = deserializer.Deserialize<Configuration>(input);

				return myConfig;
			}
		}
	}
}
