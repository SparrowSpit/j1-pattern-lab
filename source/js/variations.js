$(document).ready(function () {
    // BLOCKS START
    // Header
    $("#switch-block-header-noinput").change(function () {
        $(".showhide-block-header-button").addClass("showhide");
        $(".showhide-block-header-input").addClass("showhide");
    });
    $("#switch-block-header-button").change(function () {
        $(".showhide-block-header-button").removeClass("showhide");
        $(".showhide-block-header-input").addClass("showhide");
    });
    $("#switch-block-header-input").change(function () {
        $(".showhide-block-header-input").removeClass("showhide");
        $(".showhide-block-header-button").addClass("showhide");
    });
    $("#switch-block-header-pin").click(function () {
        $(".showhide-block-header-pin").toggleClass("showhide");
    });

    // Body
    $("#switch-single-column-body").change(function () {
        $(".showhide-single-column-body").removeClass("showhide");
        $(".showhide-two-column-body").addClass("showhide");
        $(".showhide-combo-column-body").addClass("showhide");
    });
    $("#switch-two-column-body").change(function () {
        $(".showhide-single-column-body").addClass("showhide");
        $(".showhide-two-column-body").removeClass("showhide");
        $(".showhide-combo-column-body").addClass("showhide");
    });
    $("#switch-combo-column-body").change(function () {
        $(".showhide-single-column-body").addClass("showhide");
        $(".showhide-two-column-body").addClass("showhide");
        $(".showhide-combo-column-body").removeClass("showhide");
    });
    $("#switch-options-dropdown").click(function () {
        $(".showhide-options-dropdown").toggleClass("showhide");
    });

    // Footer
    $("#switch-footer").click(function () {
        $(".showhide-footer").toggleClass("showhide");
    });
});
// BLOCKS END

// BUTTONS START

// BUTTONS END