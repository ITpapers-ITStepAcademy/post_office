using Application.Common.Interfaces;
using Application.Packages.Queries;
using Application.Packages.ViewModels;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Packages.Handlers
{

    class GetUserPackagesQueryHandler : IRequestHandler<GetUserPackagesQuery, List<PackageVm>>
    {
        private readonly IApplicationDbContext _context;
        private readonly IMapper _mapper;

        public GetUserPackagesQueryHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<List<PackageVm>> Handle(GetUserPackagesQuery request, CancellationToken cancellationToken)
        {
            var result = new List<PackageVm>();

            var invoices = await _context.Packages.Include(i => i.Contents)
                .Where(i => i.CreatedBy == request.User).ToListAsync();

            if (invoices != null)
                result = _mapper.Map<List<PackageVm>>(invoices);

            return result;
            
        }
    }
}
