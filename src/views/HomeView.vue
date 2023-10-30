<template>
<div class="container">
  <div class="card">
    <div class="card-header">
        Elegir el tipo de consulta
    </div>
    <div class="card-body">
      <div class="row">
        <router-link to="/crear">
          <button>Ingreso de pacientes</button>
        </router-link>
      </div>
      <div class="row">
        <router-link to="/listar">
          <button>Consulta masiva de pacientes</button>
        </router-link>
      </div>
      <div class="row">
        <router-link to="/user">
          <button>Consulta de paciente</button>
        </router-link>
      </div>
    </div>
    <div class="card-footer text-muted">
        Copyright: CodeWave 2023
    </div>
  </div>
</div>
</template>
