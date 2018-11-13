#!/usr/bin/env python


from subprocess import call
import sys

if sys.argv[1] == 'up':
    call(['bash', '-c', 'docker-compose -f docker-compose.yml up -d'])
elif sys.argv[1] == 'down':
    call(['bash', '-c', 'docker-compose -f docker-compose.yml down'])
elif sys.argv[1] == 'log':
    call(['bash', '-c', 'docker-compose logs --follow backend-mongo'])
elif sys.argv[1] == 'bash':
    call(['bash', '-c', 'docker-compose exec backend-mongo bash'])
else:
    print('oh snap!')
