

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
                                <a name="" id="" class="btn btn-primary" href="#" role="button">Editar</a>
                                <a name="" id="" class="btn btn-danger" href="#" role="button">Eliminar</a>
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
        }
    }
}
</script>