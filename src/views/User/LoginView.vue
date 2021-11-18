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
                placeholder="Digite sua senha"
                :maxlength="15"
                :required="true"
            />

            <ButtonGroup>
                
                <Button
                    label="Entrar"
                    icon="box-arrow-in-right"
                    type="submit"
                />

            </ButtonGroup>

            <p class="cta">Não é registrado? <router-link to="/user/signup">Cadastre-se</router-link></p>

        </form>

    </LoginTemplate>
</template>

<script>

import LoginTemplate from '@/views/Template/LoginTemplate';
import FormField from '@/components/Shared/Form/FormField';
import Button from '@/components/Shared/Button/Button';
import ButtonGroup from '@/components/Shared/Button/ButtonGroup';

export default {

    name: 'LoginView',

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