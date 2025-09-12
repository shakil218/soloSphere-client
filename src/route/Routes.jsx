import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import JobDetails from "../pages/JobDetails";
import AddJobs from "../pages/AddJobs";
import MyPostedJobs from "../pages/MyPostedJobs";
import MyBids from "../pages/MyBids";
import BidRequests from "../pages/BidRequests";

const router = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout></MainLayout>,
    errorElement:`404
    Page not found.`,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
      {
        path:"/job-details",
        element:<JobDetails></JobDetails>
      },
      {
        path:"/add-jobs",
        element:<AddJobs></AddJobs>
      },
      {
        path:"/my-posted-jobs",
        element:<MyPostedJobs></MyPostedJobs>
      },
      {
        path:"/my-bids",
        element:<MyBids></MyBids>
      },
      {
        path:"/bid-requests",
        element:<BidRequests></BidRequests>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
    ]
  }
])

export default router;