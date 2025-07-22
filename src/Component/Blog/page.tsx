import React from 'react';
import blogData from "../../../db-temp/blog.json"

type Blog = {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  content:string;
  tags:string[];
  created:string;
  updated:string;
  author: {
    name: string;
    email: string;
    profile_picture: string;
  }   
};

const blog: Blog[] = blogData;

const BlogSection = () => {

    const blogdata = blog.slice(0,3)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
            OUR BLOG
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Latest news
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogdata.map((post) => (
            <article
              key={post.id}
              className="bg-white overflow-hidden cursor-pointer group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <div className="mb-4">
                  <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-gray-700 transition-colors duration-200">
                  {post.title}
                </h3>

                {/* Meta */}
                <div className="flex items-center text-sm text-gray-500">
                  <span>{formatDate(post.created)}</span>
                  <span className="mx-2">•</span>
                  <span>0 Comments</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default BlogSection;