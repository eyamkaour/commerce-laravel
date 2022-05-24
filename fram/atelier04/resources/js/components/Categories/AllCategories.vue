<template>
    <div>
        <h2 class="text-center">Liste Categories</h2>
        <router-link :to="{ name: 'addCategorie' }" class="btn btn-success"
            >ajouter
        </router-link>
        <table class="table" id="example">
            <thead>
                <tr>
                    <th>Nom Catégorie</th>
                    <th>Image</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cat in Categories" :key="cat.id">
                    <td>{{ cat.nomcategorie }}</td>
                    <td>
                        <img
                            :src="'../storage/images/categories/' + cat.imagecategorie"
                            :alt="cat.nomcategorie"
                            width="700"
                        />
                    </td>
                    <td>
                        <button
                            @click.prevent="deleteCategorie(cat.id)"
                            class="btn btn-danger"
                        >
                            Delete
                        </button>
                        <router-link
                            :to="{
                                name: 'editCategorie',
                                params: { id: cat.id },
                            }"
                            class="btn btn-success"
                            >Modifier
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
export default {
    data() {
        return {
            Categories: [],
        };
    },
    mounted() {
        this.getCategories();
    },
    methods: {
        deleteCategorie(id) {
            this.axios
                .delete(`http://localhost:8000/api/categories/${id}`)
                .then((res) => {
                    console.log(res);
                    this.getCategories();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getCategories() {
            this.axios
                .get("http://localhost:8000/api/categories/")
                .then((response) => {
                    this.Categories = response.data;
                    $(function () {
                        $("#example").DataTable();
                    });
                });
        },
    },
};
</script>
