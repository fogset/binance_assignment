<template>
  <div class="singleListContainer">
    <div class="message_ID">3453245345345</div>
    <div class="telegrams_Group">All Telegram Groups</div>
    <div class="listDetail">Waiting</div>
    <div class="listDetail">Scheduled</div>
    <div class="listDetail">2021-12-23 00:00:00(UTC)</div>
    <div class="listDetail">2021-12-23 11:33:22(UTC)</div>
    <div class="listDetail">wei.d@binance.us</div>
    <button class="editButton">Edit</button>
    <button class="deleteButton">Delete</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
.telegrams_Group {
  margin-left: 285px;
}
.message_ID {
  margin-left: 10px;
}
.editButton {
  margin-left: 50px;
  height: 40px;
  width: 70px;
  background-color: yellow;
  font-size: 16px;
}
.deleteButton {
  margin-left: 10px;
  height: 40px;
  width: 70px;
  background-color: red;
  font-size: 16px;
  color: white;
}
.singleListContainer {
  display: flex;
}
</style>