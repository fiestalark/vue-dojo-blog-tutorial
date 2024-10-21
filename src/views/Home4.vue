<template>
  <div class="home">
    <h1>Home</h1>
    <PostList v-if="showPosts" :posts="posts" />
    <button @click="showPosts = !showPosts">Toggle posts</button>
    <button @click="posts.pop()">Delete a post</button>
  </div>

  
</template>

<script>
import PostList from '../components/PostList.vue'
import { ref } from 'vue'

export default {
    name: 'Home4',
    components: { PostList },
    setup() {
        const posts =ref([
            { title: 'Welcome to the blog', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur quaerat quisquam corporis eaque ea, id voluptatem aspernatur, odio aut labore dolores fuga eum autem vero iusto illum? Laudantium, laboriosam modi.', id: 1 },
            { title: 'top 5 CSS tips', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit autem blanditiis esse totam doloremque ipsa molestiae sapiente soluta deserunt est ea vel eius ipsum minima ab, beatae itaque! Blanditiis, quam.', id: 2 },
        ])

        const showPosts = ref(true)

        return { posts, showPosts }
    }
}
</script>

<style>

</style>
