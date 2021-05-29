<h1 align="center">Welcome to crud-app 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-14.15.0-blue.svg" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> simple-express API to do CRUD ops on /appData

### 🏠 [Homepage](https://enigmatic-fortress-57340.herokuapp.com/)

## Prerequisites

- node 14.15.0

## Usage

Heroku  hosting link is ```https://simple-persons-api.herokuapp.com/```

> URL = ```https://simple-persons-api.herokuapp.com```
  
  # Sample Error Message
  ```sh
  {
    "message": "Request unsuccessful.",
    "error": "data not found"
}
```
<h3>GET ALL DATA [REQUEST TYPE : GET]</h3>

```GET``` ```{{ URL }}``` ```/appData```
> Sample Response
```sh
{
    "message": "Request Successful.",
    "data" : [
        {
            "data": {
                "name": "george",
                "email": "george@gmail.com",
                "country": "Kenya"
            },
            "_id": "xxxxxxxxxxxxxxxxxxx",
            "__v": 0
        }
        
    ]
}
```
<h3>GET SINGLE DATA [REQUEST TYPE : GET]</h3>

```GET``` ```{{ URL }}``` ```/appData/:id```
> Sample Response
```sh
{
    "message": "Request Successful.",
    "data" : [
        {
            "data": {
                "name": "george",
                "email": "george@gmail.com",
                "country": "Kenya"
            },
            "_id": "xxxxxxxxxxxxxxxxxxx",
            "__v": 0
        }
        
    ]
}
```
<h3>CREATE A PERSON [REQUEST TYPE : POST]</h3>

```POST``` ```{{ URL }}``` ```/appData```
> If you are using postman set to raw and ```Content-Type: application/json```
> Sample Request Body
```sh
{
       
        "data": {
            "name": "Ajala Tolulope",
            "email": "AjT@gmail.com",
            "country": "Guinea"
        }
}
```

> Sample Response
```sh
{
    "message": "Request Sucessful",
    "data": {
        "_id": "60b2138c3e9e3740340cce0f",
        "data": {
            "name": "Ajala Tolulope",
            "email": "AjT@gmail.com",
            "country": "Guinea"
        },
        "__v": 0
    }
}

```
<h3>UPDATE A PERSON [REQUEST TYPE : PUT]</h3>
```PUT``` ```{{ URL }}``` ```/appData/:id```
> If you are using postman set to raw and ```Content-Type: application/json```

> Sample Request Body
```sh
{
       
        "data": {
            "name": "Tolu Odumosu",
            "email": "ToluOdumosu@gmail.com",
            "country": "France"
        }
}
```


> Sample Response
```sh
{
    "message": "data updated sucessfully",
   
}
GET {{ BASE_URL }} api/v1/persons
```
<h3>DELETE A PERSON [REQUEST TYPE : PUT]</h3>
```DELETE``` ```{{ URL }}``` ```/appData/:id```


> Sample Response
```sh
{
    "message": "data deleted sucessfully"
}

```



## Author

👤 **Binitie William**
@@ -149,5 +41,7 @@ Heroku  hosting link is ```https://simple-persons-api.herokuapp.com/```

## Show your support

Give a ⭐️ if You liked this project!
Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_



