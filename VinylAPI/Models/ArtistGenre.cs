namespace VinylAPI.Models;

public class ArtistGenre
{
    public int ArtistId { get; set; }
    public int GenreId { get; set; }
    public Artist Artist { get; set; }
    public Genre Genre { get; set; }
}