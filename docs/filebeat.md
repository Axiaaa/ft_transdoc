# Filebeat


Filebeat is a lightweight shipper for forwarding and centralizing log data. It helps you keep the simple things simple by offering a lightweight way to forward and centralize logs and files.

In our project, Filebeat is used to collect logs from various services and send them to Logstash for further processing.

Basically, Filebeat is watching every docker stdout, stderr and log files to send them to Logstash.

```yaml
filebeat.inputs:
  - type: container
    enabled: true
    stream: all
    paths:
        - /var/lib/docker/containers/*/*.log

processors:
  - add_docker_metadata:
      host: "unix:///var/run/docker.sock"
  - decode_json_fields:
      fields: ["message"]
      target: ""
      overwrite_keys: true

output.logstash:
  hosts: ["logstash:5044"]
  ssl:
    certificate_authorities: ["/usr/share/filebeat/certs/ca/ca.crt"]
    certificate: "/usr/share/filebeat/certs/filebeat/filebeat.crt"
    key: "/usr/share/filebeat/certs/filebeat/filebeat.key"
````

In the configuration file, we specify the input type as `container` to collect logs from Docker containers. We also add some processors to enrich the logs with metadata and decode JSON fields. After, we send the logs to Logstash using the `output.logstash` section. And we also need to use certificates as well !