window.addEventListener('load', function(e){
    total()
    $('.form__radio').on('click', function(){
        let value = $(this).attr('value');
        chek = $(this).attr('data-price');
        select = $('#number option:selected').val()
        $('.form__selected span').text(value);
        total(chek, select)


    })

    $('#number').on('change',function(){
        select = $(this).val();
        chek = $('.form__radio:radio:checked').attr('data-price');
        total(chek, select);
        
    })

    function total(chek = 34, select= 1){
        let result = parseInt(chek) * parseInt(select)
        $('#total').text(result);
        $('.input__total').val(result);
    }
})



    
