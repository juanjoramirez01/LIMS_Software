<template>
    <div class="container">
        
        <div class="card">
            <div class="card-header">
                Lista de todos los pacientes en la base de datos
            </div>
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DOCUMENTO</th>
                            <th>NOMBRE COMPLETO</th>
                            <th>EDAD</th>
                            <th>GÉNERO</th>
                            <th>EPS</th>
                            <th>TP</th>
                            <th>PTT</th>
                            <th>AT</th>
                            <th>TT</th>
                            <th>FIB</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="paciente in pacientes" :key="paciente.id">
                            <td scope="row">{{paciente.id}}</td>
                            <td>{{paciente.doc}}</td>
                            <td>{{paciente.name}} {{paciente.lastname}}</td>
                            <td>{{paciente.age}}</td>
                            <td>{{paciente.gender}}</td>
                            <td>{{paciente.eps}}</td>
                            <td>{{paciente.tp}}</td>
                            <td>{{paciente.ptt}}</td>
                            <td>{{paciente.at}}</td>
                            <td>{{paciente.tt}}</td>
                            <td>{{paciente.fib}}</td>
                            <td>
                                <div class="btn-group" role="group" aria-label="">
                                    <router-link :to="{name:'lista'}" class="btn btn-info">Volver</router-link>
                                </div>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
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
            pacientes:[]
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
                this.pacientes=datosRespuesta;

            })
            .catch(console.log)
        }

    }
}
</script>