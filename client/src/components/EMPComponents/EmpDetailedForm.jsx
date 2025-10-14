import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EmpDetailedForm = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 5; // Adjusted total steps after removing Step 3 and 7

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    image: "",
    dateOfBirth: "",
    gender: "OTHER",
    profilePicture: null, // New field
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    accountNo: "",
    ifsc: "",
    bankName: "",
    emergencyName: "",
    emergencyRelation: "",
    emergencyPhone: "",
    pan: "",
    aadhaar: "",
    passport: "",
    departmentId: "",
    teamId: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e) =>
    setFormData({ ...formData, profilePicture: e.target.files[0] });

  const nextStep = () => step < totalSteps && setStep(step + 1);
  const prevStep = () => step > 1 && setStep(step - 1);

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
   try {
    let imageUrl = formData.image;

    
    if (formData.profilePicture) {
      const data = new FormData();
      data.append("image", formData.profilePicture);

     const uploadRes = await axios.post(
  "http://localhost:3000/api/employee/upload",
  data,
  {
    headers: { "Content-Type": "multipart/form-data" },
    withCredentials: true, 
  }
);


      imageUrl = uploadRes.data.url;
    }

    const payload = { ...formData, image: imageUrl };

    
    const res = await axios.post(
      "http://localhost:3000/api/employee/addEmployeeDetails",
      payload,
      { withCredentials: true }
    );

    if (res.data.success) {
      console.log("✅ Employee details added successfully");
      navigate("/login");
    }
  } catch (error) {
    console.error("❌ Error submitting form:", error);
  }
};

  const inputClass =
    "border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-8">
        <motion.div
          key={step}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          <form onSubmit={handleSubmit}>
            {/* STEP 1: Profile Info */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-center">
                  Step 1: Profile Info
                </h2>
                <div className="flex items-center gap-6">
                  {/* Profile Picture */}
                  <div className="flex flex-col items-center">
                    <label htmlFor="profilePicture" className="cursor-pointer">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300 flex items-center justify-center bg-gray-100">
                        {formData.profilePicture ? (
                          <img
                            src={URL.createObjectURL(formData.profilePicture)}
                            alt="Profile"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-gray-400">Upload</span>
                        )}
                      </div>
                    </label>
                    <input
                      type="file"
                      id="profilePicture"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>

                  {/* Other inputs: Phone, DOB, Gender */}
                  <div className="grid grid-cols-1 gap-4 flex-1">
                    <input
                      name="email"
                      placeholder="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                    <input
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className={inputClass}
                    />
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="MALE">Male</option>
                      <option value="FEMALE">Female</option>
                      <option value="OTHER">Other</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end mt-6">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 cursor-pointer"
                  >
                    Next →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Address */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-center">
                  Step 2: Address
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="street"
                    placeholder="Street"
                    value={formData.street}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <input
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <input
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <input
                    name="zip"
                    placeholder="Zip Code"
                    value={formData.zip}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <input
                    name="country"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500 cursor-pointer"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 cursor-pointer"
                  >
                    Next →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Bank Details */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-center">
                  Step 3: Bank Details
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="accountNo"
                    placeholder="Account Number"
                    value={formData.accountNo}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <input
                    name="ifsc"
                    placeholder="IFSC Code"
                    value={formData.ifsc}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <input
                    name="bankName"
                    placeholder="Bank Name"
                    value={formData.bankName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500 cursor-pointer"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 cursor-pointer"
                  >
                    Next →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: Emergency Contact */}
            {step === 4 && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-center">
                  Step 4: Emergency Contact
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="emergencyName"
                    placeholder="Name"
                    value={formData.emergencyName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <input
                    name="emergencyRelation"
                    placeholder="Relation"
                    value={formData.emergencyRelation}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <input
                    name="emergencyPhone"
                    placeholder="Phone"
                    value={formData.emergencyPhone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500 cursor-pointer"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 cursor-pointer"
                  >
                    Next →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 5: Govt IDs */}
            {step === 5 && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-center">
                  Step 5: Government IDs
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="pan"
                    placeholder="PAN"
                    value={formData.pan}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <input
                    name="aadhaar"
                    placeholder="Aadhaar"
                    value={formData.aadhaar}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <input
                    name="passport"
                    placeholder="Passport"
                    value={formData.passport}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500 cursor-pointer"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-green-600 cursor-pointer"
                  >
                    ✅ Submit
                  </button>
                </div>
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default EmpDetailedForm;
