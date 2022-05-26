using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MVC_Enquete.Models
{
    public class Repositorio
    {
        private static List<Resposta> respostas = new List<Resposta>();
        public static IEnumerable<Resposta> Respostas { get {return respostas;} }

        public static void AdicionarResposta(Resposta resposta)
        {
            respostas.Add(resposta);
        }
    }
}