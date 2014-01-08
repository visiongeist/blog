var $ = jQuery;

var cloneTest = {
	$original : undefined,
	$fieldset : undefined,
	
	init : function(selector) {
		var t = this;
		
		t.$fieldset = $(selector).find('fieldset');
		t.$original = $(selector).find('input#original');
		$(selector).find('input.trigger').bind('click', function(e) {
			e.preventDefault();
			console.log('Button pressed... clone test executed');
			
			$(this).hide();
			t.insert();
		});
		
		console.log('clone test initialized with ' + selector);
	},
	
	insert : function() {
		var t = this;
		var $copy = t.$original.first().parent().clone();
		console.log('Element was cloned');
		
		t.$fieldset.append('<div>Okay.... first I created a copy of my element<br />' +
			'<span class="code">var $copy = t.$original.first().parent().clone();</span><br />' +
			'then I changed the value of the input field<br />' +
			'<span class="code">$copy.find(\'input\').val(\'changed value\');</span><br />' +
			'Afterwards I inserted the element with the $.after command<br />' +
			'<span class="code">t.$fieldset.append($copy);</span><br />' +
			'</div>'
		);
		
		$copy.find('input').val('changed value');
		console.log('Clone was changed');
		t.$fieldset.append($copy);
		console.log('Clone element was added to DOM');
		
		t.$fieldset.append('<div>Easy-going, however if you try not to insert the element but the value received by $.html()....<br />' +
			'<span class="code">t.$fieldset.append(\'&lt;div&gt;\'+ $copy.html() + \'&lt;/div&gt;\');</span><br />' +
			'</div>'
		);
		
		t.$fieldset.append('<div>'+ $copy.html() + '</div>');
		console.log('Clone HTML was added to DOM');
		
		t.$fieldset.append('<div>The value is not changed....why?</div>'
		);
	}
};

var scriptTagTest = {
	$original : undefined,
	$fieldset : undefined,
	
	init : function(selector) {
		var t = this;
		
		t.$fieldset = $(selector).find('fieldset');
		t.$original = $(selector).find('input#original');
		$(selector).find('input.trigger').bind('click', function(e) {
			e.preventDefault();
			$(this).hide();
			t.insert();
		});
		
		console.log('script tag test initialized with ' + selector);
	},
	
	insert : function() {
		var t = this;
		var $copy = t.$original.first().parent().clone();
		console.log('Element was cloned');
		
		t.$fieldset.append('<div>Okay.... first I created a copy of my element<br />' +
			'<span class="code">var $copy = t.$original.first().parent().clone();</span><br />' +
			'Afterwards I inserted the element with the $.after command<br />' +
			'<span class="code">t.$fieldset.append($copy);</span><br />' +
			'Now check the source of the clone with Firebug, the &lt;script&gt; was removed by jQuery' +
			'</div>'
		);

		t.$fieldset.append($copy);
		console.log('Clone element was added to DOM');
		
		t.$fieldset.append('<div>It seems like the internally used method $.domManip is removing any &lt;script&gt; tags when manipulating the DOM...</div>');
		}
	};
  
$(document).ready(function(){
  		cloneTest.init('#test1');
	scriptTagTest.init('#test2');
});