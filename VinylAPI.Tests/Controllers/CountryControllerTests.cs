namespace VinylAPI.Tests.Controllers
{
    public class CountryControllerTests
    {
        private readonly ICountryRepository _countryRepository;
        private readonly IMapper _mapper;

        public CountryControllerTests()
        {
            _countryRepository = A.Fake<ICountryRepository>();
            _mapper = A.Fake<IMapper>();
        }
        
        [Fact]
        public void CountryController_GetCountries_ReturnOK()
        {
            // Arrange
            var countries = A.Fake<ICollection<CountryDTO>>();
            var countryList = A.Fake<List<CountryDTO>>();
            A.CallTo(() => _mapper.Map<List<CountryDTO>>(countries)).Returns(countryList);
            var controller = new CountryController(_countryRepository, _mapper);

            // Act
            var result = controller.GetContries();
            
            // Assert
            result.Should().NotBeNull();
            result.Should().BeOfType(typeof(OkObjectResult));
        }
        
        [Fact]
        public void CountryController_GetCountryById_ReturnOK()
        {
            // Arrange
            var country = A.Fake<CountryDTO>();
            var countryMap = A.Fake<Country>();
            A.CallTo(() => _countryRepository.GetCountryById(country.Id)).Returns(countryMap);
            A.CallTo(() => _mapper.Map<CountryDTO>(countryMap)).Returns(country);
            var controller = new CountryController(_countryRepository, _mapper);

            // Act
            var result = controller.GetCountry(country.Id);
            
            // Assert
            result.Should().NotBeNull();
        }

        [Fact]
        public void CountryController_CreateCountry_ReturnOk()
        {
            // Arrange
            var countryMap = A.Fake<Country>();
            var country = A.Fake<Country>();
            var countryCreate =  A.Fake<CountryDTO>();
            A.CallTo(() => _countryRepository.GetCountryTrimToUpper(countryCreate)).Returns(country);
            A.CallTo(() => _mapper.Map<Country>(countryCreate)).Returns(country);
            A.CallTo(() => _countryRepository.CreateCountry(countryMap)).Returns(true);
            var controller = new CountryController(_countryRepository, _mapper);

            // Act
            var result = controller.CreateCountry(countryCreate);
            
            // Assert
            result.Should().NotBeNull();
            result.Should().BeOfType(typeof(ObjectResult));
        }

        [Fact]
        public void CountryController_DeleteCountry_ReturnOK()
        {
            // Arrange
            var countryMap = A.Fake<Country>();
            var country = A.Fake<Country>();
            var countryCreate =  A.Fake<CountryDTO>();
            A.CallTo(() => _countryRepository.GetCountryTrimToUpper(countryCreate)).Returns(country);
            A.CallTo(() => _mapper.Map<Country>(countryCreate)).Returns(country);
            A.CallTo(() => _countryRepository.CreateCountry(countryMap)).Returns(true);
            var controller = new CountryController(_countryRepository, _mapper);

            // Act
            var result = controller.CreateCountry(countryCreate);
            
            // Assert
            result.Should().NotBeNull();
            result.Should().BeOfType(typeof(ObjectResult));
        }
        
    }
}