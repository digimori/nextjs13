// Next.js supports:

// 1. **GET**: Retrieves data or resources from the server.
// 2. **POST**: Submits data to the server to create a new resource.
// 3. **PUT**: Updates or replaces an existing resource on the server.
// 4. **PATCH**: Partially updates an existing resource on the server.
// 5. **DELETE**: Removes a specific resource from the server.
// 6. **HEAD**: Retrieves the headers of the resource without fetching its body.
// 7. **OPTIONS**: Retrieves the supported HTTP methods and other communication options for a resource.

// https://localhost:3000/api/users

export async function GET(request) {
    // Handle GET request for the api/users folder
    // Retrieve 'users' from database/data source
    const users = [
        {id: 1, name: 'John'},
        {id: 2, name: 'Jane'},
        {id: 3, name: 'Joe'}
    ];

    // Send the users as a response
    return new Response(JSON.stringify(users))
};