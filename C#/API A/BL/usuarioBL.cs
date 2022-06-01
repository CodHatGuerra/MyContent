using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Models;
using DAO;

namespace BL
{
    public class usuarioBL
    {
        public static void adicionarNovoCadastro(usuario Usuario)
        {
            try
            {
                DAO.Conn.DAOadicionarNovoCadastro(Usuario);
        
            }
            catch (Exception e)
            {
            Console.WriteLine("{0} Erro Ocorrido Na Conexao.", e);
            }
        }
    }
}