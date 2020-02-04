using System.ComponentModel.DataAnnotations;

namespace EmployeeManagement.API.Models
{
    public class Manager
    {
        [Key]
        public int Id { get; set; }

        public string FirstName { get; set; }
        
        public string LastName { get; set; }

        public int PersonalIdentity { get; set; }
    }
}