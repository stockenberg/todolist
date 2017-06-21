<template>
	<div class="row">
		<h4>Neue Aufgabe erstellen</h4>
		<form class="col s12">

			<div class="input-field">
				<input id="task" type="text" name="task" class="validate">
				<label for="task">Aufgaben Titel</label>
			</div>

			<div class="input-field">
				<button class="btn">Submit</button>
			</div>
		</form>
	</div>
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
	.row{
		margin-top: 60px;
	}
</style>