using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using VinylAPI.Models;
using VinylAPI.Repositories;

namespace VinylAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AlbumController : Controller
{
    private readonly IAlbumRepository _albumRepository; 
    private readonly IArtistRepository _artistRepository;
    private readonly IMapper _mapper;

    public AlbumController(IAlbumRepository albumRepository, IArtistRepository artistRepository, IMapper mapper)
    {
        _albumRepository = albumRepository;
        _artistRepository = artistRepository;
        _mapper = mapper;
    }
    
    // GET ALL ALBUMS
    [HttpGet(Name = "GetAlbums")]
    [ProducesResponseType(200, Type = typeof(IEnumerable<Album>))]
    public IActionResult GetAlbums()
    {
        var albums = _mapper.Map<List<AlbumDTO>>(_albumRepository.GetAlbums());
        if (!ModelState.IsValid)
            return BadRequest(ModelState);
        return Ok(albums);
    }
    
    // GET ALBUM BY ID
    [HttpGet("{albumId:int}")]
    [ProducesResponseType(200, Type = typeof(Album))]
    [ProducesResponseType(400)]
    public IActionResult GetAlbum(int albumId)
    {
        if (!_albumRepository.AlbumExists(albumId))
            return NotFound();
        var album = _mapper.Map<AlbumDTO>(_albumRepository.GetAlbumById(albumId));
        if (!ModelState.IsValid)
            return BadRequest(ModelState);
        return Ok(album);
    }
    
    // GET ALBUMS BY ARTISTID
    [HttpGet("{artistId:int}")]
    [ProducesResponseType(200, Type = typeof(IEnumerable<Album>))]
    [ProducesResponseType(204)]
    [ProducesResponseType(400)]
    [ProducesResponseType(404)]
    public IActionResult GetAlbumsByArtistId(int artistId)
    {
        var album = _mapper.Map<List<AlbumDTO>>(_albumRepository.GetAlbumsByArtistId(artistId));
        if (!ModelState.IsValid)
            return BadRequest();
        return Ok(album);
    }
    
    [HttpPost]
    [ProducesResponseType(204)]
    [ProducesResponseType(400)] 
    public IActionResult CreateAlbum([FromQuery] int artistId, [FromQuery] int genreId,[FromBody] AlbumDTO albumCreate)
    {
        if (albumCreate == null)
            return BadRequest(ModelState);

        var albums = _albumRepository.GetAlbums()
            .Where(a=> a.Title.Trim().ToUpper() == albumCreate.Title.TrimEnd().ToUpper())
            .FirstOrDefault();
        
        if (albums != null)
        {
            ModelState.AddModelError("", "Album already exists!");
            return StatusCode(422,ModelState);
        }
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var albumMap = _mapper.Map<Album>(albumCreate);

        if (!_albumRepository.CreateAlbum(artistId, genreId, albumMap))
        {
            ModelState.AddModelError("","Something went wrong while saving");
            return StatusCode(500, ModelState);
        }
        return Ok("Successfully created");
    }
    
    [HttpPut("{albumId:int}")]
    [ProducesResponseType(204)]
    [ProducesResponseType(400)]
    [ProducesResponseType(404)]
    public IActionResult UpdateAlbum(int albumId,[FromQuery] int artistId, [FromQuery] int genreId, [FromBody] AlbumDTO updatedAlbum)
    {
        if (updatedAlbum == null)
            return BadRequest(ModelState);

        if (albumId != updatedAlbum.Id)
            return BadRequest(ModelState);

        if (!_albumRepository.AlbumExists(albumId))
            return NotFound();

        if (!ModelState.IsValid)
            return BadRequest();

        var albumMap = _mapper.Map<Album>(updatedAlbum);
            
        if (!_albumRepository.UpdateAlbum(artistId, genreId, albumMap))
        {
            ModelState.AddModelError("", "Something went wrong while updating album");
            return StatusCode(500, ModelState);
        }
        return NoContent();
    }
    
    [HttpDelete("{albumId}")]
    [ProducesResponseType(400)]
    [ProducesResponseType(204)]
    [ProducesResponseType(404)]
    public IActionResult DeleteAlbum(int albumId)
    {
        if (!_albumRepository.AlbumExists(albumId))
        {
            return NotFound();
        }

        var albumToDelete = _albumRepository.GetAlbumById(albumId);
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        if (!_albumRepository.DeleteAlbum(albumToDelete))
        {
            ModelState.AddModelError("", "Something went wrong deleting album");
        }

        return NoContent();
    }
 
}