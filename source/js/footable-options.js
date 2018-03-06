jQuery(function ($) {
    $('.table').footable({
        "paging": {
            "enabled": true
        },
        "filtering": {
            "enabled": false
        },
        "sorting": {
            "enabled": true
        },
        "columns": $.get("../../js/columns.json"),
        "rows": $.get("../../js/rows.json")
    });
});