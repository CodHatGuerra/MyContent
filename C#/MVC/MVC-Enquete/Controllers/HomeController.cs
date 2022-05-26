using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MVC_Enquete.Models;

namespace MVC_Enquete.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }

    [HttpGet]
    public IActionResult Responder()
    {
        return View();
    }

    [HttpPost]
    public IActionResult Responder(Resposta resposta)
    {
        Repositorio.AdicionarResposta(resposta);
        return View("Index");
    }
}
