start:
	npm run start

lint:
	npm run eslint

patch:
	bash ./buildUtils/build_version.sh -p

minor:
	bash ./buildUtils/build_version.sh -m

major:
	bash ./buildUtils/build_version.sh -M
