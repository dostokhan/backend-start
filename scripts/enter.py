#!/usr/bin/env python

import subprocess
from os.path import dirname, abspath
from os import chdir

chdir(dirname(dirname(abspath(__file__))))


showLog = 'docker-compose exec fullstack-backend bash'

subprocess.call(showLog.split())
