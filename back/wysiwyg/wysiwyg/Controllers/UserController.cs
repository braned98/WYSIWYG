using System;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using wysiwyg.Models;
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
		public async Task<ActionResult> userRegistration([FromBody] User user)
		{
			//var something = user.Name;


			return Ok("ok");
		}




	}
}

