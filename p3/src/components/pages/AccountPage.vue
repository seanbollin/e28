<template>
    <div id="account-page">
        <div v-if="user">
            <h2>Hi, {{ user.name }}!</h2>

            <button v-on:click="logout">Logout</button>
        </div>

        <div v-else id="loginForm">
            <h2>Login</h2>
            <small>
                (Form is prefilled for demonstration purposes; remove in final
                application)
            </small>
            <div>
                <label>
                    Email:
                    <input type="text" v-model="data.email" />
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input type="password" v-model="data.password" />
                </label>
            </div>

            <button v-on:click="login">Login</button>

            <ul v-if="errors">
                <li class="error" v-for="(error, index) in errors" :key="index">
                    {{ error }}
                </li>
            </ul>

            <h2>Register</h2>
            <div>
                <label>
                    Name:
                    <input type="text" v-model="data.name" />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input type="text" v-model="data.email" />
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input type="password" v-model="data.password" />
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
</template>

<script>
import { axios } from "../../common/app.js";
export default {
    data() {
        return {
            // Form is prefilled for demonstration purposes; remove in final application
            // jill@harvard.edu/asdfasdf is one of our seed users from e28api/seeds/user.json
            data: {
                name: "",
                email: "",
                password: "",
            },
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
    }
};
</script>