<template>
    <div class="container">
        <div class="raw">111111</div>
        <div class="raw">111111</div>
        <div class="raw">111111</div>
        <div class="raw">111111</div>
        <div class="raw">111111</div>
        <div class="raw">111111</div>
        <div class="raw">111111</div>
        <div class="raw">111111</div>
        <div class="raw">111111</div>
        <div class="raw">111111</div>
    </div>
</template>
<script setup lang="ts">
const d = 1
</script>
<style lang="less" scoped>
.container {
    @media (min-width: 1200px) {
        width: 1170px;
    }

    @media (min-width: 992px) and (max-width: 1200px) {
        width: 970px;
    }
    @media (min-width: 768px) and (max-width: 992px) {
        width: 750px;
    }
    margin: 20px auto 0;
    .raw {
        width: 100%;
        height: 200px;
        background-color: red;
        margin-bottom: 20px;
    }
}
</style>
