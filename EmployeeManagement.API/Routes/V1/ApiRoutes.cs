namespace EmployeeManagement.API.Routes.V1
{
    public class ApiRoutes
    {
        public const string Root = "api";
        public const string Version = "v1";
        public const string Base = Root + "/" + Version;

        public static class Manager
        {
            public const string GetManagers = Base + "/managers";
            public const string Get = Base + "/managers/{managerId}";
            public const string Create = Base + "/managers";
            public const string Update = Base + "/managers/{managerId}";
            public const string Delete = Base + "/managers/{managerId}";
        }

        public static class Employee
        {
            public const string GetEmployees = Base + "/employees";
            public const string Get = Base + "/employees/{employeeId}";
            public const string Create = Base + "/employees";
            public const string Update = Base + "/employees/{employeeId}";
            public const string Delete = Base + "/employees/{employeeId}";
            public const string GetEmployeesByManagerId = Base + "/employees/manager/{managerId}";
        }
    }
}