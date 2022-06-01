using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using BL;
using Models;

namespace DAO
{
    public class Conn : IDisposable
    {
        public static SqlConnection sqlcon = new SqlConnection(@"Data Source=DESKTOP-HP23KMA\sqlexpress; Initial Catalog=Test; Integrated Security=true");

        public void Dispose()
        {
            GC.SuppressFinalize(this);
            GC.SuppressFinalize(sqlcon);
        }


         public static void DAOadicionarNovoCadastro(usuario Usuario)
        {
           
           using(SqlDataAdapter sqlda = new SqlDataAdapter("Select * FROM usuario", sqlcon))
            {
                try
                {
                DataTable dtb = new DataTable();
                foreach (DataRow linha in dtb.Rows)
                    {
                       Console.WriteLine(linha["id"]);
                    }
                }
                catch (Exception e)
                {
                    Console.WriteLine($"Ocorreu um Erro Ao Executar a Query {e}");
                }
            }
        }

    }
}