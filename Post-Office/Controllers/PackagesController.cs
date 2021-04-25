using Application.Common.Interfaces;
using Application.Packages.Commands;
using Application.Packages.Queries;
using Application.Packages.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Post_Office.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class PackagesController : ApiController
    {

        private readonly ICurrentUserService _currentUserService;

        public PackagesController(ICurrentUserService currentUserService)
        {
            _currentUserService = currentUserService;
        }

        [HttpGet]
        public async Task<IList<PackageVm>> Get()
        {
            return await Mediator.Send(new GetUserPackagesQuery() { User = _currentUserService.UserId });
        }

        [HttpPost]
        public async Task<ActionResult<int>> Create(CreatePackageCommand command)
        {
            return await Mediator.Send(command);
        }
    }
}
