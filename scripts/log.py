#!/usr/bin/env python

from subprocess import call
import utils

utils.goToParentDir()

showLog = 'docker-compose logs --follow fullstack-backend'
call(showLog.split())
