# Secutor structure

## Frontend

src

- components:

  > pages

  > shared

  > mocks

  > interfaces

  > constants

- routes
- services
- styles
- store

  > action

  > reducer

# Technologies

## BE:

- NodeJs
- TypeScript
- PostgreSQL
- NestJs
- Jest(Jasmine need to investigate)

## FE:

- React
- Redux
- TypeScript
- Jest

# Database structure

## User table

| Field    | Type    | Key     | Connection Table |
| -------- | ------- | ------- | ---------------- |
| userId   | INT     | Primary |                  |
| password | VARCHAR |         |                  |
| name     | VARCHAR |         |                  |
| photo    | BLOB    |         |                  |

## Project table

| Field     | Type    | Key     | Connection Table |
| --------- | ------- | ------- | ---------------- |
| projectId | INT     | Primary |                  |
| fileId    | INT     | Foreign | File table       |
| name      | VARCHAR |         |                  |

## User_Project table

| Field         | Type | Key     | Connection Table |
| ------------- | ---- | ------- | ---------------- |
| userProjectId | INT  | Primary |                  |
| userId        | INT  | Foreign | User table       |
| projectId     | INT  | Foreign | Project table    |

## File table

| Field     | Type     | Key     | Connection Table |
| --------- | -------- | ------- | ---------------- |
| fileId    | INT      | Primary |                  |
| projectId | INT      | Foreign | Project table    |
| userId    | INT      | Foreign | User table       |
| name      | VARCHAR  |         |                  |
| date      | DATATIME |         |                  |
| sourceId  | INT      | Foreign | Source table     |

## Source table

| Field           | Type    | Key     | Connection Table |
| --------------- | ------- | ------- | ---------------- |
| sourceId        | INT     | Primary |                  |
| fileId          | INT     | Foreign | File table       |
| name            | VARCHAR |         |                  |
| vulnerabilities | VARCHAR |         |                  |

## Connections

User table -- Many to many --> Project table

Project table -- One to many --> File table

File table -- One to many --> Source table

# Contracts

## [Login contract](./contracts/SecutorContracts.yaml)

# Secutor store

## Login page

```
  {
    userName: string,
    userPass: string,
    loginLoader: boolean
  }
```

## Register page

```
  {
    userName: string,
    userEmail: string,
    userPass: string,
    userRePass: string,
    regiserLoader: boolean
  }
```

## Home page

```
  {
    projects: [
      {
        id: number,
        name: string
      },
    ],
    addProjectValue: string,
    editProjectValue: string,
    addProjectLoader: boolean
  }
```

## Project page

```
  {
    source: Object,
    sources: Array<Object>,
    scanLoader: boolean
  }
```

## Source page

```
  {
    sources: Array<Object>,
    sourceLoader: boolean
  }
```

## Settings Page (Change personal data)

```
  {
    newUserName: string,
    newUserEmail: string,
    settingsLoader: boolean
  }
```

## Settings Page (Change password)

```
  {
    newPass: string,
    newRePass: string,
    settingsLoader: boolean
  }
```

## Errors

```
  {
    isRegisterError: boolean,
    registerError: string,
    isLoginError: boolean,
    loginError: string,
    isAddProjectError: boolean,
    addProjectError: string,
    isEditProjectError: boolean,
    editProjectError: string,
    isDeleteProjectError: boolean,
    deleteProjectError: string,
    isSourceError: boolean,
    sourceError: string,
    isSettingsError: boolean,
    settingsError: string,
  }
```
