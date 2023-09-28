using Microsoft.EntityFrameworkCore;
using VinylAPI.Models;

namespace VinylAPI.Data;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {
        
    }
    public DbSet<Artist> Artists { get; set; }
    public DbSet<Album> Albums { get; set; }
    public DbSet<Genre> Genres { get; set; }
    public DbSet<Country> Countries { get; set; }
    public DbSet<ArtistAlbum> ArtistAlbums { get; set; }
    public DbSet<AlbumGenre> AlbumGenres { get; set; }
    public DbSet<ArtistGenre> ArtistGenres { get; set; }
    
    // Create many-to-many relationships
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<ArtistAlbum>()
            .HasKey(aa => new {aa.ArtistId, aa.AlbumId});
        modelBuilder.Entity<ArtistAlbum>()
            .HasOne(aa => aa.Artist)
            .WithMany(a => a.ArtistAlbums)
            .HasForeignKey(aa => aa.ArtistId);
        modelBuilder.Entity<ArtistAlbum>()
            .HasOne(aa => aa.Album)
            .WithMany(a => a.ArtistAlbums)
            .HasForeignKey(aa => aa.AlbumId);
            
        modelBuilder.Entity<ArtistGenre>()
            .HasKey(aa => new {aa.ArtistId, aa.GenreId});
        modelBuilder.Entity<ArtistGenre>()
            .HasOne(aa => aa.Artist)
            .WithMany(a => a.ArtistGenres)
            .HasForeignKey(aa => aa.ArtistId);
        modelBuilder.Entity<ArtistGenre>()
            .HasOne(aa => aa.Genre)
            .WithMany(a => a.ArtistGenres)
            .HasForeignKey(aa => aa.GenreId);
        
        modelBuilder.Entity<AlbumGenre>()
            .HasKey(aa => new {aa.AlbumId, aa.GenreId});
        modelBuilder.Entity<AlbumGenre>()
            .HasOne(aa => aa.Album)
            .WithMany(a => a.AlbumGenres)
            .HasForeignKey(aa => aa.AlbumId);
        modelBuilder.Entity<AlbumGenre>()
            .HasOne(aa => aa.Genre)
            .WithMany(a => a.AlbumGenres)
            .HasForeignKey(aa => aa.GenreId);
        
    }
    
}