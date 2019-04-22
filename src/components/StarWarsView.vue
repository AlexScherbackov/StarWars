<template>
	<el-container>
		<el-table
			:data="tableData"
			class="starWars">
			<el-table-column type="expand">
				<template slot-scope="props">
					<p>Films:</p>
					<ul>
						<li v-for="item in props.row.films">{{item}}</li>
					</ul>
				</template>
			</el-table-column>
			<el-table-column
				label="Name"
				prop="name">
			</el-table-column>
			<el-table-column
				label="Birthday"
				prop="birth_year">
			</el-table-column>
			<el-table-column
				label="Eyes"
				prop="eye_color">
			</el-table-column>
			<el-table-column
				label="Gender"
				prop="gender">
			</el-table-column>
			<el-table-column
				label="Hair"
				prop="hair_color">
			</el-table-column>
			<el-table-column
				label="Height"
				prop="height">
			</el-table-column>
		</el-table>
	</el-container>
</template>
<script>
	import {mapGetters} from 'vuex';

	export default {
		props:{
			tableData:  {
				type: Array,
				requered: true
			}
		},
		data(){
			return{
				
			}
		},
		
	}
</script>
<style lang="scss" scoped>

</style>