import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";

const PaymentModals = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailureModal, setShowFailureModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const paymentResult = searchParams.get("paymentResult");
    if (paymentResult === "success") {
      setShowSuccessModal(true);
    } else if (paymentResult === "failure") {
      setShowFailureModal(true);
    }
  }, [searchParams]);

  const closeModal = () => {
    setShowSuccessModal(false);
    setShowFailureModal(false);
    searchParams.delete("paymentResult");
    setSearchParams(searchParams);
  };

  return (
    <div>
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-96">
            <div className="flex flex-col items-center p-6">
              <CheckCircleIcon className="w-16 h-16 text-[#3a80f6]" />
              <h2 className="mt-4 text-lg font-semibold text-gray-800">
                Payment Successful
              </h2>
              <p className="mt-2 text-gray-600 text-center">
                Your payment has been processed successfully.
              </p>
              <button
                className="px-4 py-2 mt-6 text-white bg-[#3a80f6] rounded hover:bg-[#2c64c4]"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Failure Modal */}
      {showFailureModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-96">
            <div className="flex flex-col items-center p-6">
              <ExclamationCircleIcon className="w-16 h-16 text-red-600" />
              <h2 className="mt-4 text-lg font-semibold text-gray-800">
                Payment Failed
              </h2>
              <p className="mt-2 text-gray-600">
                Something went wrong. Please try again.
              </p>
              <button
                className="px-4 py-2 mt-6 text-white bg-red-600 rounded hover:bg-red-700"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentModals;
