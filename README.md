# NodeJS App

## Features 

### Run Application 
Use Docker Compose's command: 

```
    docker-compose -f docker-compose.yaml up -d
```

### Search Users - Method GET

```
    localhost:3000/users/search
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
    localhost:3000/users/add
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
    localhost:3000/users/:username
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
    localhost:3000/users/:username
```

param: username

Success -> Status: 204
Error -> Status: 400


