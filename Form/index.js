$(document).ready(function() {
    $("button").click(function() {
        var x = $("form").serializeArray();
        $.each(x, function(i, field) {
            $("#result").append(field.name + ":"
                    + field.value + " " +"<br>");
        });
    });
});

