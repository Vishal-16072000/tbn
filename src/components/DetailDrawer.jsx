import React, { useState } from "react";
import { Drawer, Tabs } from "antd";
import { CheckCircleTwoTone, DownOutlined, UpOutlined } from "@ant-design/icons";

const DefaultDrawer = ({ open, onClose, item }) => {
  const [showComponentInfo, setShowComponentInfo] = useState(true);
  const [showFindings, setShowFindings] = useState(true);
  const [showVuln, setShowVuln] = useState(true);

  if (!item) return null;

  const tabItems = [
    {
      label: "Overview",
      key: "1",
      children: (
        <div className="space-y-6 px-2">
          {/* Component Information */}
          <div>
            <div
              className="flex items-center gap-2 cursor-pointer font-semibold"
              onClick={() => setShowComponentInfo(!showComponentInfo)}
            >
              {showComponentInfo ?  <DownOutlined/> : <UpOutlined />}
              <h3 className="text-sm font-semibold text-gray-700">
                Component Information
              </h3>
            </div>

            {showComponentInfo && (
              <div className="text-gray-600 space-y-2 mt-2">
                <div><strong>Name:</strong> {item.componentInfo?.name || "N/A"}</div>
                <div>
                  <strong>Repository:</strong>{" "}
                  <a
                    href={item.componentInfo?.repository}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline"
                  >
                    {item.componentInfo?.repository}
                  </a>
                </div>
                <div><strong>Publisher:</strong> {item.componentInfo?.publisher || "N/A"}</div>
                <div>
                  <strong>License:</strong>{" "}
                  <a
                    href={item.componentInfo?.license}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline"
                  >
                    {item.componentInfo?.license}
                  </a>
                </div>
                <div><strong>Release Date:</strong> {item.componentInfo?.releaseDate || "N/A"}</div>
                <div><strong>SHA156:</strong> <code>{item.componentInfo?.sha || "N/A"}</code></div>
                <div><strong>Digest:</strong> <code>{item.componentInfo?.digest || "N/A"}</code></div>
              </div>
            )}
          </div>

          {/* Findings */}
          <div>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setShowFindings(!showFindings)}
            >
              {showFindings ? <DownOutlined /> : <UpOutlined />}
              <h3 className="text-md font-semibold text-gray-700">Findings</h3>
            </div>

            {showFindings && (
              <div className="space-y-2 text-green-700 font-medium mt-2">
                {item.findings?.map((f, i) => (
                  <div key={i}>
                    <CheckCircleTwoTone
                      twoToneColor="#52c41a"
                      className="mr-2"
                    />
                    {f}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Vulnerability */}
          <div>
            {showVuln && (
              <div className="text-gray-600 text-sm mt-2">
                <strong>Vulnerability:</strong>{" "}
                {item.vulnerability || "0 Exploitable, 0 Critical, 0 High"}
                <br />
                <span className="text-gray-400">
                  Last Scanned by Lineaje:{" "}
                  {item.lastScanned || "June 14, 2025 at 14:32 UTC"}
                </span>
              </div>
            )}
          </div>
        </div>
      ),
    },
    {
      label: "Dependencies",
      key: "2",
      children: (
        <div className="px-2 space-y-4">
          {/* Search Bar */}
          <div className="flex items-center border rounded px-2 py-1 w-full max-w-md">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-2 py-1 outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="gray"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.75 3.75a7.5 7.5 0 0012.9 12.9z"
              />
            </svg>
          </div>
    
          {/* Table */}
          <div className="overflow-auto">
            <table className="table-auto w-full text-left text-sm border">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-3 py-2 border-b">Package</th>
                  <th className="px-3 py-2 border-b">Dependency Type</th>
                  <th className="px-3 py-2 border-b">License</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {item.dependencies?.map((dep, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-3 py-2">
                      <a
                        href={dep.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 underline"
                      >
                        {dep.name} {dep.version}
                      </a>
                    </td>
                    <td className="px-3 py-2">{dep.type}</td>
                    <td className="px-3 py-2">{dep.license}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      label: "Vulnerabilities",
      key: "3",
      children: (
        <div className="px-2 space-y-4">
          {/* Severity Tags */}
          <div className="flex gap-3">
            <span className="bg-red-100 text-red-700 border border-red-300 px-3 py-1 rounded text-sm font-medium">
              Critical: {item.vulnerabilitiesData?.critical ?? 0}
            </span>
            <span className="bg-orange-100 text-orange-700 border border-orange-300 px-3 py-1 rounded text-sm font-medium">
              High: {item.vulnerabilitiesData?.high ?? 0}
            </span>
            <span className="bg-yellow-100 text-yellow-700 border border-yellow-300 px-3 py-1 rounded text-sm font-medium">
              Medium: {item.vulnerabilitiesData?.medium ?? 0}
            </span>
            <span className="bg-green-100 text-green-700 border border-green-300 px-3 py-1 rounded text-sm font-medium">
              Low: {item.vulnerabilitiesData?.low ?? 0}
            </span>
          </div>
    
          {/* Header + Search */}
          <div className="flex justify-between items-center">
            <p className="text-gray-800 font-medium">
              Total {item.vulnerabilitiesData?.list?.length || 0} Vulnerabilities
            </p>
            <div className="flex items-center border rounded px-2 py-1 w-full max-w-sm">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-2 py-1 outline-none"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="gray"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.75 3.75a7.5 7.5 0 0012.9 12.9z"
                />
              </svg>
            </div>
          </div>
    
          {/* Table */}
          <div className="overflow-auto">
            <table className="table-auto w-full text-left text-sm border">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-3 py-2 border-b">Reason</th>
                  <th className="px-3 py-2 border-b">Severity</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {item.vulnerabilitiesData?.list?.map((vul, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-3 py-2">{vul.reason}</td>
                    <td className="px-3 py-2">{vul.severity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    }    
  ];

  return (
    <Drawer
      placement="right"
      onClose={onClose}
      open={open}
      width={700}
      closable={false}
    >
      {/* Static Title */}
      <h2 className="text-xl font-semibold text-black mb-4">
        {item.name} - {item.version}
      </h2>

      {/* Tabs */}
      <Tabs defaultActiveKey="1" items={tabItems} />
    </Drawer>
  );
};

export default DefaultDrawer;
