<template>
    <div class="filter-nav">
        <button @click="filterNav('all')" :class="{active:current === 'all'}">All</button>
        <button @click="filterNav('complete')" :class="{active:current === 'complete'}">Complete</button>
        <button @click="filterNav('ongoing')" :class="{active:current === 'ongoing'}">Ongoing</button>
    </div>
</template>

<script>
export default {
    name: "FilterNav",
    props: ['current'],
    methods: {
        filterNav(value) {
            this.$emit("filterNav",value)
        }
    },
}
</script>

<style>
    .filter-nav button {
        background: none;
        border: none;
        color: #bbb;
        outline: none;
        font-size: 12px;
        text-transform: uppercase;
        margin-right: 10px;
        letter-spacing: 1px;
        font-weight: bold;
        cursor: pointer;
    }

    button.active {
        color: #333;
    }
</style>