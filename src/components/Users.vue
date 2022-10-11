

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
                            <th>Mail</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.UserId">
                            <td>{{user.UserId}}</td>
                            <td>{{user.Nombre}}</td>
                            <td>{{user.Mail}}</td>
                            <td>
                                <div class="btn-group" role="group" aria-label="">
                                    <button type="button" v-on:click="editarUsuario(user)" class="btn btn-info">Editar</button>
                                    <button type="button" v-on:click="borrarUsuario(user.UserId)" class="btn btn-danger">Eliminar</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                Editar Usuario
            </div>
            <div class="card-body" v-if="seen" >
                <form v-on:submit.prevent="actualizarRegistro">
                    <div class="form-group">
                        <input type="text"
                            class="form-control" name="nombre" v-model="Nombre" id="nombre" aria-describedby="helpid" placeholder="Nombre">                   
                    </div>

                    <div class="form-group">
                        <input type="text"
                            class="form-control" name="correo" v-model="Mail" id="mail" aria-describedby="helpid" placeholder="Correo">
                    </div>

                    <div class="form-group">
                        <input type="text"
                            class="form-control" name="contrasenia" v-model="Password" id="password" aria-describedby="helpid" placeholder="Contraseña">
                    </div>

                    <div class="btn-group" role="group" aria-label="">
                        <button type="submit" v-on:click="actualizarRegistro()" class="btn btn-success">Editar</button>
                        <button type="submit" v-on:click="cancelarVista()" class="btn btn-warning">Cancelar</button>
                    </div>

                </form>
            </div>
        </div>

</div>
</template>

<script>
export default {
    name: 'UserComponent',
    data() {
        return {
            users: [],
            seen: false,
            id: []
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
                this.users=datos;

            })
        },
        borrarUsuario(id){
            fetch('http://localhost:5111/api/user/'+id,{
                method:'DELETE'
            })
            .then(location.reload())
        },
        editarUsuario(userData){
            this.id = userData.UserId
            this.Nombre = userData.Nombre
            this.Mail = userData.Mail
            this.Password = userData.Password

            this.seen = true
        },
        cancelarVista(){
            this.seen = false
        },
        actualizarRegistro(){

                fetch('http://localhost:5111/api/user',{
                    method:'PUT',
                    headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            UserId:this.id,
                            Nombre:this.Nombre,
                            Mail:this.Mail,
                            Password:this.Password,
                            Token: ""
                        })
                })
                .then(request => request.json())
                .then(location.reload())
        }
    }
}
</script>


