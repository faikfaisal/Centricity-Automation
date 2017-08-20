#!/bin/bash

run_tests(){
    ./node_modules/.bin/codeceptjs run --steps --reporter mochawesome
}

export LAUNCH_MODE="testObjectAndroid"
export TEST_OBJECT_HOST="us1.appium.testobject.com"
export PLATFORM_VERSION="7.1.2"
export TEST_OBJECT_API_KEY="8D91099C09ED48E8BB0A27AE24ADD152"
export DEVICE_NAME="LG Nexus 5X Free"
run_tests
kill_all_appium_servers


