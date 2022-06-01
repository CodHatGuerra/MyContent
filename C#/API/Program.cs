using BL;
using Models;


namespace TesteCon
{
    public class Test
    {
        static void Main()
        {

            string continuar;
            int selecionar;
            do{
            Console.WriteLine("|---------Microsoft SQL---------");
            Console.WriteLine("|Seleciona A Função Abaixo:    |");
            Console.WriteLine("|1 - Adicionar um Novo Cadastro|");
            Console.WriteLine("|2 - Modificar um Usuario      |");
            Console.WriteLine("|3 - Deletar   um Usuario      |");
            Console.WriteLine("|4 - Listar    um Usuario      |");
            Console.WriteLine("|5 - Listar Todos Usuarios     |");
            Console.WriteLine("|-------------------------------");
            selecionar=int.Parse(Console.ReadLine());

            switch(selecionar) 
                { 
                 case 1:
                   
                    using(usuario Usuario = new usuario())
                    {
                    Console.WriteLine("Digite o ID: ");
                    Usuario.id = int.Parse(Console.ReadLine());
                    Console.WriteLine("Digite o Login: ");z
                    Usuario.login = Console.ReadLine().ToString();
                    Console.WriteLine("Digite a Senha: ");
                    Usuario.senha = Console.ReadLine().ToString();
                    Console.WriteLine("Digite o Email: ");
                    Usuario.email = Console.ReadLine().ToString();
                    }
                 break;


                 case 2:
                    // code block
                 break;
                 case 3:
                    // code block
                 break;
                 case 4:
                    // code block
                break;   
                 case 5:
                    // code block
                break;   
                default:
                   Console.WriteLine("Opção Escolhida Invalida, Tente Novamente.");
                break;
                }


            Console.WriteLine("Deseja Consultar/Operar Mais uma Vez: [s/n]: ");
            continuar = Console.ReadLine().ToString();
            }while (continuar == "y");

        }
    }
}