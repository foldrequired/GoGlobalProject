namespace EmployeeManagement.API.Contracts.V1.Requests
{
    public class CreateEmployeeRequest
    {
        public string FirstName { get; set; }
        
        public string LastName { get; set; }

        public int PersonalIdentity { get; set; }

        public int ManagerId { get; set; }
    }
}