using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Models
{
    public class usuario : IDisposable
    {
        public int id {get; set; }
        public string login {get; set; }
        public string senha {get; set; }
        public string email {get; set; }     

        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }    
        public usuario()
        {
            
        }
    }
}