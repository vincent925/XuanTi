using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using XTSystem.Core;

namespace XTSystem.Service
{
    public class UserService
    {
        MyContext context = new MyContext();
        public int CreateUser(string email, string pass)
        {
            User user = GetUser(email);
            if (user==null)
            {
                int port = context.Users.OrderByDescending(m => m.port).First().port+2;
                string passwd = MD5Encrypt(email, new UTF8Encoding());
                context.Users.Add(new User { email = email, pass = pass, passwd = passwd, t = 1410609560, u = 0, d = 0, transfer_enable = 10485760, port = port, sw = 1, enable = 1, type = 7, last_get_gift_time = 0, last_rest_pass_time = 0 });
                return context.SaveChanges();
            }
            return 0;
        }

        public User GetUser(string email)
        {
            List<User> users = context.Users.Where(m => m.email == email).ToList();
            if (users.Count>0)
            {
                return users.First();
            }
            return null;
        }

        private static string MD5Encrypt(string input, Encoding encode)
        {
            MD5 md5 = new MD5CryptoServiceProvider();
            byte[] t = md5.ComputeHash(encode.GetBytes(input));
            StringBuilder sb = new StringBuilder(32);
            for (int i = 0; i < t.Length; i++)
                sb.Append(t[i].ToString("x").PadLeft(2, '0'));
            return sb.ToString();
        }
    }
}
