using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MVC_Enquete.Models
{
    public class Resposta
    {
        public string? Nome { get; set; }
        public string? Email { get; set; }
        public bool? Sim { get; set; }
    }
}