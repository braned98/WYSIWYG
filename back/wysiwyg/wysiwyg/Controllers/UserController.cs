using System;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using wysiwyg.Models;
using wysiwyg.Dto;
using wysiwyg.Tools;


namespace wysiwyg.Controllers
{
	public class UserController : ControllerBase
	{
		private readonly MyWebApiContext _context;

		public UserController(MyWebApiContext _context)
		{

			this._context = _context;

		}

		[HttpPost]
		[Route("register")]
		public async Task<ActionResult> userRegistration([FromBody] UserDto user)
		{
			string passwordHash = Password.HashPassword(user.Password!);

			User newUser = new User(user.Name, user.Username, passwordHash, user.Email);

			_context.Users.Add(newUser);

			_context.SaveChanges();

			return Ok("ok");
		}

		[HttpPost]
		[Route("register")]
		public async Task<ActionResult> userLogin([FromBody] UserDto userLogin)
		{



			return Ok("ok");
		}

	}
}

