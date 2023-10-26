using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using VinylAPI.Data;
using VinylAPI.Database;
using VinylAPI.Models;

namespace VinylAPI.Repositories;

public class AlbumRepository : IAlbumRepository  
{
    private readonly DataContext _context;

    public AlbumRepository(DataContext context)
    {
        _context = context;
    }
    
    public bool AlbumExists(int id)
    {
        return _context.Albums.Any(a => a.Id == id);
    }
   
    public ICollection<Album> GetAlbums()
    {
        return _context.Albums.ToList();
    }

    public Album GetAlbumById(int id)
    {
        var album = _context.Albums.FirstOrDefault(a => a.Id == id);
        return album;
    }
    
    public ICollection<Album> GetAlbumsByArtistId(int artistId)
    {
        var albums = _context.Albums
            .Where(a => a.ArtistAlbums.Any(ag => ag.ArtistId == artistId)).ToList();
        return albums;
    }

    public Album GetAlbumTrimToUpper(AlbumDTO albumCreate)
    {
        return GetAlbums().Where(a => a.Title.Trim().ToUpper() == albumCreate.Title.TrimEnd().ToUpper())
            .FirstOrDefault();
    }


    public bool CreateAlbum(int artistId, int genreId, Album album)
    {
        var artistAlbumEntity = _context.Artists.Where(a => a.Id == artistId).FirstOrDefault();
        var albumGenreEntity = _context.Genres.Where(a => a.Id == genreId).FirstOrDefault();
        
        var artistAlbum = new ArtistAlbum()
        {
            Album = album,
            Artist = artistAlbumEntity,
        };
        _context.Add(artistAlbum);
        
        var artistGenre = new AlbumGenre()
        {
            Genre = albumGenreEntity,
            Album = album
        };
        _context.Add(artistGenre);
        _context.Add(album);
        return Save();
    }
    public bool UpdateAlbum(int artistId, int genreId, Album album)
    {
        _context.Update(album);
        return Save();
    }

    public bool DeleteAlbum(Album album)
    {
        _context.Remove(album);
        return Save();
    }

    public bool Save()
    {
        var saved = _context.SaveChanges();
        return saved > 0;
    }
}