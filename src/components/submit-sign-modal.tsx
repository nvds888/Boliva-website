// components/submit-sign-modal.tsx
'use client';

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2 } from "lucide-react";

interface SubmitAndSignModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void>;
}

export function SubmitAndSignModal({ isOpen, onClose, onConfirm }: SubmitAndSignModalProps) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleConfirm = async () => {
    try {
      setIsLoading(true);
      await onConfirm();
      setIsSuccess(true);
      // Reset and close modal after success
      setTimeout(() => {
        setIsSuccess(false);
        setIsLoading(false);
        onClose();
      }, 1500); // Show success state for 1.5 seconds
    } catch (error) {
      setIsLoading(false);
      console.error('Error:', error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Sign & Submit Transaction</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center p-4">
          {isLoading ? (
            <div className="flex flex-col items-center space-y-4">
              <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
              <p className="text-sm text-gray-500">Processing transaction...</p>
            </div>
          ) : isSuccess ? (
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <CheckCircle2 className="h-8 w-8 text-green-500" />
                <div className="absolute -top-2 -left-2 w-12 h-12 animate-ping-slow rounded-full bg-green-500/20" />
              </div>
              <p className="text-sm text-gray-500">Transaction submitted successfully!</p>
            </div>
          ) : (
            <div className="text-center space-y-4">
              <p>Are you sure you want to sign and submit this transaction?</p>
              <p className="text-sm text-gray-500">
                This action cannot be undone.
              </p>
            </div>
          )}
        </div>
        {!isLoading && !isSuccess && (
          <DialogFooter className="flex space-x-2 sm:space-x-0">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={handleConfirm}
            >
              Proceed
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}