# Foreign-Exchange-Currency-App

## Setup

``` bash
1.) git clone https://github.com/gilangdipper/Foreign-Exchange-Currency-App.git
2.) yarn install
3.) yarn start

### Docker
1.) docker build -t currency-app .
2.) docker run -it -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules -p 3000:3000 --rm currency-app

### docker-compose
docker-compose up -d --build

```

## Test
``` bash
yarn test
```
