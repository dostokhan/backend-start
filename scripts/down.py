#!/usr/bin/env python

from subprocess import call
import utils

utils.goToParentDir()
#  runProduction = isProduction()

#  if runProduction
#      print("Production Config")
#      stopBackendContainers = 'docker-compose -f docker-compose.yml -f docker-compose.production.yml down'
#  else:
stopBackendContainers = 'docker-compose -f docker-compose.yml -f docker-compose.override.yml down'
call(stopBackendContainers.split())
print('backend Down')
