#!/bin/bash

export FLASK_APP=app.py
export FLASK_ENV=development

python3 -m flask run --port 5000