import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useAddClientLogoMutation } from "@/redux/features/ClientLogo";

type ClientLogoForm = {
  link: string;
  image: FileList | null;
};

const CreateClients: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ClientLogoForm>();

  const [preview, setPreview] = useState<string | null>(null);
  const watchImage = watch("image");

  const [addClientLogo, { isLoading }] = useAddClientLogoMutation();

  useEffect(() => {
    if (watchImage && watchImage.length > 0) {
      const uploadedFile = watchImage[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(uploadedFile);
    } else {
      setPreview(null);
    }
  }, [watchImage]);

  const handleCancel = () => {
    setPreview(null);
    reset({ image: undefined });
  };

  const onSubmit = async (data: ClientLogoForm) => {
    if (!data.image || data.image.length === 0) {
      toast.error("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("link", data.link);
    formData.append("image", data.image[0]);

    try {
      await addClientLogo(formData).unwrap();
      toast.success("Client logo added successfully!");
      reset();
      setPreview(null);
    } catch {
      toast.error("Failed to add logo. Please try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-6">Add Client Logo</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium mb-1">Website Link</label>
          <input
            type="text"
            {...register("link", { required: "Link is required" })}
            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c9f31c]"
            placeholder="https://example.com"
          />
          {errors.link && (
            <p className="text-red-500 text-sm">{errors.link.message}</p>
          )}
        </div>

        {/* File Upload Field */}
        <div>
          <label className="block text-sm font-medium mb-1">Client Logo</label>
          <label className="cursor-pointer bg-[#c9f31c] text-black px-4 py-2 rounded-md hover:bg-lime-400 inline-block">
            Choose Logo
            <input
              type="file"
              accept="image/*"
              {...register("image", { required: "Image is required" })}
              className="hidden"
            />
          </label>
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          )}
        </div>

        {/* Image Preview + Cancel Button */}
        {preview && (
          <div className="mt-2 relative w-fit">
            <p className="text-sm text-gray-600 mb-1">Image Preview:</p>
            <img
              src={preview}
              alt="Preview"
              className="w-auto h-24 object-contain border p-2 bg-gray-50 rounded"
            />
            <button
              type="button"
              onClick={handleCancel}
              className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full hover:bg-red-600"
              title="Remove image"
            >
              ✕
            </button>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading || !preview}
          className="w-full bg-[#c9f31c] text-black font-semibold py-2 rounded-md hover:bg-lime-400 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default CreateClients;
