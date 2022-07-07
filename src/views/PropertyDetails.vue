<template >
    <div>
        
        <h1> New Property{{property.title}} </h1>
        <p>The Property  id is {{ id }} </p>
    </div>
</template>
<script>

import  PropertyCard from "../components/PropertyCard.vue";
export default {
    data(){
        return{
            properties:[],
            id: this.$route.params.id,
        }
    },
    mounted(){
        fetch("http://localhost:3000/properties")
        .then((res) => res.json())
        .then((data) => this.properties = data)
        .catch(err => console.log(err.message))
    },
  
    
}
</script>
<style >
    
</style>