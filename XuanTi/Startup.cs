using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(XuanTi.Startup))]
namespace XuanTi
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            //ConfigureAuth(app);
        }
    }
}
