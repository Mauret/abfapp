app.service('ErrorSrv', function ($ionicPopup) {
    return {
        /**
         * @returns the error.
         */
        getError: function (errorType) {
            $ionicPopup.alert({
                title: 'Errore',
                template: messages.errors[errorType],
                okType: 'button-dark'
            });
        }
    }
});