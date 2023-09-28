using AutoMapper;
using VinylAPI.Models;

namespace VinylAPI.Helper;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<Artist, ArtistDTO>();
        CreateMap<ArtistDTO, Artist>();
        CreateMap<Album, AlbumDTO>();
        CreateMap<AlbumDTO, Album>();
        CreateMap<Country, CountryDTO>();
        CreateMap<CountryDTO, Country>();
        CreateMap<Genre, GenreDTO>();
        CreateMap<GenreDTO, Genre>();
    }
}