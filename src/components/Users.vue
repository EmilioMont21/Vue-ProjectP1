

<template>
<div>
        <div class="card">
            <div class="card-header">
                Usuarios
            </div>
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.UserId">
                            <td>{{user.UserId}}</td>
                            <td>{{user.Nombre}}</td>
                            <td>{{user.Correo}}</td>
                            <td>
                                <div class="btn-group" role="group" aria-label="">
                                    <button type="button" class="btn btn-primary">Editar</button>
                                    <button type="button" v-on:click="borrarUsuario(user.UserId)" class="btn btn-danger">Eliminar</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            users: []
        }
    },
    created:function(){
        this.consultarUser();
    },
    methods:{
        consultarUser(){
            fetch('http://localhost:5111/api/user')
            .then(request => request.json())
            .then((datos)=>{
                this.users = []
                if(typeof datos[0].success==='undefined'){
                    this.users=datos;
                }
            })
        },
        borrarUsuario(id){
            fetch('http://localhost:5111/api/user/'+id,{
                method:'DELETE'
            })
            .then(location.reload())
            }
        }
    }
</script>

fetch('http://localhost:5111/api/user',{
    method:'POST',
    headers: { "Content-Type": "application/json"},
    body:JSON.stringify(datosEnviar)
})