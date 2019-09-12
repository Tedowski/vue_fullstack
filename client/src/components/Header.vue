<template>
    <header class="header">
        <div class="logo">
            <router-link to="/">TabTracker</router-link>
        </div>
        <div class="nav">
            <button class="header-btn">Browse</button>
        </div>
        <div class="fixer">
            <button
                v-if="!$store.state.isUserLoggedIn"
                class="header-btn mg-right-12">
                <router-link to="login">Login</router-link>
            </button>
            <button
                v-if="!$store.state.isUserLoggedIn"
                class="header-btn">
                <router-link to="register">Sign up</router-link>
            </button>
            <button
                v-if="$store.state.isUserLoggedIn"
                class="header-btn">
                <router-link to="logout">Log out</router-link>
            </button>
        </div>
    </header>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        text-align: start;
        padding: 16px 24px;
        line-height: 40px;
        background-color: #2c3e50;
        color: #fff;

        display: flex;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }

    .nav {
        margin-left: 24px;
        display: flex;
    }

    .header-btn {
        outline: none;
        padding: 0 12px;
        transition: all .3s ease;
        border-radius: 4px;
    }

    .header-btn:hover {
        background-color: #42b983;
    }

    .fixer {
        margin-right: 0;
        margin-left: auto;
    }
</style>
