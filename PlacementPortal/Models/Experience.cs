using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using PlacementPortal.DTO;

namespace PlacementPortal.Models
{
    public class Experience
    {
        [Key]
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Organization { get; set; }
        public string Start { get; set; }
        public string End { get; set; }
        public string Description { get; set; }
        public string StudentId { get; set; }
        public Student Student { get; set; }

        public Experience() { }
        public Experience(ExperienceDTO experienceDTO, Student student)
        {
            Title = experienceDTO.Title;
            Description = experienceDTO.Description;
            Organization = experienceDTO.Organization;
            Start = experienceDTO.Start;
            End = experienceDTO.End;
            StudentId = experienceDTO.StudentId;
            Student = student;
        }
    }
}
