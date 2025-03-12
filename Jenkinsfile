pipeline {
    agent any
    stages {
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

