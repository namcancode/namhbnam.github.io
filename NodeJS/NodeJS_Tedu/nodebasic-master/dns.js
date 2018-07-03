const dns = require('dns');  
dns.lookup('www.tedu.com.vn', (err, addresses, family) => {  
  console.log('addresses:', addresses);  
});  