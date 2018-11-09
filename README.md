# Docker Node

[![Build Status](https://travis-ci.org/marcobiedermann/docker-node.svg?branch=master)](https://travis-ci.org/marcobiedermann/docker-node)
[![dependencies Status](https://david-dm.org/marcobiedermann/docker-node/status.svg)](https://david-dm.org/marcobiedermann/docker-node)
[![devDependencies Status](https://david-dm.org/marcobiedermann/docker-node/dev-status.svg)](https://david-dm.org/marcobiedermann/docker-node?type=dev)

Docker Container for Node.js development

## Requirements

* [Docker](https://www.docker.com/)

## Usage

### Development

```sh
docker-compose up
```

### Production

```sh
docker -p PORT:3000 IMAGE_NAME .
```
