<template>
    <header class="app-header">

        <!-- App Logo -->
        <div class="app-logo">
            <router-link class="app-logo__link" to="/"><img class="app-logo__image" src="@/assets/logo-digitacao-h.svg" alt="DigitAção" /></router-link>
        </div>

        <!-- App Nav -->
        <nav class="app-nav">

            <router-link v-if="user.logged" class="app-nav__item" to="/dashboard">
                <Icon class="app-nav__item-icon" symbol="columns-gap" />
                Dashboard
            </router-link>

            <router-link class="app-nav__item" to="/about">
                <Icon class="app-nav__item-icon" symbol="info-circle" />
                Sobre
            </router-link>

            <router-link v-if="!user.logged" class="app-nav__item" to="/user/login">
                <Icon class="app-nav__item-icon" symbol="box-arrow-in-right" />
                Login
            </router-link>

            <router-link v-if="!user.logged" class="app-nav__item" to="/user/signup">
                <Icon class="app-nav__item-icon" symbol="person-plus-fill" />
                Cadastre-se
            </router-link>

            <div v-if="user.logged" class="submenu">

                <router-link class="app-nav__item" to="/user/profile">
                    <span class="app-nav__user-icon-wrapper">
                        <Icon class="app-nav__item-icon app-nav__item-icon--user" symbol="person-fill" />
                    </span>
                    {{ user.email }}
                </router-link>

                <div class="submenu__wrapper">

                    <router-link class="app-nav__item" to="/user/profile">
                        <Icon class="app-nav__item-icon" symbol="file-person" />
                        Meu Perfil
                    </router-link>
                    <router-link class="app-nav__item" to="/user/logout">
                        <Icon class="app-nav__item-icon" symbol="power" />
                        Logout
                    </router-link>
                    
                </div>

            </div>

        </nav>

    </header>
</template>

<script setup>

import { useStore } from 'vuex'

const user = useStore().state.user

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
        height: 30px;

    }


}

.app-nav {

    align-items: center;
    display: flex;

    &__item {

        align-items: center;
        color: #fff;
        display: flex;
        height: 60px;
        padding: 0 1rem;
        text-decoration: none;

        &:hover {

            background-color: rgba(255, 255, 255, .15);

        }

    }

    &__item-icon {

        fill: #fff;
        margin-right: .5rem;

        &--user {

            margin-right: 0;

        }

    }

    &__user-icon-wrapper {

        border: 1px solid #fff;
        border-radius: 50%;
        display: flex;
        margin-right: .5rem;
        padding: .2rem;

    }

}

.submenu {

    position: relative;

    &__wrapper {

        background: #fff;
        box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, .1);
        border-radius: 0 0 5px 5px;
        display: none;
        min-width: 250px;
        position: absolute;
        right: 0;
        top: 100%;

        .app-nav__item {

            color: #555;
            border-bottom: 1px solid rgba(0, 0, 0, .1);
            overflow: hidden;
            position: relative;

            &:before {

                border-color: transparent transparent transparent var(--theme-color-1);
                border-style: solid;
                border-width: .5rem;
                content: '';
                display: block;
                height: 1rem;
                left: 0;
                transform: translateY(-50%) translateX(-50%);
                transition: all .1s linear;
                top: 50%;
                position: absolute;
                width: 1rem;

            }

            &:last-child {

                border-bottom: 0;

            }

            .app-nav__item-icon {

                fill: #555;
                margin-right: .8rem;

            }

            &:hover {

                background-color: transparent;
                color: var(--theme-color-1);

                &:before {

                    transform: translateY(-50%) translateX(0%);

                }

                .app-nav__item-icon {

                    fill: var(--theme-color-1);
                    transform: translateX(.2rem);

                }

            }

        }

    }

    &:hover {

        .submenu__wrapper {

            display: block;

        }

    }

}

</style>