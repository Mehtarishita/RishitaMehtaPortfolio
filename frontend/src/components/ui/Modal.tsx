import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (typeof document === 'undefined') return null;

  return (
    <AnimatePresence>
      {isOpen && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#050816]/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative z-10 w-full max-w-4xl"
          >
            <div className="bg-[#0f172a] border border-white/10 shadow-2xl rounded-2xl overflow-hidden max-h-[85vh] flex flex-col">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="overflow-y-auto custom-scrollbar p-6 md:p-8 relative z-10">
                {children}
              </div>
            </div>
          </motion.div>
        </div>,
        document.body
      )}
    </AnimatePresence>
  );
};

export default Modal;
