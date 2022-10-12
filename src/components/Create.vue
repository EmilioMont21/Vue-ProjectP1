<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                Agregar Usuario
            </div>
            <div class="card-body">
                <form >

                    <div class="form-group">
                        <label for="nombre">Nombre:</label>
                        <input type="text" autocomplete="off"
                            class="form-control" name="nombre" v-model="user.nombre" id="nombre" aria-describedby="helpid" placeholder="Nombre">
                        <small id="helpid" class="form-text text-muted">Escribe el Nombre</small>
                    </div>

                    <div class="form-group">
                        <label for="correo">Correo:</label>
                        <input type="text" autocomplete="off"
                            class="form-control" name="correo" v-model="user.mail" id="correo" aria-describedby="helpid" placeholder="Correo">
                        <small id="helpid" class="form-text text-muted">Escribe el Correo</small>
                    </div>

                    <div class="form-group">
                        <label for="contrasenia">Contraseña:</label>
                        <input type="text" autocomplete="off"
                            class="form-control" name="contrasenia" v-model="user.password" id="contrasenia" aria-describedby="helpid" placeholder="Contraseña">
                        <small id="helpid" class="form-text text-muted">Escribe la contraseña</small>
                    </div>

                    <div class="btn-group" role="group" aria-label="">
                        <button  v-on:click="agregarRegistro()" class="btn btn-success">Agregar</button>
                    </div>

                </form>
            </div>
        </div>

    </div>
</template>
<script>
    export default{
        name: 'CreateComponent',
        data(){
            return{
                user:{}
            }
        },
        methods:{
            agregarRegistro(){
                var datosEnviar={
                    Nombre:this.user.nombre,
                    Mail:this.user.mail,
                    Password:this.user.password,
                    Token: ""
                }

                fetch('http://localhost:5111/api/user',{
                    method:'POST',
                    headers: { "Content-Type": "application/json"},
                    body:JSON.stringify(datosEnviar)
                })
                .then(request => request.json())
            }
        }
    }
</script>