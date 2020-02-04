namespace EmployeeManagement.API.Contracts.V1.Responses
{
    public class EmployeeResponse
    {
        public int Id { get; set; }

        public string FirstName { get; set; }
        
        public string LastName { get; set; }

        public int PersonalIdentity { get; set; }

        public int ManagerId { get; set; }
    }
}