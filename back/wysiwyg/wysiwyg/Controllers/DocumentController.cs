using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using wysiwyg.Dto;
using wysiwyg.Models;
using wysiwyg.Tools;
using Microsoft.EntityFrameworkCore;


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

        [HttpGet]
        [Route("getDocuments")]
        public IEnumerable<Document> getDocuments(int id)
        {
            var documents = _context.Documents.Where(doc => doc.UserId == id);

            return documents;
        }

        [HttpGet]
        [Route("getDocument")]
        public Document getDocument(int id)
        {
            var document = _context.Documents.FirstOrDefault(doc => doc.Id == id);

            return document;
        }

        [HttpPut]
        [Route("saveDocument")]
        public Document saveDocument([FromBody] DocumentDto doc)
        {
            var document = _context.Documents.FirstOrDefault(document => document.Id == doc.Id);

            Models.Version saveLastVersion = new Models.Version(document.LatestContent, document.Id, document.VersionTag);

            document.LatestContent = doc.DocumentContent;
            document.VersionTag = Math.Round(document.VersionTag + 0.1, 1);

            _context.Versions.Add(saveLastVersion);

            _context.SaveChanges();

            return document;
        }

        [HttpGet]
        [Route("getVersion")]
        public VersionDTO getVersion([FromBody] VersionDTO ver)
        {
            VersionDTO retVal = new VersionDTO();

            var version = _context.Versions.FirstOrDefault(version => (version.DocumentId == ver.Id && version.VersionTag == ver.VersionTag));

            retVal.DocumentContent = version.Content;

            return retVal;
        }


    }
}

