using VinylAPI.Models;

namespace VinylAPI.Repositories;

public interface IGenreRepository
{
    bool GenreExists(int id);
    ICollection<Genre> GetGenres();
    Genre GetGenreById(int id);
    bool CreateGenre(Genre genre);
    bool UpdateGenre(Genre genre);
    bool DeleteGenre(Genre genre);
    bool Save();

}