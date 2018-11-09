# Docker Node

[![Build Status](https://travis-ci.org/marcobiedermann/docker-node.svg?branch=master)](https://travis-ci.org/marcobiedermann/docker-node)
[![codecov](https://codecov.io/gh/marcobiedermann/docker-node/branch/master/graph/badge.svg)](https://codecov.io/gh/marcobiedermann/docker-node)
[![dependencies Status](https://david-dm.org/marcobiedermann/docker-node/status.svg)](https://david-dm.org/marcobiedermann/docker-node)
[![devDependencies Status](https://david-dm.org/marcobiedermann/docker-node/dev-status.svg)](https://david-dm.org/marcobiedermann/docker-node?type=dev)
[![Greenkeeper badge](https://badges.greenkeeper.io/marcobiedermann/docker-node.svg)](https://greenkeeper.io/)

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
