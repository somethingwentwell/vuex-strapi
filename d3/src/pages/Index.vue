<template>
  <q-page class="flex q-pa-md">
  	<q-list 
  		class="full-width"
  		separator>
  	  <q-item
  	  	v-for="(post, key) in allPosts"
  	  	:key="key"
		:to="'/post/' + post.id"
  	  	clickable
  	  	v-ripple>
  	    <q-item-section>
  	      <q-item-label>{{ post.title }}</q-item-label>
  	    </q-item-section>
  	  </q-item>
  	</q-list>
	<q-page-sticky position="bottom-right" :offset="[18, 18]">
		<q-btn @click="this.$router.push({ path: `/newPost` })" round color="primary" icon="add" />
	</q-page-sticky>
  </q-page>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'

	export default {
		computed: {
		...mapGetters('strapi', ['allPosts'])
		},
		methods: {
		...mapActions('strapi', ['initActions'])
		},
		mounted() {
			this.initActions();
			setInterval(this.initActions, 3000);
		}
	}
</script>