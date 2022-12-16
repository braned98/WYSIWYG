using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using wysiwyg.Dto;
using wysiwyg.Models;
using wysiwyg.Tools;

namespace wysiwyg.Controllers
{
	public class DocumentController : ControllerBase
	{

        private readonly MyWebApiContext _context;


        public DocumentController(MyWebApiContext _context)
		{
            this._context = _context;
        }

        [HttpPost]
        [Route("createdoc")]
        public async Task<ActionResult> createDocument([FromBody] DocumentDto document)
        {

            Document newDoc = new Document(document.Name, document.UserId);

            _context.Documents.Add(newDoc);

            _context.SaveChanges();

            return Ok("ok");
        }


    }
}

