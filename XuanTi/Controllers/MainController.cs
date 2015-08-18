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
    public class MainController : BaseController
    {
        UserService u = new UserService();
        FlowService fs = new FlowService();
        // GET: Main
        public ActionResult Index()
        {
            MainViewModel mainViewModel = new MainViewModel();
            if (this.CurrentUser != null)
            {
                this.CurrentUser = u.GetUser(this.CurrentUser.email);
                mainViewModel.passwd = this.CurrentUser.passwd;
                Double zongliuliang = (this.CurrentUser.transfer_enable / 1024) / 1024;
                if (zongliuliang > 1024)
                {
                    Double liuliang = zongliuliang / 1024;
                    mainViewModel.transfer_enable = liuliang + "G";
                }
                else
                {
                    mainViewModel.transfer_enable = zongliuliang + "m";
                }
                Double shiyongliuliang = ((this.CurrentUser.u + this.CurrentUser.d) / 1024) / 1024;
                if (shiyongliuliang > zongliuliang)
                {
                    shiyongliuliang = zongliuliang;
                }
                if (shiyongliuliang > 1024)
                {
                    Double liuliang = shiyongliuliang / 1024;
                    mainViewModel.use = liuliang + "G";
                }
                else
                {
                    mainViewModel.use = shiyongliuliang + "m";
                }
                mainViewModel.ss1 = "rc4-md5:" + this.CurrentUser.passwd + "@us1-ssx.vincent90.me:" + this.CurrentUser.port;
                mainViewModel.ss2 = "rc4-md5:" + this.CurrentUser.passwd + "@jp1-ssx.vincent90.me:" + this.CurrentUser.port;
            }
            return View(mainViewModel);
        }

        [HttpPost]
        public ActionResult Index(LoginModel loginModel)
        {
            int n = u.CreateUser(loginModel.UserName, MD5Encrypt16(loginModel.PassWord, new UTF8Encoding()));
            if (n == 0)
            {
                ModelState.AddModelError("", "用户名存在");
                return View(loginModel);
            }
            return RedirectToAction("Index", "Home");
        }
        public static string MD5Encrypt16(string input, Encoding encode)
        {
            MD5CryptoServiceProvider md5 = new MD5CryptoServiceProvider();
            string result = BitConverter.ToString(md5.ComputeHash(encode.GetBytes(input)), 4, 8);
            result = result.Replace("-", "");
            return result;
        }

        public ActionResult Recharge()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Recharge(RechargeModels rechargeModels)
        {
            Flow flow = fs.GetFlow(rechargeModels.Number);
            if (flow == null)
            {
                ModelState.AddModelError("", "充值码无效");
                return View();
            }
            else
            {
                fs.RemoveFlow(rechargeModels.Number);
                u.UpdateTransfer_enable(this.CurrentUser.email, flow.Content);
                return RedirectToAction("Index", "Home");
            }

        }
    }
}