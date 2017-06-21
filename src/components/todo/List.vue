<template>
	<div>
		<table class="striped">
			<thead>
			<tr>
				<td>Abhaken</td>
				<td>ID</td>
				<td>Title</td>
				<td>Created At</td>
				<td>Updated At</td>
				<td>Delete</td>
			</tr>
			</thead>
			<tbody>
			<task @refresh="get"
			      v-for="task in tasks"
			      :task-id="task.id"
			      :created="task.created"
			      :updated="task.updated">
				{{task.title}}
			</task>
			</tbody>
		</table>
	</div>
</template>

<script>

    import {ApiUrl} from './../../config'

    export default{
        data() {
            return {
                tasks: []
            }
        },
        methods: {
            get() {
                window.axios.get(ApiUrl + '/task')
                    .then(response => {
                        console.log(response.data);
                        this.tasks = response.data;
                    })
            }
        },
        mounted() {
            this.get();
        }
    }
</script>

<style></style>