
$(document).ready(function () {
    // Default Popover
    $('#mol-popover [data-toggle=\"popover\"]').popover({
        placement: 'bottom',
        html: true,
        title: 'Popover Title <button type="button" data-dismiss="alert" class="btn btn-link mol-close"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span><span class="sr-only">Close this popover</span></button>',
        content: '<p>Sed lobortis imperdiet leo. Vivamus mollis erat gravida, faucibus arcu euismod, tincidunt justo. Donec fringilla faucibus lacus, quis tincidunt ex laoreet vitae.</p>'
    });
    $(document).on("click", ".popover .mol-close", function () {
        $(this).parents(".popover").popover('hide');
    });

    // List Key
    $('#mol-list-key [data-toggle=\"popover\"]').popover({
        placement: 'bottom',
        html: true,
        title: 'List Key <button type="button" data-dismiss="alert" class="btn btn-link mol-close"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span><span class="sr-only">Close this popover</span></button>',
        content: '<ul class="list" aria-label="List of available states for the accompanying list rows"><li class="full-list-key-success"><span aria-hidden="true"></span>Success<span class="sr-only"> - Light green background</span></li><li class="full-list-key-warning"><span aria-hidden="true"></span>Warning<span class="sr-only"> - Light orange background</span></li><li class="full-list-key-danger"><span aria-hidden="true"></span>Danger<span class="sr-only"> - Light red background</span></li><li class="full-list-key-past"><span aria-hidden="true"></span>Past<span class="sr-only"> - Light gray background</span></li><li class="full-list-key-inactive"><span aria-hidden="true"></span>Inactive<span class="sr-only"> - Striped gray background</span></li></ul>'
    });
    
    $(document).on("click", ".popover .mol-close", function () {
        $(this).parents(".popover").popover('hide');
    });
});
