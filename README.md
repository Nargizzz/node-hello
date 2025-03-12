# node-hello demo project

### Create a Jenkins pipeline that clone this repository and does the following: 
- Build this code (Should run on LTS node version)
- Run the unit tests
- Run lint on the code 

### Fork this repo and:
- Add a Dockerfile that runs it all
- And add a Jenkinsfile that runs this Dockerfile
- Create a Jenkins job that runs this Dockerfile 

#### The Process:
1. Set up Jenkins with `jenkins/jenkins:lts` docker image
`docker run -d --name nara_jenkins -p 9091:8080 -p 50001:50000 -v jenkins_home:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock jenkins/jenkins:lts`
Separately installed npm and docker on it

Maybe better idea would be to use this docker image as base image and write a Dockerfile with everything what i need installed. 

2. Wrote a simple Dockerfile
Note that for some reason i couldn't use `npm install` and had to use `npm install -g npm@11.2.0` - I googled a lot, but couldn't find a reason...

3. Created a Jenkinsfile
I suspect because package-lock.json has dependency on gigya npm registry and my jenkins is just a small container running locally, so it cannot connect to the gigya private registry https://npm.gigya.net. That's why in the Jenkinsfile I am rewriting the `package-lock.json` file and setting up public npm registry: https://registry.npmjs.org/.


