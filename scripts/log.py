#!/usr/bin/env python

import subprocess
import utils

utils.goToParentDir()

showLog = 'docker-compose logs --follow fullstack-backend'
subprocess.call(showLog.split())
