# Choo PWA
PWA built with Choo and Fastify

Demo: https://choo-pwa.nearform.com/

Features: 
- Dynamic code splitting 
- Server side renderering
- HTTP/2 push 
- App shell model
- Service worker with asset pre-caching

Modules used:
- [choo](https://github.com/choojs/choo) - 4kb frontend framework
- [choo-async](https://github.com/nearform/choo-async) - Asynchronous rendering with Choo
- [choo-ssr](https://github.com/nearform/choo-ssr) - Server side renderering with Choo and Fastify
- [choo-bundles](https://github.com/nearform/choo-bundles) - Dynamic code splitting with SSR and HTTP/2 push support
- [choo-data](https://github.com/nearform/choo-data) - Data fetching with SSR support
- [fastify](https://github.com/fastify/fastify) - Fast and low overhead web framework
- [fastify-static](https://github.com/fastify/fastify-static) - Fastify plugin for serving static files
- [fastify-compress](https://github.com/fastify/fastify-compress) - Fastify plugin for compression utils
- [Workbox](https://developers.google.com/web/tools/workbox/) - Library for best practices when working with service workers


## Quick start

#### Run in developemnt mode
`npm run watch`

Open https://localhost:3000

#### Run in production mode (requires build first)
`npm start`

#### Make a build
`npm run build`

## Infra

### CI / CD
This repo has its own CircleCI project attached to it: https://circleci.com/gh/nearform/react-pwa

Whenever a new commit is pushed into master, a new CircleCI build will be triggered and that build will follow the steps defined in `.circleci/config.yml`:
- it will set up its own environment, including the Docker daemon and required containers
- install the npm modules required by the app to make sure there aren't any dependency issues
- run tests (there are none written now unfortunately)
- build a Docker container based on the included `Dockerfile`
- push that container to the container registry hosted by AWS (ECR)
- trigger a deploy. This means forcing an update on the ECS service and cluster hosting the application (see below). This will force the service and cluster to re-download the Docker container defined in the ECS task (the one tagged with `latest` and that has been pushed to the registry by the above step)

### Hosting
This app is hosted on a AWS ECS Fargate cluster. This basically let's you define a task (what container to run) and a cluster to run it on, just like the clasic ECS cluster. The difference is that you do not need to define and manage EC2 instances in the cluster, it is all abstracted for you. You just need to define the resources (CPU, memory) you need and that's it.

On top of that, there is a ECS service defined, that puts together what load balancer, what cluster and task to use.

The loadbalancer in this case is a purely TCP loadbalancer. That's because we wanted to make sure we use HTTP2 for this application, and the node app is configured to serve that. That also means that node serves the SSL certificate, which can be found in the `https` dir and needs to be renewed every 3 months as it is generated by letsencrypt. Upon renewal, it will need to be built in the docker container and redeployed.

### TODO
* Automate the SSL certificate renewal somehow
