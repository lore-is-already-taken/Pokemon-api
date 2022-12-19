#!/bin/bash

npm run build
rm -rf ../public
mv dist ../public
cd ../
firebase deploy
