.PHONY: build serve clean help

help:
	@echo "make build  - build the site into public/"
	@echo "make serve  - run local dev server with live reload"
	@echo "make clean  - remove build output and Hugo cache"

build:
	hugo --minify

serve:
	hugo server -D

clean:
	rm -rf public resources
