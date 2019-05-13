/*
 * Input class
 */

'use strict';
var input_value;
korcode.oopchal.Input = function(init)
{
    var self  = $('<section>', {class:'korcode-oopchal-input'});
    var div = $('<div>');
    var form = $('<form>', {class:'inputForm'});
    var label = $('<form>', {text:'Enter the URL :'});
    var input = $('<input>', {type:'url', id:'input', placeholder:' https://www.korcode.com ', name:'input'});
    var button = $('<input>', {type:'button', id:'go_button', value:'Go'});
   // var output = $('<output>', {type:'url', id:'output', name:'output'});
    self.append([div, form, label,input, button]);
    return self;
}
function MyConstructor(input_value, transport) {
    var self = this;
    this.input_value = input_value;
    transport.on('input_value', function() {
        alert("check two", self.input_value);
    });
}
$(document).ready(function() {
    alert("checkone")
    $('#go_button').click(function () {
        input_value = $("#input").val();
        if (input_value == '') {
            alert("Please enter a URL!");
        }
        MyConstructor(input_value, transport);
    });
});
var transport = {
    on: function(event, callback) {
        setTimeout(callback, 1000);
    }
};
