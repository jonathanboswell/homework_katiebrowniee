var days = ['m', 't', 'w', 'th', 'f', 's', 'su'];
var phases = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

$('button').click(function(){
	
    var index = $(this).val();
    var phase = phases[index];
    $('#moon').removeClass();
    $('#moon').addClass(phase);
    console.log(phase);

});