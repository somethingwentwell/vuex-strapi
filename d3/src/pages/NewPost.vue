<template>
  <div class="q-pa-md" style="max-width: 1080px">
    <div class="q-gutter-y-md column" style="max-width: 960px">
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
        <q-btn @click="aCreatePost(curPost);this.$router.push({ path: `/` })" label="Post" color="primary" />
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
        ...mapState('strapi', ["curPost"]),
        title: {
            get() {
                return this.curPost.title;
            },
            set(value) {
                let postObj = {
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
                    title: this.curPost.title,
                    content: value
                  }
                this.mUpdatePost(postObj);
            }
        }
    },
    methods: {
        ...mapActions('strapi', ['aCreatePost']),
        ...mapMutations('strapi', ['mUpdatePost']),
    }
}
</script>