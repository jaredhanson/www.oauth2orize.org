www: html css

html:
	node pages

css:
	npx tailwindcss -i ./src/input.css -o ./www/assets/stylesheets/all.css

.PHONY: css
