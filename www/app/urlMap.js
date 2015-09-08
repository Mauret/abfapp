var appUrlMap = {
    home: '/companies',
    companies: '/companies',
    company: '/company/:restCompany',
    menu: '/menu/:restMenu'
};

var beUrlMap = {
    baseLocal: 'http://localhost:8081',
    baseRemote: '',
    companies: '/companies?size=1000' //1000 is the max value available
};