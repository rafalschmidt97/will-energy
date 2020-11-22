using System.Threading;
using System.Threading.Tasks;
using MediatR;

namespace WillEnergy.Application.Common.Bus
{
  public abstract class CommandHandlerData<TRequest, TResponse> : IRequestHandler<TRequest, TResponse>
    where TRequest : ICommandData<TResponse>
  {
    public abstract Task<TResponse> Handle(TRequest request);

    public Task<TResponse> Handle(TRequest request, CancellationToken cancellationToken)
      => Handle(request);
  }
}
