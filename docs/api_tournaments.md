# Tournament API Documentation

This API allows you to manage tournaments, including creating, updating, deleting tournaments, adding/removing members, and retrieving tournament information.

## Base URL
```
/tournaments
```

---

## Endpoints

### 1. **Get Tournament by ID**
Retrieve a specific tournament by its ID.

- **URL:** `/tournaments/:id`
- **Method:** `GET`
- **Parameters:**
  - `id` (string): The unique ID of the tournament.
- **Response:**
  - **200 OK**: Returns tournament data if the tournament exists.
  - **404 Not Found**: If the tournament is not found.

#### Example Request:
```
GET /tournaments/123
```

#### Example Response:
```json
{
  "id": "123",
  "name": "Summer Championship",
  "type": 1,
  "creator_id": 1,
  "duration": 120,
  "winner_id": null,
  "members": [1, 2, 3]
}
```

---

### 2. **Get All Tournaments**
Retrieve all tournaments.

- **URL:** `/tournaments`
- **Method:** `GET`
- **Response:**
  - **200 OK**: Returns an array of all tournaments.
  - **404 Not Found**: If no tournaments are found.

#### Example Request:
```
GET /tournaments
```

#### Example Response:
```json
[
  {
    "id": "123",
    "name": "Summer Championship",
    "type": 1,
    "creator_id": 1,
    "duration": 120,
    "winner_id": null,
    "members": [1, 2, 3]
  },
  {
    "id": "124",
    "name": "Fall League",
    "type": 2,
    "creator_id": 2,
    "duration": 60,
    "winner_id": 1,
    "members": [2, 3, 4]
  }
]
```

---

### 3. **Create a New Tournament**
Create a new tournament.

- **URL:** `/tournaments`
- **Method:** `POST`
- **Request Body:**
  - `name` (string): Name of the tournament.
  - `password` (optional, string): Password for the tournament (if private).
  - `type` (number): The type of the tournament.
  - `creator_id` (number): The ID of the user creating the tournament.
  - `duration` (optional, number): The duration of the tournament in minutes.
- **Response:**
  - **201 Created**: If the tournament is successfully created, returns the tournament ID.
  - **404 Not Found**: If the user creating the tournament does not exist.
  - **409 Conflict**: If there is an error while creating the tournament.

#### Example Request:
```json
{
  "name": "Summer Championship",
  "type": 1,
  "creator_id": 1,
  "duration": 120
}
```

#### Example Response:
```json
{
  "id": "123"
}
```

---

### 4. **Update an Existing Tournament**
Update an existing tournament's details.

- **URL:** `/tournaments/:id`
- **Method:** `PATCH`
- **Parameters:**
  - `id` (string): The unique ID of the tournament.
- **Request Body:**
  - `name` (optional, string): The new name of the tournament.
  - `password` (optional, string): The new password for the tournament.
  - `type` (optional, number): The new type of the tournament.
  - `creator_id` (optional, number): The ID of the new creator.
  - `winner_id` (optional, number): The ID of the winner.
  - `duration` (optional, number): The new duration of the tournament.
- **Response:**
  - **204 No Content**: If the tournament is successfully updated.
  - **404 Not Found**: If the tournament or user does not exist.
  - **409 Conflict**: If the winner is not a member of the tournament.

#### Example Request:
```json
{
  "winner_id": 2
}
```

#### Example Response:
```json
{
  "message": "Tournament updated successfully"
}
```

---

### 5. **Get Tournament Members**
Retrieve all members of a specific tournament.

- **URL:** `/tournaments/:id/members`
- **Method:** `GET`
- **Parameters:**
  - `id` (string): The unique ID of the tournament.
- **Response:**
  - **200 OK**: Returns an array of user IDs who are members of the tournament.
  - **404 Not Found**: If the tournament is not found.

#### Example Request:
```
GET /tournaments/123/members
```

#### Example Response:
```json
[1, 2, 3]
```

---

### 6. **Add a Member to a Tournament**
Add a user to a specific tournament.

- **URL:** `/tournaments/:tournament_id/members`
- **Method:** `POST`
- **Parameters:**
  - `tournament_id` (number): The ID of the tournament.
  - `user_id` (number): The ID of the user to be added.
- **Response:**
  - **204 No Content**: If the user is successfully added to the tournament.
  - **404 Not Found**: If the tournament or user does not exist.
  - **409 Conflict**: If there is an error while adding the user.

#### Example Request:
```json
{
  "user_id": 4
}
```

#### Example Response:
```json
{
  "message": "User added successfully"
}
```

---

### 7. **Remove a Member from a Tournament**
Remove a user from a specific tournament.

- **URL:** `/tournaments/:tournament_id/members/:user_id`
- **Method:** `DELETE`
- **Parameters:**
  - `tournament_id` (string): The ID of the tournament.
  - `user_id` (string): The ID of the user to be removed.
- **Response:**
  - **204 No Content**: If the user is successfully removed from the tournament.
  - **404 Not Found**: If the tournament or user does not exist.
  - **409 Conflict**: If there is an error while removing the user.
  - **204 No Content**: If tournament becomes empty, it is deleted.

#### Example Request:
```
DELETE /tournaments/123/members/4
```

#### Example Response:
```json
{
  "message": "User removed from tournament"
}
```

---

### 8. **Delete a Tournament**
Delete a specific tournament.

- **URL:** `/tournaments/:id`
- **Method:** `DELETE`
- **Parameters:**
  - `id` (string): The unique ID of the tournament.
- **Response:**
  - **204 No Content**: If the tournament is successfully deleted.
  - **404 Not Found**: If the tournament is not found.

#### Example Request:
```
DELETE /tournaments/123
```

#### Example Response:
```json
{
  "message": "Tournament deleted successfully"
}
```

---

## Error Codes

| Code | Description |
|------|-------------|
| 400  | Bad Request: Invalid or missing parameters. |
| 404  | Not Found: The requested resource (tournament or user) was not found. |
| 409  | Conflict: There was a conflict, such as trying to add a user who is already in the tournament. |
| 201  | Created: The resource (tournament) was successfully created. |
| 204  | No Content: The operation was successful, but no content is returned. |

---

## Notes
- A tournament can have multiple members. You can add or remove users dynamically.
- The creator of the tournament can be changed, but the `creator_id` should always refer to an existing user.
- The `winner_id` can only be set if the user is a member of the tournament.
