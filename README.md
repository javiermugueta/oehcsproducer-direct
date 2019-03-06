# Oracle Event Hub Cloud Service (kafka) producer
[![wercker status](https://app.wercker.com/status/a68a56b07d62e3960b029f7b0c956d3a/s/ "wercker status")](https://app.wercker.com/project/byKey/a68a56b07d62e3960b029f7b0c956d3a)
## run
```
docker run -it -e OEHCS_CONNECTURL=$OEHCS_CONNECTURL -e TOPIC_NAME=$TOPIC_NAME -e NUM_PARTITIONS=$NUM_PARTITIONS -e MESSAGE=$MESSAGE -e DEBUG=$DEBUG javiermugueta/oehcsproducer-direct
```
## params
```
OEHCS_CONNECTURL=[ip1:port,ip2:port,...]
TOPIC_NAME=[name of topic]
NUM_PARTITIONS=[num partitions in topic]
MESSAGE=[a message, if it contains  #$!NUMBER!$#  #$!STRING!$# #$!TIMESTAMP!$# a random number(20), string(50) or timestamp is generated for each message sent to kafka]
DEBUG=[1 debug, otherwise nodebug]
```
### message example
```
'{"updateId" : #$!NUMBER!$#,"store" : #$!NUMBER!$#,"section" : #$!NUMBER!$#,"changes" :[{"to" : #$!NUMBER!$#,"timestamp": #$!TIMESTAMP!$#,"items": [{"productCode": #$!NUMBER!$#,"model": #$!STRING!$#,"quality": #$!STRING!$#,"color": #$!STRING!$#,"size": #$!NUMBER!$#,"serialNumber": #$!NUMBER!$#},{"productCode": #$!NUMBER!$#,"model": #$!NUMBER!$#,"quality": #$!NUMBER!$#,"color": #$!NUMBER!$#,"size": #$!NUMBER!$#,"serialNumber": #$!NUMBER!$#}]},{"to": #$!NUMBER!$#,"timestamp": #$!TIMESTAMP!$#,"items": [{"productCode":#$!NUMBER!$#,"model":#$!NUMBER!$#,"quality":#$!NUMBER!$#,"color":#$!NUMBER!$#,"size":#$!NUMBER!$#,"serialNumber": #$!NUMBER!$#}]}]}'
```