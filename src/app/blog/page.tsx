"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, easeOut } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import blogData from "../../../db-temp/blog.json";

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

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function BlogPage() {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());

  useEffect(() => {
    const storedLikes = localStorage.getItem("likedBlogs");
    if (storedLikes) {
      setLikedPosts(new Set(JSON.parse(storedLikes)));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("likedBlogs", JSON.stringify(Array.from(likedPosts)));
  }, [likedPosts]);

  const categories = ["All", ...Array.from(new Set(blog.map((b) => b.category)))];

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  const filteredBlogs = blog.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const search = searchTerm.toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(search) ||
      post.description.toLowerCase().includes(search);
    return matchesCategory && matchesSearch;
  });

  const toggleLike = (id: number) => {
    setLikedPosts((prev) => {
      const newLikes = new Set(prev);
      if (newLikes.has(id)) {
        newLikes.delete(id);
      } else {
        newLikes.add(id);
      }
      return newLikes;
    });
  };

  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Full width header background with pattern */}
      <div className="relative w-full overflow-hidden mb-16">
        <div className="absolute inset-0 bg-orange-600 w-full">
          <div className="absolute inset-0 opacity-20">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
              focusable="false"
            >
              <defs>
                <pattern
                  id="diagonalLines"
                  patternUnits="userSpaceOnUse"
                  width="20"
                  height="20"
                >
                  <path
                    d="M0,20 L20,0 M-5,5 L5,-5 M15,25 L25,15"
                    stroke="white"
                    strokeWidth="0.5"
                    opacity="0.6"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#diagonalLines)" />
            </svg>
          </div>
          <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white border-opacity-30 rotate-45 transform"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-white border-opacity-20 rounded-full"></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative flex flex-col gap-6 p-6 md:p-12 lg:p-16 max-w-8xl mx-auto"
        >
          {/* Back Button inside header */}
          <div className="flex justify-start">
            <button
              onClick={handleGoBack}
              className="flex items-center gap-2 text-white hover:text-orange-300 transition-all duration-300 w-fit group"
              aria-label="Go back"
              type="button"
            >
              <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="font-semibold tracking-wide">Back</span>
            </button>
          </div>

          {/* Heading */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-white font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none drop-shadow-2xl">
                Latest
              </h1>
              <h1 className="text-white font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none drop-shadow-2xl -mt-2">
                <span className="text-orange-200">News</span>
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-20 h-0.5 bg-white bg-opacity-80"></div>
              <div className="w-10 h-0.5 bg-orange-200"></div>
              <div className="w-5 h-0.5 bg-white bg-opacity-60"></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
          {/* Category Filter */}
          <div>
            <label htmlFor="category" className="sr-only">
              Filter by Category
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Search */}
          <div className="flex-1">
            <label htmlFor="search" className="sr-only">
              Search Blogs
            </label>
            <input
              type="search"
              id="search"
              placeholder="Search by title or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Blog Grid */}
        {filteredBlogs.length === 0 ? (
          <p className="text-center text-gray-500 text-xl mt-20">
            No blog posts found.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((post) => (
              <article
                key={post.id}
                className="bg-white overflow-hidden cursor-pointer group rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <Link href={`/blog/${post.slug}`} className="flex flex-col flex-1">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-4">
                      <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-gray-700 transition-colors duration-200 flex-1">
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div>
                        <span>{formatDate(post.created)}</span>
                        <span className="mx-2">•</span>
                        <span>0 Comments</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <button
                  type="button"
                  onClick={() => toggleLike(post.id)}
                  aria-label={
                    likedPosts.has(post.id)
                      ? "Unlike blog post"
                      : "Like blog post"
                  }
                  className={`transition-colors duration-300 focus:outline-none m-4 self-end ${
                    likedPosts.has(post.id)
                      ? "text-orange-500"
                      : "text-gray-400 hover:text-orange-500"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill={likedPosts.has(post.id) ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
