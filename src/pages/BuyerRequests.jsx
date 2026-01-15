import React, { useState } from "react";
import { mockRequests, mockEvidence } from "../data/mockData";
import DataTable from "../components/DataTable";
import StatusChip from "../components/StatusChip";
import Modal from "../components/Modal";
import Swal from "sweetalert2";

const BuyerRequests = () => {
  const [requests, setRequests] = useState(() =>
    JSON.parse(JSON.stringify(mockRequests))
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRequestToFulfill, setCurrentRequestToFulfill] = useState(null);
  const [fulfillmentOption, setFulfillmentOption] = useState("selectExisting");
  const [selectedEvidenceId, setSelectedEvidenceId] = useState("");
  const [newEvidenceName, setNewEvidenceName] = useState("");

  const handleOpenFulfillModal = (request) => {
    setCurrentRequestToFulfill(request);
    setIsModalOpen(true);

    setFulfillmentOption("selectExisting");
    setSelectedEvidenceId("");
    setNewEvidenceName("");
  };

  const handleCloseFulfillModal = () => {
    setIsModalOpen(false);
    setCurrentRequestToFulfill(null);
  };

  const handleFulfillRequest = async (e) => {
    e.preventDefault();

    if (fulfillmentOption === "selectExisting" && !selectedEvidenceId) {
      await Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please select existing evidence.",
      });
      return;
    }
    if (fulfillmentOption === "createNew" && !newEvidenceName.trim()) {
      await Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please enter a name for the new evidence.",
      });
      return;
    }

    setRequests((prevRequests) =>
      prevRequests.map((req) =>
        req.id === currentRequestToFulfill.id
          ? { ...req, status: "Fulfilled" }
          : req
      )
    );

    let successMessage = "";
    if (fulfillmentOption === "createNew") {
      successMessage = `New evidence "${newEvidenceName}" created and request "${currentRequestToFulfill.name}" fulfilled!`;
    } else {
      const fulfilledEvidence = mockEvidence.find(
        (e) => e.id === selectedEvidenceId
      );
      successMessage = `Request "${currentRequestToFulfill.name}" fulfilled with evidence "${fulfilledEvidence?.name}"!`;
    }

    await Swal.fire({
      icon: "success",
      title: "Success!",
      text: successMessage,
    });

    handleCloseFulfillModal();
  };

  const filteredExistingEvidence = currentRequestToFulfill
    ? mockEvidence.filter(
        (evidence) => evidence.type === currentRequestToFulfill.docType
      )
    : [];

  const columns = ["Document Name", "Doc Type", "Due Date", "Status", "Action"];

  const renderRow = (item) => (
    <>
      <td>{item.name}</td>
      <td>{item.docType}</td>
      <td>{new Date(item.dueDate).toLocaleDateString()}</td>
      <td>
        <StatusChip status={item.status} />
      </td>
      <td>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => handleOpenFulfillModal(item)}
          disabled={item.status === "Fulfilled"}
        >
          Fulfill
        </button>
      </td>
    </>
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Buyer Requests</h1>
      <DataTable columns={columns} data={requests} renderRow={renderRow} />

      <Modal
        open={isModalOpen}
        onClose={handleCloseFulfillModal}
        title={`Fulfill Request: ${currentRequestToFulfill?.name}`}
      >
        <form onSubmit={handleFulfillRequest}>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Select existing evidence</span>
              <input
                type="radio"
                name="fulfillmentOption"
                className="radio"
                value="selectExisting"
                checked={fulfillmentOption === "selectExisting"}
                onChange={() => setFulfillmentOption("selectExisting")}
              />
            </label>
          </div>
          {fulfillmentOption === "selectExisting" && (
            <div className="form-control mt-2">
              <select
                className="select select-bordered w-full"
                value={selectedEvidenceId}
                onChange={(e) => setSelectedEvidenceId(e.target.value)}
                required={fulfillmentOption === "selectExisting"}
              >
                <option value="" disabled>
                  Select Evidence
                </option>
                {filteredExistingEvidence.length > 0 ? (
                  filteredExistingEvidence.map((evidenceItem) => (
                    <option key={evidenceItem.id} value={evidenceItem.id}>
                      {evidenceItem.name} ({evidenceItem.status})
                    </option>
                  ))
                ) : (
                  <option value="" disabled>
                    No matching evidence found
                  </option>
                )}
              </select>
            </div>
          )}

          <div className="divider">OR</div>

          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Create new evidence</span>
              <input
                type="radio"
                name="fulfillmentOption"
                className="radio"
                value="createNew"
                checked={fulfillmentOption === "createNew"}
                onChange={() => setFulfillmentOption("createNew")}
              />
            </label>
          </div>
          {fulfillmentOption === "createNew" && (
            <div className="form-control mt-2">
              <input
                type="text"
                placeholder="New Evidence Name"
                className="input input-bordered w-full"
                value={newEvidenceName}
                onChange={(e) => setNewEvidenceName(e.target.value)}
                required={fulfillmentOption === "createNew"}
              />
            </div>
          )}

          <div className="modal-action">
            <button
              type="button"
              onClick={handleCloseFulfillModal}
              className="btn"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Mark as Fulfilled
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default BuyerRequests;
