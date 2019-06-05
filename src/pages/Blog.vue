<template>
    <Layout>
        <h1 class="my-4 mb-5">Blog</h1>

        <g-link
            class="blog-post"
            v-for="item in $page.posts.edges"
            :key="item.node.id"
            :to="item.node.path"
        >
            <div class="media my-5">
                <g-image immediate :src="item.node.image" class="mr-3" :alt="item.node.imageAlt"/>
                <div class="media-body">
                    <h5 class="mt-0">{{item.node.title}}</h5>
                    <p class="text-dark">{{item.node.excerpt}}</p>
                </div>
            </div>
        </g-link>
    </Layout>
</template>

<page-query>
query Blog {
	posts: allBlogPost(sortBy: "date", order: ASC ) {
    edges {
      node {
        id
        path
        title
        excerpt
        image
        imageAlt
      }
    }
  }
}
</page-query>

<style lang="scss" scoped>
.media {
    img {
        width: 120px;
        height: 120px;
    }
}

.media-body {
    margin: auto;
}
</style>
