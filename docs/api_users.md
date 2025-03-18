# API Documentation: User Routes

## Base URL
`/users`

---

### **GET /users**
**Description:** Retrieve all users.

**Response:**
- 200 OK: Returns an array of user objects.
- 404 Not Found: If no users are found.

**Example response:**
```json
[
  { "id": 1, "name": "John Doe", "email": "john@example.com" }
]
```

---

### **GET /users/:id**
**Description:** Retrieve a user by ID.

**Parameters:**
- `id` (path): User ID

**Response:**
- 200 OK: Returns the user object.
- 404 Not Found: If the user does not exist.

**Example response:**
```json
{ "id": 1, "name": "John Doe", "email": "john@example.com" }
```

---

### **POST /users**
**Description:** Create a new user.

**Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}
```

**Response:**
- 201 Created: Returns the new user ID.
- 409 Conflict: If a user with the same email already exists.

**Example response:**
```json
{ "id": 1 }
```

---

### **PATCH /users/:id**
**Description:** Update an existing user.

**Parameters:**
- `id` (path): User ID

**Optional Body Fields:**
```json
{
  "username": "newUsername",
  "email": "newEmail@example.com",
  "password": "newPassword",
  "is_online": true,
  "avatar": "avatarUrl",
  "win_nbr": 10,
  "loss_nbr": 2
}
```

**Response:**
- 204 No Content: If the update is successful.
- 404 Not Found: If the user does not exist.
- 409 Conflict: If an error occurs during the update.

---

### **DELETE /users/:id**
**Description:** Delete a user by ID.

**Parameters:**
- `id` (path): User ID

**Response:**
- 204 No Content: If deletion is successful.
- 404 Not Found: If the user does not exist.
- 409 Conflict: If an error occurs during deletion.

---

### **GET /users/:id/friends**
**Description:** Retrieve a user's friends list.

**Parameters:**
- `id` (path): User ID

**Response:**
- 200 OK: Returns an array of friend IDs.
- 404 Not Found: If the user or friend list does not exist.

**Example response:**
```json
[2, 3, 5]
```

---

### **POST /users/:id/friends**
**Description:** Add a friend to the user's friend list.

**Parameters:**
- `id` (path): User ID

**Body:**
```json
{
  "friend_id": 2
}
```

**Response:**
- 201 Created: If the friend was added successfully.
- 404 Not Found: If the user or friend does not exist.
- 409 Conflict: If the friend is already in the list or the user tries to add themselves.

---

### **DELETE /users/:user_id/friends/:friend_id**
**Description:** Remove a friend from the user's friend list.

**Parameters:**
- `user_id` (path): User ID
- `friend_id` (path): Friend's User ID

**Response:**
- 204 No Content: If the friend was removed successfully.
- 404 Not Found: If the user, friend, or friendship does not exist.
- 409 Conflict: If an error occurs during removal.

---

### **Error Response Format:**
```json
{ "error": "Error message" }
```

