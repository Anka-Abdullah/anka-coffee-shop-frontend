<template>
  <div>
    <h1>form</h1>
    <input type="text" :value="dataName" @input="changeName">
    <label for="">{{dataName}}</label>
  </div>
</template>
<script>
export default {
    props:{
        dataName: String
    },
    methods:{
        changeName(e){
            console.log(e.target.value)
            this.$emit('changeName', e.target.value)
        }
    }
}
</script>