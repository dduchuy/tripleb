"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var core_1 = require('@angular/core');
var firebase = require('firebase/app');
var AuthService = (function () {
    function AuthService(firebaseAuth, router) {
        var _this = this;
        this.firebaseAuth = firebaseAuth;
        this.router = router;
        this.userDetails = null;
        this.userInfo = firebase.auth().currentUser;
        this.user = firebaseAuth.authState;
        this.user.subscribe(function (user) {
            if (user) {
                _this.userDetails = user;
                console.log(_this.userDetails);
            }
            else {
                _this.userDetails = null;
            }
        });
    }
    AuthService.prototype.isEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    // get email using username
    AuthService.prototype.getEmailByUsername = function (username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("calling getUsername: " + username);
            var ref = firebase.database().ref("usernames");
            var retEmail = "";
            yield ref.once("value").then(function (snapshot) {
                snapshot.forEach(function (userSnapshot) {
                    var username2 = userSnapshot.val();
                    if (username2.username === username) {
                        retEmail = username2.email;
                    }
                });
            });
            return retEmail;
        });
    };
    AuthService.prototype.isLoggedIn = function () {
        if (this.userDetails == null)
            return false;
        return true;
    };
    AuthService.prototype.loginWithEmail = function (email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            // passing username to get the email information
            if (!this.isEmail(email)) {
                email = yield this.getEmailByUsername(email, password);
            }
            this.firebaseAuth
                .auth
                .signInWithEmailAndPassword(email, password)
                .then(function (value) {
                console.log('Nice, it worked!');
            })
                .catch(function (err) {
                alert('Wrong Email or Password');
                console.log('Something went wrong:', err.message);
            });
        });
    };
    AuthService.prototype.login = function (email, password) {
        this.firebaseAuth
            .auth
            .signInWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Nice, it worked!');
        })
            .catch(function (err) {
            alert('Wrong Email or Password');
            console.log('Something went wrong:', err.message);
        });
    };
    AuthService.prototype.loginWithGoogle = function () {
        return this.firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.firebaseAuth.auth.signOut()
            .then(function (value) {
            alert('You have signed out');
            _this.router.navigate(['/']);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    AuthService.prototype.resetPassword = function (email) {
        var _this = this;
        this.firebaseAuth.auth.sendPasswordResetEmail(email)
            .then(function () {
            alert('email sent!');
            _this.router.navigate(['/']);
            console.log('email sent');
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map