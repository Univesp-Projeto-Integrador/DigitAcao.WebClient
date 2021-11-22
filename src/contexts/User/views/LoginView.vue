<template>
    <Template>

        <form @submit.prevent="onSubmitHandler">

            <FormField
                label="E-mail"
                type="email"
                placeholder="Digite um e-mail válido"
                :maxlength="150"
                :required="true"
                v-model="user.email"
            />
            
            <FormField
                label="Senha"
                type="password"
                placeholder="Digite sua senha"
                :maxlength="15"
                :required="true"
                :validation-error-message="state == 'badPassword' ? 'Senha fraca' : null"
                v-model="user.password"
            />

            <ButtonGroup>
                
                <Button
                    :loading="state == 'loading'"
                    label="Entrar"
                    icon="box-arrow-in-right"
                    type="submit"
                />

            </ButtonGroup>

            <Message v-if="state == 'badPassword'" type="warning">Digite uma senha de 8 à 15 caracteres, contendo apenas letras e números.</Message>
            <Message v-if="state == 'notFound'" type="warning">Usuário e/ou senha inválido(s).</Message>
            <Message v-if="state == 'error'" type="danger">Falha ao realizar o login, tente novamente.</Message>

            <Navigation>
                <p>Não é registrado? <router-link to="/user/signup">Cadastre-se</router-link></p>
            </Navigation>

        </form>

    </Template>
</template>

<script setup>

import Template from '@/templates/LoginTemplate'
import FormField from '@/components/Form/FormField'
import Button from '@/components/Button/Button'
import ButtonGroup from '@/components/Button/ButtonGroup'
import Message from '@/components/Message'
import Navigation from './components/Navigation'

import { ref } from 'vue'
import { User } from '@/model'
import { UserService } from '@/services'

// Validations
UserService.validateIsLogged()

// Data
const user = ref(new User())

const state = ref(null)

// Methods
const onSubmitHandler = async () => {

    state.value = 'loading'

    if(UserService.validatePassword(user.value.password))
        state.value = 'badPassword'
    
    else {

        const response = await UserService.login(user.value)

        state.value = response.state

    }

}

</script>

<style lang="scss" scoped>

.cta {

    padding-top: 1rem;

}

</style>