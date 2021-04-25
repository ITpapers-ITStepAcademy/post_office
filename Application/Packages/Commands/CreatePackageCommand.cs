using Application.Packages.ViewModels;
using Domain.Enums;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Packages.Commands
{
    public class CreatePackageCommand: IRequest<int>
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

        public IList<ContentVm> Contents { get; set; }

        public CreatePackageCommand()
        {
            Contents = new List<ContentVm>();
        }
    }
}
