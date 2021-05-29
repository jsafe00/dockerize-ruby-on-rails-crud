### This is a simple dockerize Ruby on Rails app MVC CRUD.  

#### To Execute 

In the root folder:

```
docker-compose build
```

```
docker-compose up -d
```

```
winpty docker-compose exec web rake db:create
```

```
winpty docker exec -it {web_container_id} bash
```

#### Migrate DB

```
rake db:migrate
```

Accessing the project in the browser:

```
127.0.0.1:3000
```
