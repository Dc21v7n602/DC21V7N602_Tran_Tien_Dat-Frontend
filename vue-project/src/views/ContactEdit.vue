<template>
  <div v-if="contact" class="page">
    <h4>Chỉnh sửa Liên hệ</h4>
    <ContactForm
      :contact="contact"
      @submit:contact="updateContact"
      @delete:contact="deleteContact"
    />
    <p>{{ message }}</p>
  </div>

  <div v-else class="page">
    <p>Đang tải dữ liệu hoặc không tìm thấy liên hệ.</p>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";

export default {
  components: { ContactForm },
  props: {
    id: { type: String, required: true }, // lấy từ route
  },
  data() {
    return {
      contact: null,
      message: "",
    };
  },
  methods: {
    async getContact(id) {
      try {
        console.log("Fetching contact with id:", id);
        this.contact = await ContactService.get(id);
        console.log("Contact loaded:", this.contact);
      } catch (error) {
        console.error("API error:", error);
        this.$router.push({ name: "notfound" });
      }
    },
    async updateContact(data) {
      try {
        await ContactService.update(this.contact._id, data);
        alert("Liên hệ được cập nhật thành công.");
        this.$router.push({ name: "contactbook" });
      } catch (error) {
        console.error("Update error:", error);
      }
    },
    async deleteContact() {
      if (confirm("Bạn muốn xóa Liên hệ này?")) {
        try {
          await ContactService.delete(this.contact._id);
          this.$router.push({ name: "contactbook" });
        } catch (error) {
          console.error("Delete error:", error);
        }
      }
    },
  },
  created() {
    console.log("Route id:", this.id);
    this.getContact(this.id);
    this.message = "";
  },
};
</script>
