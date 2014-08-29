$(document).ready(function(){
	// показывает и скрывает ответ на соответствующий вопрос

	$(".select").click(function(event){
		//при клике на вопросы,сворачиваем все ответы
		$("dd").slideUp(200);
		// получаем атрибут у выбранного вопроса
		var question = $(this).data("question");
		// получаем ответ с таким же атрибутом
		var answer = $("dd[data-answer=" + question + "]");
		// показываем выбранный ответ
		answer.slideToggle(200);
	});
		
	// при клике на ответ, сворачивается
	$('dd').click(function(){
		$(this).slideUp(200);
	});	
}); 


