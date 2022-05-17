www: html css

html:
	node site

css:
	npx tailwindcss -i ./src/input.css -o ./www/assets/stylesheets/all.css

.PHONY: css
