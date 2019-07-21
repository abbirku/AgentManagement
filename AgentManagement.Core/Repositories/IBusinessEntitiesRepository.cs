using AgentManagement.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AgentManagement.Core.Repositories
{
    public interface IBusinessEntitiesRepository
    {
        BusinessEntities Insert(BusinessEntities model);

        BusinessEntities Update(BusinessEntities model);

        BusinessEntities Delete(long id);

        BusinessEntities GetBy(long id);

        IEnumerable<BusinessEntities> GetAll();
    }
}
