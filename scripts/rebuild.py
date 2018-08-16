#!/usr/bin/env python

import subprocess
from os.path import dirname, abspath
from os import chdir

chdir(dirname(dirname(abspath(__file__))))

print('Removing backend_node_modules VOLUME')
removeVolume = 'docker volume rm backend_node_modules'
subprocess.call(removeVolume.split())


print('Remove fullstack-backend docker IMAGE')
removeImage = 'docker image rm fullstack-backend'
subprocess.call(removeImage.split())

print('Run Up Script')
