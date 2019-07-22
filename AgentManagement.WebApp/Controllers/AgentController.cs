using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AgentManagement.WebApp.Controllers
{
    public class AgentController : Controller
    {
        // GET: Agent
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult AgentList()
        {
            return View();
        }

        public ActionResult AgentAdd()
        {
            return View();
        }

        public ActionResult AgentEdit()
        {
            return View();
        }
    }
}