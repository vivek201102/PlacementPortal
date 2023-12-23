using System.ComponentModel.DataAnnotations.Schema;

namespace PlacementPortal.Models
{
    public class StudentSkill
    {
        public string StudentId { get; set; }
        public Student Student { get; set; }

        public int SkillId { get; set; }
        public Skill Skill { get; set; }
    }
}
