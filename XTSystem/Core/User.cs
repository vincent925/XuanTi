using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace XTSystem.Core
{
    //[DbConfigurationType(typeof(MySql.Data.Entity.MySqlEFConfiguration))]
    public class MyContext : DbContext
    {
        public MyContext()
            : base("name=MyContext")//web.config中connectionstring的名字
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Flow> Flows { get; set; }
    }
    [Table("user")]
    public class User
    {
        [Key]
        public int ID { get; set; }
        public string email { get; set; }
        public string pass { get; set; }
        public string passwd { get; set; }
        public Int32 t { get; set; }
        public Int64 u { get; set; }
        public Int64 d { get; set; }
        public Int64 transfer_enable { get; set; }
        public Int32 port { get; set; }
        [Column("switch")]
        public Int16 sw { get; set; }
        public Int16 enable { get; set; }
        public Int16 type { get; set; }
        public Int32 last_get_gift_time { get; set; }
        public Int32 last_rest_pass_time { get; set; }
    }
}
