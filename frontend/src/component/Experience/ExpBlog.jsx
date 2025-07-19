import { useParams } from "react-router-dom";

export default function ExpBlog() {
  const { slug } = useParams();
  const experienceName = slug.replace(/-/g, " ");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000814] via-[#003049] to-[#001d3d] px-0 py-0 text-white flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full relative h-64 md:h-96 flex items-center justify-center">
        {/* Blog main image */}
        <div className="absolute inset-0 w-full h-full bg-white/10 object-cover opacity-40 flex items-center justify-center">
          <span className="text-3xl text-gray-400">Main Blog Image</span>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg text-[#ffbe0b] animate-fade-in">
            {experienceName}
          </h1>
          <p className="text-white text-lg md:text-2xl font-medium drop-shadow mb-2 animate-fade-in-delay">
            Dive into real stories and tips from fellow travelers
          </p>
        </div>
      </div>

      {/* Blog Section Structure */}
      <section className="w-full max-w-4xl mx-auto mt-10 mb-16 px-4">
        <div className="flex flex-col md:flex-row bg-white/10 rounded-3xl shadow-2xl overflow-hidden">
          <div className="w-full md:w-1/2 h-72 flex items-center justify-center bg-white/20">
            <span className="text-xl text-gray-400">Featured Blog Image</span>
          </div>
          <div className="p-8 flex flex-col flex-1 justify-center">
            <h2 className="text-3xl font-bold mb-2 text-[#ffbe0b]">Blog Title</h2>
            <blockquote className="italic text-gray-200 mb-4 text-lg border-l-4 border-[#ffbe0b] pl-4">Blog excerpt or intro goes here...</blockquote>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-sm text-gray-400">By Author Name</span>
              <span className="text-sm text-gray-400">Date</span>
            </div>
          </div>
        </div>
      </section>

      
      <section className="w-full max-w-5xl mx-auto mb-20 px-4">
        {[1,2].map((_, idx) => (
          <div key={idx} className={`flex flex-col md:flex-row items-center mb-16 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
            <div className="w-full md:w-1/2 h-64 flex items-center justify-center bg-white/20 rounded-2xl shadow-lg">
              <span className="text-xl text-gray-400">Blog Image</span>
            </div>
            <div className="md:w-1/2 w-full md:px-10 px-0 py-8 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-2 text-[#ffbe0b]">Blog Title</h2>
              <p className="text-gray-200 mb-4 text-lg">Blog excerpt or summary goes here...</p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-sm text-gray-400">By Author Name</span>
                <span className="text-sm text-gray-400">Date</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
