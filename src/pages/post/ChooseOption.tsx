import React, { useEffect, useState } from "react";
import useSellRequirements from "../../store/useSellRequirements";
import PhotoUpload from "./components/PhotoUpload";

const ChooseOption: React.FC = () => {
  const { requirements, loading, error, fetchRequirements } = useSellRequirements();
  const [photos, setPhotos] = useState<File[]>([]); // Photos state
  const [formData, setFormData] = useState({
    ad_headline: "",
    category: "50",
    brand: "",
    condition: "",
    vga: "",
    cpu: "",
    ram: "",
    storage: "",
    screenSize: "",
    price: "",
    discount: "",
    discountType: "percent",
    freeDelivery: false,
    description: "",
    province: "",
    district: "",
    commune: "",
    address: "",
    name: "",
    phoneNumber: "",
    email: "",
  });

  useEffect(() => {
    fetchRequirements(1); // Fetch for category ID 1
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchRequirements]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      // Append all form fields
      for (const key in formData) {
        formDataToSend.append(key, (formData as any)[key]);
      }

      // Append photos
      photos.forEach((photo) => {
        formDataToSend.append("photos", photo);
      });

      const response = await fetch("https://your-api-url.com/post-ad", {
        method: "POST",
        body: formDataToSend, // Send as multipart/form-data
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log("API Response:", data);
      alert("Ad posted successfully!");

      // Reset form
      setFormData({
        ad_headline: "",
        category: "50",
        brand: "",
        condition: "",
        vga: "",
        cpu: "",
        ram: "",
        storage: "",
        screenSize: "",
        price: "",
        discount: "",
        discountType: "percent",
        freeDelivery: false,
        description: "",
        province: "",
        district: "",
        commune: "",
        address: "",
        name: "",
        phoneNumber: "",
        email: "",
      });
      setPhotos([]);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to post ad. Please try again.");
    }
  };

  if (loading) return <div className="text-center py-10">Loading form requirements...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  if (!requirements) return <div className="text-center py-10">No form requirements available.</div>;

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <PhotoUpload onPhotosChange={setPhotos} /> {/* ✅ Pass photos back */}
      <h1 className="font-bold text-gray-900 my-8">Post Your Ad</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="ad_headline"
            value={formData.ad_headline}
            onChange={handleChange}
            maxLength={255}
            minLength={5}
            className="mt-1 block w-full border rounded-md px-3 py-2 text-gray-900 shadow-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        {/* Brand */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Brand <span className="text-red-500">*</span>
          </label>
          <select
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className="mt-1 block w-full border rounded-md px-3 py-2 text-gray-900 shadow-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          >
            <option value="">Select Brand</option>
            <option value="apple">Apple</option>
            <option value="dell">Dell</option>
            <option value="hp">HP</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Condition */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Condition <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-4 mt-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="condition"
                value="new"
                checked={formData.condition === "new"}
                onChange={handleChange}
                className="text-indigo-600 focus:ring-indigo-500"
                required
              />
              <span className="ml-2">New</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="condition"
                value="used"
                checked={formData.condition === "used"}
                onChange={handleChange}
                className="text-indigo-600 focus:ring-indigo-500"
              />
              <span className="ml-2">Used</span>
            </label>
          </div>
        </div>

        {/* VGA */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            VGA <span className="text-red-500">*</span>
          </label>
          <select
            name="vga"
            value={formData.vga}
            onChange={handleChange}
            className="mt-1 block w-full border rounded-md px-3 py-2 text-gray-900 shadow-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          >
            <option value="">Select VGA</option>
            <option value="nvidia">NVIDIA</option>
            <option value="amd">AMD</option>
            <option value="intel">Intel</option>
          </select>
        </div>

        {/* Add all other fields here (CPU, RAM, Storage, Price, etc.) like above */}
        {/* CPU */}
<div className="mb-4">
  <label className="block text-sm font-medium text-gray-700">
    CPU <span className="text-red-500">*</span>
  </label>
  <select
    name="cpu"
    value={formData.cpu}
    onChange={handleChange}
    className="mt-1 block w-full border rounded-md px-3 py-2 text-gray-900 shadow-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    required
  >
    <option value="">Select CPU</option>
    <option value="intel">Intel</option>
    <option value="amd">AMD</option>
    <option value="apple_m1">Apple M1</option>
  </select>
</div>

{/* RAM */}
<div className="mb-4">
  <label className="block text-sm font-medium text-gray-700">
    RAM <span className="text-red-500">*</span>
  </label>
  <select
    name="ram"
    value={formData.ram}
    onChange={handleChange}
    className="mt-1 block w-full border rounded-md px-3 py-2 text-gray-900 shadow-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    required
  >
    <option value="">Select RAM</option>
    <option value="4gb">4GB</option>
    <option value="8gb">8GB</option>
    <option value="16gb">16GB</option>
    <option value="32gb">32GB</option>
  </select>
</div>

{/* Storage */}
<div className="mb-4">
  <label className="block text-sm font-medium text-gray-700">
    Storage <span className="text-red-500">*</span>
  </label>
  <select
    name="storage"
    value={formData.storage}
    onChange={handleChange}
    className="mt-1 block w-full border rounded-md px-3 py-2 text-gray-900 shadow-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    required
  >
    <option value="">Select Storage</option>
    <option value="128gb">128GB</option>
    <option value="256gb">256GB</option>
    <option value="512gb">512GB</option>
    <option value="1tb">1TB</option>
  </select>
</div>

{/* Price */}
<div className="mb-4">
  <label className="block text-sm font-medium text-gray-700">
    Price <span className="text-red-500">*</span>
  </label>
  <input
    type="number"
    name="price"
    value={formData.price}
    onChange={handleChange}
    min={0}
    placeholder="Enter price in USD"
    className="mt-1 block w-full border rounded-md px-3 py-2 text-gray-900 shadow-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    required
  />
</div>

{/* Discount */}
<div className="mb-4">
  <label className="block text-sm font-medium text-gray-700">
     <span className="text-red-500">*</span>
  </label>
  <input
    type="number"
    name="discount"
    value={formData.price}
    onChange={handleChange}
    min={0}
    placeholder="Enter Discount"
    className="mt-1 block w-full border rounded-md px-3 py-2 text-gray-900 shadow-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    required
  />
</div>

{/* Description */}
<div className="mb-4">
  <label className="block text-sm font-medium text-gray-700">
    Description <span className="text-red-500">*</span>
  </label>
  <textarea
    name="description"
    value={formData.description}
    onChange={handleChange}
    rows={4}
    className="mt-1 block w-full border rounded-md px-3 py-2 text-gray-900 shadow-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    required
  ></textarea>
</div>

{/* Province */}
<div className="mb-4">
  <label className="block text-sm font-medium text-gray-700">
    Province <span className="text-red-500">*</span>
  </label>
  <select
    name="province"
    value={formData.province}
    onChange={(e) => {
      const province = e.target.value;
      setFormData({
        ...formData,
        province,
        district: "", // reset district when province changes
        commune: "",  // reset commune
      });
    }}
    className="mt-1 block w-full border rounded-md px-3 py-2 text-gray-900 shadow-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    required
  >
    <option value="">Select Province</option>
    <option value="phnom_penh">Phnom Penh</option>
    <option value="kandal">Kandal</option>
    <option value="siem_reap">Siem Reap</option>
    {/* Add more provinces here */}
  </select>
</div>

{/* District */}
{formData.province && (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">
      District <span className="text-red-500">*</span>
    </label>
    <select
      name="district"
      value={formData.district}
      onChange={(e) => {
        const district = e.target.value;
        setFormData({
          ...formData,
          district,
          commune: "", // reset commune when district changes
        });
      }}
      className="mt-1 block w-full border rounded-md px-3 py-2 text-gray-900 shadow-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      required
    >
      <option value="">Select District</option>
      {formData.province === "phnom_penh" && (
        <>
          <option value="chamkarmon">Chamkarmon</option>
          <option value="daun_penh">Daun Penh</option>
          <option value="toul_kork">Toul Kork</option>
        </>
      )}
      {formData.province === "kandal" && (
        <>
          <option value="ta_khmau">Ta Khmau</option>
          <option value="sa_ang">Sa Ang</option>
        </>
      )}
      {/* Add more districts for other provinces */}
    </select>
  </div>
)}

{/* Commune */}
{formData.district && (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">
      Commune <span className="text-red-500">*</span>
    </label>
    <select
      name="commune"
      value={formData.commune}
      onChange={handleChange}
      className="mt-1 block w-full border rounded-md px-3 py-2 text-gray-900 shadow-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      required
    >
      <option value="">Select Commune</option>
      {formData.district === "chamkarmon" && (
        <>
          <option value="tonle_bassac">Tonle Bassac</option>
          <option value="boeung_keng_kang">Boeung Keng Kang</option>
        </>
      )}
      {formData.district === "daun_penh" && (
        <>
          <option value="wat_phnom">Wat Phnom</option>
          <option value="phsar_kandal">Phsar Kandal</option>
        </>
      )}
      {/* Add communes for other districts */}
    </select>
  </div>
)}


        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChooseOption;
