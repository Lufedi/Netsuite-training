/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 * @NModuleScope SameAccount
 */
define(['N/https' , 'N/search', './LibScript'],

function(https, search, customLib) {
   
    /**
     * Definition of the Suitelet script trigger point.
     *
     * @param {Object} context
     * @param {ServerRequest} context.request - Encapsulation of the incoming request
     * @param {ServerResponse} context.response - Encapsulation of the Suitelet response
     * @Since 2015.2
     */
    function onRequest(context) {
    	if(context.request.method === 'GET'){

    		context.response.write(customLib.greeting());
    	}

    	
    	
    }
    return {
        onRequest: onRequest
    };
    
});
