# Elasticsearch

Elasticsearch is a distributed, RESTful search and analytics engine capable of solving a growing number of use cases. It is a part of the ELK stack and is used to store and search data. In our project, Elasticsearch is used to store logs and metrics data.


It can be accessed through a REST API, and it is capable of performing full-text search, aggregations, and more. Elasticsearch is built on top of Lucene, a high-performance, full-featured information retrieval library.


Here's a request example to get all the indices in Elasticsearch:

```bash
curl -X GET "localhost:9200/_cat/indices?v"
```

In our case, we use SSL to secure the communication between the services. So we need to provide the certificates and keys to Elasticsearch. 

```bash
curl -X GET "https://localhost:9200/_cat/indices?v" --cacert certs/ca/ca.crt --cert certs/es/es.crt --key certs/es/es.key
```

::: tip
Replace `localhost` with the hostname of the Elasticsearch service in your docker-compose file.
:::