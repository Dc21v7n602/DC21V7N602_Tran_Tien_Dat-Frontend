<template>
 <div>
  <div class="p-1"><strong>Tên:</strong> {{ contact.name }}</div>
  <div class="p-1"><strong>Email:</strong> {{ contact.email }}</div>
  <div class="p-1"><strong>Địa chỉ:</strong> {{ contact.address }}</div>
  <div class="p-1"><strong>Điện thoại:</strong> {{ contact.phone }}</div>
  <div class="p-1">
   <strong>Liên hệ yêu thích:</strong>
   <input type="checkbox" :checked="contact.favorite" disabled />
  </div>
 </div>
</template>

<script>
export default {
  props: { contact: { type: Object, required: true } },
};
</script>
