using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VinylAPI.Models;

public class Artist
{
    public int Id { get; set; }
    public string Name {get; set;}
    public DateTime Formed { get; set; }
    public Country Country { get; set; }
    public ICollection<ArtistAlbum> ArtistAlbums { get; set; }
    public ICollection<ArtistGenre> ArtistGenres { get; set; }
}