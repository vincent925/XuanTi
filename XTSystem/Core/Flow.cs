using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace XTSystem.Core
{
    [Table("flow")]
    public class Flow
    {
        [Key]
        public int ID { get; set; }
        public string Number { get; set; }
        public string Content { get; set; }
        public bool IsValid { get; set; }
    }
}
