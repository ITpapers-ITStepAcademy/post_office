using Domain.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Entities
{
    public class Content:BaseEntity
    {
        public int Id { get; set; }
        public string ItemName { get; set; }
        public double Quantity { get; set; }
        public double PricePerOne { get; set; }

        public int PackageId { get; set; }
        public Package Package { get; set; }
    }
}
