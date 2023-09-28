using VinylAPI.Models;

namespace VinylAPI.Repositories;

public interface IArtistRepository
{
    bool ArtistExists(int id);
    ICollection<Artist> GetArtists();
    Artist GetArtist(int id);
    Artist GetArtist(string name);
    //TODO: Det er vist forkert genre jeg tager fat i
    ICollection<Artist> GetArtistsByGenre(int genreId);
    ICollection<Artist> GetArtistByCountry(int countryId);
    bool ArtistExists(string name);
    bool CreateArtist(int countryId, int albumId, int artistGenreId, Artist artist);
    
    bool Save();
    
}