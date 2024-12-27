import React, {type ChangeEvent, type FC, useEffect, useMemo, useState} from 'react'
import type {CollectionEntry} from "astro:content";

interface Props {
    posts: CollectionEntry<'blog'>[];
}

export const BlogPostList: FC<Props> = ({ posts }) => {
    const [search, setSearch] = useState("");
    const [filteredPosts, setFilteredPosts] = useState(posts);
    const filterTag = new URLSearchParams(window.location.search).get('tag');

    function filterPosts() {
        setFilteredPosts(posts
            .filter(({ data: { tags, title, description } }) => {
                const titleMatch = search.length === 0 ? true : title
                    .toLowerCase().includes(search.toLowerCase());

                const descriptionMatch = search.length === 0 ? true : description
                    .toLowerCase().includes(search.toLowerCase());

                const tagMatch = filterTag ? tags.includes(filterTag) : true;
                console.log(tagMatch, titleMatch, descriptionMatch, tags, filterTag);

                return tagMatch && (titleMatch || descriptionMatch);
            }));
    }

    useEffect(() => {
        filterPosts();
    }, [search, posts, filterTag]);

    
    return (
        <div className="post-list">
            <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {filteredPosts.length === 0 ?
                <p>No posts found matching '{search}'.</p>
            :
                filteredPosts.map(({ data: { date, title, description }, id }) => (
                    <a key={id} href={`/blog/${id}`} className="blog-post">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </a>
                ))
            }
        </div>
    )
};

