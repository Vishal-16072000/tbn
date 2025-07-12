import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { LuColumns3 } from "react-icons/lu";
import { TiArrowSortedDown } from "react-icons/ti";
import { GrPowerReset } from "react-icons/gr";
import { BsThreeDotsVertical } from "react-icons/bs";
import DefaultDrawer from "../components/DetailDrawer";
import FullWidthDrawer from "../components/FullWidthDrawer";
import tableData from "../data";

const MainTable = () => {
  const [showViewDetail, setShowViewDetails] = useState(-1);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [wid, setWid] = useState(500);

  return (
    <div>
      <header>
        <div className="w-full h-14 flex">
          <div className="w-[45%] flex items-center px-10">
            <span className="font-semibold text-lg">2250 Items</span>
          </div>

          <div className=" w-[55%] flex gap-5 items-center">
            <div className="w-[72%] border border-slate-400 h-9 rounded-sm flex overflow-hidden">
              <input
                type="text"
                placeholder="Search by Name, Version"
                className="px-3 h-full w-[90%] outline-none border-r border-r-slate-400"
              />
              <div className="bg-gray-200 w-[10%] flex justify-center items-center text-lg rounded-r-sm text-gray-500">
                <IoMdSearch />
              </div>
            </div>

            <div className="w-[20%] border border-slate-400 rounded-sm flex gap-5 items-center h-9 px-3">
              <div className="flex gap-3 items-center">
                <span>
                  <LuColumns3 />
                </span>
                <span>Columns</span>
              </div>
              <div>
                {" "}
                <TiArrowSortedDown />
              </div>
            </div>

            <div className="w-[8%] h-8 text-xl font-semibold flex text-slate-600 items-center">
              <GrPowerReset />
            </div>
          </div>
        </div>
      </header>

      <div className="px-4">
        <div className="overflow-auto">
          <table className="table-auto w-full  text-lg">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className=" border-r border-r-gray-300 px-4 py-2 font-semibold overflow-hidden h-5  w-[19%] text-start">
                  Name
                </th>
                <th className="border-r border-r-gray-300 px-4 py-2 font-semibold overflow-hidden  h-5 w-[10%]">
                  Version
                </th>
                <th className="border-r border-r-gray-300 px-4 py-2 font-semibold overflow-hidden  h-5 w-[10%]">
                  Source
                </th>
                <th className="border-r border-r-gray-300 px-4 py-2 font-semibold overflow-hidden  h-5 w-[15%]">
                  Alternate Gold
                </th>
                <th className="border-r border-gray-300 px-2 py-2 font-semibold max-w-[160px] truncate whitespace-nowrap overflow-hidden text-ellipsis">
                  Vulnerabilities in OSS (T/C/H/M/L)
                </th>
                <th className="border-r border-gray-300 px-2 py-2 font-semibold max-w-[160px] truncate whitespace-nowrap overflow-hidden text-ellipsis">
                  Vulnerabilities in GOS (T/C/H/M/L)
                </th>
                <th className=" border-r-gray-300 px-4 py-2 font-semibold w-[8%] text-start">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {tableData.map((item, idx) => (
                <React.Fragment key={idx}>
                  <tr className="text-center text-gray-600">
                    <td className="px-4 py-4 text-start text-blue-500">
                      {item.name}
                    </td>
                    <td className="px-4 py-4">{item.version}</td>
                    <td className="px-4 py-4">{item.source}</td>
                    <td className="px-4 py-4">{item.alternate || "N/A"}</td>
                    <td className="px-4 py-4">
                      {item.oss_vulnerabilities ? (
                        <div className="flex gap-0.5 text-sm font-semibold">
                          <span className=" border rounded-xs  w-10 text-center">
                            {item.oss_vulnerabilities.T}
                          </span>{" "}
                          <span className=" text-gray-400">|</span>
                          <span className=" bg-red-100 border border-red-300 rounded-sm  w-12">
                            C {item.oss_vulnerabilities.C}
                          </span>
                          <span className=" bg-red-50 border border-orange-300 rounded-sm  w-12">
                            H {item.oss_vulnerabilities.H}
                          </span>
                          <span className=" bg-orange-100 border border-orange-300 rounded-sm  w-12">
                            M {item.oss_vulnerabilities.M}
                          </span>
                          <span className=" bg-green-100 border border-green-300 rounded-sm  w-12">
                            L {item.oss_vulnerabilities.L}
                          </span>
                        </div>
                      ) : (
                        "N/A"
                      )}
                    </td>
                    <td className="px-4 py-2">
                      {item.gos_vulnerabilities ? (
                        <div className="flex gap-0.5 text-sm font-semibold">
                          <span className=" border rounded-xs w-10 text-center">
                            {item.gos_vulnerabilities.T}
                          </span>{" "}
                          <span className=" text-gray-400">|</span>
                          <span className=" bg-red-100 border border-red-300 rounded-sm  w-12">
                            C {item.gos_vulnerabilities.C}
                          </span>
                          <span className=" bg-red-50 border border-orange-300 rounded-sm w-12">
                            H {item.gos_vulnerabilities.H}
                          </span>
                          <span className=" bg-orange-100 border border-orange-300 rounded-sm  w-12">
                            M {item.gos_vulnerabilities.M}
                          </span>
                          <span className=" bg-green-100 border border-green-300 rounded-sm  w-12">
                            L {item.gos_vulnerabilities.L}
                          </span>
                        </div>
                      ) : (
                        "N/A"
                      )}
                    </td>
                    <td className="px-4 py-2 text-gray-500">
                      <BsThreeDotsVertical
                        className=" cursor-pointer"
                        onClick={() => {
                          setShowViewDetails(
                            showViewDetail === idx ? null : idx
                          );
                        }}
                      />

                      {showViewDetail === idx ? (
                        <div className=" bg-white shadow-xl absolute right-16 w-32 text-start rounded-sm p-3">
                          <div className=' cursor-pointer' onClick={() => {setSelectedItem(item);setOpenDrawer(true);}}>
                            View Details
                          </div>
                          <div className="mt-2 cursor-pointer">Use Gold</div>
                        </div>
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>

                  <tr>
                    <td colSpan="7">
                      <hr className="border-t border-gray-300 w-full" />
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedItem?.alternate ? (
        <FullWidthDrawer
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
          item={selectedItem}
        />
      ) : (
        <DefaultDrawer
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
          item={selectedItem}
        />
      )}
    </div>
  );
};

export default MainTable;
