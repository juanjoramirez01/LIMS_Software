<template>
Prueba de conexión con la API de Q
</template>

<script>
export default {
    created:function(){
        this.createEntity();
        this.readEntity();
    },
    methods: {
        readEntity(){
            fetch('https://redb.qsystems.co/QS3100/QServlet?operation=queryEntityByTenancy&tna=5&key=e35d751c-12a8-4789-91d0-a95f055f0630')
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{
                console.log(datosRespuesta)
            })
            .catch(console.log)
        },
        createEntity(){
            let operation="SaveEntity"
            let tna=2
            let key="35d751c-12a8-4789-91d0-a95f055f0630"
            let nameEntity="Hospital la cima"
            let phoneEntity="6018259654"
            let adressEntity="Kra 23 No. 85 - 67"
            fetch('https://redb.qsystems.co/QS3100/QServlet?operation='+operation+'&tna='+tna+'&key='+key+'&nameEntity='+nameEntity+'&phoneEntity='+phoneEntity+'&adressEntity='+adressEntity)
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta=>{
                console.log(datosRespuesta);
            }))
        }
    }
}
</script>