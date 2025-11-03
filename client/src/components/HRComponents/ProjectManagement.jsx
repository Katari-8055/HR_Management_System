import React, { useEffect, useState, useContext } from "react";
import { PlusCircle, ChevronDown, ChevronUp, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AddProjectForm from "./AddProjectForm";
import { EmployeeContext } from "../../context/EmployeeContext";
import axios from "axios";

export default function ProjectManagement() {
  const [activeTab, setActiveTab] = useState("all");
  const [showForm, setShowForm] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  const { getProjects, projects, setProjects } = useContext(EmployeeContext);

  useEffect(() => {
    getProjects();
  }, []);

  const filteredProjects =
    activeTab === "all" ? projects : projects.filter((p) => p.status === activeTab);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // ✅ NEW — Handler To Rerendring project
  const handleProjectCreate = (project) => {
    setProjects(prev => [...prev, project]);   // ✅ Add to UI
  };

  // ✅ NEW — Delete Handler
const deleteProject = async (id) => {
  try {
    const res = await axios.delete(`http://localhost:3000/api/hr/project/${id}`, { withCredentials: true });

    console.log("Delete response:", res);

   if (res.status === 200) {
  setProjects((prev) => prev.filter((p) => p.id !== id));
}

  } catch (err) {
    console.error(err);
  }
};


  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Project Management</h1>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 cursor-pointer"
        >
          <PlusCircle size={20} /> Create Project
        </button>
      </div>

      <div className="flex gap-4 mb-6">
        {["all", "Ongoing", "Completed", "Pending"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full capitalize shadow cursor-pointer ${
              activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            {tab} Projects
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredProjects.map((proj) => (
          <div key={proj.id} className="border rounded-xl p-4 bg-white shadow">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{proj.name}</h3>
                <p className="text-gray-600">Client: {proj.client}</p>
                <span className="mt-2 inline-block px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-600">
                  {proj.status}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => toggleExpand(proj.id)}
                  className="flex items-center gap-1 text-blue-600 hover:underline cursor-pointer"
                >
                  {expandedId === proj.id ? (
                    <>
                      View Less <ChevronUp size={18} />
                    </>
                  ) : (
                    <>
                      View More <ChevronDown size={18} />
                    </>
                  )}
                </button>

                {/* ✅ DELETE BUTTON */}
                <button
                  onClick={() => deleteProject(proj.id)}
                  className="flex items-center gap-1 bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 cursor-pointer"
                >
                  <Trash2 size={16} /> Delete
                </button>
              </div>
            </div>

            <AnimatePresence>
              {expandedId === proj.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-4 border-t pt-4"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {proj?.manager?.image && (
                      <img
                        src={proj.manager.image}
                        className="w-12 h-12 rounded-full object-cover shadow"
                      />
                    )}
                    <div>
                      <p className="font-medium">
                        Manager: {proj.manager?.firstName} {proj.manager?.lastName}
                      </p>
                      <p className="text-gray-600 text-sm">{proj.manager?.email}</p>
                    </div>
                  </div>

                  <p className="mt-1">
                    <span className="font-medium">Deadline:</span>{" "}
                    {proj.Deadline?.split("T")[0]}
                  </p>

                  <p className="mt-1">
                    <span className="font-medium">Created At:</span>{" "}
                    {proj.createdAt?.split("T")[0]}
                  </p>

                  <p className="mt-1">
                    <span className="font-medium">Updated At:</span>{" "}
                    {proj.updatedAt?.split("T")[0]}
                  </p>

                  <div className="mt-4">
                    <span className="font-medium">Team Members:</span>
                    <ul className="mt-2 grid grid-cols-2 gap-3 text-gray-700">
                      {proj.members?.length > 0 ? (
                        proj.members.map((emp) => (
                          <li
                            key={emp.id}
                            className="flex items-center gap-3 p-3 rounded-xl border bg-gray-50 hover:shadow transition cursor-pointer"
                          >
                            <img
                              src={emp.image}
                              className="w-10 h-10 rounded-full object-cover"
                              alt={emp.firstName}
                            />
                            <div className="flex flex-col leading-tight">
                              <span className="font-medium">
                                {emp.firstName} {emp.lastName}
                              </span>
                              <span className="text-xs text-gray-500">{emp.email}</span>
                              <span className="text-xs text-gray-500">
                                {emp.position || "Employee"}
                              </span>
                            </div>
                          </li>
                        ))
                      ) : (
                        <p className="text-gray-500">No members assigned</p>
                      )}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {showForm && <AddProjectForm onClose={() => setShowForm(false)}  onCreateProject={handleProjectCreate}/>}
    </div>
  );
}
