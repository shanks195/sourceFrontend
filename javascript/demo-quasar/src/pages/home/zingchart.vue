<template>
    <div class="zingchart">
        <zingChart/>
    </div>
</template>
<style  scoped>
.zingchart {
    
  padding:1%;

}
</style>
<script>
 import zingChart from '../../components/zingChart';
export default {
    name: 'zingchartHome',
     components: {
        zingChart
    }
}
</script>