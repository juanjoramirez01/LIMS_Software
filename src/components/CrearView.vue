<template>
<div class="container">
    <div class="card">
    <div class="card-header">
        Lista de todos los pacientes en la base de datos
    </div>
    <div class="card-body">
        <form v-on:submit.prevent="agregarRegistro">
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
                        <option value="SURA">SURA</option>
                        <option value="SAVIA">SAVIA</option>
                        <option value="OTRA">OTRA</option>
                    </select>
                    </div>
                </div>
                </div>
                <div class="col m12 card-panel">
                <div class="row">
                    <div class="col m4">
                    <label>Tiempo de Protrombina</label>
                    <input type="number" step="0.01" v-model="paciente.tp">
                    </div>
                    <div class="col m4">
                    <label>Tiempo de Tromboplastina</label>
                    <input type="number" step="0.01" v-model="paciente.ptt">
                    </div>
                    <div class="col m4">
                    <label>Antitrombina III</label>
                    <input type="number" step="0.01" v-model="paciente.at">
                    </div>
                    <div class="col m4">
                    <label>Tiempo de Trombina</label>
                    <input type="number" step="0.01" v-model="paciente.tt">
                    </div>
                    <div class="col m4">
                    <label>Fibrinógeno</label>
                    <input type="number" step="0.01" v-model="paciente.fib">
                    </div>
                </div>
                </div>
                <div class="row">
                    <div class="btn-group" role="group" aria-label="">
                        <button type="submit" class="btn btn-success">Enviar</button>
                        <button type="reset" class="btn btn-warning">Borrar</button>
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

import M from 'materialize-css'
export default {
    data(){
        return{
            paciente:{}
        }
    },
    mounted(){
        var elems = document.querySelectorAll('select');
        this.elect_instance= M.FormSelect.init(elems, null);
    },
    methods:{
        agregarRegistro(){
            console.log(this.paciente)
            let datosEnviar={id:null , doc:this.paciente.doc , name:this.paciente.name , lastname:this.paciente.lastname , age:this.paciente.age , gender:this.paciente.gender , eps:this.paciente.eps , tp:this.paciente.tp , ptt:this.paciente.ptt , at:this.paciente.at , tt:this.paciente.tt , fib:this.paciente.fib}
            fetch('http://localhost/api/?insertar=1',{
                method:"POST",
                body:JSON.stringify(datosEnviar)
            })
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta=>{
                console.log(datosRespuesta);

            }))
        }
    }
}
</script>