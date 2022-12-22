using System;
namespace wysiwyg.Dto
{
	public class DocumentDto
	{
		public int Id { get; set; }
		public string? Name { get; set; }
		public int UserId { get; set; }
		public string DocumentContent { get; set; }

	}
}

