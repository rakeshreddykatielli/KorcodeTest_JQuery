/*
 * Output class
 */

'use strict';

korcode.oopchal.Output = function(init){

    var output = $('<output>', {type:'url', id:'output', placeholder:' status ', name:'output'});


    $(function(){
        $.get( "./korcode-oop-challenge/oop./ajax.txt", function( data ) {
            var fileContent = data;
        });
    });
    $(function(){
        alert('inside ajax');
        $.ajax({
            url: "./korcode-oop-challenge/oop./ajax.txt",
            async: true,
            cache: false,
            dataType: "text",
            success: function( data, textStatus, jqXHR ) {
            }
        });
    });



}