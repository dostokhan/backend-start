#!/usr/bin/env python

#  import subprocess
import os
import utils

utils.goToParentDir()

showLog = f"CURRENT_UID={str(os.geteuid())}:{str(os.getegid())} docker-compose exec fullstack-backend bash"
os.system(showLog)
