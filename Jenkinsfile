pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Nargizzz/node-hello.git'
            }
        }
        
        stage('Running the tests') {
            steps {
                 script {
                    echo 'Installing npm'
                    sh 'npm install'
                    echo 'Starting testing the docker image...'
                    //sh 'npm test'
                }
            }
        }
    }
}

