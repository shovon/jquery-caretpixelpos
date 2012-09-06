$(function () {
    var textarea = $('#text_area');
    textarea.click(function () {
        var pos = textarea.caretpixelpos();
        console.log("X: " + pos.left);
        console.log("Y: " + pos.top);
        console.log("Child X: " + pos.childPos.left);
        console.log("Child Y: " + pos.childPos.top);
    });
    $('#text_area').caretpixelpos();
});