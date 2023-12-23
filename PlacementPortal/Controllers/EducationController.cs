using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PlacementPortal.DTO;
using PlacementPortal.Models;
using System.Text.Json.Serialization;
using System.Text.Json;

namespace PlacementPortal.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EducationController : ControllerBase
    {
        private readonly DatabaseContext _databaseContext;
        public EducationController(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        [HttpGet("{studentId}")]
        public async Task<ActionResult<IEnumerable<Education>>> GetEducations(string studentId)
        {
            try
            {
                if(_databaseContext.Educations == null)
                {
                    return StatusCode(500, "Database context is null");
                }

                List<Education> education = _databaseContext.Educations.Where(education => education.StudentId == studentId).ToList();
  
                return Ok(education);
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult> PostEducation(EducationDTO educationDto)
        {
            try
            {
                if (_databaseContext.Educations == null)
                    return StatusCode(500, "Database context is null");

                Student? student = await _databaseContext.Students.FindAsync(educationDto.StudentId);

                if (student == null)
                    return NotFound("Student data not found");

                Education education = new Education(educationDto, student);

                _databaseContext.Educations.Add(education);
                await _databaseContext.SaveChangesAsync();

                var jsonSerializerOptions = new JsonSerializerOptions
                {
                    ReferenceHandler = ReferenceHandler.Preserve,
                    // Other options as needed
                };

                var serializedResponse = JsonSerializer.Serialize(education, jsonSerializerOptions);
                return Ok(serializedResponse);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteEducation(int id)
        {
            try
            {
                if (_databaseContext.Educations == null)
                    return StatusCode(500, "Database context is null");
                Education? education = await _databaseContext.Educations.FindAsync(id);
                if (education == null)
                    return NotFound("Education information not found");
                _databaseContext.Educations.Remove(education);
                await _databaseContext.SaveChangesAsync();
                return Ok(education);
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
