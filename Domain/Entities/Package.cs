using Domain.Common;
using Domain.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Entities
{
    public class Package : BaseEntity
    {
        public int Id { get; set; }
        public string PackageNumber { get; set; }
        public string From { get; set; }
        public string To { get; set; }
        public DateTime DepartureDate { get; set; }
        public PaymentMethod PaymentMethod { get; set; }
        public DateTime? DueDate { get; set; }
        public double Discount { get; set; }
        public double Tax { get; set; }

        public IList<Content> Contents { get; set; }

        public Package()
        {
            Contents = new List<Content>();
        }
    }
}
