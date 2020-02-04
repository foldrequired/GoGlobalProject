namespace EmployeeManagement.API.Contracts.V1.Requests
{
    public class UpdateManagerRequest
    {
        public string FirstName { get; set; }
        
        public string LastName { get; set; }

        public int PersonalIdentity { get; set; }
    }
}