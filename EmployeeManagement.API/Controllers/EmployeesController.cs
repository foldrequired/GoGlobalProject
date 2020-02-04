using System.Threading.Tasks;
using EmployeeManagement.API.Contracts.V1.Requests;
using EmployeeManagement.API.Contracts.V1.Responses;
using EmployeeManagement.API.Models;
using EmployeeManagement.API.Params;
using EmployeeManagement.API.Repositories;
using EmployeeManagement.API.Routes.V1;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeManagement.API.Controllers
{
    public class EmployeesController : Controller
    {
        private readonly IEmployeeRepository _repo;

        public EmployeesController(IEmployeeRepository repo)
        {
            _repo = repo;
        }
        
        [HttpGet(ApiRoutes.Employee.GetEmployees)]
        public async Task<IActionResult> Get([FromQuery]EmployeeParams employeeParams)
        {
            var employees = await _repo.GetEmployeesAsync(employeeParams);

            if (employees == null)
            {
                return NotFound();
            }

            return Ok(employees);
        }

        [HttpGet(ApiRoutes.Employee.Get)]
        public async Task<IActionResult> GetSingle([FromRoute]int employeeId)
        {
            var employee = await _repo.GetEmployeeByIdAsync(employeeId);

            if (employee == null)
            {
                return NotFound();
            }

            return Ok(employee);
        }

        [HttpPost(ApiRoutes.Employee.Create)]
        public async Task<IActionResult> Create([FromBody]CreateEmployeeRequest createEmployeeRequest)
        {
            var employee = new Employee
            {
                FirstName = createEmployeeRequest.FirstName,
                LastName = createEmployeeRequest.LastName,
                PersonalIdentity = createEmployeeRequest.PersonalIdentity,
                ManagerId = createEmployeeRequest.ManagerId
            };

            var createdEmployee = await _repo.CreateEmployeeAsync(employee);

            if (!createdEmployee)
            {
                return BadRequest(new { Error = "There was an error creating a new Employee" });
            }

            var response = new EmployeeResponse
            {
                Id = employee.Id,
                FirstName = employee.FirstName,
                LastName = employee.LastName,
                PersonalIdentity = employee.PersonalIdentity,
                ManagerId = employee.ManagerId
            };

            return Created("", response);
        }

        [HttpPut(ApiRoutes.Employee.Update)]
        public async Task<IActionResult> Update([FromRoute]int employeeId, [FromBody]UpdateEmployeeRequest updateEmployeeRequest)
        {
            var employee = new Employee
            {
                Id = employeeId,
                FirstName = updateEmployeeRequest.FirstName,
                LastName = updateEmployeeRequest.LastName,
                PersonalIdentity = updateEmployeeRequest.PersonalIdentity,
                ManagerId = updateEmployeeRequest.ManagerId
            };

            var updatedEmployee = await _repo.UpdateEmployeeAsync(employee);

            if (updatedEmployee)
            {
                return Ok(new EmployeeResponse
                {
                    Id = employee.Id,
                    FirstName = employee.FirstName,
                    LastName = employee.LastName,
                    PersonalIdentity = employee.PersonalIdentity,
                    ManagerId = employee.ManagerId
                });
            }
            else
            {
                return BadRequest(new { Error = "There was an error updating the Employee" });
            }
        }

        [HttpDelete(ApiRoutes.Employee.Delete)]
        public async Task<IActionResult> Delete([FromRoute]int employeeId)
        {
            var deletedEmployee = await _repo.DeleteEmployeeAsync(employeeId);

            if (deletedEmployee)
            {
                return NoContent();
            }

            return NotFound();
        }

        // api/v1/employees/manager/{managerId}
        [HttpGet(ApiRoutes.Employee.GetEmployeesByManagerId)]
        public async Task<IActionResult> GetEmployeesByManagerId([FromRoute]int managerId)
        {
            var employees = await _repo.GetEmployeesByManagerIdAsync(managerId);

            if (employees == null)
            {
                return NotFound();
            }

            return Ok(employees);
        }
    }
}