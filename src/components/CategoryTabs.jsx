import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobsCard from "./JobsCard";
import { useEffect, useState } from "react";
import axios from "axios";

const CategoryTabs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getJobsData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`);
      setJobs(data);
    };
    getJobsData();
  }, []);

  return (
    <Tabs>
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
          Browse Jobs By Categories
        </h1>
        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500">
          Three category available for the time being. They are Web Development,
          Graphics Design and Digital Marketing. Browse them by clicking on the
          tabs below.
        </p>
        <div className="flex items-center justify-center">
          <TabList>
            <Tab>Web Developer</Tab>
            <Tab>Graphics Design</Tab>
            <Tab>Digital Marketing</Tab>
          </TabList>
        </div>
        {/* web developer tabpanel */}
        <TabPanel className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {jobs
              .filter((j) => j.category === "Web Developer")
              .map((job) => (
                <JobsCard key={job._id} job={job}></JobsCard>
              ))}
          </div>
        </TabPanel>
        {/* Graphics Design tabpanel */}
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {jobs
              .filter((j) => j.category === "Graphics Design")
              .map((job) => (
                <JobsCard key={job._id} job={job}></JobsCard>
              ))}
          </div>
        </TabPanel>
        {/* Digital Marketing tabpanel */}
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {jobs
              .filter((j) => j.category === "Digital Marketing")
              .map((job) => (
                <JobsCard key={job._id} job={job}></JobsCard>
              ))}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default CategoryTabs;
