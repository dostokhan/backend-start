#!/usr/bin/env python

from subprocess import call
import utils

utils.goToParentDir()

showLog = 'docker-compose exec fullstack-backend bash'
call(showLog.split())
