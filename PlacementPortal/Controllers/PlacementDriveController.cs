using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PlacementPortal.Models;

namespace PlacementPortal.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PlacementDriveController : ControllerBase
    {
        private readonly DatabaseContext _databaseContext;
        public PlacementDriveController(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<PlacementDrive>>> GetPlacementDrives() 
        {
            try
            {
                if (_databaseContext == null)
                    return StatusCode(500, "Database context is null");
                List<PlacementDrive> placementDrives = await _databaseContext.PlacementDrives.ToListAsync();

                return Ok(placementDrives);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetPlacementDriveById(int id)
        {
            try
            {
                if (_databaseContext == null)
                    return StatusCode(500, "Database context is null");

                PlacementDrive? placementDrive = await _databaseContext.PlacementDrives.FindAsync(id);
                if (placementDrive == null)
                    return NotFound("Placement Drive not found");
                return Ok(placementDrive);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult> PostPlacementDrive(PlacementDrive placementDrive)
        {
            try
            {
                if (_databaseContext == null)
                    return StatusCode(500, "Database context is null");

                _databaseContext.PlacementDrives.Add(placementDrive);
                await _databaseContext.SaveChangesAsync();

                return Ok(placementDrive);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> PutPlacementDrive(int id, [FromBody] PlacementDrive placementDrive)
        {
            try
            {
                if (_databaseContext == null)
                    return StatusCode(500, "Database context is null");

                PlacementDrive? oldDrive = await _databaseContext.PlacementDrives.FindAsync(id);

                if (oldDrive == null) return NotFound("Placement drive not found");

                _databaseContext.Entry(placementDrive).State = EntityState.Modified;
                await _databaseContext.SaveChangesAsync();

                return Ok(placementDrive);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeletePlacementDrive(int id)
        {
            try
            {
                if (_databaseContext == null)
                    return StatusCode(500, "Database context is null");

                PlacementDrive? placementDrive = await _databaseContext.PlacementDrives.FindAsync(id);
                if (placementDrive == null) return NotFound("Placement drive not found");

                _databaseContext.PlacementDrives.Remove(placementDrive);
                await _databaseContext.SaveChangesAsync();

                return Ok(placementDrive);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
