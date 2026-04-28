"use client"

import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Button } from "@/components/ui/button";
const X = () => {
  const projects = useQuery(api.projects.get);
  const createProject = useMutation(api.projects.create);
  return (
    <div className="flex flex-col gap-2">
      <Button onClick={() => createProject({ name: "Project 1" })}>Create Project</Button>
      {projects?.map((project) => (
        <div className="border rounded p-2 flex flex-col" key={project._id}>
          <p>{project.name}</p>
          <p>OwnerId : {project.ownerId}</p>
        </div>
      ))}
    </div>
  )
}





function page() {
  return (
    <div className="text-blue-500">hello world</div>
  )
}

export default page
