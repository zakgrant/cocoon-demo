$(document).ready(function() {

    $("#tags a.add_fields").
      data("association-insertion-position", 'before').
      data("association-insertion-node", 'this');

    $('.tabs').tabs();
});