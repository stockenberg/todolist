<template>
	<nav>
		<div class="nav-wrapper grey lighten-3">
			<a href="#!" class="brand-logo center">Todo List</a>
			<ul class="left hide-on-med-and-down">
				<li><router-link to="/test">Test</router-link></li>

			</ul>
		</div>
	</nav>
</template>

<script>
    export default{
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style scoped>
	a{
		color: #333;
	}
</style>