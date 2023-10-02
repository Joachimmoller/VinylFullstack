using VinylAPI.Data;
using VinylAPI.Models;

namespace VinylAPI.Repositories;

public class GenreRepository : IGenreRepository
{
    private readonly DataContext _context;
    public GenreRepository(DataContext context)
    {
        _context = context;
    }
    public bool GenreExists(int id)
    {
        return _context.Genres.Any(g => g.Id == id);
    }

    public ICollection<Genre> GetGenres()
    {
        return _context.Genres.ToList();
    }

    public Genre GetGenreById(int id)
    {
        var genre = _context.Genres.FirstOrDefault(g => g.Id == id);
        return genre;
    }

    public bool CreateGenre(Genre genre)
    {
        _context.Add(genre);
        return Save();
    }

    public bool UpdateGenre(Genre genre)
    {
        _context.Update(genre);
        return Save();
    }

    public bool DeleteGenre(Genre genre)
    {
        _context.Remove(genre);
        return Save();
    }

    public bool Save()
    {
        var saved = _context.SaveChanges();
        return saved > 0;
    }
}