#!/bin/bash
start_appium_server(){
    appium -p 4492 -bp 2251 &
    export APPIUM_PID_DEVICE_ONE=$!
    echo $APPIUM_PID_DEVICE_ONE
    sleep 10
}

run_tests(){
    ./node_modules/.bin/codeceptjs run --steps --reporter mochawesome
}

kill_all_appium_servers(){
    kill -9 $APPIUM_PID_DEVICE_ONE
    kill -9 $(ps aux | grep node | awk '{print $1}')
}

kill_all_appium_servers
start_appium_server

export LAUNCH_MODE="Android"
export PORT_NUMBER=4492
export UDID=""
export PLATFORM_VERSION="6.0.1"
export DEVICE_NAME="Samsung"
export APP_NAME="Centricity_Mobile.apk"
run_tests
kill_all_appium_servers


