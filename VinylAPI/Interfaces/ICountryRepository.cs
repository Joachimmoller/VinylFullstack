using VinylAPI.Models;

namespace VinylAPI.Repositories;

public interface ICountryRepository
{
    bool CountryExists(int id);
    ICollection<Country> GetCountries();
    Country GetCountryById(int id);
    bool CreateCountry(Country country);
    bool UpdateCountry(Country country);
    bool DeleteCountry(Country country);
    bool Save();
    
}