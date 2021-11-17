<template>
    <LoginTemplate>

        <form>

            <FormField
                label="E-mail"
                type="email"
                placeholder="Digite um e-mail válido"
                :maxlength="150"
                :required="true"
            />

            <FormField
                label="Senha"
                type="password"
                placeholder="Digite uma senha de 8 à 15 caracteres"
                :maxlength="15"
                :required="true"
            />

            <FormField
                label="Confirmar Senha"
                type="password"
                placeholder="Confirme sua senha"
                :maxlength="15"
                :required="true"
            />

            <ButtonGroup>
                
                <Button
                    label="Cadastrar"
                    type="submit"
                />

            </ButtonGroup>

            <p class="cta">Já é registrado? <router-link to="/user/login">Clique aqui para fazer seu login</router-link></p>

        </form>

    </LoginTemplate>
</template>

<script>

import LoginTemplate from '@/views/Template/LoginTemplate';
import FormField from '@/components/Shared/Form/FormField';
import Button from '@/components/Shared/Button/Button';
import ButtonGroup from '@/components/Shared/Button/ButtonGroup';

export default {

    name: 'SignUpView',

    components: {
        LoginTemplate,
        FormField,
        Button,
        ButtonGroup
    }

}

</script>

<style lang="scss" scoped>

.cta {

    padding-top: 1rem;

}

</style>