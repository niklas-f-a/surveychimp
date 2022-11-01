BASEDIR=$(dirname "$0")

doctl databases create db-mongodb-ams3-prod --engine mongodb --version 5
doctl apps create --spec ${BASEDIR}/surveychimp-prod.yaml