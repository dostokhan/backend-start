#!/usr/bin/env python


from subprocess import call
import sys

if sys.argv[1] == 'up':
    call(['bash', '-c', 'docker-compose -f docker-compose.yml up -d'])
elif sys.argv[1] == 'down':
    call(['bash', '-c', 'docker-compose -f docker-compose.yml down'])
elif sys.argv[1] == 'log':
    call(['bash', '-c', 'docker-compose -f docker-compose.yml logs --follow backend-start'])
elif sys.argv[1] == 'bash':
    call(['bash', '-c', 'docker-compose -f docker-compose.yml exec backend-start bash'])
else:
    print('oh snap!')


if len(sys.argv) > 2:
    if sys.argv[2] == 'all':
        call(['bash', '-c', f"cd mongo && ./run.py {sys.argv[1]}"])
    else:
        call(['bash', '-c', f"cd {sys.argv[2]} && ./run.py {sys.argv[1]}"])

