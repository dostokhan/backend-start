#!/usr/bin/env python

import subprocess
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("-isProduction", help="Run in Production Config", default="development")
args = parser.parse_args()

if args.isProduction == 'production':
    startBackendContainers = 'docker-compose -f docker-compose.yml -f docker-compose.production.yml up -d'
else:
    startBackendContainers = 'docker-compose -f docker-compose.yml -f docker-compose.override.yml up -d'

subprocess.check_output(['bash', '-c', startBackendContainers])

print('frontend Up')

