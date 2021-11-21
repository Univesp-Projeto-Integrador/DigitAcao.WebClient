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
                placeholder="Digite uma senha de 8 à 15 caracteres"
                :maxlength="15"
                :required="true"
                v-model="user.password1"
            />

            <FormField
                label="Confirmar Senha"
                type="password"
                placeholder="Confirme sua senha"
                :maxlength="15"
                :required="true"
                v-model="user.password2"
            />

            <ButtonGroup>
                
                <Button
                    :loading="state == 'loading'"
                    label="Cadastrar"
                    icon="person-plus-fill"
                    type="submit"
                />

            </ButtonGroup>

            <Message v-if="state == 'success'" type="success">Usuário cadastrado com sucesso. <router-link to="/user/login">clique aqui</router-link> para fazer o login</Message>
            <Message v-if="state == 'wrongPasswords'" type="warning">A confirmação da senha deve ser igual a senha</Message>
            <Message v-if="state == 'alreadyRegistered'" type="warning">Já existe um usuário cadastrado com esse e-mail, <router-link to="/user/login">clique aqui</router-link> para fazer o login</Message>
            <Message v-if="state == 'error'" type="danger">Falha ao cadastrar o usuário, tente novamente</Message>

            <p class="cta">Já é registrado? <router-link to="/user/login">Clique aqui para fazer seu login</router-link></p>

        </form>

    </Template>
</template>

<script>

import { ref } from 'vue'
import { userSignUp } from '@/api'

import Template from '@/templates/LoginTemplate'
import FormField from '@/components/Shared/Form/FormField'
import Button from '@/components/Shared/Button/Button'
import ButtonGroup from '@/components/Shared/Button/ButtonGroup'
import Message from '@/components/Shared/Message'

export default {

    components: {
        Template,
        FormField,
        Button,
        ButtonGroup,
        Message
    },

    setup() {

        const user = ref({
            email: 'dmosantos@gmail.com',
            password1: 'teste123',
            password2: 'teste123'
        })

        const state = ref(null)

        // Methods
        const onSubmitHandler = async () => {

            state.value = 'loading'

            if(user.value.password1 != user.value.password2) {
                
                state.value = 'wrongPasswords'
                return

            }

            const response = await userSignUp(user.value)

            state.value = response.state

        }

        // Config
        return {
            user,
            state,
            onSubmitHandler
        }

    }

}

</script>

<style lang="scss" scoped>

.cta {

    padding-top: 1rem;

}

</style>