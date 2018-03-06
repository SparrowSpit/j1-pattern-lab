jQuery(function($){
    $('.table').footable({
        "rows": [{
            "options": {
                "expanded": true,
                "classes": "your-css-class"
            },
            "value": {
                "id": {
                    "options": {
                        "classes": "your-css-class"
                    },
                    "value": 1
                },
                "firstName": "Dennise",
                "lastName": "Fuhrman",
                "jobTitle": "High School History Teacher",
                "started": "November 8th 2011",
                "dob": "July 25th 1960"
            }
        }]
    });
});