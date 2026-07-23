"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import { authClient } from "../../lib/auth-client";
import { useRouter } from "next/navigation";







export default function EditProfilePage() {
  const router = useRouter();
  
  // Get current user session from authClient
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  
  const [name, setName] = useState(user?.name || "");
  const [image, setImage] = useState(user?.image || "");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await authClient.updateUser({
        name: name,
        image: image,
      });

      toast.success("Profile updated successfully!");
      router.push("/profile"); // Redirect back to profile page
      router.refresh();        // Refresh server components to show updated data
    } catch (error) {
      toast.error(error.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  if (isPending) {
    return <div className="p-10 text-center">Loading user details...</div>;
  }

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Edit Profile</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder={name}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Image URL Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Profile Image URL
          </label>
          <input
            type="url"
            className="input input-bordered w-full"
            placeholder={image}
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        {/* Image Preview (Optional) */}
        {image && (
          <div className="mt-2 text-center">
            <p className="text-xs text-gray-500 mb-1">Preview:</p>
            <Image height={200} width={200} src={image} alt="image"></Image>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="btn btn-ghost"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-warning"
            disabled={loading}
          >
            {loading ? "Updating..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}