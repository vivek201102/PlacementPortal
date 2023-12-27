using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PlacementPortal.Migrations
{
    public partial class databaseUpdate3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedAt",
                table: "PlacementDrives",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "DeadLineForApplication",
                table: "PlacementDrives",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedAt",
                table: "PlacementDrives");

            migrationBuilder.DropColumn(
                name: "DeadLineForApplication",
                table: "PlacementDrives");
        }
    }
}
