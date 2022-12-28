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

        private IConfiguration _config;


        public UserController(MyWebApiContext _context, IConfiguration config)
		{

			this._context = _context;
			this._config = config;

		}

		[HttpPost]
		[Route("register")]
		public async Task<ActionResult> userRegistration([FromBody] UserDto user)
		{
            if (!_context.Users.Any(u => u.Username == user.Username))
            {
                string passwordHash = Password.HashPassword(user.Password!);

                User newUser = new User(user.Name, user.Username, passwordHash, user.Email);

                _context.Users.Add(newUser);

                _context.SaveChanges();

                return Ok("ok");
            }
            else
            {
                return BadRequest("User with that username already exist!");
            }


            
		}

		[HttpPost]
		[Route("login")]
		public async Task<ActionResult> userLogin([FromBody] UserDto userLogin)
		{
            ActionResult response = Unauthorized();

			string pass = Password.HashPassword(userLogin.Password);

            User user = _context.Users.FirstOrDefault(u =>
				u.Username.Equals(userLogin.Username) && u.Password.Equals(Password.HashPassword(userLogin.Password)));
			
            if (user != null)
            {
                var tokenString = JWT.GenerateJSONWebToken(_config, user);
                response = Ok(new { token = tokenString, user = user.Username, userId = user.Id });
            }

            return response;

		}

	}
}

