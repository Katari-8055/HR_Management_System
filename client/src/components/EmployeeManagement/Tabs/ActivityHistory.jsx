import React from "react";
import { Filter, Clock, CheckCircle2, Loader2, Award } from "lucide-react";

const ActivityHistory = ({ employee }) => {




const activities = [
  {
    title: "Website Redesign Project",
    status: "Completed",
    description: "Completed the homepage redesign with new branding guidelines",
    category: "Project Work",
    date: "15/08/2024",
    time: "10:30 am",
  },
  {
    title: "API Integration",
    status: "In Progress",
    description: "Working on third-party payment gateway integration",
    category: "Development",
    date: "12/08/2024",
    time: "09:15 am",
  },
  {
    title: "Best Employee Award",
    status: "Achievement",
    description: "Recognized for outstanding performance in Q2",
    category: "Recognition",
    date: "01/07/2024",
    time: "03:00 pm",
  },
];





  return (
    <div className="space-y-8">
      {/* Filter Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
          <Filter className="w-5 h-5 text-blue-600" /> Filter Activities
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-500 text-sm mb-1">Activity Type</label>
            <select className="w-full px-3 py-2 border rounded-lg text-gray-700">
              <option>All</option>
              <option>Tasks</option>
              <option>Leave Requests</option>
              <option>Achievements</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-500 text-sm mb-1">Time Range</label>
            <select className="w-full px-3 py-2 border rounded-lg text-gray-700">
              <option>All Time</option>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>This Year</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-4 gap-6">
        <StatCard label="Total Tasks" value="3" color="blue" />
        <StatCard label="Completed" value="2" color="green" />
        <StatCard label="Leave Requests" value="2" color="orange" />
        <StatCard label="Achievements" value="1" color="purple" />
      </div>

      {/* Activity Timeline */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-6">
          <Clock className="w-5 h-5 text-blue-600" /> Activity Timeline
          <span className="ml-2 text-sm text-gray-500">
            ({activities.length} activities)
          </span>
        </h3>

        <div className="space-y-6">
          {activities.map((activity, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 border-l-2 pl-4 relative"
            >
              {/* Timeline Indicator */}
              <span
                className={`absolute -left-[11px] top-2 w-5 h-5 rounded-full flex items-center justify-center border-2 ${
                  activity.status === "Completed"
                    ? "bg-green-100 border-green-600 text-green-600"
                    : activity.status === "In Progress"
                    ? "bg-yellow-100 border-yellow-500 text-yellow-600"
                    : "bg-gray-100 border-gray-400 text-gray-600"
                }`}
              >
                {activity.status === "Completed" ? (
                  <CheckCircle2 className="w-3 h-3" />
                ) : activity.status === "In Progress" ? (
                  <Loader2 className="w-3 h-3 animate-spin" />
                ) : (
                  <Award className="w-3 h-3" />
                )}
              </span>

              {/* Activity Card */}
              <div className="flex-1 bg-gray-50 rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-gray-800">
                    {activity.title}
                  </h4>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      activity.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : activity.status === "In Progress"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {activity.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{activity.description}</p>
                <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                  <span>{activity.category}</span>
                  <span>{activity.date}</span>
                  <span>{activity.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* 🔹 Reusable stat card */
const StatCard = ({ label, value, color }) => {
  const colors = {
    blue: "text-blue-600 bg-blue-100",
    green: "text-green-600 bg-green-100",
    orange: "text-orange-600 bg-orange-100",
    purple: "text-purple-600 bg-purple-100",
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6 text-center">
      <div
        className={`w-12 h-12 mx-auto flex items-center justify-center rounded-full ${colors[color]} mb-3`}
      >
        <span className="text-lg font-bold">{value}</span>
      </div>
      <p className="text-gray-600 text-sm">{label}</p>
    </div>
  );
};

export default ActivityHistory;
