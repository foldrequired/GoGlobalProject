using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EmployeeManagement.API.Data;
using EmployeeManagement.API.Models;
using EmployeeManagement.API.Params;
using Microsoft.EntityFrameworkCore;

namespace EmployeeManagement.API.Repositories
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly ApplicationDbContext _db;

        public EmployeeRepository(ApplicationDbContext db)
        {
            _db = db;
        }

        public async Task<IEnumerable<Employee>> GetEmployeesAsync(EmployeeParams employeeParams)
        {
            var employees = await _db.Employees.Include(x => x.Manager).OrderBy(x => x.PersonalIdentity).ToListAsync();

            return employees;
        }

        public async Task<Employee> GetEmployeeByIdAsync(int employeeId)
        {
            var employee = await _db.Employees.SingleOrDefaultAsync(x => x.Id == employeeId);

            return employee;
        }

        public async Task<bool> CreateEmployeeAsync(Employee employee)
        {
            var personalId = await _db.Employees.FirstOrDefaultAsync(x => x.PersonalIdentity == employee.PersonalIdentity);

            if (personalId != null)
            {
                return false;
            }

            var managerExists = await _db.Managers.SingleOrDefaultAsync(x => x.Id == employee.Id);

            if (managerExists != null)
            {
                return false;
            }

            await _db.Employees.AddAsync(employee);

            var created = await _db.SaveChangesAsync();

            return created > 0;
        }

        public async Task<bool> UpdateEmployeeAsync(Employee employee)
        {
            var personalId = await _db.Employees.FirstOrDefaultAsync(x => x.PersonalIdentity == employee.PersonalIdentity);

            if (personalId != null)
            {
                return false;
            }

            var managerExists = await _db.Managers.SingleOrDefaultAsync(x => x.Id == employee.Id);

            if (managerExists != null)
            {
                return false;
            }

            _db.Employees.Update(employee);

            var updated = await _db.SaveChangesAsync();

            return updated > 0;
        }

        public async Task<bool> DeleteEmployeeAsync(int employeeId)
        {
            var employee = await GetEmployeeByIdAsync(employeeId);

            if (employee == null)
            {
                return false;
            }

            _db.Employees.Remove(employee);

            var deleted = await _db.SaveChangesAsync();

            return deleted > 0;
        }

        public async Task<IEnumerable<Employee>> GetEmployeesByManagerIdAsync(int managerId)
        {
            var employees = await _db.Employees.Include(x => x.Manager).Where(x => x.ManagerId == managerId).OrderBy(x => x.PersonalIdentity).ToListAsync();

            return employees;
        }
    }
}