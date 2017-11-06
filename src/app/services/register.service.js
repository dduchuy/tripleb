"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var firebase = require('firebase/app');
var RegisterService = (function () {
    function RegisterService(firebaseAuth, router) {
        this.firebaseAuth = firebaseAuth;
        this.router = router;
        this.userInfo = firebase.auth().currentUser;
    }
    RegisterService.prototype.register = function (email, password, firstname, lastname, phone, username) {
        var _this = this;
        this.firebaseAuth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Success!', value);
            firebase.database().ref('users/' + value.uid).set({
                email: email,
                password: password,
                firstname: firstname,
                lastname: lastname,
                phone: phone,
                username: username
            });
            firebase.database().ref('usernames/' + value.uid).set({
                email: email,
                username: username,
                uid: value.uid
            });
            _this.router.navigate(['/']);
        })
            .catch(function (err) {
            //alert('Invalid Email');
            console.log('Something went wrong:', err.message);
        });
    };
    RegisterService = __decorate([
        core_1.Injectable()
    ], RegisterService);
    return RegisterService;
}());
exports.RegisterService = RegisterService;
//# sourceMappingURL=register.service.js.map