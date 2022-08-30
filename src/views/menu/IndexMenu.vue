<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>DATA MENU</h4>
                        <hr>
                        <router-link :to="{name: 'menu.create'}" class="btn btn-md btn-success">TAMBAH MENU</router-link>

                        <table class="table table-striped table-bordered mt-4">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">ITEM</th>
                                    <th scope="col">CATEGORY</th>
                                    <th scope="col">PICTURE</th>
                                    <th scope="col">PRICE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(menu, index) in menus" :key="index">
                                    <td>{{ menu.id }}</td>
                                    <td>{{ menu.item }}</td>
                                    <td>{{ menu.category }}</td>
                                    <td>{{ menu.picture }}</td>
                                    <td>{{ menu.price }}</td>
                                    <td class="text-center">
                                        <router-link :to="{name: 'menu.edit', params:{id: menu.id }}" class="btn btn-sm btn-primary mr-1">EDIT</router-link>
                                        <button class="btn btn-sm btn-danger ml-1">DELETE</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'

export default {

    setup() {

        //reactive state
        let menus = ref([])

        //mounted
        onMounted(() => {

            //get API from Laravel Backend
            axios.get('http://127.0.0.1:8000/api/menus')
            .then(response => {
              
              //assign state menus with response data
              menus.value = response.data.data

            }).catch(error => {
                console.log(error.response.data)
            })

        })

        //return
        return {
            menus
        }

    }

}
</script>

<style>
    body{
        background: lightgray;
    }
</style> 