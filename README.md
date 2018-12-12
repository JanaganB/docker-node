# Docker Node

[![Build Status](https://travis-ci.org/marcobiedermann/docker-node.svg?branch=master)](https://travis-ci.org/marcobiedermann/docker-node)
[![codecov](https://codecov.io/gh/marcobiedermann/docker-node/branch/master/graph/badge.svg)](https://codecov.io/gh/marcobiedermann/docker-node)
[![dependencies Status](https://david-dm.org/marcobiedermann/docker-node/status.svg)](https://david-dm.org/marcobiedermann/docker-node)
[![devDependencies Status](https://david-dm.org/marcobiedermann/docker-node/dev-status.svg)](https://david-dm.org/marcobiedermann/docker-node?type=dev)
[![Greenkeeper badge](https://badges.greenkeeper.io/marcobiedermann/docker-node.svg)](https://greenkeeper.io/)
[![Known Vulnerabilities](https://snyk.io/test/github/marcobiedermann/docker-node/badge.svg?targetFile=package.json)](https://snyk.io/test/github/marcobiedermann/docker-node?targetFile=package.json)
[![Maintainability](https://api.codeclimate.com/v1/badges/2a95b4d596f388ce6a59/maintainability)](https://codeclimate.com/github/marcobiedermann/docker-node/maintainability)

Docker Container for Node.js development

## Table of contents

-   [Requirements](#requirements)
-   [Installation](#installation)
-   [Usage](#usage)

## Requirements

-   [Docker](https://www.docker.com/)

## Installation

-   Install `node_modules` via `npm install`

## Usage

### Development

```sh
docker-compose up
```

### Production

```sh
docker build -t IMAGE_NAME .
docker run -p PORT:3000 IMAGE_NAME .
```
