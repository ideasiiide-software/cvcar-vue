<template>
    <Landing>
        <div class="container py-5">
            <div class="row">
                <div class="col">
                    <div class="card mb-4">
                        <div class="card-body">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Landing>
</template>
  
<script>
import { auth } from "@/firebase"
import Landing from "@/components/layout/Landing.vue"
import ButtonsDelete from "@/components/datatable/ButtonsDelete.vue";
import modalMixin from '@/mixins/modal'

export default {
    name: "userlist",
    components: {
        Landing
    },
    mixins: [
        modalMixin
    ],
    computed: {
        usersBinding() {
            return {
                showDownloadButton: false,
                lang: "es",
                columns: [
                    {
                        key: "name",
                        title: "Nombre",
                    },
                    {
                        key: "address",
                        title: "Direccion",
                    },
                    {
                        key: "phone",
                        title: "Telefono",
                    },
                    {
                        key: "schedule",
                        title: "Horario",
                    },
                    {
                        key: "coordinates",
                        title: "Coordenadas",
                    },
                    {
                        key: "buttons",
                        title: "Acciones",
                        component: ButtonsDelete,
                    },
                ],
                data: this.$store.state.partnerModule.partners,
            }
        },
    },
    mounted: function () {
        if (this.$store.state.partnerModule.partners.length == 0) {
            let that = this
            let loader = this.$loading.show()
            this.$store
                .dispatch("getPartners")
                .then(() => {
                    loader.hide()
                })
                .catch((error) => {
                    loader.hide()
                    that.showAlert(error.response.data.message)
                    if (error.response.status === 401) {
                        auth.signOut()
                        localStorage.clear()
                        that.$router.push('/login')
                    }
                })
        }
    },
}
</script>
  