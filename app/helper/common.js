/**
*
* regular expression for checking parameter 
*
*/
module.exports= {
	/**
    *
    * @param {String} email
    * @return true if matching eail with regex  
    *
	*/
	isEmail:function(email){
	    if (email.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{2,6})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/)) {
			return true;
		}
		else {
			return false;
		}
	},
    
    /**
    *
    * @param {Number} mobile
    * @return true if matching mobile with regex  
    *
	*/
	isMobile:function(mobile){
		if(mobile.match(/^\+\d{1,3}-\d{9,10}$/)){
			return true;
		}
		else{
			return false;
		}
	},
    
    /**
    *
    * @param {String} file
    * @return true if matching file with regex  
    *
	*/
	isFile:function(file) {
        if(file.match(/\.(gif|jpg|jpeg|tiff|png|bmp)$/)) {
            return true;
        } else {
            return false;
        }
    },
    
    /**
    *
    * @param {String} url
    * @return true if matching url with regex  
    *
	*/
	isUrl:function(url) {
		 if(url.match(/^(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/)){
       return true;
		 }
		 else {
		 	return false;
		 }
	}

}
