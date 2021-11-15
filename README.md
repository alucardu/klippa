# klippa
Temporary repository for a assessment assignment.

## Instructions
Run `npm install` to install the required packages and run `npm start` to serve the project on a 4200 port. 
Also don't forget to create a `.env` file in the root of the project and add your api key:

`.env`:
```
API_KEY=**your key**
API_URL=https://custom-ocr.klippa.com/api/v1/parseDocument
```

On runtime the `set-env.ts` file will create a `src/environment/environments.ts` file and populate it with the required variables needed in the application.
