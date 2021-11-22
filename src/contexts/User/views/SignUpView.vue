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
                placeholder="De 8 à 15 caracteres, contendo letras e números"
                :maxlength="15"
                :required="true"
                :validation-error-message="state == 'badPassword' ? 'Senha fraca' : null"
                v-model="user.password"
            />

            <FormField
                label="Confirmar Senha"
                type="password"
                placeholder="Confirme sua senha"
                :maxlength="15"
                :required="true"
                :validation-error-message="state == 'wrongPasswords' ? 'Senhas diferentes' : null"
                v-model="passwordConfirm"
            />

            <ButtonGroup>
                
                <Button
                    :loading="state == 'loading'"
                    label="Cadastrar"
                    icon="person-plus-fill"
                    type="submit"
                />

            </ButtonGroup>

            <Message v-if="state == 'success'" type="success">Usuário cadastrado com sucesso. <router-link to="/user/login">clique aqui</router-link> para fazer o login.</Message>
            <Message v-if="state == 'badPassword'" type="warning">Digite uma senha de 8 à 15 caracteres, contendo apenas letras e números.</Message>
            <Message v-if="state == 'wrongPasswords'" type="warning">A confirmação da senha deve ser igual a senha.</Message>
            <Message v-if="state == 'alreadyRegistered'" type="warning">Já existe um usuário cadastrado com esse e-mail, <router-link to="/user/login">clique aqui</router-link> para fazer o login.</Message>
            <Message v-if="state == 'error'" type="danger">Falha ao cadastrar o usuário, tente novamente.</Message>

            <Navigation>
                <p>Já é registrado? <router-link to="/user/login">Clique aqui para fazer seu login</router-link>.</p>
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
const passwordConfirm = ref()
const state = ref()

// Methods
async function onSubmitHandler() {

    state.value = 'loading'

    if(UserService.validatePassword(user.value.password))
        state.value = 'badPassword'
    
    else if(user.value.password != passwordConfirm.value)
        state.value = 'wrongPasswords'

    else {

        const response = await UserService.signUp(user.value)
        
        state.value = response.state

        user.value = new User()
        passwordConfirm.value = null

    }

}

</script>

<style lang="scss" scoped>

.cta {

    padding-top: 1rem;

}

</style>