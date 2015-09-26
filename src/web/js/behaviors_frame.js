$(document).ready(function() {
    $('span.aa a').each(function(i, e) {
        var name = e.text.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
        $(e).attr('name', name);
        $(e).after('<span>&nbsp;</span><a href="#'+name+'" onclick="window.parent.document.location.replace(\''+window.parent.document.location.pathname+'#'+name+'\'); return false;">#</a>');
    });
    var hash = window.location.hash;
    if (hash.length > 0) {
        $('a[name='+hash.substring(1, hash.length)+']').css('background-color', 'red');
    }
});
