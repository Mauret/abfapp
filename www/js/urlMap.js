var appUrlMap = {
    app: '/app',
    home: '/home',
    companies: '/companies',
    company: '/company/:restUrl',
    menu: '/menu/:restUrl',
    checkPoints: '/checkPoints',
    checkPoint: '/checkPoint/:restUrl'
};

var beUrlMap = {
    baseLocal: 'http://192.168.1.247:8081',
    baseRemote: '',
    companies: '/companies?size=1000', //1000 is the max value available
    checkPoints: '/checkPoints?size=1000' //1000 is the max value available
};