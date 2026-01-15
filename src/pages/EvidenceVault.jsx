import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { mockEvidence } from "../data/mockData";
import DataTable from "../components/DataTable";
import StatusChip from "../components/StatusChip";

const EvidenceVault = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    docType: searchParams.get("docType") || "All",
    status: searchParams.get("status") || "All",
    expiry: searchParams.get("expiry") || "All",
    search: searchParams.get("search") || "",
  });
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    setSearchParams(filters, { replace: true });
  }, [filters, setSearchParams]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const isExpiringSoon = (expiryDate) => {
    if (!expiryDate) return false;
    const soonDate = new Date();
    soonDate.setDate(soonDate.getDate() + 30);
    return new Date(expiryDate) < soonDate && new Date(expiryDate) > new Date();
  };

  const filteredData = mockEvidence.filter((item) => {
    const searchMatch = item.name
      .toLowerCase()
      .includes(filters.search.toLowerCase());
    const typeMatch =
      filters.docType === "All" || item.type === filters.docType;
    const statusMatch =
      filters.status === "All" || item.status === filters.status;
    const expiryMatch =
      filters.expiry === "All" ||
      (filters.expiry === "Expired" && new Date(item.expiry) < new Date()) ||
      (filters.expiry === "Expiring Soon" && isExpiringSoon(item.expiry));

    return searchMatch && typeMatch && statusMatch && expiryMatch;
  });

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(filteredData.map((item) => item.id));
    } else {
      setSelectedRows([]);
    }
  };

  const columns = [
    <input type="checkbox" onChange={handleSelectAll} />,
    "Doc Name",
    "Doc Type",
    "Status",
    "Expiry",
    "Versions",
    "Last Updated",
    "Actions",
  ];

  const renderRow = (item) => (
    <>
      <td>
        <input
          type="checkbox"
          checked={selectedRows.includes(item.id)}
          onChange={() => handleSelectRow(item.id)}
        />
      </td>
      <td>{item.name}</td>
      <td>{item.type}</td>
      <td>
        <StatusChip status={item.status} />
      </td>
      <td>
        {item.expiry ? new Date(item.expiry).toLocaleDateString() : "N/A"}
      </td>
      <td>{item.versions.length}</td>
      <td>{new Date(item.lastUpdated).toLocaleDateString()}</td>
      <td>
        <Link to={`/vault/${item.id}`} className="btn btn-sm btn-primary">
          View
        </Link>
      </td>
    </>
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Evidence Vault</h1>
      <div className="mb-4 p-4 bg-base-200 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            name="search"
            placeholder="Search by document name..."
            className="input input-bordered w-full"
            value={filters.search}
            onChange={handleFilterChange}
          />
          <select
            name="docType"
            className="select select-bordered w-full"
            value={filters.docType}
            onChange={handleFilterChange}
          >
            <option>All</option>
            <option>Certificate</option>
            <option>License</option>
            <option>Policy</option>
          </select>
          <select
            name="status"
            className="select select-bordered w-full"
            value={filters.status}
            onChange={handleFilterChange}
          >
            <option>All</option>
            <option>Valid</option>
            <option>Expired</option>
            <option>Pending</option>
          </select>
          <select
            name="expiry"
            className="select select-bordered w-full"
            value={filters.expiry}
            onChange={handleFilterChange}
          >
            <option>All</option>
            <option>Expired</option>
            <option>Expiring Soon</option>
          </select>
        </div>
      </div>
      <div className="mb-4">
        <button
          className="btn btn-primary"
          disabled={selectedRows.length === 0}
        >
          Add to Pack ({selectedRows.length})
        </button>
      </div>
      <DataTable columns={columns} data={filteredData} renderRow={renderRow} />
    </div>
  );
};

export default EvidenceVault;
