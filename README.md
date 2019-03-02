# Oracle Evente Hub (kafka) producer in Node.js

## docker build & run
```
docker build -t javiermugueta/oehcsproducer-direct -f .
docker push javiermugueta/oehcsproducer-direct
docker run -it javiermugueta/oehcsproducer-direct
```

## k8s deployments

```
kubectl apply -f oehcsproducer-direct.yaml
```

## testdata
```
export OEHCS_CONNECTURL=130.61.86.204:6667,130.61.113.170:6667,130.61.47.254:6667,130.61.112.70:6667,130.61.87.248:6667
export TOPIC_NAME=MAINSTREAM
export NUM_PARTITIONS=10
export MESSAGE='{"updateId" : NUMBER,"store" : NUMBER,"section" : NUMBER,"changes" :[{"to" : NUMBER,"timestamp": TIMESTAMP,"items": [{"productCode": NUMBER,"model": STRING,"quality": STRING,"color": STRING,"size": NUMBER,"serialNumber": NUMBER},{"productCode": NUMBER,"model": NUMBER,"quality": NUMBER,"color": NUMBER,"size": NUMBER,"serialNumber": NUMBER}]},{"to": NUMBER,"timestamp": TIMESTAMP,"items": [{"productCode":NUMBER,"model":NUMBER,"quality":NUMBER,"color":NUMBER,"size":NUMBER,"serialNumber": NUMBER}]}]}'
export DEBUG=1
node producer-direct.js
```