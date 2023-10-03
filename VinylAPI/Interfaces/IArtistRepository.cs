using VinylAPI.Models;

namespace VinylAPI.Repositories;

public interface IArtistRepository
{
    bool ArtistExists(int id);
    ICollection<Artist> GetArtists();
    Artist GetArtist(int id);
    ICollection<Artist> GetArtistsByGenre(int genreId);
    ICollection<Artist> GetArtistByCountry(int countryId);
    bool ArtistExists(string name);
    bool CreateArtist(int countryId, int albumId, int artistGenreId, Artist artist);
    bool UpdateArtist(int countryId, int albumId, int artistGenreId, Artist artist);
    bool DeleteArtist(Artist artist);
    bool Save();
    
}