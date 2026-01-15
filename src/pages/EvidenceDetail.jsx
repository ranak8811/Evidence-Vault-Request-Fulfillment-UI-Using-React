import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { mockEvidence } from "../data/mockData";
import StatusChip from "../components/StatusChip";
import Modal from "../components/Modal";

const EvidenceDetail = () => {
  const { id } = useParams();

  const [evidence, setEvidence] = useState(() => {
    const foundEvidence = mockEvidence.find((e) => e.id === id);
    return foundEvidence ? JSON.parse(JSON.stringify(foundEvidence)) : null;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newVersionNotes, setNewVersionNotes] = useState("");
  const [newVersionExpiry, setNewVersionExpiry] = useState("");

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewVersionNotes("");
    setNewVersionExpiry("");
  };

  const handleUploadNewVersion = (e) => {
    e.preventDefault();
    if (!newVersionNotes) {
      alert("Notes are required.");
      return;
    }

    const newVersion = {
      version: evidence.versions.length + 1,
      date: new Date().toISOString().split("T")[0],
      uploadedBy: "Current User",
      notes: newVersionNotes,
      fileSize: `${(Math.random() * 2 + 1).toFixed(1)} MB`,
    };

    setEvidence((prev) => ({
      ...prev,
      versions: [...prev.versions, newVersion],
      lastUpdated: new Date().toISOString().split("T")[0],
      expiry: newVersionExpiry || prev.expiry,
    }));

    handleCloseModal();
  };

  if (!evidence) {
    return (
      <div>
        Evidence not found.{" "}
        <Link to="/vault" className="link">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4">
      <Link to="/vault" className="btn btn-ghost mb-4">
        &larr; Back to Vault
      </Link>
      <div className="card bg-base-200 shadow-xl mb-6">
        <div className="card-body">
          <h1 className="card-title text-3xl">{evidence.name}</h1>
          <div className="flex flex-wrap gap-4 items-center my-2">
            <span className="badge badge-lg">{evidence.type}</span>
            <StatusChip status={evidence.status} />
            <span>
              <strong>Expires on:</strong>{" "}
              {evidence.expiry
                ? new Date(evidence.expiry).toLocaleDateString()
                : "N/A"}
            </span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Version History</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Version</th>
                <th>Date</th>
                <th>Uploaded By</th>
                <th>Notes</th>
                <th>File Size</th>
              </tr>
            </thead>
            <tbody>
              {evidence.versions
                .slice()
                .reverse()
                .map((v) => (
                  <tr key={v.version}>
                    <td>v{v.version}</td>
                    <td>{new Date(v.date).toLocaleDateString()}</td>
                    <td>{v.uploadedBy}</td>
                    <td>{v.notes}</td>
                    <td>{v.fileSize}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <button onClick={handleOpenModal} className="btn btn-primary">
        Upload New Version
      </button>

      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        title="Upload New Version"
      >
        <form onSubmit={handleUploadNewVersion}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Notes*</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              value={newVersionNotes}
              onChange={(e) => setNewVersionNotes(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Expiry Date (Optional)</span>
            </label>
            <input
              type="date"
              className="input input-bordered"
              value={newVersionExpiry}
              onChange={(e) => setNewVersionExpiry(e.target.value)}
            />
          </div>
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">File</span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered w-full"
            />
          </div>
          <div className="modal-action">
            <button type="button" onClick={handleCloseModal} className="btn">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EvidenceDetail;
