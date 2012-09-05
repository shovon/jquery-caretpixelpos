$(function () {
    var textarea = $('#text_area');
    textarea.click(function () {
        var pos = textarea.caretpixelpos();
        console.log("X: " + pos.left);
        console.log("Y: " + pos.top);
    });
    $('#text_area').caretpixelpos();
});