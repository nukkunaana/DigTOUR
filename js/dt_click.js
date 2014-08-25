$(document).ready(function(){

	$('.select').click(function(){
		var question = $(this).data("question");
		var answer= $("dd[data-answer=" + question+ "]");

		answer.slideToggle(200);
	});

	$('dd').click(function(){
		$(this).slideUp(200);
	});
});