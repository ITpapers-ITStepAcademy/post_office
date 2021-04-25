using Application.Common.Interfaces;
using Application.Packages.Commands;
using AutoMapper;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Packages.Handlers
{

    class CreatePackageCommandHandler : IRequestHandler<CreatePackageCommand, int>
    {
        private readonly IApplicationDbContext _context;
        private readonly IMapper _mapper;

        public CreatePackageCommandHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<int> Handle(CreatePackageCommand request, CancellationToken cancellationToken)
        {
            var entity = _mapper.Map<Package>(request);
           
            _context.Packages.Add(entity);
            await _context.SaveChangesAsync(cancellationToken);
            return entity.Id;
        }
    }
}
