using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PlacementPortal.Models;
using System.Text.Json.Serialization;
using System.Text.Json;

namespace PlacementPortal.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentSkillController : ControllerBase
    {
        private readonly DatabaseContext _databaseContext;
        public StudentSkillController(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        [HttpPost("{studentId}/skill/{skillId}")]
        public async Task<ActionResult> PostStudentSkill(string studentId, int skillId)
        {
            try
            {
                if(_databaseContext.StudentSkills == null || _databaseContext.Students == null || _databaseContext.Skills == null)
                {
                    return StatusCode(500, "Database context is null");
                }

                Student? student = await _databaseContext.Students.FindAsync(studentId);
                if (student == null)
                {
                    return NotFound("Student data not found");
                }
                Skill? skill = await _databaseContext.Skills.FindAsync(skillId);
                if (skill == null)
                {
                    return NotFound("Skill not found");
                }

                if(_databaseContext.StudentSkills.Any(ss => ss.StudentId == studentId && ss.SkillId == skillId))
                {
                    return StatusCode(500, "Entry Already Exisit");
                }
                else
                {
                   

                    StudentSkill studentSkill = new StudentSkill();
                    studentSkill.StudentId = studentId;
                    studentSkill.SkillId = skillId;
                 

                    _databaseContext.StudentSkills.Add(studentSkill);
                    await _databaseContext.SaveChangesAsync();

                    var jsonSerializerOptions = new JsonSerializerOptions
                    {
                        ReferenceHandler = ReferenceHandler.Preserve,
                        // Other options as needed
                    };

                    var serializedResponse = JsonSerializer.Serialize(studentSkill, jsonSerializerOptions);

                    return Ok(serializedResponse);
                }

            }
            catch (Exception ex) { 
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("{studentId}")]
        public async Task<ActionResult<IEnumerable<Skill>>> GetSkillsOfStudent(string studentId)
        {
            try
            {
                List<StudentSkill> studentSkills = _databaseContext.StudentSkills.Where(ss => ss.Student.Id == studentId).ToList();

                List<Skill> skills = new List<Skill>();
                foreach (var ss in studentSkills)
                {
                    Skill? skill = await _databaseContext.Skills.FindAsync(ss.SkillId);
                    skills.Add(skill);
                    Console.WriteLine(skill.Id + " -> " + skill.SkillName);
                }

                var jsonSerializerOptions = new JsonSerializerOptions
                {
                    ReferenceHandler = ReferenceHandler.Preserve,
                    // Other options as needed
                };

                var serializedResponse = JsonSerializer.Serialize(skills, jsonSerializerOptions);
                return Ok(serializedResponse);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete("{studentId}/skill/{skillId}")]
        public async Task<ActionResult> DeleteStudentSkill(string studentId, int skillId)
        {
            try
            {
                if (_databaseContext.StudentSkills == null)
                    return StatusCode(500, "Database context is null");

                StudentSkill sk = await _databaseContext.StudentSkills.FirstAsync(x => x.SkillId == skillId && x.StudentId == studentId);
                _databaseContext.StudentSkills.Remove(sk);
                await _databaseContext.SaveChangesAsync();

                return Ok(sk);

            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

    }

}
