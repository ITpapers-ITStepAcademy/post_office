using Application.Packages.Commands;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Packages.Validators
{

    class CreatePackageCommandValidator : AbstractValidator<CreatePackageCommand>
    {
        public CreatePackageCommandValidator()
        {
            RuleFor(v => v.PackageNumber).NotNull();
            RuleFor(v => v.DepartureDate).NotNull();
            RuleFor(v => v.From).NotEmpty().MinimumLength(3);
            RuleFor(v => v.To).NotEmpty().MinimumLength(3);
            RuleFor(v => v.Contents).SetValidator(new MustHavePackageItemPropertyValidator());
        }
    }
}
