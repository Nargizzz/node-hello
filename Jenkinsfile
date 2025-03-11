pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm install -g npm@11.2.0'
                sh 'npm install'
            }
        }

        stage('Run Lint') {
            steps {
                sh 'npx eslint .'
            }
        }

        stage('Run Unit Tests') {
            steps {
                sh 'npx jest test/'  // Run all Jest tests in the test directory
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t node-hello .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker run -p 3000:3000 -d node-hello'
            }
        }
    }
}
