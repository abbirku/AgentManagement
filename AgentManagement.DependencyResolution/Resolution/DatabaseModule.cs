using AgentManagement.Common.DBContext;
using Ninject.Modules;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AgentManagement.DependencyResolution.Resolution
{
    public class DatabaseModule : NinjectModule
    {
        public override void Load()
        {
            Bind<EFDBContext>().ToSelf().InSingletonScope();
        }
    }
}
