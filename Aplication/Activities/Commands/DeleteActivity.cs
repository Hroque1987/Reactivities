using System;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace Aplication.Activities.Commands;

public class DeleteActivity{

    public class Command : IRequest
    {
        public required string Id { get; set; }
    }

    public class Handler(AppDbContext context) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var activity = await context.Activities.FindAsync([request.Id], cancellationToken) 
            ?? throw new Exception("Cannot find activity");

            await context.Activities.ExecuteDeleteAsync(cancellationToken);

        }
    }

}
