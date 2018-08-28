#!/usr/bin/env python

from subprocess import Popen, PIPE
import utils
import os

utils.goToParentDir()
#  runProduction = isProduction()

#  createNetwork = 'docker network ls|grep fullstack > /dev/null || docker network create fullstack'
#  subprocess.check_output(['bash','-c', createNetwork])

#  if runProduction
#      startProxyContainers = 'CURRENT_UID=$(id -u):$(id -g) docker-compose -f docker-compose.yml -f docker-compose.production.yml up -d'
#  else:
startProxyContainers = f"CURRENT_UID={str(os.geteuid())}:{str(os.getegid())} docker-compose -f docker-compose.yml -f docker-compose.override.yml up -d"

#  process = Popen(startProxyContainers.split(), stdout=PIPE)
#  output, error = process.comunicate()
os.system(startProxyContainers);

print('backend Up')
