import rss from '@astrojs/rss';
import { getCollection } from "astro:content";

export async function GET(context) {
    const posts = await getCollection("posts");
    return rss({
        title: 'Astro 学习 | 博客',
        description: '我的学习 Astro 之路',
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/posts/${post.slug}/`,
        })),
        customData: `<language>zh-cn</language>`,
    });
}
