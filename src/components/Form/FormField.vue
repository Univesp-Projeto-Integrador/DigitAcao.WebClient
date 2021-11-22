<template>
    <div class="form-field">
        
        <label class="form-field__label" for="">{{ label }}:</label>
        
        <input
            class="form-field__input"
            :type="type"
            :placeholder="placeholder"
            :maxlength="maxlength"
            :required="required"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />
            <!-- autocomplete="new-password" -->

        <p v-if="validationErrorMessage" class="validation validation--error">
            <icon class="validation__icon" symbol="x-circle" />
            {{ validationErrorMessage }}
        </p>

    </div>
</template>

<script>

export default {

    name: 'FormField',

    props: {
        
        modelValue: String,
        label: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'text'
        },
        placeholder: String,
        maxlength: Number,
        required: Boolean,
        validationErrorMessage: String

    }

}

</script>

<style lang="scss" scoped>

@import '@/style/_variables';

.form-field {

    margin: 0 0 1.5rem 0;

}

.form-field__label {
    
    display: block;
    margin-bottom: .3rem;

}

.form-field__input {

    background-color: #eee;
    border: 2px solid #eee;
    border-radius: 5px;
    display: block;
    margin-bottom: .5rem;
    padding: .8rem 1rem;
    width: 100%;

    &:focus {

        background-color: #fff;
        border-color: #ccc;
        outline: none;

    }

}

.validation {

    color: $danger-color;
    font-weight: 700;
    margin-bottom: 1rem;

    &__icon {

        fill: $danger-color;
        margin-right: .2rem;

    }

}

</style>