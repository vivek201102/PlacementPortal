using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PlacementPortal.Migrations
{
    public partial class migration2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_StudentSkills_Skills_SkillId1",
                table: "StudentSkills");

            migrationBuilder.DropIndex(
                name: "IX_StudentSkills_SkillId1",
                table: "StudentSkills");

            migrationBuilder.DropColumn(
                name: "SkillId1",
                table: "StudentSkills");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "SkillId1",
                table: "StudentSkills",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_StudentSkills_SkillId1",
                table: "StudentSkills",
                column: "SkillId1");

            migrationBuilder.AddForeignKey(
                name: "FK_StudentSkills_Skills_SkillId1",
                table: "StudentSkills",
                column: "SkillId1",
                principalTable: "Skills",
                principalColumn: "Id");
        }
    }
}
