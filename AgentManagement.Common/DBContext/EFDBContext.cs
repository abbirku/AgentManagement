using AgentManagement.Core.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AgentManagement.Common.DBContext
{
    public class EFDBContext : DbContext
    {
        public EFDBContext()
            : base("name=DatabaseContext")
        {
        }

        public DbSet<BusinessEntities> BusinessEntities { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            var conventions = new List<PluralizingTableNameConvention>().ToArray();
            modelBuilder.Conventions.Remove(conventions);
            base.OnModelCreating(modelBuilder);
        }
    }
}
