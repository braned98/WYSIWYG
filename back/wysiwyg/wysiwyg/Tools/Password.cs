using System;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System.Security.Cryptography;

namespace wysiwyg.Tools
{
	public class Password
	{
		public static string HashPassword(string password)
		{
            byte[] salt = new byte[] {0x20, 0x20};

            string hash = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: password!,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: 100000,
                numBytesRequested: 256 / 8));



            return hash;
		}
	}
}

