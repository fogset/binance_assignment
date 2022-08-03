<template>
  <div class="createListBackground">
    <div @click="createList" class="createListButton">Create List Info</div>
  </div>
  <div class="listDetails">
    <div class="listDetail">Message ID</div>
    <div class="listDetail_content">Message Content</div>
    <div class="listDetail_group">Telegram Group</div>
    <div class="listDetail_status">Status</div>
    <div class="listDetail_type">Type</div>
    <div class="listDetail_sendTime">Send Time</div>
    <div class="listDetail_createTime">Creation Time</div>
    <div class="listDetail_Creator">Creator</div>
    <div class="listDetail">Operations</div>
  </div>
  <div class="listDetailData"><SingleTableCell /></div>
</template>

<script>
import SingleTableCell from "./SingleTableCell.vue";
export default {
  components: {
    SingleTableCell,
  },
};
</script>

<style>
.createListBackground {
  position: absolute;
  left: 240px;
  top: 100px;
  background-color: yellow;
  height: 45px;
  width: 190px;
}
.createListButton {
  margin-top: 10px;
  font-size: 20px;
  margin-bottom: 10px;
}
.listDetails {
  position: absolute;
  left: 250px;
  top: 180px;
  display: flex;
  font-size: 20px;
}
.listDetail {
  margin-left: 40px;
}
.listDetail_content {
  margin-right: 80px;
  margin-left: 50px;
}
.listDetailData {
  position: absolute;
  left: 280px;
  top: 220px;
  display: flex;
}
.listDetail_status {
  margin-left: 40px;
}

.listDetail_sendTime {
  margin-left: 15px;
}

.listDetail_type {
  margin-left: 40px;
}
</style>

