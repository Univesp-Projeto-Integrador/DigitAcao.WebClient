<template>
    <Template>

        <form>

            <FormField
                label="E-mail"
                type="email"
                placeholder="Digite um e-mail válido"
                :maxlength="150"
                :required="true"
            />

            <ButtonGroup>
                
                <Button
                    label="Ativar"
                    icon="person-check-fill"
                    type="submit"
                />

            </ButtonGroup>

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
import Navigation from './components/Navigation'

import { UserService } from '@/services'

// Validations
UserService.validateIsLogged()

</script>