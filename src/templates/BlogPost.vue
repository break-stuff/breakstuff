<template>
    <Layout>
        <g-image
            immediate
            class="blogImage mb-4"
            :src="$page.post.image"
            :alt="$page.post.imageAlt"
        />
        <div class="blogPost">
            <h1 v-html="$page.post.title" class=""/>

            <div class="meta">
                <span class="label">by {{$page.post.author}} on {{formattedBlogDate}}</span>
            </div>
            <BlogContent class="mt-4" :content="$page.post.content"/>
        </div>
    </Layout>
</template>

<page-query>
query BlogPost ($path: String!) {
  post: blogPost (path: $path) {
    title
    author
    date
    timeToRead
    content
    image
    imageAlt
  }
}
</page-query>

<script>
import BlogContent from "@/components/BlogContent";

export default {
    components: {
        BlogContent
    },
    computed: {
        formattedBlogDate() {
            return new Date(this.$page.post.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            });
        }
    },
    metaInfo() {
        return {
            title: this.$page.post.title
        };
    }
};
</script>

<style lang="scss" scoped>
.meta {
    display: flex;
    margin-top: -1rem;
    font-style: italic;
}

.blogImage {
    max-height: 400px;
    width: 100%;
}
</style>
