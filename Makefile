www: html css

html:
	node ./bin/html

css:
	npx tailwindcss -i ./src/input.css -o ./www/assets/stylesheets/all.css

.PHONY: css
