using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using VinylAPI.Models;
using VinylAPI.Repositories;

namespace VinylAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ArtistController : Controller
{
    private IArtistRepository _artistRepository;
    private ICountryRepository _countryRepository;
    private IAlbumRepository _albumRepository;
    private IGenreRepository _genreRepository;
    private IMapper _mapper;
    
    public ArtistController(IArtistRepository artistRepository, ICountryRepository countryRepository, 
        IAlbumRepository albumRepository, IGenreRepository genreRepository, IMapper mapper)
    {
        _artistRepository = artistRepository;
        _countryRepository = countryRepository;
        _albumRepository = albumRepository;
        _genreRepository = genreRepository;
        _mapper = mapper;
    }
    
    [HttpGet]
    [ProducesResponseType(200, Type = typeof(IEnumerable<Artist>))]
    public IActionResult GetArtists()
    {
        var artists = _mapper.Map<List<ArtistDTO>>(_artistRepository.GetArtists());
        if (!ModelState.IsValid)
            return BadRequest(ModelState);
        return Ok(artists);
    }
    
    [HttpGet("{artistId:int}")]
    [ProducesResponseType(200, Type = typeof(Artist))]
    [ProducesResponseType(400)]
    public IActionResult GetArtist(int artistId)
    {
        if (!_artistRepository.ArtistExists(artistId))
            return NotFound();
        var artist = _mapper.Map<ArtistDTO>(_artistRepository.GetArtist(artistId));
        if (!ModelState.IsValid)
            return BadRequest(ModelState);
        return Ok(artist);
    }

    [HttpGet("{artistName}")]
    [ProducesResponseType(200, Type = typeof(Artist))]
    [ProducesResponseType(400)]
    public IActionResult GetArtist(string artistName)
    {
        if (!_artistRepository.ArtistExists(artistName))
            return NotFound();
        var artist = _mapper.Map<ArtistDTO>(_artistRepository.GetArtist(artistName));
        if (!ModelState.IsValid)
            return BadRequest(ModelState);
        return Ok(artist);
    }
    
    [HttpGet("{genreId}")]
    [ProducesResponseType(200, Type = typeof(IEnumerable<Artist>))]
    [ProducesResponseType(400)]
    public IActionResult GetArtistsByGenreId(int genreId)
    {
        var artists = _mapper.Map<List<ArtistDTO>>(_artistRepository.GetArtistsByGenre(genreId));
        if (!ModelState.IsValid)
            return BadRequest(ModelState);
        return Ok(artists);
    }
    
    [HttpGet("{countryId}")]
    [ProducesResponseType(200, Type = typeof(IEnumerable<Artist>))]
    [ProducesResponseType(400)]
    public IActionResult GetArtistsByCountryId(int countryId)
    {
        var artists = _mapper.Map<List<ArtistDTO>>(_artistRepository.GetArtistsByGenre(countryId));
        if (!ModelState.IsValid)
            return BadRequest(ModelState);
        return Ok(artists);
    }
    
    [HttpPost]
    [ProducesResponseType(204)]
    [ProducesResponseType(400)]
    public IActionResult CreateArtist([FromQuery] int countryId, [FromQuery] int albumId, int genreId, [FromBody] ArtistDTO artistCreate)
    {
        if (artistCreate == null)
            return BadRequest(ModelState);

        var artists = _artistRepository.GetArtists()
            .Where(a => a.Name.Trim().ToUpper() == artistCreate.Name.TrimEnd().ToUpper())
            .FirstOrDefault();
            
        if (artists != null)
        {
            ModelState.AddModelError("","Artist already exists");
            return StatusCode(422, ModelState);
        }

        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var artistMap = _mapper.Map<Artist>(artistCreate);
        artistMap.Country = _countryRepository.GetCountryById(countryId);

        if (!_artistRepository.CreateArtist(countryId, albumId, genreId, artistMap))
        {
            ModelState.AddModelError("","Something went wrong while saving");
            return StatusCode(500, ModelState);
        }

        return Ok("Succesfully created");
    }
    
    [HttpPut("{artistId:int}")]
    [ProducesResponseType(204)]
    [ProducesResponseType(400)]
    [ProducesResponseType(404)]
    public IActionResult UpdateArtist([FromQuery] int countryId,[FromQuery] int artistId, [FromQuery] int genreId, [FromBody] ArtistDTO updatedArtist)
    {
        if (updatedArtist == null)
            return BadRequest(ModelState);

        if (artistId != updatedArtist.Id)
            return BadRequest(ModelState);

        if (!_artistRepository.ArtistExists(artistId))
            return NotFound();

        if (!ModelState.IsValid)
            return BadRequest();

        var artistMap = _mapper.Map<Artist>(updatedArtist);
            
        if (!_artistRepository.UpdateArtist( countryId,artistId, genreId, artistMap))
        {
            ModelState.AddModelError("", "Something went wrong while updating artist");
            return StatusCode(500, ModelState);
        }
        return NoContent();
    }
    
    [HttpDelete("{artistId}")]
    [ProducesResponseType(400)]
    [ProducesResponseType(204)]
    [ProducesResponseType(404)]
    public IActionResult DeleteArtist(int artistId)
    {
        if (!_artistRepository.ArtistExists(artistId))
        {
            return NotFound();
        }

        var artistToDelete = _artistRepository.GetArtist(artistId);
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        if (!_artistRepository.DeleteArtist(artistToDelete))
        {
            ModelState.AddModelError("", "Something went wrong deleting artist");
        }

        return NoContent();
    }
    
}