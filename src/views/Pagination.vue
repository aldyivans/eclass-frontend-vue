<template>
	<div class="pager">
	    <div class="todo-wrapper">
	    	<!-- <Blue/> -->
	    	<div class="p-3">
		    	<todo-item  v-for="database in visibleDatas" 
		    	v-bind:visibleDatas="visibleDatas"
		    	v-bind:currentpage="currentPage"
		    	v-bind:database="database"  
		    	:key="database.id"></todo-item>
	    	</div>
	    	<pagination
	      		v-bind:datas="datas"
	      		v-on:page:update="updatePage"
	      		v-bind:currentPage="currentPage"
	      		v-bind:pageSize="pageSize"
	    	/>
	    </div>
	</div>
</template>

<script>
	import TodoItem from '@/components/Pagination/TodoItem.vue';
	import Pagination from '@/components/Pagination/Pagination.vue';
	import Blue from '@/components/Blue.vue';
	import axios from 'axios';
	import App from '../App.vue'

	export default {
		name: 'pager',
		props: ['searchresult'],
		components: {
		  	Blue,
		    TodoItem,
		    Pagination
		},
		data() {
	   		return {
		    	data: [],
	      		datas: [],
			    currentPage: 0,
			    pageSize: 5,
			    visibleDatas: []
		    };
		},
		mounted(){
			// var self = this
			// axios.get(App.data().ListUrl.urlCourses).then(response => {
			// 	console.log("response = ", response.data.result)
			// 	response.data.result.map(e=>{
			// 		self.datas.push(e);
			// 	})
		 //    	console.log("DATAS",self.datas)
			// })
			this.currentPage = 0;
			console.log(this.currentPage)
		},
		beforeMount: function() {
			if(this.searchresult){
				this.datas = this.searchresult;
			}
		  	// this.get();
		    this.updateVisibleDatas();
		    console.log('tes ujang', this.data.length)
		},
		methods: {
		  // 	get() {
		  // 		axios.get('https://eclass-does.herokuapp.com/').then(res => {
				// 	res.data.result.map(data => {
				// 		if(this.dataKeyword != ''){
				// 			if(this.dataKeyword == data.title.toLowerCase() || data.title.toLowerCase().indexOf(this.dataKeyword)!== -1){
				// 		    	this.data.push(data)
				// 			}
				// 		}
				// 		this.loading = false;
				// 	})
				// })
		  // 	},
		    updatePage(pageNumber) {
		    	this.currentPage = pageNumber;
		    	this.updateVisibleDatas();
		    },
		    updateVisibleDatas() {
		    	this.visibleDatas = this.datas.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);

		    	// if we 0 visible datas, go back a page
		    	if (this.visibleDatas.length == 0 && this.currentPage > 0) {
		        	this.updatePage(this.currentPage - 1);
		    	}
		    }
		},
		watch: {
			searchresult(val){
				this.datas = val;
			}
		}
	}
</script>

<style scoped>
	.pager {
		text-align:center;
		min-height: 420px;
	}
</style>
