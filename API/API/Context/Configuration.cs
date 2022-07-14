using YamlDotNet.Serialization.NamingConventions;

namespace API.Context
{
	public class Configuration
	{
			public string databaseConnectionString { get; set; }
	}

	public static class getConfiguration
	{
		public static Configuration getYamlSerialization(string fileName)
		{
			using (var input = System.IO.File.OpenText(fileName))
			{
				var deserializer = new YamlDotNet.Serialization.DeserializerBuilder()
					.WithNamingConvention(CamelCaseNamingConvention.Instance)
					.Build();

				var myConfig = deserializer.Deserialize<Configuration>(input);

				return myConfig;
			}
		}
	}
}
