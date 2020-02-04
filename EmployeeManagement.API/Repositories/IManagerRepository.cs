using System.Collections.Generic;
using System.Threading.Tasks;
using EmployeeManagement.API.Models;

namespace EmployeeManagement.API.Repositories
{
    public interface IManagerRepository
    {
        Task<IEnumerable<Manager>> GetManagersAsync();
        Task<Manager> GetManagerByIdAsync(int managerId);
        Task<bool> CreateManagerAsync(Manager managerForCreation);
        Task<bool> UpdateManagerAsync(Manager managerForUpdate);
        Task<bool> DeleteManagerAsync(int managerId);
    }
}