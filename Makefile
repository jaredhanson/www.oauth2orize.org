css:
	npx tailwindcss -i ./src/input.css -o ./www/css/output.css

xcss:
	./node_modules/.bin/node-sass css/main.scss www/stylesheet.css --include-path node_modules

#site: css
site:
	node site

.PHONY: css
