function askQuestions(){	

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + '' + lastName;

	$('h2').text('Hello ' + fullName)




	if (firstName == "General" && lastName!= "Assembly") {

		console.log('Greet the general');
	}

	if (firstName == "General" && lastName == "Assembly") {

		console.log('Do not greet the general');
	}
		

	var faveColour = prompt('What is your favourite colour?');

	if (faveColour == 'red' ||
		faveColour == 'green' ||
		faveColour == 'blue' ||
		faveColour == 'yellow') {

		$('h1').css('color',faveColour);
	}
}

//when the page has loaded
//$(document).on('ready'), function (){}
$ (function(){

	//When the user click the image, ask questions)
$('img').on('click', askQuestions);
	//hide all the sections to begin with
	$('h3').next().hide();

	//when the user click an h3 element
	$('h3').on('click',function(){
		//Toggle the next element 
		$(this).next().slideToggle();
	});

})

