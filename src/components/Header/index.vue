<template>
    <div class="header">
        <div class="tab">
            <div
                v-for="item in menu"
                :key="item.value"
                @click="() => checkMenu(item.value)"
                :class="['tab-item', curMenu === item.value ? 'check' : '']"
            >
                {{ item.title }}
            </div>
        </div>
    </div>
    <div class="theme-btn">
        <label :class="['switch', curTheme === 'default' ? 'switch--off' : 'switch--on']">
            <input type="checkbox" class="switch__input" @click="changeTheme" />
            <div class="switch__circle"></div>
        </label>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IMenuOption } from '@/interface/layout'
import { useRouter } from 'vue-router'
const router = useRouter()
const menu: Array<IMenuOption> = [
    { title: '首页', value: '' },
    { title: '文章', value: 'article' },
    { title: '留言', value: '11' },
    { title: '关于我', value: '22' }
]
const curMenu = ref<string>('')
const curTheme = ref<'default' | 'dark'>('default')

const checkMenu = (v: string) => {
    curMenu.value = v
    router.push(`/index/${v}`)
}
const changeTheme = () => {
    if (curTheme.value === 'default') {
        curTheme.value = 'dark'
    } else {
        curTheme.value = 'default'
    }
    document.documentElement.className = `theme-${curTheme.value}`
}
</script>
<style scoped lang="less">
.header {
    display: flex;
    justify-content: center;
    .tab {
        .tab-item {
            cursor: pointer;
            display: inline-block;
            text-align: center;
            color: var(--th-color);
            width: 100px;
            line-height: 80px;
            height: 80px;
            position: relative;
            font-size: 16px;
            font-weight: 500;
        }
        .check::after {
            content: '';
            position: absolute;
            bottom: 0;
            height: 5px;
            left: 50%;
            transform: translate(-50%);
            background-color: var(--th-color);
            animation: scaleWidth 0.5s forwards;
        }

        @keyframes scaleWidth {
            0% {
                width: 0;
            }

            100% {
                width: 100%;
            }
        }
    }
}
.theme-btn {
    position: fixed;
    top: 20px;
    right: 40px;
    /* ON status */
    .switch--on {
        background-color: #d1d5db;
        border: 1px solid var(--bg-color);

        /* Push the circle to the right */
        justify-content: flex-end;
    }

    /* OFF status */
    .switch--off {
        background-color: #d1d5db;
        border: 1px solid #d1d5db;
    }
    .switch--off .switch__circle {
        border: 1px solid #d1d5db;
    }
    .switch {
        display: flex;

        /* Rounded border */
        border-radius: 9999px;

        /* Size */
        height: 2rem;
        width: 4rem;

        /* Demo */
        margin-bottom: 0.5rem;
    }

    .switch__input {
        /* Hide the input */
        display: none;
    }

    .switch__circle {
        /* Rounded border */
        border-radius: 9999px;

        /* Size */
        width: 2rem;

        background-color: #fff;
    }
}
</style>
