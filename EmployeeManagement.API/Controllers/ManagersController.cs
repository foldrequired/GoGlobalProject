using System.Threading.Tasks;
using EmployeeManagement.API.Contracts.V1.Requests;
using EmployeeManagement.API.Contracts.V1.Responses;
using EmployeeManagement.API.Models;
using EmployeeManagement.API.Repositories;
using EmployeeManagement.API.Routes.V1;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeManagement.API.Controllers
{
    public class ManagersController : Controller
    {
        private readonly IManagerRepository _repo;

        public ManagersController(IManagerRepository repo)
        {
            _repo = repo;
        }
        
        [HttpGet(ApiRoutes.Manager.GetManagers)]
        public async Task<IActionResult> Get()
        {
            var managers = await _repo.GetManagersAsync();

            if (managers == null)
            {
                return NotFound();
            }

            return Ok(managers);
        }

        [HttpGet(ApiRoutes.Manager.Get)]
        public async Task<IActionResult> GetSingle([FromRoute]int managerId)
        {
            var manager = await _repo.GetManagerByIdAsync(managerId);

            if (manager == null)
            {
                return NotFound();
            }

            return Ok(manager);
        }

        [HttpPost(ApiRoutes.Manager.Create)]
        public async Task<IActionResult> Create([FromBody]CreateManagerRequest createManagerRequest)
        {
            var manager = new Manager
            {
                FirstName = createManagerRequest.FirstName,
                LastName = createManagerRequest.LastName,
                PersonalIdentity = createManagerRequest.PersonalIdentity
            };

            var createdManager = await _repo.CreateManagerAsync(manager);

            if (!createdManager)
            {
                return BadRequest(new { Error = "There was an error creating a new Manager" });
            }

            var response = new ManagerResponse
            {
                Id = manager.Id,
                FirstName = manager.FirstName,
                LastName = manager.LastName,
                PersonalIdentity = manager.PersonalIdentity
            };

            return Created("", response);
        }

        [HttpPut(ApiRoutes.Manager.Update)]
        public async Task<IActionResult> Update([FromRoute]int managerId, [FromBody]UpdateManagerRequest updateManagerRequest)
        {
            var manager = new Manager
            {
                Id = managerId,
                FirstName = updateManagerRequest.FirstName,
                LastName = updateManagerRequest.LastName,
                PersonalIdentity = updateManagerRequest.PersonalIdentity
            };

            var updatedManager = await _repo.UpdateManagerAsync(manager);

            if (updatedManager)
            {
                return Ok(new ManagerResponse
                {
                    Id = manager.Id,
                    FirstName = manager.FirstName,
                    LastName = manager.LastName,
                    PersonalIdentity = manager.PersonalIdentity
                });
            }

            return NotFound();
        }

        [HttpDelete(ApiRoutes.Manager.Delete)]
        public async Task<IActionResult> Delete([FromRoute]int managerId)
        {
            var deletedManager = await _repo.DeleteManagerAsync(managerId);

            if (deletedManager)
            {
                return NoContent();
            }

            return NotFound();
        }
    }
}