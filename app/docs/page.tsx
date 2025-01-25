import React from 'react';
import {posts} from '#site/content'
import {PostItem} from "@/components/post-item";
import {sortPosts} from "@/lib/utils";
import {QueryPagination} from "@/components/query-pagination";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Documentations",
    description: "Here you will can find every documentation you need."
}

const POSTS_PER_PAGE = 5;

interface DocPageProps {
    searchParams: {
        page?: string;
    }
}

export default async function Documentation({searchParams}: DocPageProps) {
    const currentPage = Number(searchParams?.page) || 1;
    const sortedPosts = sortPosts(
        posts.filter((post) => post.published
        ));

    const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

    const displayPosts = sortedPosts.slice(
        POSTS_PER_PAGE * (currentPage - 1),
        POSTS_PER_PAGE * currentPage
    );

    return (
        <div className="container">
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                <div className="flex-1 space-y-4">
                    <h1 className="inline-block font-black text-4xl lg:text-5xl">Documentations</h1>
                    <p className="text-xl text-muted-foreground">
                        Here you will can find every documentation you need.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-3 mt-8">
                <div className="col-span-12 col-start-1 sm:col-span-8">
                    <hr/>
                    {displayPosts?.length > 0 ? (
                        <ul className="flex flex-col">
                            {displayPosts.map((post) => {
                                const {slug, date, title, description, tags} = post;
                                return (
                                    <li key={slug}>
                                        <PostItem
                                            slug={slug}
                                            date={date}
                                            title={title}
                                            description={description}
                                            tags={tags}
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    ) : (
                        <p className="py-6">Nothing to see here yet</p>
                    )}
                    <QueryPagination totalPages={totalPages} className="justify-end mt-4"/>
                </div>
            </div>
        </div>
    )
};