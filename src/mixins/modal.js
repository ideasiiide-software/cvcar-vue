export default {
    methods: {    
      showAlert: function (message) {
        this.$swal({
          position: "top-end",
          icon: "error",
          title: message,
          showConfirmButton: false,
          timer: 1500,
        })
      },
    }
  }