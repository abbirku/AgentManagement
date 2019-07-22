using AgentManagement.Core.Repositories;
using AgentManagement.Infrastructure.Repositories;
using Ninject.Modules;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AgentManagement.DependencyResolution.Resolution
{
    public class RepositoryModule : NinjectModule
    {
        public override void Load()
        {
            Bind<IBusinessEntitiesRepository>().To<BusinessEntitiesRepository>();
        }
    }
}
