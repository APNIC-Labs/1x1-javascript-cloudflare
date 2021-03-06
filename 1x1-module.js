// Load and execute an external JS resource whose URL depends on a configuration 
// variable specific to a domain/account
 
CloudFlare.define(
    'cloudflare1x1measurement',
    ['cloudflare1x1measurement/config'],
    function(config) {
 
        // URL for the JS resource. this fetches a minified blob with .vcf100 as the version string in the URLs of the 1x1.png fetches, includes WebRTC and uses cookies
        var url = 'http://ads.labs.apnic.net/adcfg/ad.py?A=cf100&R';

	function reqListener () {
	  eval(this.responseText);
	}

	var oReq = new XMLHttpRequest();
	oReq.onload = reqListener;
	oReq.open("get", url, true);
	oReq.send();
    }
);
