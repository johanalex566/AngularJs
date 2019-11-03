$(function() {

    $('.galeria .contenedor-imagen').on('click', function() {

        $('#modal').modal;
        var route = ($(this).find('img').attr('src'));
        $('#img-modal').attr('src', route);
    })

    $('#modal').on('click', function() {
        $('#modal').modal('hide');
    })
})