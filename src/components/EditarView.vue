<template>

    <div class="container">
        <nav class="navbar navbar-expand navbar-light bg-light">
            <div class="nav navbar-nav">
                <router-link to="/crear" class="navbar-brand">Crear</router-link> 
                <router-link to="/listar" class="navbar-brand">Listar</router-link>
            </div>
        </nav>
        <div class="card">
            <div class="card-header">
                <b>Página para editar un paciente</b>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="actualizarRegistro">
                    <div class="row">
                        <div class="col m12 card-panel">
                            <div class="col m4">
                            <label>Documento</label>
                            <input type="text" v-model="paciente.doc">
                            </div>
                            <div class="col m4">
                            <label>Nombre</label>
                            <input type="text" v-model="paciente.name">
                            </div>
                            <div class="col m4">
                            <label>Apellido</label>
                            <input type="text" v-model="paciente.lastname">
                            </div>
                            <div class="col m4">
                            <label>Edad</label>
                            <input type="number" v-model="paciente.age">
                            </div>
                            <div class="col m4">
                            <label>Genero</label>
                            <select v-model="paciente.gender">
                                <option value="M">Masculino</option>
                                <option value="F">Femenino</option>
                            </select>
                            </div>
                            <div class="col m4">
                            <label>EPS</label>
                            <select v-model="paciente.eps">
                                <option value="A">SURA</option>
                                <option value="B">SAVIA</option>
                                <option value="C">OTRA</option>
                            </select>
                            </div>
                        </div>
                        </div>
                        <div class="col m12 card-panel">
                        <div class="row">
                            <div class="col m4">
                            <label>Tiempo de Protrombina</label>
                            <input type="number" v-model="paciente.tp">
                            </div>
                            <div class="col m4">
                            <label>Tiempo de Tromboplastina Parcial</label>
                            <input type="number" v-model="paciente.ptt">
                            </div>
                            <div class="col m4">
                            <label>Antitrombina III</label>
                            <input type="number" v-model="paciente.at">
                            </div>
                            <div class="col m4">
                            <label>Tiempo de Trombina</label>
                            <input type="number" v-model="paciente.tt">
                            </div>
                            <div class="col m4">
                            <label>Fibrinógeno</label>
                            <input type="number" v-model="paciente.fib">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="btn-group" role="group" aria-label="">
                            <button type="submit" class="btn btn-success">Modificar</button>
                            <button type="reset" class="btn btn-warning">Cancelar</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="card-footer text-muted">
                Copyright: CodeWave 2023
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            paciente:{}
        }
    },
    created:function(){
        this.obtenerInformacionID();
    },
    methods:{
        obtenerInformacionID(){
            fetch('http://localhost/api/?consultar='+this.$route.params.id)
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{
                console.log(datosRespuesta)
                this.paciente=datosRespuesta[0];

            })
            .catch(console.log)
        },
        actualizarRegistro(){
            let datosEnviar={id:this.$route.params.id , doc:this.paciente.doc , name:this.paciente.name , lastname:this.paciente.lastname}
            fetch('http://localhost/api/?actualizar='+this.$route.params.id ,{
                method:"POST",
                body:JSON.stringify(datosEnviar)
            })
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta=>{
                console.log(datosRespuesta);
                window.location.href='../listar' //Redirecciona a la ruta listar
            })) 
        }
    }

}
</script>