using System.Collections.Generic;
using System.Linq;
using FluentValidation.Results;

namespace WillEnergy.Application.Common.Behaviours
{
    public static class ValidationBehaviourMessageMapper
    {
        public static Dictionary<string, string[]> Map(IEnumerable<ValidationFailure> failures)
        {
            var validationFailures = failures.ToList();
            var propertyNames = validationFailures
                .Select(e => e.PropertyName)
                .Distinct();

            var message = new Dictionary<string, string[]>();

            foreach (var propertyName in propertyNames)
            {
                var propertyFailures = validationFailures
                    .Where(e => e.PropertyName == propertyName)
                    .Select(e => e.ErrorMessage)
                    .ToArray();

                message.Add(propertyName, propertyFailures);
            }

            return message;
        }
    }
}
