all:
	mkdir -p bin
	cat src/selection_range.js src/string_splitter.js src/cursor_position.js src/jquery.caretpixelpos.js  > bin/jquery.caretpixelpos.js-temp
	uglifyjs bin/jquery.caretpixelpos.js-temp > bin/jquery.caretpixelpos.min.js
	rm bin/jquery.caretpixelpos.js-temp

clean:
	rm -r bin