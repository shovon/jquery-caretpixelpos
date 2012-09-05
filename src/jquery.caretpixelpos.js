(function($) {
    /**
     * Use this plugin if you want to find out the current pixel position of the
     * caret on a text box (either text input or textarea).
     *
     * @returns an object with the properties `left` and `top`, representing the
     *     x and y coordinates, respectively.
     */
    $.fn.caretpixelpos = function () {
        if (typeof this.positioner == 'undefined') {
            this.positioner = new maxkir.CursorPosition(this[0], 7);
        }

        var child_pos = this.positioner.getPixelCoordinates();
        var t_pos = this.offset();

        return {
            left: t_pos.left + child_pos[0],
            top: t_pos.top + child_pos[1]
        };
    };
}.call(this, jQuery));