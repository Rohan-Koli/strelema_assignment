import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Narbar from "../components/Narbar";
import Footer from "../components/Footer";
import { RxDashboard } from "react-icons/rx";
import {
  FaUsers,
  FaRegBuilding,
  FaRegCalendarCheck,
  FaUmbrellaBeach,
  FaRegCalendarAlt,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { IoEyeOutline } from "react-icons/io5";

function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [totalEmployees, setTotalEmployees] = useState(0);
  const [limit, setLimit] = useState(10);

  const navigate = useNavigate()

  const token = localStorage.getItem("token");
  const auth = localStorage.getItem("auth")
  if(!token || !auth){
    navigate("/login")
  }

  useEffect(() => {
    const fetchEmployees = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await axios.get(
          `https://strelema-task.onrender.com/api/employees?page=${currentPage}&limit=10`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(res.data);
        setEmployees(res.data.data);
        setTotalPages(res.data.pagination.pages);
        setTotalEmployees(res.data.pagination.total);
      } catch (err) {
        setError("Failed to fetch employees");
        console.error("Error fetching employees:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, [currentPage, limit]);

  const links = [
    {
      title: "Dashboard",
      icon: <RxDashboard size={20} />,
    },
    {
      title: "All Employees",
      icon: <FaUsers size={20} />,
    },
    {
      title: "All Departments",
      icon: <FaRegBuilding size={20} />,
    },
    {
      title: "Attendance",
      icon: <FaRegCalendarCheck size={20} />,
    },
    {
      title: "Leaves",
      icon: <FaUmbrellaBeach size={20} />,
    },
    {
      title: "Holidays",
      icon: <FaRegCalendarAlt size={20} />,
    },
    {
      title: "Training",
      icon: <FaChalkboardTeacher size={20} />,
    },
    {
      title: "Setting",
      icon: <IoSettingsOutline size={20} />,
    },
  ];

  //   if(loading){
  //     return <div>Loading....</div>
  //   }
  if (error) {
    return <div>Error....</div>;
  }

  return (
    <>
      <Narbar />
      <section className=" w-full h-screen flex">
        <div className="min-w-[250px] bg-gray-100 flex p-5 flex-col">
          <div className="flex items-center justify-center  w-full h-30">
            <img src="/assets/Logo.png" className="h-30 w-40" alt="Logo.png" />
          </div>
          <div className=" flex flex-col w-full bg-white gap-y-5 items-center justify-start p-5">
            {links.map((link) => (
              <div
                key={link.title}
                className="flex items-center w-full gap-x-2 justify-start "
              >
                <div className=" flex items-center justify-center">
                  {link.icon}
                </div>
                <div className=" flex text-base font-normal items-center justify-center">
                  {link.title}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex-1 px-13 py-8 gap-y-6 flex flex-col ">
          <div className=" flex items-center justify-between">
            <div className="flex flex-col items-start justify-center">
              <h2 className="text-xl text-gray-700 font-semibold">
                All Employees
              </h2>
              <h2 className="text-base text-gray-700 font-light">
                All Employee Information
              </h2>
            </div>
            <div className="flex items-center justify-center gap-7">
              <div className="flex items-center rounded-md p-2 border gap-x-2 border-gray-300 justify-center">
                <CiSearch size={30} />
                <input
                  type="text"
                  className=" placeholder: text-gray-500 text-xl"
                  placeholder="Search"
                />
              </div>
              <div className=" border border-gray-300 rounded-md p-2 bg-gray-100">
                <GoBell size={28} />
              </div>
              <div className="flex items-center rounded-md  border gap-x-2 border-gray-300 justify-center">
                <img
                  className="size-13 rounded-md"
                  src="/assets/admin_profile.png"
                  alt="admin_profile"
                />
                <div className=" flex flex-col items-start justify-center">
                  <h2 className=" text-lg font-semibold text-gray-800">
                    Faisal Patani
                  </h2>
                  <p className=" text-sm font-light text-gray-700">
                    HR Manager
                  </p>
                </div>
                <div className=" mx-2">
                  <IoIosArrowDown size={18} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col border rounded-md border-gray-500 p-3">
            <div className=" flex items-center justify-between">
              <div className="flex items-center rounded-md p-2 border gap-x-2 border-gray-300 justify-center">
                <CiSearch size={30} />
                <input
                  type="text"
                  className=" placeholder: text-gray-500 text-xl"
                  placeholder="Search"
                />
              </div>
              <div className="flex items-center justify-center gap-x-3">
                <div className="flex text-lg items-center justify-center text-white font-light py-3 px-4 gap-3 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 ">
                  <IoIosAddCircleOutline size={28} />
                  <p>Add New Employee</p>
                </div>
                <div className="flex text-lg font-medium items-center justify-center border border-gray-500 text-gray-700 py-3 px-4 gap-3 rounded-md">
                  <TbAdjustmentsHorizontal size={28} />
                  <p>Filter</p>
                </div>
              </div>
            </div>
            <div className=" flex-1 flex items-center justify-center">
              <div className="overflow-x-auto w-full rounded-lg shadow">
                <table className="min-w-full text-left text-sm border-collapse">
                  <thead className="text-gray-700 uppercase text-sm border-b">
                    <tr>
                      <th className="px-6 py-3">Employee Name</th>
                      <th className="px-6 py-3">Employee ID</th>
                      <th className="px-6 py-3">Department</th>
                      <th className="px-6 py-3">Designation</th>
                      {/* <th className="px-6 py-3">Address</th> */}
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {loading ? (
                      <div className="flex flex-col w-full justify-center items-center h-30 bg-white">
                        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
                        <div className="text-xl font-medium text-gray-600">
                          Loading..
                        </div>
                      </div>
                    ) : (
                      employees.map((emp) => (
                        <tr key={emp._id} className="border-b">
                          <td className="px-6 py-3 font-medium text-gray-800">
                            {emp.name}
                          </td>
                          <td className="px-6 py-3">{emp._id}</td>
                          <td className="px-6 py-3">{emp.department}</td>
                          <td className="px-6 py-3">{emp.designation}</td>
                          {/* <td className="px-6 py-3">{emp.address}</td> */}
                          <td className="px-6 py-3">
                            <span className="px-3 py-1 text-purple-500 bg-purple-100 rounded-md text-xs font-semibold">
                              {emp.status}
                            </span>
                          </td>
                          <td className="px-6 flex items-center justify-center gap-x-1 py-3">
                            <IoEyeOutline size={25} />
                            <TiEdit size={25} />
                            <MdOutlineDelete size={25} />
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className=" flex items-center justify-between border border-gray-600 rounded-md w-full px-3 py-2">
              <div className=" flex items-center gap-x-2 justify-center">
                <div className=" text-sm text-gray-600 font-light px-2 py-2">
                  Showing
                </div>
                <div className=" flex items-center justify-center px-3 py-2 gap-x-1.5">
                  <p>10</p>
                  <IoIosArrowDown size={20} />
                </div>
              </div>
              <div className="text-sm text-gray-600">
                {" "}
                Showing 1 to 10 out of {totalEmployees} records
              </div>
              <div className="flex items-center font-semibold justify-center gap-x-4 mt-4">
                <button
                  onClick={() => {
                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                  }}
                  disabled={currentPage === 1}
                  className="p-2 rounded-md"
                >
                  <MdKeyboardArrowLeft size={22} />
                </button>
                {Array.from({ length: totalPages }).map((_, index) => {
                  const page = index + 1;
                  return (
                    <div
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={` px-3 py-1 rounded-md text-sm ${
                        currentPage === page
                          &&"border-2 border-gray-700"
                          
                      }`}
                    >
                      {page}
                    </div>
                  );
                })}
                <button
                  onClick={() => {
                    if (currentPage < totalPages)
                      setCurrentPage(currentPage + 1);
                  }}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-md ${
                    currentPage === totalPages
                      ? "text-gray-400 cursor-not-allowed"
                      : "hover:bg-gray-200"
                  }`}
                >
                  <MdKeyboardArrowRight size={22} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Dashboard;
