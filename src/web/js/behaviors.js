$(document).ready(function() {
    var hash = window.location.hash;
    if (hash.length > 0) {
        $('#mainFrame').attr('src', $('#mainFrame').attr('src') + hash);
    }
});
