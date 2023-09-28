namespace VinylAPI.Models;

public class ArtistAlbum
{
    public int ArtistId { get; set; }
    public int AlbumId { get; set; }
    public Artist Artist { get; set; }
    public Album Album { get; set; }
}