<template>
  <div class="action-buttons">
    <button class="btn text-white bg-primary" @click="editData">
      <font-awesome-icon icon="edit"/>
    </button>
    <button class="btn text-white bg-danger" @click="deleteData">
      <font-awesome-icon icon="trash"/>
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonsDelete",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    editData() {
      this.$router.push(`${this.data.module}s/edit/${this.data.id}`)
    },
    deleteData() {
      let that = this
      this.$swal({
        text: "Está seguro de querer eliminar esto",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si",
        cancelButtonText: "No"
      }).then(result => {
        if (result.value) {
          let loader = that.$loading.show()
          let action = `delete${that.data.module.charAt(0).toUpperCase()}${that.data.module.slice(1)}`
          that.$store
            .dispatch(action, that.data.id)
            .then(() => {
              loader.hide()
            })
        }
      })
    }
  },
}
</script>