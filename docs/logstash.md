# Logtstash

Logstash is a application that allows you to collect, parse, and transform logs and other event data. It is a part of the ELK stack and is used to send data to Elasticsearch. In our project, Logstash is combined with Filebeat to collect logs from various services and send them to Elasticsearch.

----

### Let's take a look at our configuration file:

```yaml
# Take input from Filebeat
input {
	beats {
		port => 5044
		ssl_enabled => true
		ssl_client_authentication => "required"
		ssl_key => "/usr/share/logstash/certs/logstash/logstash.key"
		ssl_certificate_authorities => ["/usr/share/logstash/certs/ca/ca.crt"]
		ssl_certificate => "/usr/share/logstash/certs/logstash/logstash.crt"
	}
}

#Output to Elasticsearch
output {
	elasticsearch {
		ssl_enabled => true
		ssl_verification_mode => "full"
		ssl_certificate_authorities => ["/usr/share/logstash/certs/ca/ca.crt"]
		user => "elastic"
		index => "%{[container][name]}-%{+YYYY.MM.dd}"
		hosts => ["https://elasticsearch:9200"]
		password => "${ELASTIC_PASSWORD}"
	}
}
```

In the first part, we are taking input from Filebeat by listening on port 5044. We specify the SSL settings to ensure secure communication between Logstash and Filebeat. The `ssl_client_authentication` parameter is set to "required" to enforce client authentication.

For the `output` part, we are basically just sending the data to Elasticsearch. Again, we specify the SSL settings to ensure secure communication between Logstash and Elasticsearch. We use the `user` and `password` parameters to authenticate with Elasticsearch. 
We also use the `index` parameter to create daily indices based on the container name and the current date.

::: info
As we are using SSL, the hostname for elastic will start with `https:`, and "elasticsearch" is the name of the service in the docker-compose.
:::