using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VinylAPI.Models;

public class Album
{
    public int Id { get; set; }
    public string Title { get; set; }
    public DateTime Released { get; set; }
    public ICollection<ArtistAlbum> ArtistAlbums { get; set; }
    public ICollection<AlbumGenre> AlbumGenres { get; set; }
}