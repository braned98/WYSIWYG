using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace wysiwyg.Models

{
	public class Document
	{
		[Key]
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int Id { get; set; }
		[ForeignKey("UserId")]
		public int UserId { get; set; }
		public string Name { get; set; }
		public DateTime DateCreated { get; set; }
		public string LatestContent { get; set; }
		public double VersionTag { get; set; }

		public Document(string name, int userId)
		{
			Name = name;
			LatestContent = "You can start writing!";
			DateCreated = DateTime.UtcNow;
			UserId = userId;
			VersionTag = 0.1;
		}
	}
}

