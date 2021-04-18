# bouncing-dvd-logo - apiiro version

Will it hit the corner?

```bash
docker build -t dvd .

docker run --rm -it -p 8080:80 dvd

docker tag dvd gcr.io/apiiro/tools/dvd:1.0
docker push gcr.io/apiiro/tools/dvd:1.0
```
