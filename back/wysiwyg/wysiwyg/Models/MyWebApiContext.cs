using System;
using Microsoft.EntityFrameworkCore;


namespace wysiwyg.Models
{
	public class MyWebApiContext:DbContext
	{
        public MyWebApiContext(DbContextOptions<MyWebApiContext> options) : base(options) { }
    }
}

