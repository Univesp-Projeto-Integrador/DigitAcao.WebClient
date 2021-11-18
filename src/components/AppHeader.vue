<template>
    <header class="app-header">

        <!-- App Logo -->
        <div class="app-logo">
            <router-link class="app-logo__link" to="/"><img class="app-logo__image" src="@/assets/logo-digitacao-h.svg" alt="DigitAção" /></router-link>
        </div>

        <!-- App Nav -->
        <nav class="app-nav">

            <router-link class="app-nav__item" to="/lesson/dashboard">Dashboard</router-link>

            <router-link class="app-nav__item app-nav__item--user" to="/user/profile">
                <span class="app-nav__user-icon-wrapper">
                    <Icon class="app-nav__user-icon" symbol="person-fill" />
                </span>
                Diego Marques
            </router-link>

        </nav>

    </header>
</template>

<script>

export default {

    name: 'AppHeader'

}

</script>

<style lang="scss" scoped>

.app-header {

    background-color: var(--theme-color-2);
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, .3);
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding: 0 2rem;

}

.app-logo {

    &__link {

        display: block;

    }

    &__image {

        display: block;
        height: 2rem;

    }


}

.app-nav {

    align-items: center;
    display: flex;

    &__item {

        border-radius: 3px;
        color: #fff;
        padding: 1rem;
        text-decoration: none;

        &:hover {

            background-color: rgba(255, 255, 255, .15);

        }

        &--user {

            align-items: center;
            display: flex;

        }

    }

    &__user-icon-wrapper {

        border: 1px solid #fff;
        border-radius: 50%;
        display: flex;
        margin-right: .3rem;
        padding: .2rem;

    }

    &__user-icon {

        fill: #fff;

    }

}

</style>