using Microsoft.EntityFrameworkCore;

namespace PlacementPortal.Models
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {}
        public DbSet<Student> Students { get; set; }
        public DbSet<Skill> Skills { get; set; }
        public DbSet<Education> Educations { get; set; }
        public DbSet<Experience> Experiences { get; set; }
        public DbSet<StudentSkill> StudentSkills { get; set; }
        public DbSet<PlacementDrive> PlacementDrives { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<StudentSkill>()
            .HasKey(ss => new { ss.StudentId, ss.SkillId });

            modelBuilder.Entity<StudentSkill>()
                .HasOne(ss => ss.Student)
                .WithMany(s => s.StudentSkills)
                .HasForeignKey(ss => ss.StudentId);

            modelBuilder.Entity<StudentSkill>()
                .HasOne(ss => ss.Skill)
                .WithMany(ss => ss.StudentSkills)
                .HasForeignKey(ss => ss.SkillId);

            modelBuilder.Entity<Student>().
                HasMany(s => s.Educations).
                WithOne(education => education.Student).
                HasForeignKey(s => s.StudentId);

            modelBuilder.Entity<Student>().
                HasMany(s => s.Experiences).
                WithOne(experience => experience.Student).
                HasForeignKey(s => s.StudentId);

        }
    }
}
