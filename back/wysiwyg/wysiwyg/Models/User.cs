using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace wysiwyg.Models
{
	public class User
	{
		[Key]
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int Id { get; set; }
		public string? Name { get; set; }
		public string? Username { get; set; }
		public string? Password { get; set; }
		public string? Email { get; set; }
		public ICollection<Document> Documents { get; set; } = new List<Document>();


		public User(string name, string username, string password, string email)
		{
			Name = name;
			Username = username;
			Password = password;
			Email = email;
		}

		public User()
		{

		}

	}
}

