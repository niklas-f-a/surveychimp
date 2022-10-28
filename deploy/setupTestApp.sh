BASEDIR=$(dirname "$0")

doctl databases create db-surveychimp-test --engine mongodb --version 5
doctl apps create --spec ${BASEDIR}/surveychimp-test.yaml