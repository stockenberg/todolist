<template>
	<tr>
		<td><button @click="done(taskId)" class="btn green">Check</button></td>
		<td>{{taskId}}</td>
		<td><slot></slot></td>
		<td>{{created}}</td>
		<td>{{updated}}</td>
		<td><button @click="deleteTask(taskId)" class="btn red">DELETE</button></td>
	</tr>
</template>

<script>
    import {ApiUrl} from './../../config'


    export default{
        data() {
            return {
                token: ''
            }
        },
        methods: {
            done(id) {
                console.log(id);
            },
            deleteTask(id) {
                console.log(id);
                window.axios.delete(ApiUrl + '/task/' + id)
	                .then(response => {
	                    console.log('Eintrag erfolgreich gelöscht!');
                        this.$emit('refresh');
	                })

            }
        },
	    props: ['task-id', 'created', 'updated']
    }
</script>

<style></style>