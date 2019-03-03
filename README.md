# Oracle Event Hub Cloud Service (kafka) consumer in go

## k8s deployment
```
kubectl apply -f oehcsproducer-direct.yaml
```
## test
### set env variables
```
export OEHCS_CONNECTURL=
export TOPIC_NAME=
export NUM_PARTITIONS=10
export MESSAGE='{"updateId" : #$€NUMBER€$#,"store" : #$€NUMBER€$#,"section" : #$€NUMBER€$#,"changes" :[{"to" : #$€NUMBER€$#,"timestamp": #$€TIMESTAMP€$#,"items": [{"productCode": #$€NUMBER€$#,"model": #$€STRING€$#,"quality": #$€STRING€$#,"color": #$€STRING€$#,"size": #$€NUMBER€$#,"serialNumber": #$€NUMBER€$#},{"productCode": #$€NUMBER€$#,"model": #$€NUMBER€$#,"quality": #$€NUMBER€$#,"color": #$€NUMBER€$#,"size": #$€NUMBER€$#,"serialNumber": #$€NUMBER€$#}]},{"to": #$€NUMBER€$#,"timestamp": #$€TIMESTAMP€$#,"items": [{"productCode":#$€NUMBER€$#,"model":#$€NUMBER€$#,"quality":#$€NUMBER€$#,"color":#$€NUMBER€$#,"size":#$€NUMBER€$#,"serialNumber": #$€NUMBER€$#}]}]}'
export DEBUG=1
```
### as source code
```
node producer-direct.js
```
### as container
```
docker run -it -e OEHCS_CONNECTURL=$OEHCS_CONNECTURL -e TOPIC_NAME=$TOPIC_NAME -e NUM_PARTITIONS=$NUM_PARTITIONS -e MESSAGE=$MESSAGE -e DEBUG=$DEBUG javiermugueta/oehcsproducer-direct
```
## docker build & push
```
docker build -t javiermugueta/oehcsproducer-direct -f .
docker push javiermugueta/oehcsproducer-direct
```