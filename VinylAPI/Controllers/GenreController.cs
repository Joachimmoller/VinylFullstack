using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using VinylAPI.Models;
using VinylAPI.Repositories;

namespace VinylAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class GenreController : Controller
{
    private IGenreRepository _genreRepository;
    private IMapper _mapper;

    public GenreController(IGenreRepository genreRepository, IMapper mapper)
    {
        _genreRepository = genreRepository;
        _mapper = mapper;
    }
    
    [HttpGet]
    [ProducesResponseType(200, Type = typeof(IEnumerable<Genre>))]
    public IActionResult GetGenres()
    {
        var genres = _mapper.Map<List<GenreDTO>>(_genreRepository.GetGenres());
        if (!ModelState.IsValid)
            return BadRequest(ModelState);
        return Ok(genres);
    }
    
    [HttpGet("{genreId:int}")]
    [ProducesResponseType(200, Type = typeof(Genre))]
    [ProducesResponseType(400)]
    public IActionResult GetGenre(int genreId)
    {
        if (!_genreRepository.GenreExists(genreId))
            return NotFound();
        var genre = _mapper.Map<GenreDTO>(_genreRepository.GetGenreById(genreId));
        if (!ModelState.IsValid)
            return BadRequest(ModelState);
        return Ok(genre);
    }
    
    [HttpPost]
    [ProducesResponseType(204)]
    [ProducesResponseType(400)]
    public IActionResult CreateGenre([FromBody] GenreDTO genreCreate)
    {
        if (genreCreate == null)
            return BadRequest(ModelState);

        var genres = _genreRepository.GetGenres()
            .Where(g => g.Name.Trim().ToUpper() == genreCreate.Name.TrimEnd().ToUpper())
            .FirstOrDefault();
            
        if (genres != null)
        {
            ModelState.AddModelError("","Genre already exists");
            return StatusCode(422, ModelState);
        }

        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var genreMap = _mapper.Map<Genre>(genreCreate);

        if (!_genreRepository.CreateGenre(genreMap))
        {
            ModelState.AddModelError("","Something went wrong while saving");
            return StatusCode(500, ModelState);
        }

        return Ok("Succesfully created");
    }
    
    [HttpPut("{genreId}")]
    [ProducesResponseType(204)]
    [ProducesResponseType(400)]
    [ProducesResponseType(404)]
    public IActionResult UpdateGenre(int genreId, [FromBody] GenreDTO updatedGenre)
    {
        if (updatedGenre == null)
            return BadRequest(ModelState);

        if (genreId != updatedGenre.Id)
            return BadRequest(ModelState);

        if (!_genreRepository.GenreExists(genreId))
            return NotFound();

        if (!ModelState.IsValid)
            return BadRequest();

        var genreMap = _mapper.Map<Genre>(updatedGenre);
            
        if (!_genreRepository.UpdateGenre(genreMap))
        {
            ModelState.AddModelError("", "Something went wrong while updating genre");
            return StatusCode(500, ModelState);
        }
        return NoContent();
    }
    
}