import axios from "axios";
import localStorageService from "./localStorageService";

class JwtAuthService {

    // Dummy user object just for the demo
    user = {
        userId: "1",
        // role: 'GUEST',
        role: 'ADMIN',
        displayName: "Jason Alexander 123",
        email: "jasonalexander@gmail.com",
        photoURL: "/assets/images/face-6.jpg",
        age: 25,
        token: "faslkhfh423oiu4h4kj432rkj23h432u49ufjaklj423h4jkhkjh"
    }

    // You need to send http request with email and passsword to your server in this method
    // Your server will return user object & a Token
    // User should have role property
    // You can define roles in app/auth/authRoles.js
    loginWithEmailAndPassword = (email, password) => {
        console.log(email, password)
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        let options = {
            method: 'POST',
            url: "http://niranjan-sia.herokuapp.com/api/v1/login/",
            data: formData,
            headers: {
                'Content-Type': 'application/json',
                //   'Content-Type': 'multipart/form-data',
            }
        }
        return new Promise((resolve, reject) => {
            // resolve(this.user);
            resolve(axios(options));
        }).then(data => {
            // Login successful
            // Save token
            // console.log(data.data.token)
            // console.log(data.data.username)
            this.setSession(data.token);
            localStorage.setItem('token', data.data.token);
            // this.setSession(data.data.token);
            // Set user
            this.setUser(data);
            // this.setUser(data.data.username);
            return data;
        });
    };

    // You need to send http requst with existing token to your server to check token is valid
    // This method is being used when user logged in & app is reloaded
    loginWithToken = () => {
        console.log(localStorage.getItem("jwt_token"), " getting refresh");
        const formData = new FormData();
        formData.append('token', localStorage.getItem("jwt_token"));
        let options = {
            method: 'POST',
            url: "http://niranjan-sia.herokuapp.com/api/v1/auth-jwt-verify/",
            data: formData,
            headers: {
                'Content-Type': 'application/json',
                //   'Content-Type': 'multipart/form-data',
            }
        }
        console.log("is workign login with token auth-jwt-verify/")
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.user);
                // resolve(axios(options));
            }, 100);
        }).then(data => {
            // Token is valid
            this.setSession(data.token);
            this.setUser(data);
            return data;
        });
    };

    logout = () => {
        this.setSession(null);
        this.removeUser();
    }

    // Set token to all http request header, so you don't need to attach everytime
    setSession = token => {
        if (token) {
            localStorage.setItem("jwt_token", token);
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        } else {
            localStorage.removeItem("jwt_token");
            delete axios.defaults.headers.common["Authorization"];
        }
    };

    // Save user to localstorage
    setUser = (user) => {
        // console.log(user, "setuser")
        localStorageService.setItem("auth_user", user);
    }
    // Remove user from localstorage
    removeUser = () => {
        localStorage.removeItem("auth_user");
    }
}

export default new JwtAuthService();
