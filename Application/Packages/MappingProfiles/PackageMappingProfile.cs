using Application.Packages.Commands;
using Application.Packages.ViewModels;
using AutoMapper;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Packages.MappingProfiles
{

    public class PackageMappingProfile : Profile
    {
        public PackageMappingProfile()
        {
            CreateMap<Package, PackageVm>();
            CreateMap<Content, ContentVm>().ConstructUsing(i => new ContentVm()
            {
                Id = i.Id,
                ItemName = i.ItemName,
                PricePerOne = i.PricePerOne,
                Quantity = i.Quantity
            });

            CreateMap<PackageVm, Package>();
            CreateMap<ContentVm, Content>();

            CreateMap<CreatePackageCommand, Package>();
        }
    }
}
