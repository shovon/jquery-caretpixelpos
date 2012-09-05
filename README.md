jquery-caretpixelpos
====================

A jQuery plugin to determine the pixel position of a caret.

## How to Use

Let's say you wanted to grab the caret position of a textbox everytime the user clicks it. This is how you would do it.

```JavaScript
$(function () {
    var textarea = $('#text_area');
    textarea.click(function () {
        var pos = textarea.caretpixelpos();
        console.log("X: " + pos.left);
        console.log("Y: " + pos.top);
    });
    $('#text_area').caretpixelpos();
});
```

## Note

Please note that calling the `caretpixelpos` adds a `positioner` property to the jQuery object that it was called on.

## Acknowledgement

All thanks goes to [@**kir**](https://github.com/kir), for the wonderful piece of code that actually allows us to grab the caret position. You can check out the original work over at his repository, [js_cursor_position](https://github.com/kir/js_cursor_position)
