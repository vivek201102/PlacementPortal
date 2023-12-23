using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PlacementPortal.Models;

namespace PlacementPortal.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentController : ControllerBase
    {
        private readonly DatabaseContext _databaseContext;
        public StudentController(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        [HttpPost]
        public async Task<ActionResult> PostStudent(Student student)
        {
            if(_databaseContext.Students == null)
            {
                return StatusCode(500, new { Error = "Database Context is null" });
            }

            try
            {   _databaseContext.Students.Add(student);
                await _databaseContext.SaveChangesAsync();
                return Ok(student);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { Error = ex.Message });
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Student>>> GetStudents()
        {
            if (_databaseContext.Students == null)
            {
                return StatusCode(500, new { Error = "Database Context is null" });
            }
            try
            {
                return Ok(await _databaseContext.Students.ToListAsync());
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { Error = ex.Message });
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetStudent(string id)
        {
            if (_databaseContext.Students == null)
            {
                return StatusCode(500, new { Error = "Database Context is null" });
            }
            try
            {
                Student? student = await _databaseContext.Students.FindAsync(id);
                if(student == null)
                    return NotFound();
                return Ok(student);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { Error = ex.Message });
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteStudent(string id)
        {
            if (_databaseContext.Students == null)
            {
                return StatusCode(500, new { Error = "Database Context is null" });
            }
            try
            {
                Student? student = await _databaseContext.Students.FindAsync(id);
                
                if(student == null)
                    return NotFound();
                _databaseContext.Students.Remove(student);
                await _databaseContext.SaveChangesAsync();
                return Ok(student);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { Error = ex.Message });
            }
        }
    }
}
