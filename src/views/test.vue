<template>
    <div>
        <h1>《{{head}}》</h1>
        <div>
            <h3>{{first}}</h3>
            <h3>{{second}}</h3>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                head: '诗经国风 .周南',
                first: '关关雎鸠，在河之洲。',
                second: '窈窕淑女，君子好逑。'
            }
        }
    }
</script>