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
    //base: 'http://192.168.1.247:8081', //local
    base: 'http://google.it', //certification
    //base: '', //production
    companies: '/companies?size=1000', //1000 is the max value available
    checkPoints: '/checkPoints?size=1000' //1000 is the max value available
};