using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using XTSystem.Core;

namespace XTSystem.Service
{
    public class FlowService
    {
        MyContext context = new MyContext();
        public Flow GetFlow(string number)
        {
            List<Flow> flows = context.Flows.Where(m => m.Number == number && m.IsValid==true).ToList();
            if (flows.Count > 0)
            {
                return flows.First();
            }
            return null;
        }

        public int RemoveFlow(string number)
        {
            List<Flow> flows = context.Flows.Where(m => m.Number == number).ToList();
            if (flows.Count > 0)
            {
                flows.First().IsValid = false;
                return context.SaveChanges();
            }
            return 0;
        }
    }
}
