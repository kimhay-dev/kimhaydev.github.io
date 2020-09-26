$(document).ready(function () {

    $('#config-close').on('click', function (e) {
        e.preventDefault();
        $('#config-trigger').click();
    });

});