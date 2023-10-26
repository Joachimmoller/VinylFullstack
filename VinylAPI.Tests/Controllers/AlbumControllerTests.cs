namespace VinylAPI.Tests.Controllers;

public class AlbumControllerTests
{
        private readonly IAlbumRepository _albumRepository = A.Fake<IAlbumRepository>();
        private readonly IArtistRepository _artistRepository = A.Fake<IArtistRepository>();
        private readonly IMapper _mapper = A.Fake<IMapper>();

        [Fact]
        public void AlbumController_GetAlbums_ReturnOk()
        {
                // Arrange
                var albums = A.Fake<ICollection<AlbumDTO>>();
                var albumList = A.Fake<List<AlbumDTO>>();
                A.CallTo(() => _mapper.Map<List<AlbumDTO>>(albums)).Returns(albumList);
                var controller = new AlbumController(_albumRepository, _artistRepository, _mapper);
                
                // Act
                var result = controller.GetAlbums();
                
                // Assert
                result.Should().NotBeNull();
                result.Should().BeOfType(typeof(OkObjectResult));
        }
        
        [Fact]
        public void CountryController_CreateCountry_ReturnOk()
        {
                // Arrange
                var artistId = 1;
                var genreId = 1;
                var albumMap = A.Fake<Album>();
                var album = A.Fake<Album>();
                var albumCreate =  A.Fake<AlbumDTO>();
                A.CallTo(() => _albumRepository.GetAlbumTrimToUpper(albumCreate)).Returns(album);
                A.CallTo(() => _mapper.Map<Album>(albumCreate)).Returns(album);
                A.CallTo(() => _albumRepository.CreateAlbum(artistId,genreId,albumMap)).Returns(true);
                var controller = new AlbumController(_albumRepository, _artistRepository, _mapper);

                // Act
                var result = controller.CreateAlbum(artistId,genreId,albumCreate);
            
                // Assert
                result.Should().NotBeNull();
                result.Should().BeOfType(typeof(ObjectResult));
        }
}