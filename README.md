# Oracle Event Hub Cloud Service (kafka) producer in Node.js

## k8s deployment
```
kubectl apply -f oehcsproducer-direct.yaml
```
## test
### as source code
```
export OEHCS_CONNECTURL=
export OEHCS_CONNECTURL=
export NUM_PARTITIONS=10
export MESSAGE='{"updateId" : #$€NUMBER€$#,"store" : #$€NUMBER€$#,"section" : #$€NUMBER€$#,"changes" :[{"to" : #$€NUMBER€$#,"timestamp": #$€TIMESTAMP€$#,"items": [{"productCode": #$€NUMBER€$#,"model": #$€STRING€$#,"quality": #$€STRING€$#,"color": #$€STRING€$#,"size": #$€NUMBER€$#,"serialNumber": #$€NUMBER€$#},{"productCode": #$€NUMBER€$#,"model": #$€NUMBER€$#,"quality": #$€NUMBER€$#,"color": #$€NUMBER€$#,"size": #$€NUMBER€$#,"serialNumber": #$€NUMBER€$#}]},{"to": #$€NUMBER€$#,"timestamp": #$€TIMESTAMP€$#,"items": [{"productCode":#$€NUMBER€$#,"model":#$€NUMBER€$#,"quality":#$€NUMBER€$#,"color":#$€NUMBER€$#,"size":#$€NUMBER€$#,"serialNumber": #$€NUMBER€$#}]}]}'
export DEBUG=1
node producer-direct.js
```
### as container
```
docker run -it -e $OEHCS_CONNECTURL -e $OEHCS_CONNECTURL -e $NUM_PARTITIONS -e $MESSAGE -e $DEBUG javiermugueta/oehcsproducer-direct
```
## docker build & run
```
docker build -t javiermugueta/oehcsproducer-direct -f .
docker push javiermugueta/oehcsproducer-direct
docker run -it -e $OEHCS_CONNECTURL -e $OEHCS_CONNECTURL -e $NUM_PARTITIONS -e $MESSAGE -e $DEBUG javiermugueta/oehcsproducer-direct
```