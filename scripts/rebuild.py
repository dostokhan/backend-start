#!/usr/bin/env python

import subprocess
import utils

utils.goToParentDir()

print('Removing backend_node_modules VOLUME')
removeVolume = 'docker volume rm backend_node_modules'
subprocess.call(removeVolume.split())


print('Remove fullstack-backend docker IMAGE')
removeImage = 'docker image rm fullstack-backend'
subprocess.call(removeImage.split())

print('Run Up Script')
