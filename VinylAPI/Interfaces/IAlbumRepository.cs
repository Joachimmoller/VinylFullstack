using Microsoft.AspNetCore.Mvc;
using VinylAPI.Models;

namespace VinylAPI.Repositories;

public interface IAlbumRepository
{
    bool AlbumExists(int id);
    ICollection<Album> GetAlbums();
    Album GetAlbumById(int id);
    ICollection<Album> GetAlbumsByArtistId(int artistId);
    bool CreateAlbum(int artistId, int genreId, Album album);
    bool UpdateAlbum(int artistId, int genreId, Album album);
    bool DeleteAlbum(Album album);
    bool Save();

}