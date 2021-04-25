using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Packages.ViewModels
{
    public class ContentVm
    {
        public int Id { get; set; }
        public string ItemName { get; set; }
        public double Quantity { get; set; }
        public double PricePerOne { get; set; }
        public double Amount
        {
            get { return Quantity * PricePerOne; }
        }

    }
}
