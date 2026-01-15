import React from "react";
import { useParams } from "react-router-dom";
import EvidenceDetail from "./EvidenceDetail";

const EvidenceDetailWrapper = () => {
  const { id } = useParams();

  return <EvidenceDetail key={id} />;
};

export default EvidenceDetailWrapper;
