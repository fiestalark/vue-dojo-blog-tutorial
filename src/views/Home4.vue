<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-else>
        <div v-if="posts.length">
            <PostList v-if="showPosts" :posts="posts" />
        </div>
        <div v-else>Loading...</div>
    </div>


    <button @click="showPosts = !showPosts">Toggle posts</button>
    <button @click="posts.pop()">Delete a post</button>
  </div>

  
</template>

<script>
import { ref } from 'vue'
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'

export default {
    name: 'Home4',
    components: { PostList },
    setup() {
        const showPosts = ref(true)


        const {posts, error, load } = getPosts()

        load()

        return { posts, showPosts, error }
    }
}
</script>

<style>

</style>
