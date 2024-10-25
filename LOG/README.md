```
Seungs-Mac-Pro:swagger-ui-express-jest-template sajang$ npm init -y
Wrote to /Users/sajang/tests/learning/swagger-ui-express-jest-template/package.json:

{
  "name": "swagger-ui-express-jest-template",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}



Seungs-Mac-Pro:swagger-ui-express-jest-template sajang$ 
Seungs-Mac-Pro:swagger-ui-express-jest-template sajang$ npm i express dotenv swagger-ui-express yamljs jest supertest
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported

added 352 packages, and audited 353 packages in 15s

47 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Seungs-Mac-Pro:swagger-ui-express-jest-template sajang$ 
Seungs-Mac-Pro:swagger-ui-express-jest-template sajang$ cat package.json 
{
  "name": "swagger-ui-express-jest-template",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest",
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "dotenv": "^16.4.5",
    "express": "^4.21.1",
    "jest": "^29.7.0",
    "supertest": "^7.0.0",
    "swagger-ui-express": "^5.0.1",
    "yamljs": "^0.3.0"
  }
}
Seungs-Mac-Pro:swagger-ui-express-jest-template sajang$
```