jQuery(document).ready(function () {
	jQuery('#dropper').filedrop({
		callback : function (file) {
			var data = new FormData();
			data.append('file', file);
			
			jQuery.ajax({
			    url: '/wp-content/uploads/filedrop/testUpload.php',
			    data: data,
			    cache: false,
			    contentType: false,
			    processData: false,
			    type: 'POST',
			    success: function(data){
			        alert(data);
			    }
			});
		}
	});
});