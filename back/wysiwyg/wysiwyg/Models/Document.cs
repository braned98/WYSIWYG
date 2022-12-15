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
		public User? User { get; set; }
		public int UserId { get; set; }
		public string Name { get; set; }
		public DateTime DateCreated { get; set; }
		public string LatestContent { get; set; }
		public double VersionTag { get; set; }

		public Document(string name)
		{
			Name = name;
			LatestContent = "";
		}
	}
}

