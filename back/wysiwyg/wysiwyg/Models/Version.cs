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
		public double VersionTag { get; set; }
		public string Content { get; set; }
		[ForeignKey("DocumentId")]
		public int DocumentId { get; set; }
		public Document? Document { get; set; }

		public Version(string content, int id, double versionTag)
		{
			Content = content;
			DocumentId = id;
			VersionTag = versionTag;
		}
	}
}



//Referenca prema dokumentu da bude