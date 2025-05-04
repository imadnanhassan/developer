import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { X, Loader2 } from "lucide-react";
import { useAddPortfolioMutation } from "@/redux/features/Portfolio";

type PortfolioForm = {
  title: string;
  description: string;
  link: string;
  categories: string;
};

const AddPortfolio = () => {
  const [addPortfolio, { isLoading }] = useAddPortfolioMutation();
  const [preview, setPreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PortfolioForm>();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };

  const removeImage = () => {
    setImageFile(null);
    setPreview(null);
  };

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags((prev) => [...prev, tagInput.trim()]);
        setTagInput("");
      }
    }
  };

  const removeTag = (tag: string) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  const onSubmit = async (data: PortfolioForm) => {
    if (!imageFile) {
      toast.error("Please upload an image");
      return;
    }

    const reader = new FileReader();

    reader.onload = async () => {
      try {
        const base64Image = reader.result as string;

        const payload = {
          title: data.title,
          description: data.description,
          image: base64Image,
          link: data.link,
          categories: data.categories,
          tags,
        };

        await addPortfolio(payload).unwrap();
        toast.success("Portfolio submitted successfully!");

        reset();
        setTags([]);
        setImageFile(null);
        setPreview(null);
      } catch (error) {
        console.error(error);
        toast.error("Failed to submit portfolio");
      }
    };

    reader.readAsDataURL(imageFile);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-xl space-y-5"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Add Portfolio</h2>

      {/* Title */}
      <input
        {...register("title", { required: true })}
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Project Title"
      />
      {errors.title && <span className="text-red-500">Title is required</span>}

      {/* Description */}
      <textarea
        {...register("description", { required: true })}
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Project Description"
      />
      {errors.description && (
        <span className="text-red-500">Description is required</span>
      )}

      {/* Image Upload */}
      <div>
        <label className="flex flex-col items-center justify-center w-full h-40 px-4 transition bg-white border-2 border-dashed rounded-md cursor-pointer hover:bg-gray-50">
          <span className="text-gray-600">Click to upload image</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
        {preview && (
          <div className="relative w-40 h-40 mt-3">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-full object-cover rounded"
            />
            <button
              type="button"
              className="absolute top-0 right-0 bg-white text-red-600 p-1 rounded-full"
              onClick={removeImage}
            >
              <X size={18} />
            </button>
          </div>
        )}
      </div>

      {/* Link */}
      <input
        {...register("link")}
        placeholder="Website URL"
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* Categories */}
      <input
        {...register("categories")}
        placeholder="Categories (e.g. eCommerce, Portfolio)"
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* Tags */}
      <div>
        <input
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={handleAddTag}
          placeholder="Press Enter to add tag"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full flex items-center gap-2"
            >
              {tag}
              <button type="button" onClick={() => removeTag(tag)}>
                <X size={14} />
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center items-center gap-2 bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <Loader2 className="animate-spin w-5 h-5" /> Submitting...
          </>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default AddPortfolio;
