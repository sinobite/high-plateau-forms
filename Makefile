start:
	npm run start

lint:
	npm run eslint

lib:
	rm -rf lib
	npm run build-lib

patch:
	make lib
	bash ./buildUtils/build_version.sh -p

minor:
	make lib
	bash ./buildUtils/build_version.sh -m

major:
	make lib
	bash ./buildUtils/build_version.sh -M
