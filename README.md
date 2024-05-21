# ExpressJS App - User Management 

## Features 

- Search Users
- Add User
- Update User
- Delete User

### Run Application 
Use Docker Compose's command: 

```
    docker-compose -f docker-compose.yaml up -d
```

The server is listen at port 5000

### Search Users - Method GET

```
    localhost:5000/users/search
```

query: {
    username,
    fullname,
    role,
    project,
    activeYn
}

Success -> Status: 200

### Add User - Method POST

```
    localhost:5000/users/add
```

body: {
    username ( string -> unique),
    fullname (string),
    role (string),
    project (array),
    activeYn (enum)
}

Success -> Status: 201 
Error -> Status: 400


### Edit User - Method PATCH

```
    localhost:5000/users/:username
```

param: username

body: {
    username ( string -> unique),
    fullname (string),
    role (string),
    project (array),
    activeYn (enum)
}

Success -> Status: 204
Error -> Status: 400

### Delete User

Delete User - Method DELETE

```
    localhost:5000/users/:username
```

param: username

Success -> Status: 204
Error -> Status: 400


