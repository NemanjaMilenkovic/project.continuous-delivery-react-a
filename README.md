# cc11-project.continuous-delivery-react-a
### This was created during my time as a [Code Chrysalis](https://codechrysalis.io) Student
This app is used when you can plan your trip.
This app show a map of all FlyingK locations.
You are able to filter based upon State, City, and Highway.
Also you are able to filter truck services, type, amenities, restaraunts.


## URL  
!-- write heroku's app url --!  
!-- screen shot --!


## Setup  
1. Clone the repo:  
```
git clone https://github.com/codechrysalis/cc11-project.continuous-delivery-react-a.git
```

2. Install packages:  
```
yarn
```

3. Migrate and seed your data:  
```

```

4. Build:  
```
yarn build
```

5. Start the server:  
```
yarn start
```

## API  
### GET /api/locations  
Return all locations  
response (list of loocations)
```
[{
"id":1,
"latitude":32.84415,
"longitude":-86.591965,
"name":"Clanton - 368"
},
{...},
...]
```

### GET /api/names  
Return all names
response (list of names)
```
[{"name":"Clanton - 368"},
{...}
...]
```

### GET /api/locations/:id/names  
Return 
```
```

### GET /api/locations/:id/latlong    
Return 
```
```

### GET /api/locations/:latlong    
Return 
```
```
