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
    public class ExperienceController : ControllerBase
    {
        private readonly DatabaseContext _databaseContext;

        public ExperienceController(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        [HttpGet("{studentId}")]
        public async Task<ActionResult<IEnumerable<Experience>>> GetExperienceByStudentId(string studentId)
        {
            try
            {
                if (_databaseContext.Experiences == null)
                    return StatusCode(500, "Database context is null");
                List<Experience> experiences = _databaseContext.Experiences.Where(experience => experience.StudentId == studentId).ToList();

                return Ok(experiences);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult> PostExperience(ExperienceDTO experienceDTO)
        {
            try
            {
                if (_databaseContext.Experiences == null)
                    return StatusCode(500, "Database context is null");

                Student? student = await _databaseContext.Students.FindAsync(experienceDTO.StudentId);
                if (student == null)
                    return NotFound("Student not found");
                Experience experience = new Experience(experienceDTO, student);

                _databaseContext.Experiences.Add(experience);
                await _databaseContext.SaveChangesAsync();

                var jsonSerializerOptions = new JsonSerializerOptions
                {
                    ReferenceHandler = ReferenceHandler.Preserve,
                    // Other options as needed
                };

                var serializedResponse = JsonSerializer.Serialize(experience, jsonSerializerOptions);
                return Ok(serializedResponse);
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateExperience(int id, [FromBody] ExperienceDTO experienceDTO)
        {
            try
            {
                if (_databaseContext.Experiences == null)
                    return StatusCode(500, "Database context is null");

                Student? student = await _databaseContext.Students.FindAsync(experienceDTO.StudentId);

                if (student == null)
                    return NotFound("Student data not found");

                Experience? experience = new Experience(experienceDTO, student);
                experience.Id = id;

                _databaseContext.Experiences.Update(experience);
                await _databaseContext.SaveChangesAsync();

                var jsonSerializerOptions = new JsonSerializerOptions
                {
                    ReferenceHandler = ReferenceHandler.Preserve,
                    // Other options as needed
                };

                var serializedResponse = JsonSerializer.Serialize(experience, jsonSerializerOptions);
                return Ok(serializedResponse);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteExperience(int id)
        {
            try
            {
                if (_databaseContext == null)
                    return StatusCode(500, "Database context is null");

                Experience? experience = await _databaseContext.Experiences.FindAsync(id);
                if (experience == null) return StatusCode(500, "Experience not found");

                _databaseContext.Experiences.Remove(experience);
                await _databaseContext.SaveChangesAsync();

                return Ok(experience);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
