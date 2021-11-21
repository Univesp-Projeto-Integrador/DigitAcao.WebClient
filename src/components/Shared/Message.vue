<template>
    <p
        :class="{
            'message': true,
            'message--info': type == 'info',
            'message--success': type == 'success',
            'message--warning': type == 'warning',
            'message--danger': type == 'danger'
        }"
    >

        <icon
            :class="{
                'message__icon': true,
                'message__icon--info': type == 'info',
                'message__icon--success': type == 'success',
                'message__icon--warning': type == 'warning',
                'message__icon--danger': type == 'danger'
            }"
            :symbol="{
                'info': 'info-circle',
                'success': 'check-circle',
                'warning': 'exclamation-circle',
                'danger': 'x-circle'
            }[type]"
        />
        <span><slot /></span>

    </p>
</template>

<script>

export default {

    name: 'Message',

    props: {

        type: String

    }

}

</script>

<style lang="scss" scoped>

@import '@/style/_variables';

.message {

    align-items: center;
    background-color: #efefef;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    font-weight: 400;
    padding: 1.2rem 2rem;

    &__icon {

        fill: #555;
        margin: 0 .8rem 0 -.7rem;
        min-width: 16px;

        &--info { fill: darken($info-color, 10); }
        &--success { fill: darken($success-color, 10); }
        &--warning { fill: darken($warning-color, 10); }
        &--danger { fill: darken($danger-color, 10); }

    }

    &--info {

        background-color: lighten($info-color, 35);
        border-color: $info-color;

    }

    &--success {

        background-color: lighten($success-color, 35);
        border-color: $success-color;

    }

    &--warning {

        background-color: lighten($warning-color, 35);
        border-color: $warning-color;

    }

    &--danger {

        background-color: lighten($danger-color, 35);
        border-color: $danger-color;

    }

}

</style>