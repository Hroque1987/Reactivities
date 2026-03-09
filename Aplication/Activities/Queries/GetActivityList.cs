using System;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistance;

namespace Aplication.Activities.Queries;

public class GetActivityList
{
    public class Query : IRequest<List<Activity>> {};

    public class Handler(AppDbContext context, ILogger<GetActivityList> logger) : IRequestHandler<Query, List<Activity>>
    {
        public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
        {
         
            return await context.Activities.ToListAsync(cancellationToken);
        }
    }
}
