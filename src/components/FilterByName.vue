<template>
<div class="search">
    <input class="search_input" type="text" v-model="search"
    @keyup.enter="searchCharacter" placeholder="Search character by name" />
</div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex'
const store = useStore();

const search = ref('');

const searchCharacter = () => {
    return store.dispatch('filterByName', search.value);
}
</script>

<style lang="scss">
.search{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    input{
        width: 40%;
        padding: 1rem;
        border-radius: 10px;
        border: 1px solid var(--background-body);
        background-color: var(--background-card);
        color: var(--text-gray);
        font-size: 1.2rem;
        transition: all 200ms ease-in-out;
        &:focus{
            outline: none;
            border-color: var(--text-orange);
        }
    }
}
</style>