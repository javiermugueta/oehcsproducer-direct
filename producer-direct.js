var sleep = require('system-sleep');
const replaceString = require('replace-string');
var randomInt = require('random-int');
var randomstring = require("randomstring");

const oehcs_connect_url = process.env.OEHCS_CONNECTURL
const topic_name = process.env.TOPIC_NAME
const num_partitions = process.env.NUM_PARTITIONS
const message = process.env.MESSAGE
const debug = process.env.DEBUG
//require('events').eventEmitter.setMaxListeners(999)
var kafka = require('kafka-node'),
        HighLevelProducer = kafka.HighLevelProducer,
        client = new kafka.KafkaClient({kafkaHost: oehcs_connect_url}),
        producer = new HighLevelProducer(client);

console.log("a kafka producer writen in node.js")
console.log("(c) jmu 2019")
console.log("kafka cluster: " + oehcs_connect_url)
console.log("Topic Name: " + topic_name)
console.log("Num partitions: " + num_partitions)
console.log("I am loging to console every message multiple of 1M")

var i = 0;
var j = 0;
while (i >= 0 ){
        var msg = buildmessage(message)
        var payloads = [{ topic: topic_name, messages: msg , partition: i}];
        //producer.on('ready', function () {
                producer.send(payloads, function (err, data) {
                        if (( j % 1000000 ) == 0) {
                                console.log(msg);
                        }
                        j = j + 1;
                });
        //    });
        i = i + 1;
        if (i > num_partitions -1){
                i = 0;
                sleep( 1 );
        }
}
/*
* generate a random message if it contains #$€NUMBER€$#, #$€STRING€$# or #$€TIMESTAM€$# literals
*/
function buildmessage (msgin) {
        mylog(msgin)
        var msgout = replaceString(msgin,'#$€NUMBER€$#', randomnum(0, 99999999999999999999))
        msgout = replaceString(msgout,'#$€STRING€$#', "\"" + randomstring.generate(50) + "\"")
        var time = (Math.floor(Date.now() / 1000)).toString()
        mylog(time)
        var msgout = replaceString(msgout, '#$€TIMESTAMP€$#', time)
        mylog(msg)
        return msgout
}
/*
* generates rendom num returned an an string
*/
function randomnum(low, high) {
        return randomInt(low, high).toString()
      }
/*
* log message depending on DEBUG env paran
*/
function mylog(msg){
        if (debug == "1"){
                console.log(msg)
        }
}
