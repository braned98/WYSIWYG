using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace wysiwyg.Models
{
	public class Version
	{
		[Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
		public string Content { get; set; }

		public Version(string content)
		{
			Content = content;
		}
	}
}

