using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PlacementPortal.Models
{
    public class PlacementDrive
    {
        [Key]
        [Required]
        [DatabaseGenerated (DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string CompanyName { get; set; }
        public string CTC {  get; set; }
        public string Description { get; set; }
        public string Role {  get; set; }
        public string EligibilityCriteria { get; set; }
        public string RequiredQualification { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime DeadLineForApplication { get; set;}
    }
}
