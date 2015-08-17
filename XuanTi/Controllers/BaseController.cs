using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using XTSystem.Core;

namespace XuanTi.Controllers
{
    public class BaseController : Controller
    {
        public User CurrentUser { get; set; }
        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            base.OnActionExecuting(filterContext);
            string email = null;
            if (Session["ss_User"] != null)
            {
                CurrentUser = Session["ss_User"] as User;
                email = CurrentUser.email;
                Session["email"] = email;
            }
            //检验用户是否已经登录，如果登录则不执行，否则则执行下面的跳转代码
            if (string.IsNullOrEmpty(email))
            {
                Response.Redirect("/Home/Index");
            }
        }
    }
}