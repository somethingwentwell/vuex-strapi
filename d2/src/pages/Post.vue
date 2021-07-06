<template>
  <div class="q-pa-md" style="max-width: 1080px">
    <div class="q-gutter-y-md column" style="max-width: 960px">

      <div class="text-subtitle2">Post ID: {{this.$route.params.postId}}</div>
      
      <q-input
        filled
        v-model="title"
        label="Post title *"
      />

      <q-input
        filled
        type="textarea"
        v-model="content"
        label="Post content *"
      />


      <div>
        <q-btn @click="aUpdatePost(curPost);this.$router.push({ path: `/` })" label="Update" color="primary" />
        <q-btn @click="aDeletePost(this.$route.params.postId);this.$router.push({ path: `/` })" label="Delete" color="warning" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapMutations } from "vuex";
import { mapState } from "vuex";

export default {

    computed: {
        //https://vuex.vuejs.org/guide/forms.html
        ...mapState('strapi', ["curPost"]),
        title: {
            get() {
                return this.curPost.title;
            },
            set(value) {
                let postObj = {
                    id: this.$route.params.postId,
                    title: value,
                    content: this.curPost.content
                  }
                this.mUpdatePost(postObj);
            }
        },
        content: {
            get() {
                return this.curPost.content;
            },
            set(value) {
                let postObj = {
                    id: this.$route.params.postId,
                    title: this.curPost.title,
                    content: value
                  }
                this.mUpdatePost(postObj);
            }
        },
    },
    methods: {
        ...mapActions('strapi', ['aGetCurPost']),
        ...mapActions('strapi', ['aUpdatePost']),
        ...mapActions('strapi', ['aDeletePost']),
        ...mapMutations('strapi', ['mUpdatePost']),
    },
    mounted() {
        this.aGetCurPost(this.$route.params.postId);
    }
}
</script>