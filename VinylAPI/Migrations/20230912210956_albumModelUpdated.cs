using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VinylAPI.Migrations
{
    /// <inheritdoc />
    public partial class albumModelUpdated : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Year",
                table: "Albums");

            migrationBuilder.AddColumn<DateTime>(
                name: "Released",
                table: "Albums",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Released",
                table: "Albums");

            migrationBuilder.AddColumn<int>(
                name: "Year",
                table: "Albums",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
