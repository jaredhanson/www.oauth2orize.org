css:
	npx tailwindcss -i ./src/input.css -o ./www/assets/stylesheets/all.css

#site: css
site:
	node site

.PHONY: css
