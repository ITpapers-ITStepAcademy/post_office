using Application.Packages.ViewModels;
using FluentValidation.Validators;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Application.Packages.Validators
{

    public class MustHavePackageItemPropertyValidator : PropertyValidator
    {
        public MustHavePackageItemPropertyValidator() : base()
        { }

        protected override bool IsValid(PropertyValidatorContext context)
        {
            var list = context.PropertyValue as IList<ContentVm>;
            return list != null && list.Any();
        }
    }
}
