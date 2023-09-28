using Microsoft.EntityFrameworkCore;
using VinylAPI.Models;

namespace VinylAPI.Database;

public class Context : DbContext, IContext
{
    public Context(DbContextOptions<Context> options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Ignore<Attribute>();
        base.OnModelCreating(modelBuilder);
    }

    public DbSet<Album> Albums { get; }
}