using System;
using Microsoft.EntityFrameworkCore;


namespace wysiwyg.Models
{
	public class MyWebApiContext:DbContext
	{
        public MyWebApiContext(DbContextOptions<MyWebApiContext> options) : base(options) { }

        public DbSet<User> Users { get; set; } = null!;

        public DbSet<Document> Documents { get; set; } = null!;

        public DbSet<Version> Versions { get; set; } = null!;

    }
}

