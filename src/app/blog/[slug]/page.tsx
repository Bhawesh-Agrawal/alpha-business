"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import blogData from "../../../../db-temp/blog.json";

type Blog = {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  content: string;
  tags: string[];
  created: string;
  updated: string;
  author: {
    name: string;
    email: string;
    profile_picture: string;
  };
};

const blog: Blog[] = blogData;

export default function BlogDetailPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug;

  const post = blog.find((b) => b.slug === slug);

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      router.push("/blog");
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <p className="text-gray-500 text-lg">Blog post not found.</p>
        <button
          onClick={handleGoBack}
          className="mt-6 flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-all duration-300 w-fit group bg-white px-5 py-3 rounded-lg shadow-md"
          aria-label="Go back"
          type="button"
        >
          <ArrowLeft className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-semibold tracking-wide text-lg">Back to Blogs</span>
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-6 md:px-12 lg:px-24">
      {/* Back Button */}
      <button
        onClick={handleGoBack}
        className="flex items-center gap-3 text-gray-700 hover:text-orange-600 transition-all duration-300 w-fit group bg-white px-5 py-3 rounded-lg shadow-md mb-12 select-none"
        aria-label="Go back"
        type="button"
      >
        <ArrowLeft className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform duration-300" />
        <span className="font-semibold tracking-wide text-lg">Back</span>
      </button>

      {/* Blog Container */}
      <article className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-10 md:p-16">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-8 tracking-tight">
          {post.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm md:text-base mb-12">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-orange-400" />
            <time dateTime={post.created}>{formatDate(post.created)}</time>
          </div>
          <div className="flex items-center gap-2">
            <Tag className="w-5 h-5 text-orange-400" />
            <span className="uppercase font-semibold tracking-wide">{post.category}</span>
          </div>
          {/* Optional: Author */}
          {post.author?.name && (
            <div className="flex items-center gap-3 ml-auto">
              {post.author.profile_picture && (
                <img
                  src={post.author.profile_picture}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-orange-300"
                />
              )}
              <span className="text-gray-700 font-medium">{post.author.name}</span>
            </div>
          )}
        </div>

        {/* Featured Image */}
        <div className="mb-14 rounded-xl overflow-hidden shadow-lg">
          <img
            src={post.image}
            alt={post.title}
            className="w-full max-h-[500px] object-cover"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <section
          className="prose prose-orange prose-lg max-w-none text-gray-800"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  );
}
