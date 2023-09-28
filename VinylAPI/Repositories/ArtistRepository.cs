using System.Xml.Linq;
using VinylAPI.Data;
using VinylAPI.Models;

namespace VinylAPI.Repositories;

public class ArtistRepository : IArtistRepository
{
    private readonly DataContext _context;
    public ArtistRepository(DataContext context)
    {
        _context = context;
    }
    public ICollection<Artist> GetArtists()
    {
        return _context.Artists.OrderBy(a => a.Id).ToList();
    }

    public Artist GetArtist(int id)
    {
        var artist = _context.Artists.FirstOrDefault(a => a.Id == id);
        return artist;
    }

    public Artist GetArtist(string name)
    {
        var artist = _context.Artists.FirstOrDefault(a => a.Name == name);
        return artist;
    }

    public ICollection<Artist> GetArtistsByGenre(int genreId)
    {
        var artists = _context.Artists.Where(a => a.ArtistGenres.Any(ag => ag.GenreId == genreId)).ToList();
        return artists;
    }

    public ICollection<Artist> GetArtistByCountry(int countryId)
    {
        var artists = _context.Artists.Where(a => a.Country.Id == countryId).ToList();
        return artists;
    }

    public bool ArtistExists(int id)
    {
        var artist = _context.Artists.Any(a => a.Id == id);
        return artist;
    }

    public bool ArtistExists(string name)
    {
        var artist = _context.Artists.Any(a => a.Name == name);
        return true;
    }

    public bool CreateArtist(int countryId, int albumId, int artistGenreId, Artist artist)
    {
        var artistAlbumEntity = _context.Albums.Where(a => a.Id == albumId).FirstOrDefault();
        var artistGenreEntity = _context.Genres.Where(a => a.Id == artistGenreId).FirstOrDefault();
        
        var artistAlbum = new ArtistAlbum()
        {
            Album = artistAlbumEntity,
            Artist = artist,
        };
        _context.Add(artistAlbum);
        
        var artistGenre = new ArtistGenre()
        {
            Genre = artistGenreEntity,
            Artist = artist,
        };
        _context.Add(artistGenre);
        _context.Add(artist);
        return Save();
        //TODO: Muligvis country her?
    }

    public bool Save()
    {
        var saved = _context.SaveChanges();
        return saved > 0;
    }
}