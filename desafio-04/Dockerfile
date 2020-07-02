FROM python:3

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

RUN useradd -ms /bin/bash django

USER django

ENV PYTHONUNBUFFERED 1

WORKDIR /home/django/app

ENV PATH $PATH:/home/django/.local/bin

COPY requirements.txt /home/django/app

RUN pip install -r requirements.txt

COPY . /home/django/app

CMD ["./.docker/app-entrypoint.sh"]

EXPOSE 8000

ENV ADDR=0.0.0.0