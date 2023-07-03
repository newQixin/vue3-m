<template>
    <Toggle></Toggle>
    <Header></Header>
    <router-view v-slot="{ Component }">
        <Transition :name="transitionName" mode="out-in">
            <component :is="Component"></component>
        </Transition>
    </router-view>
</template>
<script setup lang="ts">
import Toggle from '@/components/Toggle/index.vue'
import Header from '@/components/Header/index.vue'
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const transitionName = ref('scale')
const route = useRoute()
onMounted(() => {
    document.documentElement.className = 'theme-default'
})
watch(
    () => route.meta,
    (to, from) => {
        if ((to.index as number) > (from.index as number)) {
            transitionName.value = 'scale'
        } else {
            transitionName.value = 'scale'
        }
    }
)
</script>
<style scoped>
.scale-enter-active,
.scale-leave-active {
    transition: all 0.3s ease;
}

.scale-enter-from,
.scale-leave-to {
    opacity: 0;
    transform: scale(0.9);
}
</style>
