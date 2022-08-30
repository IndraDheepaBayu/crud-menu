<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>TAMBAH MENU</h4>
                        <hr>

                        <form @submit.prevent="store">
                            <div class="form-group">
                                <label for="title" class="font-weight-bold">ID</label>
                                <!-- validation -->
                                <input type="text" class="form-control" v-model="menu.id" placeholder="Masukkan Judul Menu">
                                <div v-if="validation.id" class="mt-2 alert alert-danger">
                                    {{ validation.id[0] }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="content" class="font-weight-bold">ITEM</label>
                                <!-- validation -->
                                <textarea class="form-control" rows="4" v-model="menu.item" placeholder="Masukkan Konten Menu"></textarea>
                                <div v-if="validation.item" class="mt-2 alert alert-danger">
                                    {{ validation.item[0] }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="content" class="font-weight-bold">CATEGORY</label>
                                <!-- validation -->
                                <textarea class="form-control" rows="4" v-model="menu.category" placeholder="Masukkan Konten Menu"></textarea>
                                <div v-if="validation.category" class="mt-2 alert alert-danger">
                                    {{ validation.category[0] }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="content" class="font-weight-bold">PICTURE</label>
                                <textarea class="form-control" rows="4" v-model="menu.picture" placeholder="Masukkan Konten Menu"></textarea>
                                <!-- validation -->
                                <div v-if="validation.picture" class="mt-2 alert alert-danger">
                                    {{ validation.picture[0] }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="content" class="font-weight-bold">PRICE</label>
                                <textarea class="form-control" rows="4" v-model="menu.price" placeholder="Masukkan Konten Menu"></textarea>
                                <!-- validation -->
                                <div v-if="validation.price" class="mt-2 alert alert-danger">
                                    {{ validation.price[0] }}
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">SIMPAN</button>
                        </form>                        

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

export default {

    setup() {

        //state menus
        const menu = reactive({
            id: '',
            item: '',
            category: '',
            picture: '',
            price: ''
        })

        //state validation
        const validation = ref([])

        //vue router
        const router = useRouter()

        //method store
        function store() {

            let id   = menu.id
            let item = menu.item
            let category = menu.category
            let picture = menu.picture
            let price = menu.price

            axios.post('http://127.0.0.1:8000/api/menus', {
                id: id,
                item: item,
                category: category,
                picture: picture,
                price: price,
            }).then(() => {

                //redirect ke menu index
                router.push({
                    name: 'menu.index'
                })

            }).catch(error => {
                //assign state validation with error 
                validation.value = error.response.data
            })

        }

        //return
        return {
            menu,
            validation,
            router,
            store
        }

    }

}
</script>

<style>
    body{
        background: lightgray;
    }
</style>