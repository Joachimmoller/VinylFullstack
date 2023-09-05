using System.Data.SqlClient;
using Dapper;
using Microsoft.AspNetCore.Mvc;

namespace VinylAPI.Controllers;


[ApiController]
[Route("api/[controller]")]
public class VinylsController : ControllerBase
{
    private const string MssqlConnectionString = "Server=.;Database=master;User Id=sa;Password=pa$$word2023;";
    private readonly ILogger<VinylsController> _logger;

    public VinylsController(ILogger<VinylsController> logger)
    {
        _logger = logger;
    }
    
    // GET
    
    /*
    [HttpGet(Name = "GetAlbums")]
    public IEnumerable<string> GetAlbum()
    {
        using var connection = new SqlConnection(MssqlConnectionString);
        return connection.Query<string>("SELECT * FROM Albums ").ToList();
    }
    */
    [HttpGet(Name = "GetAlbum")]
    public IEnumerable<string> Get()
    {
        using var connection = new SqlConnection(MssqlConnectionString);
        return connection.Query<string>("SELECT * FROM Albums WHERE Title = 'Master of Puppets' ");
    }
    // POST
    [HttpPost(Name = "PostVinyls")]
    public string Post()
    {
        return "Hej hej";
    }
    
    // PUT
    [HttpPut(Name = "PutVinyls")]
    public string Put()
    {
        return "Hej hej";
    }
    
    // DELETE
    [HttpDelete(Name = "DeleteVinyls")]
    public string Delete()
    {
        return "Hej hej";
    }
}