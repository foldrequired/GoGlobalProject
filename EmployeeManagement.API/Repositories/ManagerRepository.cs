using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EmployeeManagement.API.Data;
using EmployeeManagement.API.Models;
using Microsoft.EntityFrameworkCore;

namespace EmployeeManagement.API.Repositories
{
    public class ManagerRepository : IManagerRepository
    {
        private readonly ApplicationDbContext _db;

        public ManagerRepository(ApplicationDbContext db)
        {
            _db = db;
        }

        public async Task<IEnumerable<Manager>> GetManagersAsync()
        {
            var managers = await _db.Managers.ToListAsync();

            return managers;
        }

        public async Task<Manager> GetManagerByIdAsync(int managerId)
        {
            var manager = await _db.Managers.SingleOrDefaultAsync(x => x.Id == managerId);

            return manager;
        }

        public async Task<bool> CreateManagerAsync(Manager manager)
        {
            var personalId = await _db.Managers.FirstOrDefaultAsync(x => x.PersonalIdentity == manager.PersonalIdentity);

            if (personalId != null)
            {
                return false;
            }

            await _db.Managers.AddAsync(manager);

            var created = await _db.SaveChangesAsync();

            return created > 0;
        }

        public async Task<bool> UpdateManagerAsync(Manager manager)
        {
            _db.Managers.Update(manager);

            var updated = await _db.SaveChangesAsync();

            return updated > 0;
        }

        public async Task<bool> DeleteManagerAsync(int managerId)
        {
            var manager = await GetManagerByIdAsync(managerId);

            if (manager == null)
            {
                return false;
            }

            _db.Managers.Remove(manager);

            var deleted = await _db.SaveChangesAsync();

            return deleted > 0;
        }
    }
}