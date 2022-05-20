<template>
  <div>
    <div>
      <slot name="header">
        <h2>Моя піцерія</h2>
        <h3>Welcome, customer</h3>
      </slot>
    </div>
    <div>
      <slot> Немає контенту </slot>
    </div>
    <div>
      <slot name="footer">
        <h1>Контакти</h1>
        <ul>
          <li>Телефон: dabee dabee dabee</li>
          <li>Адреса: dabee dabee dabee</li>
        </ul>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainMasterPage",

  data() {
    return {
      owner: {
        name: "Іван",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
