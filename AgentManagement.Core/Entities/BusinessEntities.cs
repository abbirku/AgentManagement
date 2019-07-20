using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AgentManagement.Core.Entities
{
    [Table("BusinessEntities")]
    public class BusinessEntities
    {
        [Key]
        public long BusinessId { get; set; }

        [MaxLength(50)]
        public string Code { get; set; }

        public string Email { get; set; }

        public string Name { get; set; }

        public string Street { get; set; }

        [MaxLength(150)]
        public string City { get; set; }

        [MaxLength(150)]
        public string State { get; set; }

        [MaxLength(50)]
        public string Zip { get; set; }

        [MaxLength(150)]
        public string Country { get; set; }

        [MaxLength(50)]
        public string Mobile { get; set; }

        [MaxLength(50)]
        public string Phone { get; set; }

        public string ContactPerson { get; set; }

        [MaxLength(50)]
        public string ReferredBy { get; set; }

        public string Logo { get; set; }

        public int Status { get; set; }

        public double Balance { get; set; }

        [MaxLength(50)]
        public string LoginUrl { get; set; }

        [MaxLength(50)]
        public string SecurityCode { get; set; }

        [MaxLength(50)]
        public string SMTPServer { get; set; }

        public int SMTPPort { get; set; }

        [MaxLength(50)]
        public string SMTPUsername { get; set; }

        [MaxLength(50)]
        public string SMTPPassword { get; set; }

        public bool Deleted { get; set; }

        public DateTime? CreatedOnUtc { get; set; }

        public DateTime? UpdatedOnUtc { get; set; }
        
        public double CurrentBalance { get; set; }
    }
}
