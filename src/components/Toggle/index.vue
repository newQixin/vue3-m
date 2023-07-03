<template>
    <div class="toggle">
        <div :class="[isToggle ? 'toggled-body' : 'toggle-body']" @click="toToggle">
            <div class="bar bar-1"></div>
            <div class="bar bar-2"></div>
            <div class="bar bar-3"></div>
            <div class="bar bar-4"></div>
            <div class="bar bar-5"></div>
            <div class="bar bar-6"></div>
            <div class="bar bar-7"></div>
            <div class="bar bar-8"></div>
            <div class="bar bar-9"></div>
        </div>
    </div>
    <div :class="[isToggle ? 'mask' : '']"></div>
    <div class="top-btn">
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="Zi Zi--BackToTop"
            fill="currentColor"
        >
            <path
                fill-rule="evenodd"
                d="M13.204 3.107a1.75 1.75 0 0 0-2.408 0L3.806 9.73c-1.148 1.088-.378 3.02 1.204 3.02h2.24V20c0 .966.784 1.75 1.75 1.75h6A1.75 1.75 0 0 0 16.75 20v-7.25h2.24c1.582 0 2.353-1.932 1.204-3.02l-6.99-6.623Z"
                clip-rule="evenodd"
            ></path>
        </svg>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isToggle = ref<boolean>(false)
const toToggle = () => {
    isToggle.value = !isToggle.value
}
</script>
<style scoped lang="less">
.top-btn {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    padding: 5px;
    bottom: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    position: fixed;
    right: 20px;
    border-radius: 4px;
    background-color: var(--bg-color);
    color: rgb(133, 144, 166);
}
.toggle {
    width: 100px;
    height: 100px;
    position: fixed;
    z-index: 1002;
    left: 0;
    top: 0;

    .toggle-body {
        margin: 38px;
        width: 24px;
        height: 24px;
        position: relative;
        cursor: pointer;

        .bar {
            height: 4px;
            width: 4px;
            background: var(--th-color);
            position: absolute;
            transition: all 0.3s;
        }
        .bar-1 {
            top: 0px;
            left: 0px;
        }
        .bar-2 {
            top: 0px;
            left: 10px;
        }
        .bar-3 {
            top: 0px;
            left: 20px;
        }
        .bar-4 {
            top: 10px;
            left: 0px;
        }
        .bar-5 {
            top: 10px;
            left: 10px;
        }
        .bar-6 {
            top: 10px;
            left: 20px;
        }
        .bar-7 {
            top: 20px;
            left: 0px;
        }
        .bar-8 {
            top: 20px;
            left: 10px;
        }
        .bar-9 {
            top: 20px;
            left: 20px;
        }
    }
    .toggled-body {
        margin: 38px;
        width: 24px;
        height: 24px;
        position: relative;

        .bar {
            height: 4px;
            width: 4px;
            background: #715699;
            position: absolute;
            transition: all 0.3s ease-in;
        }
        .bar-1 {
            top: 0px;
            left: 0px;
            transform: translate(5px, 5px);
        }
        .bar-2 {
            top: 0px;
            left: 10px;
            transform: translate(0, 5px);
        }
        .bar-3 {
            top: 0px;
            left: 20px;
            transform: translate(-5px, 5px);
        }
        .bar-4 {
            top: 10px;
            left: 0px;
            transform: translate(5px, 0);
        }
        .bar-5 {
            top: 10px;
            left: 10px;
            transform: translate(0, 0);
        }
        .bar-6 {
            top: 10px;
            left: 20px;
            transform: translate(-5px, 0);
        }
        .bar-7 {
            top: 20px;
            left: 0px;
            transform: translate(5px, -5px);
        }
        .bar-8 {
            top: 20px;
            left: 10px;
            transform: translate(0, -5px);
        }
        .bar-9 {
            top: 20px;
            left: 20px;
            transform: translate(-5px, -5px);
        }
    }
}
.mask {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1001;
    background-color: #111;
    opacity: 0.85;
}
</style>
