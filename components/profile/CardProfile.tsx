"use client";
import Image from "next/image";
import React from "react";
import { useUser } from "@clerk/nextjs";
import { userDetail } from "@/utils/userDetail";

const ProfileComponent = (): React.ReactElement => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <p className="text-center py-8">Loading...</p>;
  }

  return (
    <>
      <div className="card bg-base-100 shadow-xl rounded-lg overflow-hidden">
        <div className="card-body">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 p-5">
            {/* Profile Image */}
            <div className="flex-none">
              <div className="avatar">
                <div className="w-32 h-32 mask mask-circle">
                  <Image
                    src={user?.imageUrl || "/default-profile.png"}
                    alt="Profile photo"
                    width={128}
                    height={128}
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>

            {/* Full Name and Username */}
            <div className="flex-grow">
              <h2 className="text-3xl font-bold">{user?.fullName}</h2>
              <p className="text-lg text-gray-500">@{user?.username}</p>
              <p className="text-md italic text-gray-500">
                {user?.emailAddresses[0].emailAddress}
              </p>
              <p className="mt-2 text-lg text-gray-700">{userDetail.bio}</p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="p-5">
          <h3 className="text-xl font-semibold">Skills</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {userDetail.skills.map((skill) => (
              <span key={skill} className="badge badge-secondary">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="p-5">
          <h3 className="text-xl font-semibold">Education</h3>
          <ul>
            {userDetail.education.map((edu) => (
              <li key={edu.school} className="mb-1">
                {edu.degree} - {edu.school}, {edu.year}
              </li>
            ))}
          </ul>
        </div>

        {/* Experience */}
        <div className="p-5">
          <h3 className="text-xl font-semibold">Experience</h3>
          <ul>
            {userDetail.experience.map((job) => (
              <li key={job.company} className="mb-2">
                <strong>{job.role}</strong> at {job.company}, {job.period}
                <div className="text-sm text-gray-600 mt-1">{job.details}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Activities */}
        <div className="p-5">
          <h3 className="text-xl font-semibold mb-2">Recent Activity</h3>
          <ul className="list-disc pl-5 text-gray-600">
            {userDetail.recentActivities.map((activity) => (
              <li key={activity} className="mb-1">
                {activity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProfileComponent;
