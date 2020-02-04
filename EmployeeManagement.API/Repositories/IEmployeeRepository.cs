using System.Collections.Generic;
using System.Threading.Tasks;
using EmployeeManagement.API.Models;
using EmployeeManagement.API.Params;

namespace EmployeeManagement.API.Repositories
{
    public interface IEmployeeRepository
    {
        Task<IEnumerable<Employee>> GetEmployeesAsync(EmployeeParams employeeParams);
        Task<IEnumerable<Employee>> GetEmployeesByManagerIdAsync(int managerId);
        Task<Employee> GetEmployeeByIdAsync(int employeeId);
        Task<bool> CreateEmployeeAsync(Employee employeeForCreation);
        Task<bool> UpdateEmployeeAsync(Employee employeeForUpdate);
        Task<bool> DeleteEmployeeAsync(int employeeId);
    }
}