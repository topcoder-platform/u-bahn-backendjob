# UBahn - Backend Job

Queries U-bahn's database for users and posts them to kafka to be picked up by the u-bahn-skill processor

## Dependencies

- Nodejs(v12+)
- docker
- Redis
- PostgreSQL

## Configuration

Configuration for the skill processor trigger is at `config/default.js`.
The following parameters can be set in config files or in env variables:

- LOG_LEVEL: the log level; default value: 'debug'
- DB_NAME: the database name
- DB_USERNAME: the database username
- DB_PASSWORD: the database password
- DB_HOST: the database host
- DB_PORT: the database port
- AUTH0_URL: Auth0 URL, used to get TC M2M token
- AUTH0_AUDIENCE: Auth0 audience, used to get TC M2M token
- TOKEN_CACHE_TIME: Auth0 token cache time, used to get TC M2M token
- AUTH0_CLIENT_ID: Auth0 client id, used to get TC M2M token
- AUTH0_CLIENT_SECRET: Auth0 client secret, used to get TC M2M token
- AUTH0_PROXY_SERVER_URL: Proxy Auth0 URL, used to get TC M2M token
- BUSAPI_URL: Topcoder Bus API URL
- KAFKA_ERROR_TOPIC: The error topic at which bus api will publish any errors
- KAFKA_MESSAGE_ORIGINATOR: The originator value for the kafka messages
- SKILL_SYNC_TOPIC: the sync skill Kafka message topic, default value is 'backgroundjob.sync.user.skills'
- REDIS_HOST: the redis host, default value is 'localhost',
- REDIS_PORT: the redis port, default value is 6379,
- REDIS_PASSWORD: the redis password,
- REDIS_USER: the redis user,
- USER_RECORD_OFFSET: the record offset, default value is 0,
- USER_RECORD_LIMIT: the record limit, default value is 10,
- OFFSET_REDIS_KEY: the redis of offset key, default value is 'USER_RECORD_OFFSET',
- SLEEP_TIME: The pause time between two create operations, default value: 1000 ms

## Local install with Docker

- Navigate to the directory `docker-redis-db`
- Run the command `docker-compose up -d`

## Local deployment

1. From the project root directory, run the following command to install the dependencies

    ```bash
    npm install
    ```

2. To run linters if required

    ```bash
    npm run lint
    ```

    To fix possible lint errors:

    ```bash
    npm run lint:fix
    ```

3. Start the processor and health check dropin

    ```bash
    npm start
    ```

## Local Deployment with Docker

To run the Skill Processor Trigger using docker, follow the below steps

1. Navigate to the directory `docker`

2. Rename the file `sample.api.env` to `api.env`

3. Set the auth0 config in the file `api.env`

4. Once that is done, run the following command

    ```bash
    docker-compose up
    ```

5. When you are running the application for the first time, It will take some time initially to download the image and install the dependencies

## Verification

1. config `AUTH0_CLIENT_ID`, `AUTH0_CLIENT_SECRET`
2. run `npm run insert-data` to load test data to db
3. run `npm start` to post event when there is not offset key in redis
4. run `npm start` to post event when there is an offset key in redis
6. watch the app console, it will show the offset and post message 
