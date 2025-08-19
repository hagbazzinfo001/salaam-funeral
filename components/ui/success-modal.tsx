"use client";

import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, Phone, MessageSquare } from "lucide-react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  showActions?: boolean;
}

export default function SuccessModal({
  isOpen,
  onClose,
  title = "Message Sent Successfully!",
  message = "Thank you for contacting us. We'll respond to your inquiry within 24 hours.",
  showActions = true,
}: SuccessModalProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // Auto close after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  const handleScheduleCall = () => {
    // Open Calendly modal
    if (typeof window !== "undefined" && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: "https://calendly.com/salaam-funeral/consultation",
      });
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            {title}
          </DialogTitle>
          <DialogDescription className="text-gray-600 leading-relaxed">
            {message}
          </DialogDescription>
        </DialogHeader>

        {showActions && (
          <div className="space-y-4 mt-6">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                Need immediate assistance or want to schedule a consultation?
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <Button
                onClick={handleScheduleCall}
                className="bg-green-600 hover:bg-green-700 w-full"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Consultation
              </Button>

              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 w-full"
                asChild
              >
                <a href="tel:+15551234567">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Emergency Line
                </a>
              </Button>
            </div>

            <div className="text-center pt-4 border-t border-gray-200">
              <Button
                variant="ghost"
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
