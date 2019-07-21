using AgentManagement.Common.DBContext;
using AgentManagement.Core.Entities;
using AgentManagement.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Transactions;

namespace AgentManagement.Infrastructure.Repositories
{
    public class BusinessEntitiesRepository : IBusinessEntitiesRepository
    {
        private readonly EFDBContext context;

        public BusinessEntitiesRepository(EFDBContext context)
        {
            this.context = context;
        }

        public BusinessEntities Delete(long id)
        {
            var model = context.BusinessEntities.Where(x => x.BusinessId == id).FirstOrDefault();
            if (model != null) {
                context.Entry(model).State = EntityState.Deleted;
                context.SaveChanges();
            }
            return model;
        }

        public IEnumerable<BusinessEntities> GetAll()
        {
            return context.BusinessEntities.ToList();
        }

        public BusinessEntities GetBy(long id)
        {
            return context.BusinessEntities.Where(x => x.BusinessId == id).FirstOrDefault();
        }

        public BusinessEntities Insert(BusinessEntities model)
        {
            try
            {
                using (TransactionScope tc = new TransactionScope()) {

                    var result = context.BusinessEntities.Add(model);
                    context.SaveChanges();
                    tc.Complete();
                    return result;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        public BusinessEntities Update(BusinessEntities model)
        {
            try
            {
                using (TransactionScope tc = new TransactionScope())
                {

                    context.BusinessEntities.AddOrUpdate(model);
                    tc.Complete();
                    return model;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
