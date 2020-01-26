(function ( $,url ) {

    $.fn.modalWindow = function(URL=url) {
    	
    	let id = $(this).attr('id')
    	let parentNode = $(this).parent()
    	console.log(parentNode)
    	let modalHtml = ''
    	let modalType = $(this).attr('data-modalType')
        try{
        	$.getJSON(URL, function(data){
        		$(Object.keys(data)).each((i,el)=>{
        			if(el==modalType){
        				console.log(el)
        				modalHtml = data[el]
        			}
        		})
			})

        	$(modalHtml).find('.modalWrapper').attr('data-openedBy',id)

        }catch(e){
        	console.info(e)
        }
        parentNode.append(modalHtml)
        $(this).click(()=>{
        	parentNode.find(`[data-openedBy="${id}"]`)
        		.addClass('modalActive')
        		.click(function(){
        			$(this).removeClass('modalActive')
        		})
        })
        return this;
    };
 
}(jQuery,url='modalHtml.php'));
