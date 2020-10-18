<template>
    <div>
        <span>hellow world Two</span>
    </div>
</template>
<style  scoped>

</style>
<script>
import {Component} from '@ali/kylin-framework';
@Component
export default class IndexTwo {
    data={}
    mounted(){
        this.getMtrack("00000001_indexTwo")
    }
}
</script>