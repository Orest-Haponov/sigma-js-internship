# Secutor structure

## Frontend
src
- components:
    >pages 

    >shared 

    >mocks

    >interfaces

    >constants

- routes
- services
- styles
- store
    >action 

    >reducer 

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

|Field      | Type        |Key        |Connection Table|
|-----------|-------------|-----------|----------------|
|userId     |INT          |Primary    |                |
|password   |VARCHAR      |           |                |
|name       |VARCHAR      |           |                |
|photo      |BLOB         |           |                |

## Project table

|Field      | Type        |Key        |Connection Table|
|-----------|-------------|-----------|----------------|
|projectId  |INT          |Primary    |                |
|fileId     |INT          |Foreign    |File table      |
|name       |VARCHAR      |           |                |

## User_Project table

|Field        | Type        |Key        |Connection Table|
|-------------|-------------|-----------|----------------|
|userProjectId|INT          |Primary    |                |
|userId       |INT          |Foreign    |User table      |
|projectId    |INT          |Foreign    |Project table   |

## File table

|Field      | Type        |Key        |Connection Table|
|-----------|-------------|-----------|----------------|
|fileId     |INT          |Primary    |                |
|projectId  |INT          |Foreign    |Project table   |
|userId     |INT          |Foreign    |User table      |
|name       |VARCHAR      |           |                |
|date       |DATATIME     |           |                |
|sourceId   |INT          |Foreign    |Source table    |

## Source table

|Field          | Type        |Key        |Connection Table|
|---------------|-------------|-----------|----------------|
|sourceId       |INT          |Primary    |                |
|fileId         |INT          |Foreign    |File table      |
|name           |VARCHAR      |           |                |
|vulnerabilities|VARCHAR      |           |                |

## Connections

User table -- Many to many --> Project table 

Project table -- One to many --> File table

File table -- One to many --> Source table


# Contracts

## [Login contract](./contracts/Login.yaml)

# Secutor store

## Login page
```
    {
        userName: '',
        userPass: '',
        loginLoader: false
    }
```

## Register page
```
    {
        userName: '',
        userEmail: '',
        userPass: '',
        userRePass: '',
        regiserLoader: false
    }
```

## Home page
```
    {
        projects: [],
        projectName: '',
        projectLoader: false
    }
```

## Edit project
```
    {
        newProjectName: '',
        editProjectLoader: false
    }
```

## Project page
```
    {
        source: {},
        sources: [],
        scanLoader: false
    }
```

## Source page
```
    {
        source: [],
    }
```

## Settings Page (Change personal data)
```
    {
        newUserName: '',
        newUserEmail: '',
        settingsLoader: false
    }
```

## Settings Page (Change password)
```
    {
        newPass: '',
        newRePass: '',
        settingsLoader: false
    }
```