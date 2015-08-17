using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;
using System.Web.Mvc;
using XTSystem.Core;
using XTSystem.Service;
using XuanTi.Models;

namespace XuanTi.Controllers
{
    public class HomeController : Controller
    {
        UserService u = new UserService();
        public ActionResult Index()
        {
            HttpContext.Session["ss_User"] = null;
            return View();
        }


        [HttpPost]
        public ActionResult Index(LoginModel loginModel)
        {
            User user = u.GetUser(loginModel.UserName);
            if (user != null && user.pass == MD5Encrypt16(loginModel.PassWord, new UTF8Encoding()))
            {
                HttpContext.Session["ss_User"] = user;
                return RedirectToAction("Index", "Main");
            }
            else
            {
                ModelState.AddModelError("", "用户名或密码错误");
            }
            return View(loginModel);
        }

        public ActionResult IsUserExists(string LoginName)
        {
            MyContext context = new MyContext();
            int c = context.Users.Where(p => p.email == LoginName).Count();
            bool exists = c > 0;
            return Json(!exists, JsonRequestBehavior.AllowGet);
        }

        public static string MD5Encrypt16(string input, Encoding encode)
        {
            MD5CryptoServiceProvider md5 = new MD5CryptoServiceProvider();
            string result = BitConverter.ToString(md5.ComputeHash(encode.GetBytes(input)), 4, 8);
            result = result.Replace("-", "");
            return result;
        }
    }
}