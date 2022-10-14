# Profile-Creater

An web-app where you can make an account, post public/private blogs and also explore public blogs written by other users

Hosted Link : https://blogging-ninja.herokuapp.com

## Client Side

### Tech Used

- NodeJs
- ReactJs
- Redux
- CSS
- Material UI
- Axios

## Server Side

### Tech Used

- NodeJs
- ExpressJs
- MongoDb / Mongoose
- BcryptJs
- JWT Token

### APIs

| API | Method | Function |
| ----------- | ----------- | ----------- |
| `/api/auth/user` | POST |  Creates an user with required Credentials|
| `/api/auth/user` | GET |  find and send the detail of the user with the help of auth Token|
| `/api/auth/login` | POST |  Logging in an user with required Credentials|
| `/api/profile/` | POST | Creates the profile of the logged in user|
| `/api/profile/` | GET | finds and return user with the given username|
| `/api/profile/` | PUT | edits the profile of the user| 