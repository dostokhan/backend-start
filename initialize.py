#!/usr/bin/env python

import sys
import random
import string



isProduction = len(sys.argv) > 1  and sys.argv[1] == 'production'
email= 'imonir.com@gmail.com'


# CONTAINERS
containerRedis = 'backend-redis';
containerMongo = 'backend-mongo';
containerBack = 'backend-start';
containerFront = 'frontend-start';

# ENV VARIABLES
nodeEnv = 'production' if isProduction else 'development'

# host names
virtualHostBack = 'api.fullstack.imonir.com' if isProduction else 'local.api.fullstack.imonir.com'
virtualHostFront = 'www.fullstack.imonir.com' if isProduction else 'local.www.fullstack.imonir.com'


# DATABASE
databaseName = 'fullstack'
databaseUser = 'databaseUser'
databasePassword = 'asdf23sagf322343likosdahv'
databaseRootPassword = 'asdf32asdf23aso2134hosdfo3'
databasePort = '29017'
mongoExtraFlags = '--wiredTigerCacheSizeGB=2'

# BACK
jwtSecret = ''.join(random.choice(string.ascii_uppercase + string.digits + string.ascii_lowercase) for _ in range(26))
portBack = '8000'
corsOrigin = f"https://{virtualHostFront},http://{containerFront}"

# FRONT
portFront = '80'
apiUrlInBrowser = f"https://{virtualHostBack}"
apiUrlInContainer = f"http://{containerBack}"



# ENV
#  redisEnv = f"CONTAINER_REDIS={containerRedis}\n"

mongoEnv = f"CONTAINER_MONGO={containerMongo}\n"\
  f"MONGODB_EXTRA_FLAGS={mongoExtraFlags}\n"\
  f"MONGODB_ROOT_PASSWORD={databaseRootPassword}\n"\
  f"MONGODB_PRIMARY_HOST=mongodb-primary\n"\
  "\n"\
  f"MONGODB_DATABASE={databaseName}\n"\
  f"MONGODB_USERNAME={databaseUser}\n"\
  f"MONGODB_PASSWORD={databasePassword}\n"\
  f"MONGODB_PORT_NUMBER={databasePort}\n"


backEnv = f"NODE_ENV={nodeEnv}\n"\
  f"PORT={portBack}\n"\
  f"JWT_SECRET={jwtSecret}\n"\
  f"CORS_ORIGIN={corsOrigin}\n"\
  "\n"\
  f"CONTAINER_BACK={containerBack}\n"\
  f"CONTAINER_MONGO={containerMongo}\n"\
  f"VIRTUAL_HOST={virtualHostBack}\n"\
  "\n"\
  f"MONGODB_DATABASE={databaseName}\n"\
  f"MONGODB_USERNAME={databaseUser}\n"\
  f"MONGODB_PASSWORD={databasePassword}\n"\
  f"MONGODB_PORT_NUMBER={databasePort}\n"

#  frontEnv = f"NODE_ENV={nodeEnv}\n"\
#    f"PORT={portFront}\n"\
#    "\n"\
#    f"API_URL_IN_BROWSER={apiUrlInBrowser}\n"\
#    f"API_URL_IN_CONTAINER={apiUrlInContainer}\n"\
#    "\n"\
#    f"VIRTUAL_HOST={virtualHostFront}\n"\
#    f"CONTAINER_BACK={containerBack}\n"\
#    f"CONTAINER_FRONT={containerFront}\n"\
#    f"DOCKER_NETWORK={dockerNetwork}"


if isProduction:
  print(f"Production Config\n")
  #  frontEnv += f"\n"\
  #    f"LETSENCRYPT_HOST={virtualHostFront}\n"\
  #    f"LETSENCRYPT_EMAIL={email}\n"

  backEnv += f"\n"\
    f"LETSENCRYPT_HOST={virtualHostBack}\n"\
    f"LETSENCRYPT_EMAIL={email}\n"


# REDIS
#  with open('./redis/.env', 'w+') as f:
#      print('Creating front/.env')
#      f.write(redisEnv)

# MONGO
with open('./mongo/.env', 'w+') as f:
    print('Creating mongo/.env')
    f.write(mongoEnv)

# BACK
with open('.env', 'w+') as f:
    print('Creating .env')
    f.write(backEnv)

# FRONT
#  with open('./front/.env', 'w+') as f:
#      print('Creating front/.env')
#      f.write(frontEnv)
