using VinylAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace VinylAPI.Database;

public interface IContext : IDisposable
{
    public DbSet<Album> Albums { get; }
    int SaveChanges();
}

