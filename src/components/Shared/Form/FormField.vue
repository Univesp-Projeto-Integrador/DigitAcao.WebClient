<template>
    <p class="form-field">
        
        <label class="form-field__label" for="">{{ label }}:</label>
        
        <input
            class="form-field__input"
            :type="type"
            :placeholder="placeholder"
            :maxlength="maxlength"
            :required="required"
            autocomplete="new-password"
        />

    </p>
</template>

<script>

export default {

    name: 'FormField',

    props: {

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
        required: Boolean

    }

}

</script>

<style lang="scss" scoped>

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
    padding: .8rem 1rem;
    width: 100%;

    &:focus {

        background-color: #fff;
        border-color: #ccc;
        outline: none;

    }

}

</style>