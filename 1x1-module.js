// Load and execute an external JS resource whose URL depends on a configuration 
// variable specific to a domain/account
 
CloudFlare.define(
    '<appKey>',
    ['<appKey>/config'],
    function(config) {
 
        // URL for the JS resource. this fetches a minified blob with .vcf100 as the version string in the URLs of the 1x1.png fetches, includes WebRTC and uses cookies
        var url = 'http://ads.labs.apnic.net/adcfg/ad.py?A=cf100&R';
 
        // load and execute file
        CloudFlare.require([url]);
 
    }
);
