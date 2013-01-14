function queryString() {
	var htResult = {};
	
	if (location.search) {
		var aParam = location.search.substr(1).split("&");
		
		for (var i = 0, len = aParam.length; i < len; i++) {
			var aKeyValue = aParam[i].split("=");
			htResult[aKeyValue.shift()] = aKeyValue.join("=");
		}
	}
	
	return htResult;
}