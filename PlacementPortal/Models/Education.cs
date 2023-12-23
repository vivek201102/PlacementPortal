using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using PlacementPortal.DTO;

namespace PlacementPortal.Models
{
    public class Education
    {
        public Education(EducationDTO educationDTO, Student student) 
        { 
            this.StudentId = educationDTO.StudentId;
            this.Result = educationDTO.Result;
            this.Start = educationDTO.Start;
            this.End = educationDTO.End;
            this.Title = educationDTO.Title;
            this.Institute = educationDTO.Institute;
            this.Student = student;
        }

        public Education() { }

        [Key]
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Institute { get; set; }
        public string Start { get; set; }
        public string End { get; set; }
        public string Result { get; set; }
        public string StudentId { get; set; }
        public Student Student { get; set; }
    }
}
