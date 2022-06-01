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
           
           using(SqlDataAdapter sqlda = new SqlDataAdapter("INSERT INTO usuario (id, login, senha, email)"+
                                                           "VALUES (@id, @login, @senha, @email)", sqlcon))
            {
                try
                {  
                    sqlda.InsertCommand.Parameters.Add(@"id",  SqlDbType.Int, Usuario.id);
                    sqlda.InsertCommand.Parameters.Add(@"login", SqlDbType.NVarChar, 50, Usuario.login);
                    sqlda.InsertCommand.Parameters.Add("@senha", SqlDbType.Int, 50, Usuario.senha);
                    sqlda.InsertCommand.Parameters.Add("@email", SqlDbType.Int, 50, Usuario.email); 
                    
                }
                catch (Exception e)
                {   
                    Console.WriteLine($"Ocorreu um Erro Ao Executar a Query {e}");
                }
            }
        }

    }
}