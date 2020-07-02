#!/bin/bash

pip install --cache-dir=/home/django/app/.docker/.pip -r requirements.txt
python manage.py migrate
python manage.py runserver 0.0.0.0:8000