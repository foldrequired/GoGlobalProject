namespace EmployeeManagement.API.Contracts.V1.Responses
{
    public class ManagerResponse
    {
        public int Id { get; set; }

        public string FirstName { get; set; }
        
        public string LastName { get; set; }

        public int PersonalIdentity { get; set; }
    }
}