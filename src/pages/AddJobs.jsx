import React from "react";

const AddJobs = () => {
  return (
    <div className="my-5">
      <h1 className="text-3xl font-bold md:text-5xl text-center">
        Add a new Job
      </h1>
      <form onSubmit={"handleAddJob"} className="card-body">
        <fieldset className="fieldset">
          {/* column 1 */}
          {/* Title */}
          <div className="">
            <label className="label">Title</label>
            <input
              type="text"
              name="title"
              className="input w-full"
              placeholder="Title"
              required
            />
          </div>
          {/* column 2 */}
          {/* Email */}
          <div className="">
            <label className="label">Email</label>
            <input
              defaultValue={""}
              type="email"
              name="email"
              className="input w-full"
              placeholder="Email"
              required
            />
          </div>

          {/* column 3 */}
          {/* job description */}
          <div>
            <fieldset className="fieldset">
              <legend className="text-gray-500">Description</legend>
              <textarea
                className="textarea w-full"
                name="description"
                placeholder="Description"
                required
              ></textarea>
            </fieldset>
          </div>
          {/* column 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-3">
            {/*Job Category */}
            <div>
              <fieldset className="fieldset">
                <legend className="text-gray-500">Category</legend>
                <select
                  defaultValue="Pick a job category"
                  name="category"
                  className="select w-full"
                  required
                >
                  <option disabled={true}>Pick a job category</option>
                  <option>Web Developer</option>
                  <option>Graphics Design</option>
                  <option>Digital Marketing</option>
                </select>
              </fieldset>
            </div>
            {/*Application deadline */}
            <div>
              <label className="label">Application Deadline</label>
              <input
                type="date"
                name="applicationDeadline"
                className="input w-full"
                placeholder="Application Deadline"
                required
              />
            </div>
          </div>
          {/* column 8 */}
          <div>
            <label>Salary Range</label>
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-3">
              {/* minimum salary range */}
              <div className="">
                <label className="label">min</label>
                <input
                  type="number"
                  name="min"
                  className="input w-full"
                  placeholder="min"
                  required
                />
              </div>
              {/* maximum salary range */}
              <div className="">
                <label className="label">max</label>
                <input
                  type="number"
                  name="max"
                  className="input w-full"
                  placeholder="max"
                  required
                />
              </div>
              {/* salary currency */}

              <fieldset className="fieldset">
                <legend className="text-gray-500">Currency</legend>
                <select
                  defaultValue="Pick a salary currency"
                  name="currency"
                  className="select w-full"
                >
                  <option disabled={true}>Pick a salary currency</option>
                  <option>bdt</option>
                  <option>us-dollar</option>
                  <option>euro</option>
                  <option>dinar</option>
                  <option>dirham</option>
                </select>
              </fieldset>
            </div>
          </div>
          {/* Submit Button */}
          <button className="btn btn-neutral">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default AddJobs;
