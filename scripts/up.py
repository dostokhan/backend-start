#!/usr/bin/env python

from subprocess import call
import utils

utils.goToParentDir()

#  runProduction = isProduction()

#  createNetwork = 'docker network ls|grep fullstack > /dev/null || docker network create fullstack'
#  subprocess.check_output(['bash','-c', createNetwork])

#  if runProduction
#      startBackendContainers = 'CURRENT_UID=$(id -u):$(id -g) docker-compose -f docker-compose.yml -f docker-compose.production.yml up -d'
#  else:
#  startBackendContainers = f"CURRENT_UID={str(os.geteuid())}:{str(os.getegid())} docker-compose -f docker-compose.yml -f docker-compose.override.yml up -d"

startBackendContainers = 'docker-compose -f docker-compose.yml -f docker-compose.override.yml up -d'
call(startBackendContainers.split());
print('backend up')
