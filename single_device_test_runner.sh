#!/bin/bash
start_appium_android(){
    appium -bp 2251 &
    export APPIUM_PID_DEVICE_ONE=$!
    echo $APPIUM_PID_DEVICE_ONE
    echo "Pausing the process for 15 seconds to fire up appium"
    sleep 15
}

start_appium_ios(){
    appium &
    export APPIUM_PID_DEVICE_ONE=$!
    echo $APPIUM_PID_DEVICE_ONE
    echo "Pausing the process for 15 seconds to fire up appium"
    sleep 15
}

start_web_proxy() {
    ios_webkit_debug_proxy -c $UDID:27753 -d &
}

run_tests(){
    ./node_modules/.bin/codeceptjs run --steps --reporter mochawesome
}

kill_all_appium_servers(){
    kill -9 $APPIUM_PID_DEVICE_ONE
    kill -9 $(ps aux | grep node | awk '{print $1}')
}

echo $1

if [ "$1" == "android"]
then
start_appium_android
export LAUNCH_MODE="Android"
export UDID=""
export ANDROID_PLATFORM_VERSION="6.0.1"
export ANDROID_DEVICE_NAME="Samsung"
else
echo "Running ios"
export LAUNCH_MODE="ios" 
export IOS_DEVICE_NAME="iPhone"
export IOS_PLATFORM_VERSION="10.3.3"
export UDID="912c2bf3f479a66dcf3d999fbfa7dc44c5e9f7f3"
start_web_proxy
start_appium_ios
fi
run_tests
kill_all_appium_servers


