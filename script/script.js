let from = 0;
let to = 0;
let selected;
let complexity = 0.85;
let size = 0.85;
let speed = 1;
let firstselect = true;

/* Get the selected value */
$('#project-type').change(function() {
	/* Show the other content after selection */
  if(firstselect){
		$('#pricing-calculator .section-title h1').animate({
    	'marginTop':'-100%'
    },1000);
		$('#pricing-calculator .calculator-body').fadeIn(500);
		$('#pricing-calculator .profile-wrapper').fadeIn(500);
    firstselect = false;
  }
  
  selected = $(this).find('option:selected').val();
  selectedoption(selected);
  calculate();
});

/* Get the complexity value */
$('#complexity-form').change(function() {
  complexity = $(this).find('input[name=compexity]:checked').val();
  calculate();
});

/* Get the size value */
$('#size-form').change(function() {
  size = $(this).find('input[name=size]:checked').val();
  calculate();
});

/* Get the speed value */
$('#speed-form').change(function() {
  speed = $(this).find('input[name=speed]:checked').val();
  calculate();
});

/* Change the content of profile if called */
function selectedoption(selectedproject){
	let src;
  let title;
  let content;
  let name;
  let email;
  
	switch(true){
    case selectedproject == 'fa':
			src = 'https://s3-eu-west-1.amazonaws.com/altario-wordpressmedia/wp-content/uploads/2020/04/09141514/daniel-smile-square.png';
      title = 'Building a Fintech Application?';
      content = 'Then you should talk to me. I\'m an expert in Fintech Applications and I\'ll be glad to discuss the project with you and also give you a correct estimation for it.';
      name = 'EMAIL DANIEL';
      email = 'mailto:daniel@example.com';
      
  		from = 10;
      to = 30;
      break;
      
    case selectedproject == 'dmt':
      src = 'https://s3-eu-west-1.amazonaws.com/altario-wordpressmedia/wp-content/uploads/2020/04/09141501/claudio-smile-square.png';
      title = 'Building a Data Mining Tool?';
      content = 'Then you should talk to me. I\'m an expert in Data Mining Tools and I\'ll be glad to discuss the project with you and also give you a correct estimation for it.';
      name = 'EMAIL CLAUDIO';
      email = 'mailto:claudio@example.com';
      
  		from = 20;
      to = 40;
      break;
      
    case selectedproject == 'oba':
      src = 'https://s3-eu-west-1.amazonaws.com/altario-wordpressmedia/wp-content/uploads/2020/04/09141533/lopes-smile-square.png';
      title = 'Building a Open Banking App?';
      content = 'Then you should talk to me. I\'m an expert in Open Banking App and I\'ll be glad to discuss the project with you and also give you a correct estimation for it.';
      name = 'EMAIL ANDRE';
      email = 'mailto:andre@example.com';
      
  		from = 30;
      to = 50;
      break;
      
    case selectedproject == 'mp':
      src = 'https://s3-eu-west-1.amazonaws.com/altario-wordpressmedia/wp-content/uploads/2020/04/09141501/claudio-smile-square.png';
      title = 'Building a Marketplace?';
      content = 'Then you should talk to me. I\'m an expert in Marketplace and I\'ll be glad to discuss the project with you and also give you a correct estimation for it.';
      name = 'EMAIL CLAUDIO';
      email = 'mailto:claudio@example.com';
      
  		from = 40;
      to = 60;
      break;
      
    case selectedproject == 'api':
      src = 'https://s3-eu-west-1.amazonaws.com/altario-wordpressmedia/wp-content/uploads/2020/04/09141514/daniel-smile-square.png';
      title = 'Building a API?';
      content = 'Then you should talk to me. I\'m an expert in API and I\'ll be glad to discuss the project with you and also give you a correct estimation for it.';
      name = 'EMAIL DANIEL';
      email = 'mailto:daniel@example.com';
      break;
      
    case selectedproject == 'abd':
      src = 'https://s3-eu-west-1.amazonaws.com/altario-wordpressmedia/wp-content/uploads/2020/04/09141533/lopes-smile-square.png';
      title = 'Building a Analytics/ BI Dashboard?';
      content = 'Then you should talk to me. I\'m an expert in Analytics/ BI Dashboard and I\'ll be glad to discuss the project with you and also give you a correct estimation for it.';
      name = 'EMAIL ANDRE';
      email = 'mailto:andre@example.com';
      
  		from = 50;
      to = 70;
      break;
      
    case selectedproject == 'csn':
      src = 'https://s3-eu-west-1.amazonaws.com/altario-wordpressmedia/wp-content/uploads/2020/04/09141514/daniel-smile-square.png';
      title = 'Building a Community / Social Network?';
      content = 'Then you should talk to me. I\'m an expert in Community / Social Network and I\'ll be glad to discuss the project with you and also give you a correct estimation for it.';
      name = 'EMAIL DANIEL';
      email = 'mailto:daniel@example.com';
      
  		from = 60;
      to = 80;
      break;
      
    case selectedproject == 'aia':
      src = 'https://s3-eu-west-1.amazonaws.com/altario-wordpressmedia/wp-content/uploads/2020/04/09141501/claudio-smile-square.png';
      title = 'Building a Artificial Intelligence Application?';
      content = 'Then you should talk to me. I\'m an expert in Artificial Intelligence Application and I\'ll be glad to discuss the project with you and also give you a correct estimation for it.';
      name = 'EMAIL CLAUDIO';
      email = 'mailto:claudio@example.com';
      
  		from = 70;
      to = 90;
      break;
      
    case selectedproject == 'aote':
      src = 'https://s3-eu-west-1.amazonaws.com/altario-wordpressmedia/wp-content/uploads/2020/04/09141533/lopes-smile-square.png';
      title = 'Building a AI on the edge?';
      content = 'Then you should talk to me. I\'m an expert in AI on the edge and I\'ll be glad to discuss the project with you and also give you a correct estimation for it.';
      name = 'EMAIL ANDRE';
      email = 'mailto:andre@example.com';
      
  		from = 80;
      to = 100;
      break;
      
    case selectedproject == 'me':
      src = 'https://s3-eu-west-1.amazonaws.com/altario-wordpressmedia/wp-content/uploads/2020/04/09141501/claudio-smile-square.png';
      title = 'Building a Music & Entertainment App?';
      content = 'Then you should talk to me. I\'m an expert in Music & Entertainment App and I\'ll be glad to discuss the project with you and also give you a correct estimation for it.';
      name = 'EMAIL CLAUDIO';
      email = 'mailto:claudio@example.com';
      
  		from = 90;
      to = 110;
      break;
      
    case selectedproject == 'rs':
      src = 'https://s3-eu-west-1.amazonaws.com/altario-wordpressmedia/wp-content/uploads/2020/04/09141514/daniel-smile-square.png';
      title = 'Building a Regtech Software?';
      content = 'Then you should talk to me. I\'m an expert in Regtech Software and I\'ll be glad to discuss the project with you and also give you a correct estimation for it.';
      name = 'EMAIL DANIEL';
      email = 'mailto:daniel@example.com';
      
  		from = 100;
      to = 120;
      break;
      
    case selectedproject == 'sip':
      src = 'https://s3-eu-west-1.amazonaws.com/altario-wordpressmedia/wp-content/uploads/2020/04/09141533/lopes-smile-square.png';
      title = 'Building a System Integration Project?';
      content = 'Then you should talk to me. I\'m an expert in System Integration Project and I\'ll be glad to discuss the project with you and also give you a correct estimation for it.';
      name = 'EMAIL ANDRE';
      email = 'mailto:andre@example.com';
      
  		from = 110;
      to = 130;
      break;
      
    case selectedproject == 'bca':
      src = 'https://s3-eu-west-1.amazonaws.com/altario-wordpressmedia/wp-content/uploads/2020/04/09141514/daniel-smile-square.png';
      title = 'Building a Blockchain App?';
      content = 'Then you should talk to me. I\'m an expert in Blockchain App and I\'ll be glad to discuss the project with you and also give you a correct estimation for it.';
      name = 'EMAIL DANIEL';
      email = 'mailto:daniel@example.com';
      
  		from = 120;
      to = 140;
      break;
      
    case selectedproject == 'lsa':
      src = 'https://s3-eu-west-1.amazonaws.com/altario-wordpressmedia/wp-content/uploads/2020/04/09141501/claudio-smile-square.png';
      title = 'Building a Lifestyle App?';
      content = 'Then you should talk to me. I\'m an expert in Lifestyle App and I\'ll be glad to discuss the project with you and also give you a correct estimation for it.';
      name = 'EMAIL CLAUDIO';
      email = 'mailto:claudio@example.com';
      
  		from = 130;
      to = 150;
      break;
      
    case selectedproject == 'hfa':
      src = 'https://s3-eu-west-1.amazonaws.com/altario-wordpressmedia/wp-content/uploads/2020/04/09141533/lopes-smile-square.png';
      title = 'Building a Health & Fitness App?';
      content = 'Then you should talk to me. I\'m an expert in Health & Fitness App and I\'ll be glad to discuss the project with you and also give you a correct estimation for it.';
      name = 'EMAIL ANDRE';
      email = 'mailto:andre@example.com';
      
  		from = 140;
      to = 160;
      break;
      
    case selectedproject == 'ta':
      src = 'https://s3-eu-west-1.amazonaws.com/altario-wordpressmedia/wp-content/uploads/2020/04/09141501/claudio-smile-square.png';
      title = 'Building a Travel App?';
      content = 'Then you should talk to me. I\'m an expert in Travel App and I\'ll be glad to discuss the project with you and also give you a correct estimation for it.';
      name = 'EMAIL CLAUDIO';
      email = 'mailto:claudio@example.com';
      
  		from = 150;
      to = 170;
      break;
      
    case selectedproject == 'sa':
      src = 'https://s3-eu-west-1.amazonaws.com/altario-wordpressmedia/wp-content/uploads/2020/04/09141514/daniel-smile-square.png';
      title = 'Building a Sports App?';
      content = 'Then you should talk to me. I\'m an expert in Sports App and I\'ll be glad to discuss the project with you and also give you a correct estimation for it.';
      name = 'EMAIL DANIEL';
      email = 'mailto:daniel@example.com';
      
  		from = 160;
      to = 180;
      break;
  }
  
  
  $('#pricing-calculator .profile-wrapper .profile-image img').fadeTo(500,0.30, function() {
      $(this).attr("src",src);
  }).fadeTo(500,1);
  $('#pricing-calculator .profile-wrapper .profile-content h3').text(title);
  $('#pricing-calculator .profile-wrapper .profile-content p').text(content);
  $('#pricing-calculator .profile-wrapper .profile-content a').text(name);
  $('#pricing-calculator .profile-wrapper .profile-content a').attr('href',email);
}


/* Calculate project */
function calculate(){
	let totalfrom = from * complexity * size * speed;
	let totalto = to * complexity * size * speed;
  $('#pricing-calculator .calculator-wrapper .calculator-answer .price-left h4').html(totalfrom.toFixed(0) + "<span>k$</span>");
  $('#pricing-calculator .calculator-wrapper .calculator-answer .price-right h4').html(totalto.toFixed(0) + "<span>k$</span>");
}
