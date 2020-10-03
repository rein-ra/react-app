# react-app

## Lokaalne setup

- Navigeeri kausta `local-dev-react-app`
- Installi vajalikud dependency'd
```
docker-compose run --rm --no-deps --entrypoint yarn react-app install
```
- Seejärel käivita setup
```
docker-compose up -d
```

- Juhul kui hot reload ei tööta siis asenda `package.json` failis, start käsu sisu `react-scripts start` järgmise vastu  `CHOKIDAR_USEPOLLING=true react-scripts start` 