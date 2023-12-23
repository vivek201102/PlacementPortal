using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PlacementPortal.Models;

namespace PlacementPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SkillController : ControllerBase
    {
        private readonly DatabaseContext _databaseContext;
        public SkillController(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }
        [HttpPost]
        public async Task<ActionResult> PostSkill(Skill Skill)
        {
            if (_databaseContext.Skills == null)
            {
                return StatusCode(500, new { Error = "Database Context is null" });
            }

            try
            {
                _databaseContext.Skills.Add(Skill);
                await _databaseContext.SaveChangesAsync();
                return Ok(Skill);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { Error = ex.Message });
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Skill>>> GetSkills()
        {
            if (_databaseContext.Skills == null)
            {
                return StatusCode(500, new { Error = "Database Context is null" });
            }
            try
            {
                return Ok(await _databaseContext.Skills.ToListAsync());
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { Error = ex.Message });
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetSkill(string id)
        {
            if (_databaseContext.Skills == null)
            {
                return StatusCode(500, new { Error = "Database Context is null" });
            }
            try
            {
                Skill? skill = await _databaseContext.Skills.FindAsync(id);
                if (skill == null)
                    return NotFound();
                return Ok(skill);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { Error = ex.Message });
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteSkill(string id)
        {
            if (_databaseContext.Skills == null)
            {
                return StatusCode(500, new { Error = "Database Context is null" });
            }
            try
            {
                Skill? skill = await _databaseContext.Skills.FindAsync(id);

                if (skill == null)
                    return NotFound();
                _databaseContext.Skills.Remove(skill);
                await _databaseContext.SaveChangesAsync();
                return Ok(skill);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { Error = ex.Message });
            }
        }

        [HttpGet("findId/{skillName}")]
        public async Task<ActionResult> GetIdBySkillName(string skillName)
        {
            try
            {
                if (_databaseContext.Skills == null)
                    return StatusCode(500, "Datbase context is null" );
                Skill? skill = await _databaseContext.Skills.FirstOrDefaultAsync(s => s.SkillName == skillName);
                if (skill == null)
                    return NotFound();
                return Ok(skill.Id);
            }
            catch(Exception ex)
            {
                return StatusCode(500, new { ex.Message } );
            }
        }



    }
}
