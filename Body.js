/*
 * Body class
 */

'use strict';

korcode.oopchal.Body = function(init){

    var input  = new korcode.oopchal.Input({example:'987'});
    //var output  = new korcode.oopchal.Output({example:'987'});
    var input_value = $("#input").val();
    var obj = new MyConstructor(input_value, transport);
    console.log(obj);

    var url =  input.output;



}
