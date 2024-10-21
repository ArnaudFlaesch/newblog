<template>
  <div>
    <NuxtLayout :titleCode="titleCode" :descriptionCode="descriptionCode"> </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
const titleCode = 'CONTACT.PAGE.TITLE';
const descriptionCode = 'CONTACT.PAGE.DESCRIPTION';
</script>

<style lang="scss" scoped>
@use '../styles/colors.scss';

#contact-form {
  display: flex;
  flex-direction: column;

  .contact-field {
    background-color: #fff;
  }

  #contact-informations {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 3em;
  }

  .form-field,
  #submit-button {
    flex: 1;
  }

  .form-field {
    display: flex;
    flex-direction: column;

    .error-message {
      color: #f00;
    }
  }

  #submit-button {
    margin: 0 auto;
  }
}

@media (width <= 700px) {
  #contact-form {
    width: 100%;

    #contact-informations {
      flex-direction: column;
      row-gap: 1em;
    }
  }
}
</style>
