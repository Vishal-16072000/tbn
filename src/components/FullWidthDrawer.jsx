import React, { useState } from "react";
import { Drawer } from "antd";
import { CheckCircleTwoTone, WarningTwoTone } from "@ant-design/icons";

const SectionTitle = ({ title }) => (
  <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2 pb-1">
    {title}
  </h3>
);

const renderFinding = (text, isPositive, extraClass = "") => (
  <div className={`flex items-center ${extraClass || (isPositive ? "text-green-600" : "text-orange-500")}`}>
    {isPositive ? (
      <CheckCircleTwoTone twoToneColor="#52c41a" className="mr-2" />
    ) : (
      <WarningTwoTone twoToneColor="#faad14" className="mr-2" />
    )}
    {text}
  </div>
);

const renderRiskGraph = (position) => {
  const [row, col] = position?.split("-").map(Number);
  return (
    <div className="relative w-full max-w-sm bg-gray-50 p-4 mt-2">
      <div className="grid grid-cols-2 grid-rows-2 gap-0">
        <div className="h-20 flex items-center justify-center bg-yellow-200 border border-gray-300 text-sm text-gray-600">
          Attested
        </div>
        <div className="h-20 flex items-center justify-center bg-green-200 border border-gray-300 text-sm text-gray-600">
          &nbsp;
        </div>
        <div className="h-20 flex items-center justify-center bg-red-200 border border-gray-300 text-sm text-gray-600">
          Unattested
        </div>
        <div className="h-20 flex items-center justify-center bg-yellow-200 border border-gray-300 text-sm text-gray-600">
          &nbsp;
        </div>
      </div>
      {row && col && (
        <div
          className="absolute"
          style={{
            top: `${(row - 1) * 80 + 40}px`,
            left: `${(col - 1) * 160 + 80}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className="text-xl">⭐</span>
        </div>
      )}
      <p className="text-xs text-gray-500 mt-2">
        ⭐ Assessment of the selected Package version on Lineaje Risk Graph
      </p>
    </div>
  );
};

const renderDependencies = (deps) => (
  <table className="w-full text-sm mt-2">
    <thead>
      <tr className="bg-gray-100 text-left">
        <th className="p-2">Package</th>
        <th className="p-2">Dependency</th>
        <th className="p-2">License</th>
      </tr>
    </thead>
    <tbody>
      {deps.map((dep, idx) => (
        <tr
          key={idx}
          className={` ${dep.risk === "high" ? "bg-red-100" : dep.risk === "medium" ? "bg-white" : ""}`}
        >
          <td className="p-2 text-blue-600 underline cursor-pointer">{dep.name}</td>
          <td className="p-2">{dep.type}</td>
          <td className="p-2">{dep.license}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const renderVulnerabilities = (data) => (
  <>
    <div className="flex gap-4 text-sm mt-2 mb-3">
      <span className="bg-red-100 border border-red-300 text-red-700 rounded px-2 py-1">
        Critical: {data.vulnerabilitySummary.critical}
      </span>
      <span className="bg-orange-100 border border-orange-300 text-orange-700 rounded px-2 py-1">
        High: {data.vulnerabilitySummary.high}
      </span>
      <span className="bg-yellow-100 border border-yellow-300 text-yellow-700 rounded px-2 py-1">
        Medium: {data.vulnerabilitySummary.medium}
      </span>
      <span className="bg-green-100 border border-green-300 text-green-700 rounded px-2 py-1">
        Low: {data.vulnerabilitySummary.low}
      </span>
    </div>
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="p-2">Reason</th>
          <th className="p-2">Severity</th>
        </tr>
      </thead>
      <tbody>
        {data.vulnerabilities.map((v, i) => (
          <tr key={i} className="border-t border-t-gray-200">
            <td className="p-2">{v.reason}</td>
            <td className="p-2">{v.severity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

const renderColumn = (data, isRight = false, activeTab) => (
  <div className="w-full md:w-1/2 px-4">
    <p className="text-base font-medium text-gray-800 mb-2">
      Version: <span className="text-black font-semibold">{data?.version}</span>
    </p>

    {activeTab === "overview" && (
      <>
        <SectionTitle title="Package Information" />
        <div className="text-gray-600 space-y-1">
          <p>
            <strong>Repository:</strong> <a href={data?.repository} target="_blank" rel="noreferrer" className="text-blue-600 underline">{data?.repository}</a>
          </p>
          <p><strong>Publisher:</strong> {data?.publisher}</p>
          <p><strong>Homepage:</strong> <a href={data?.homepage} target="_blank" rel="noreferrer" className="text-blue-600 underline">{data?.homepage}</a></p>
          <p><strong>License:</strong> {data?.license}</p>
          <p><strong>Size:</strong> {data?.size}</p>
          <p><strong>Release Date:</strong> {data?.releaseDate}</p>
          <p>
            <strong>PURL:</strong> {data?.purl} <button className="ml-1 text-sm text-blue-500">📋</button>
          </p>
        </div>

        <SectionTitle title="Findings" />
        <div className="space-y-1">
          {Array.isArray(data?.findings) &&
            data.findings.map((f, i) =>
              typeof f === "string"
                ? renderFinding(f, isRight, "text-black")
                : renderFinding(f.label, f.status)
            )}
        </div>

        <div className="mt-4 text-gray-700 text-sm">
          <strong>Vulnerability:</strong> {data?.vulnerability || "0 Exploitable, 0 Critical, 0 High"}
          <br />
          <span className="text-gray-400">Last Scanned by Lineaje: {data?.lastScanned}</span>
        </div>

        <SectionTitle title="Usage Information" />
        {data?.usage && data.usage.length > 0 ? (
          <table className="w-full text-sm mt-2">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2">Project Name</th>
                <th className="p-2">Version</th>
                <th className="p-2">Organization</th>
                <th className="p-2">Product</th>
              </tr>
            </thead>
            <tbody>
              {data.usage.map((u, idx) => (
                <tr key={idx} className="border-t border-t-gray-300">
                  <td className="p-2 text-blue-600 underline cursor-pointer">{u.projectName}</td>
                  <td className="p-2">{u.version}</td>
                  <td className="p-2">{u.organization}</td>
                  <td className="p-2">{u.product}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-orange-500">⚠️ Not being used</div>
        )}
      </>
    )}

    {activeTab === "riskGraph" && (
      <>
        <SectionTitle title="Risk Graph" />
        {renderRiskGraph(data?.riskPosition)}
      </>
    )}

    {activeTab === "dependencies" && (
      <>
        <SectionTitle title="Dependencies" />
        {renderDependencies(data?.dependencies || [])}
      </>
    )}

    {activeTab === "vulnerabilities" && (
      <>
        <SectionTitle title="Vulnerabilities" />
        {renderVulnerabilities(data)}
      </>
    )}
  </div>
);

const FullWidthDrawer = ({ open, onClose, item }) => {
  const [activeTab, setActiveTab] = useState("overview");

  if (!item) return null;

  const leftData = item.left || {};
  const rightData = item.right || {};

  return (
    <Drawer
      title={<span className="text-xl font-semibold">Detailed comparison of: <span className="text-black">{item.name}</span></span>}
      placement="right"
      onClose={onClose}
      open={open}
      width="100%"
    >
      <div className="border-b-2 border-gray-300 mb-4 pb-1 flex space-x-6 text-sm">
        {[
          { key: "overview", label: "Overview" },
          { key: "riskGraph", label: "Risk Graph" },
          { key: "dependencies", label: "Dependencies" },
          { key: "vulnerabilities", label: "Vulnerabilities" }
        ].map(tab => (
          <span
            key={tab.key}
            className={`pb-1 cursor-pointer ${
              activeTab === tab.key
                ? "text-blue-600 border-b-2 border-blue-500 font-medium"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </span>
        ))}
      </div>

      <div className="flex flex-col md:flex-row w-full">
        {renderColumn(leftData, false, activeTab)}
        <div className="w-px bg-gray-300 mx-2 hidden md:block" />
        {renderColumn(rightData, true, activeTab)}
      </div>
    </Drawer>
  );
};

export default FullWidthDrawer;
