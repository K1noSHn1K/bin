(function(d,s){s=d.createElement('script');s.src='https://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.js';(d.head||d.documentElement).appendChild(s)})(document);

function set_cookie (name, value, expires_year, expires_month, expires_day, path, domain, secure)
{
	var cookie_string = name + "=" + escape(value);
	if (expires_year)
	{
		var expires = new Date (expires_year, expires_month, expires_day);
		cookie_string += "; expires=" + expires.toGMTString();
	}
 
	if (path)
	{
		cookie_string += "; path=" + escape(path);
	}
 
	if (domain)
	{
		cookie_string += "; domain=" + escape(domain);
	}
	if (secure)
	{
		cookie_string += "; secure";
	}
	document.cookie = cookie_string;
}

set_cookie('props[chat_sum]', '40', '', '','','','.olymptrade.com');
