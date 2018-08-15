#!/usr/bin/env python

import subprocess

showLog = 'docker-compose logs --follow backend'

subprocess.call(['bash', '-c', showLog])
