pipeline {
    agent any

    environment {
        npmRegistry    = 'https://registry.npmjs.org/'
        imageName      = 'nara123/node-hello'
        imageTag       = "${BUILD_NUMBER}"
        dockerRegistry = "docker.io"
        customImage    = ''
    }

    stages {
        stage('Setup') {
            steps {
                script {
                    echo 'Cleaning up gigya dependencies and setting public npm registry.' //My docker jenkins cant access gigya registry
                    sh 'rm -rf node_modules package-lock.json'
                    sh "npm config set registry ${env.npmRegistry}"
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    echo 'Installing dependencies from npm registry.'
                    sh "npm install --registry=${env.npmRegistry}"
                }
            }
        }

        stage('Lint and Test') {
            steps {
                script {
                    echo 'Running lint and tests.'
                    sh 'npm run lint'
                    sh 'npm test'
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    echo 'Building the Docker image...'
                    customImage = docker.build("${imageName}:${env.imageTag}")
                }
            }
        }

        stage('Docker Login') {
            steps {
                script {
                    echo "Logging in to docker registry"
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', usernameVariable: 'dockerUser', passwordVariable: 'dockerPass')]) {
                        sh "echo $dockerPass | docker login -u $dockerUser --password-stdin"
                    }
                    echo 'Docker Login successfull'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    echo 'Pushing docker image to the artifactory...'
                    customImage.push()
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up workspace after the pipeline execution.'
            cleanWs()
        }
    }
}