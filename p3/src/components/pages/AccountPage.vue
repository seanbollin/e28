<template>
    <div id="account-page">
        <div v-if="user">
            <h2>Hi, {{ user.name }}!</h2>

            <button v-on:click="logout">Logout</button>
        </div>

        <div v-else id="loginForm">
            <div v-if="registerView">
                <h2>Login</h2>
                <p>Don't have an account? <a href="#" v-on:click="switchToLoginView">Click here</a> to register.</p>
                <div>
                    <label>
                        Email:
                        <input type="text" v-model="data.email" v-on:blur="validate"/>
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input type="password" v-model="data.password" v-on:blur="validate"/>
                    </label>
                </div>

                <button v-on:click="login">Login</button>
                <ul v-if="errors">
                    <li class="error" v-for="(error, index) in errors" :key="index">
                        {{ error }}
                    </li>
                </ul>
            </div>
            <div v-else>
                <h2>Register</h2>
                <p>Already have an account? <a href="#" v-on:click="switchToRegisterView">Click here</a> to log in.</p>
                <div>
                    <label>
                        Name:
                        <input type="text" v-model="data.name" v-on:blur="validate"/>
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input type="text" v-model="data.email" v-on:blur="validate"/>
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input type="password" v-model="data.password" v-on:blur="validate"/>
                    </label>
                </div>

                <button v-on:click="register">Register</button>

                <ul v-if="errors">
                    <li class="error" v-for="(error, index) in errors" :key="index">
                        {{ error }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { axios } from "../../common/app.js";
import Validator from 'validatorjs'

export default {
    data() {
        return {
            data: {
                name: "",
                email: "",
                password: "",
            },
            registerView: false,
            errors: null,
            favorites: [],
        };
    },
    computed: {
        user() {
            return this.$store.state.user;
        }
    },
    methods: {
        switchToLoginView() {
            this.registerView = false;
        },
        switchToRegisterView() {
            this.registerView = true;
        },
        login() {
            axios.post("login", this.data).then((response) => {
                if (response.data.authenticated) {
                    this.$store.commit("setUser", response.data.user);
                } else {
                    this.errors = response.data.errors;
                }
            });
        },
        addRecipe() {
            axios.post("/recipe", this.recipe).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                    this.success = false;
                } else {
                    this.$emit("update-recipes");
                    this.success = true;
                }
            });
        },
        register() {
            axios.post("register", this.data).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                } else {
                    this.$store.commit("setUser", response.data.user);
                }
            });
        },
        logout() {
            axios.post("logout").then((response) => {
                if (response.data.success) {
                    this.$store.commit("setUser", null);
                }
            });
        },
        validate() {
            let validator = new Validator(this.data, {
                name: "between:3,100",
                email: "required|email",
                password: "required"
            });

            if (validator.fails()) {
                this.errors = validator.errors.all();
            } else {
                this.errors = null;
            }

            return validator.passes();
        },
    }
};
</script>