using AutoMapper;
using VinylAPI.Data;
using VinylAPI.Models;

namespace VinylAPI.Repositories;


public class CountryRepository : ICountryRepository
{
    private readonly DataContext _context;
    public CountryRepository(DataContext context)
    {
        _context = context;
    }
    public bool CountryExists(int id)
    {
        return _context.Countries.Any(c => c.Id == id);
    }

    public ICollection<Country> GetCountries()
    {
        return _context.Countries.ToList();
    }

    public Country GetCountryById(int id)
    {
        var country = _context.Countries.FirstOrDefault(c => c.Id == id);
        return country;
    }

    public bool CreateCountry(Country country)
    {
        _context.Countries.Add(country);
        return Save();
    }
    
    public bool UpdateCountry(Country country)
    {
        _context.Countries.Update(country);
        return Save();
    }

    public bool Save()
    {
        var saved = _context.SaveChanges();
        return saved > 0;
    }
}