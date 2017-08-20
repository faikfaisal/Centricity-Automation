#!/bin/bash
start_appium_server(){
    appium -p 4492 -bp 2251 &
    APPIUM_PID_DEVICE_ONE=$!
    appium -p 4491 -bp 2252 &
    APPIUM_PID_DEVICE_TWO=$!
    sleep 10
}

run_test_in_parallel(){
    ./node_modules/.bin/codeceptjs run --steps --reporter mochawesome &
}

kill_all_appium_servers(){
    kill -9 $(ps aux | grep node | awk '{print $1}')
}

kill_all_appium_servers
start_appium_server

export LAUNCH_MODE="Android"
export PLATFORM_VERSION="6.0.1"
export DEVICE_NAME="Samsung"
export APP_NAME="Centricity_Mobile.apk"

export PORT_NUMBER=4492
export UDID="1115fba975732805"
run_test_in_parallel

export PORT_NUMBER=4491
export UDID="5203a164b465436b"
run_test_in_parallel


