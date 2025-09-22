'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';

export const dynamic = 'force-dynamic';

function PaymentContent() {
  const searchParams = useSearchParams();
  const template = searchParams?.get('template') || null;

  useEffect(() => {
    // Auto-close for mobile apps after 5 seconds
    const timer = setTimeout(() => {
      if (
        typeof window !== 'undefined' &&
        window.opener &&
        typeof window.close === 'function'
      ) {
        try {
          window.close();
        } catch {
          // Window close failed - browser restriction
        }
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseWindow = () => {
    if (typeof window !== 'undefined') {
      if (typeof window.close === 'function') {
        try {
          window.close();
        } catch {
          window.location.href = 'about:blank';
        }
      } else {
        window.location.href = 'about:blank';
      }
    }
  };

  return (
      <motion.div
        className="payment-card"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >


        <motion.h1
          className="payment-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Payment Successful!
        </motion.h1>

        <motion.p
          className="payment-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Your CV template has been purchased successfully. You can now access
          your premium template in the Smart Qualify app.
        </motion.p>

        {template && (
          <motion.div
            className="template-info"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <strong>Template:</strong> {template}
          </motion.div>
        )}

        <motion.div
          className="status-message success"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p>
            ✅ Payment processed successfully
            <br />
            📱 Redirecting back to app in 5 seconds...
          </p>
        </motion.div>

        <motion.button
          onClick={handleCloseWindow}
          className="action-button success"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Close Window
        </motion.button>

        <motion.div
          className="branding"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="logo">SQ</div>
          <span>Smart Qualify - CV Template Purchase</span>
        </motion.div>
      </motion.div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <div className="payment-page success">
      <Suspense fallback={<div>Loading...</div>}>
        <PaymentContent />
      </Suspense>
    </div>
  );
}
