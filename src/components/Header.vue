<template>
    <div>
        <!-- What is tabs? -->
        <b-nav tabs>
            <b-nav-item disabled yellow>
                <b> Quizzanator</b>
            </b-nav-item>
            <b-nav-item disabled>Counter: {{numCorrect}}/{{numTotal}} </b-nav-item>
        </b-nav>
</div>
</template>

<script>
export default {
    props : [
        'numCorrect',
        'numTotal'
    ]
}
</script>

<style>

</style>
