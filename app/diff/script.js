$(document).ready(function() {
    var comp = $('#mergely');
    
    function fetchJSON(url, callback) {
        $.get(url, function(data) {
            var json = JSON.parse(data);
            var formattedText = JSON.stringify(json, null, 2);
            callback(formattedText);
        });
    }

    comp.mergely({
        cmsettings: {
            readOnly: false,
            lineWrapping: true
        },
        wrap_lines: true,
		width: 'auto',
		height: 'auto',
		autoresize: true,
        
        lhs: function(setValue) {
            fetchJSON($("#file1").attr('href'), setValue);
        },
        rhs: function(setValue) {
            fetchJSON($("#file2").attr('href'), setValue);
        }
    });
	window.addEventListener('resize', () => {
		comp.mergely('resize');
		console.log('resize')
	});
    
    function changeOptions(changer) {
        var options = comp.mergely('options');
        changer(options);
        comp.mergely('options', options);
    }
    
    $('#prev').click(function() { comp.mergely('scrollToDiff', 'prev'); });
    $('#next').click(function() { comp.mergely('scrollToDiff', 'next'); });
    $('#wrap').click(function() { changeOptions(function(x) { x.wrap_lines = !x.wrap_lines; }); });
});