using VinylAPI.Data;
using VinylAPI.Models;

namespace VinylAPI;

public class Seed
    {
        private readonly DataContext _dataContext;
        public Seed(DataContext context)
        {
            _dataContext = context;
        }
        public void SeedDataContext()
        {
            if (!_dataContext.Artists.Any())
            {
                var artists = new List<Artist>()
                {
                    new Artist()
                    {
                        Name = "Metallica",
                        Formed = new DateTime(1981, 1, 1),
                        Country = new Country() { Name = "USA" },
                        ArtistGenres = new List<ArtistGenre>()
                        {
                            new ArtistGenre() { Genre = new Genre() { Name = "Trash metal" } }
                        },
                        ArtistAlbums = new List<ArtistAlbum>()
                        {
                            new ArtistAlbum() { Album = new Album()
                            {
                                Title = "Kill 'Em All", 
                                AlbumGenres = new List<AlbumGenre>()
                                    {new AlbumGenre() { Genre = new Genre() { Name = "Heavy metal" } }},
                                Released = new DateTime(1983,7,26)
                            } },
                            new ArtistAlbum() { Album = new Album() { Title = "Ride The Lightning", 
                                AlbumGenres = new List<AlbumGenre>() 
                                    { new AlbumGenre() { Genre = new Genre() { Name = "Speed Metal"} }}, 
                                Released = new DateTime(1999,1,1)} },
                            new ArtistAlbum() { Album = new Album() { Title = "Master of Puppets",
                                    AlbumGenres = new List<AlbumGenre>()
                                        { new AlbumGenre() { Genre = new Genre() { Name = "Heavy metal" } } },
                                    Released = new DateTime(2002,1,1)} },
                        },
                    },
                    new Artist()
                    {
                        Name = "Emperor",
                        Formed = new DateTime(1991, 1, 1),
                        Country = new Country() { Name = "Norway" },
                        ArtistGenres = new List<ArtistGenre>()
                        {
                            new ArtistGenre() { Genre = new Genre() { Name = "Black metal" } }
                        },
                        ArtistAlbums = new List<ArtistAlbum>()
                        {
                            new ArtistAlbum() {Album = new Album()
                            {
                                Title = "In the Nightside Eclipse", AlbumGenres = new List<AlbumGenre>() 
                                    { new AlbumGenre() { Genre = new Genre() { Name = "Symphonic black metal" } } }
                            }, },
                            new ArtistAlbum() {Album = new Album() { Title = "Anthems to the Welkin at Dusk" } },
                            new ArtistAlbum() {Album = new Album() { Title = "IX Equilibrium" } },
                            new ArtistAlbum() {Album = new Album() { Title = "Prometheus: The Discipline of Fire & Demise" } }
                        }
                    }
                };
                _dataContext.AddRange(artists);
            }
            _dataContext.SaveChanges();
            }
        }
    