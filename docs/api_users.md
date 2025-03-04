# Match API Documentation

This API provides endpoints to manage and retrieve information about matches, including player matchups, tournament involvement, and match results.

## Base URL
```
/matchs
```

---

## Endpoints

### 1. **Get Match by ID**
Retrieve a specific match by its ID.

- **URL:** `/matchs/:id`
- **Method:** `GET`
- **Parameters:**
  - `id` (string): The unique ID of the match.
- **Response:**
  - **200 OK**: If the match is found, the match data is returned.
  - **404 Not Found**: If the match is not found.

#### Example Request:
```
GET /matchs/123
```

#### Example Response:
```json
{
  "id": "123",
  "player1": "1",
  "player2": "2",
  "winner": "1",
  "score": "3-1",
  "created_at": "2025-01-01T10:00:00Z",
  "is_tournament": true,
  "tournament_id": 456
}
```

---

### 2. **Get All Matches**
Retrieve all matches.

- **URL:** `/matchs`
- **Method:** `GET`
- **Response:**
  - **200 OK**: Returns an array of match data.
  - **404 Not Found**: If no matches are found.

#### Example Request:
```
GET /matchs
```

#### Example Response:
```json
[
  {
    "id": "123",
    "player1": "1",
    "player2": "2",
    "winner": "1",
    "score": "3-1",
    "created_at": "2025-01-01T10:00:00Z",
    "is_tournament": true,
    "tournament_id": 456
  },
  {
    "id": "124",
    "player1": "3",
    "player2": "4",
    "winner": "3",
    "score": "2-1",
    "created_at": "2025-01-02T10:00:00Z",
    "is_tournament": false
  }
]
```

---

### 3. **Create a New Match**
Create a new match between two players.

- **URL:** `/matchs`
- **Method:** `POST`
- **Request Body:**
  - `player1` (number): The ID of player 1.
  - `player2` (number): The ID of player 2.
  - `is_tournament` (boolean): Whether the match is part of a tournament.
  - `tournament_id` (optional, number): The ID of the tournament, required if `is_tournament` is true.
- **Response:**
  - **201 Created**: If the match is successfully created, returns the match ID.
  - **400 Bad Request**: If the tournament ID is missing when `is_tournament` is true.
  - **404 Not Found**: If one of the players does not exist.
  - **409 Conflict**: If both players are the same.

#### Example Request:
```json
{
  "player1": 1,
  "player2": 2,
  "is_tournament": true,
  "tournament_id": 456
}
```

#### Example Response:
```json
{
  "id": "125"
}
```

---

### 4. **Update an Existing Match**
Update an existing match's details.

- **URL:** `/matchs/:id`
- **Method:** `PATCH`
- **Parameters:**
  - `id` (string): The unique ID of the match.
- **Request Body:**
  - `player1` (optional, number): The new ID for player 1.
  - `player2` (optional, number): The new ID for player 2.
  - `winner` (optional, number or null): The new winner ID or `null` if there is no winner.
  - `created_at` (optional, string): The new creation timestamp.
  - `score` (optional, string): The new score of the match.
  - `is_tournament` (optional, boolean): Whether the match is part of a tournament.
- **Response:**
  - **204 No Content**: If the match is successfully updated.
  - **409 Conflict**: If there are validation errors (e.g., player IDs conflict, non-existing players).

#### Example Request:
```json
{
  "winner": 1,
  "score": "3-2"
}
```

#### Example Response:
```json
{
  "message": "Match updated successfully"
}
```

---

### 5. **Delete a Match**
Delete a specific match.

- **URL:** `/matchs/:id`
- **Method:** `DELETE`
- **Parameters:**
  - `id` (string): The unique ID of the match.
- **Response:**
  - **204 No Content**: If the match is successfully deleted.
  - **404 Not Found**: If the match is not found.

#### Example Request:
```
DELETE /matchs/123
```

#### Example Response:
```json
{
  "message": "Match deleted successfully"
}
```

---

## Error Codes

| Code | Description |
|------|-------------|
| 400  | Bad Request: Missing or invalid parameters. |
| 404  | Not Found: The requested resource was not found. |
| 409  | Conflict: There was a conflict, such as a duplicate or invalid operation. |
| 201  | Created: The resource was successfully created. |
| 204  | No Content: The operation was successful, but there is no content to return. |

---

## Notes
- The `player1` and `player2` must always be distinct. Attempting to set the same player for both will result in a conflict error.
- Tournament-related fields are required only when `is_tournament` is `true`.
- Make sure the player and tournament IDs exist before creating or updating matches.

