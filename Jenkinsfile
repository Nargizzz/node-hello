pipeline {
    agent any

    environment {
        npmRegistry = 'https://registry.npmjs.org/'
    }

    stages {
        stage('Setup') {
            steps {
                script {
                    echo 'Cleaning up gigya dependencies and setting public npm registry.' //My docker jenkins cant access gigya
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
    }

    post {
        always {
            echo 'Cleaning up workspace after the pipeline execution.'
            cleanWs()
        }
    }
}