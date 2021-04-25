using Application.Packages.ViewModels;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Packages.Queries
{
    public class GetUserPackagesQuery : IRequest<List<PackageVm>>
    {
        public string User { get; set; }
    }
}
