import React from 'react';
import Modal from '../ui/Modal';
import { Shield, Brain, Code, Globe, Activity } from 'lucide-react';

interface VasudhaCaseStudyProps {
  isOpen: boolean;
  onClose: () => void;
}

const VasudhaCaseStudy: React.FC<VasudhaCaseStudyProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-8 text-gray-300">
        
        {/* Header with Logo */}
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start border-b border-white/10 pb-6">
          <div className="w-24 h-24 bg-white/5 rounded-2xl border border-white/10 p-2 flex items-center justify-center shrink-0">
            {/* Logo Image Placeholder */}
            <img src="/vasudha-logo.png" alt="VASUDHA Logo" className="max-w-full max-h-full object-contain" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">VASUDHA</h2>
            <p className="text-lg text-primary font-medium">Digital Farm Management & Food Safety Platform</p>
          </div>
        </div>

        {/* Overview */}
        <section>
          <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><Globe className="text-accent" /> Overview</h3>
          <p className="leading-relaxed text-sm md:text-base">
            VASUDHA is an advanced digital farm management platform built to monitor Antimicrobial Usage (AMU) and Maximum Residue Limits (MRL) in livestock farming. The goal of this project was to create a transparent and technology-driven ecosystem that helps farmers, veterinarians, laboratories, and regulators ensure food safety and regulatory compliance.
          </p>
          <p className="leading-relaxed text-sm md:text-base mt-4">
            The platform integrates AI-based risk prediction, IoT sensor monitoring, blockchain audit trails, and QR-based traceability to track drug usage, biological samples, and livestock health across the entire supply chain. By digitizing farm operations and laboratory workflows, VASUDHA enables data-driven decision making and reduces the risk of antimicrobial residue contamination in food products.
          </p>
        </section>

        {/* Key Features */}
        <section>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Shield className="text-primary" /> Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/5 p-5 rounded-xl border border-white/10">
              <h4 className="text-white font-semibold mb-2">Smart QR-Based Traceability</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-400">
                <li>QR/NFC tags are used to track drug batches, livestock treatments, and biological samples.</li>
                <li>Enables complete chain-of-custody from farm to laboratory testing.</li>
                <li>Automatically logs batch information, manufacturer details, and expiry dates.</li>
              </ul>
            </div>
            <div className="bg-white/5 p-5 rounded-xl border border-white/10">
              <h4 className="text-white font-semibold mb-2">AI Driven Risk Prediction</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-400">
                <li>Machine learning models analyze farm activity and antimicrobial usage patterns.</li>
                <li>Generates a Residue Risk Score for each farm.</li>
                <li>Provides actionable recommendations to prevent MRL violations.</li>
              </ul>
            </div>
            <div className="bg-white/5 p-5 rounded-xl border border-white/10">
              <h4 className="text-white font-semibold mb-2">IoT Powered Farm Monitoring</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-400">
                <li>Sensor networks monitor parameters like milk quality, feed conditions, and water safety.</li>
                <li>Real-time alerts are triggered when contamination risks are detected.</li>
                <li>Uses MQTT-based gateways for continuous data streaming.</li>
              </ul>
            </div>
            <div className="bg-white/5 p-5 rounded-xl border border-white/10">
              <h4 className="text-white font-semibold mb-2">Blockchain Compliance Ledger</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-400">
                <li>Immutable storage of regulatory records and drug administration logs.</li>
                <li>Ensures tamper-proof documentation for audits and regulatory authorities.</li>
                <li>Supports international compliance standards for food safety.</li>
              </ul>
            </div>
            <div className="bg-white/5 p-5 rounded-xl border border-white/10 md:col-span-2">
              <h4 className="text-white font-semibold mb-2">Multilingual AI Assistant</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-400">
                <li>Voice and text-based assistant supporting Hindi, Marathi, and English.</li>
                <li>Helps farmers with withdrawal period calculations and drug usage guidance.</li>
                <li>Works even in low connectivity environments using SMS or IVR fallback.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technologies Used */}
        <section>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Code className="text-secondary" /> Technologies Used</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="space-y-2">
              <h4 className="text-secondary font-semibold border-b border-white/10 pb-1">Frontend</h4>
              <ul className="space-y-1 text-gray-400">
                <li>React + Vite</li>
                <li>Tailwind CSS</li>
                <li>Progressive Web App (PWA)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-secondary font-semibold border-b border-white/10 pb-1">Backend</h4>
              <ul className="space-y-1 text-gray-400">
                <li>Node.js + Express</li>
                <li>PostgreSQL + TimescaleDB</li>
                <li>Redis</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-secondary font-semibold border-b border-white/10 pb-1">AI & Data</h4>
              <ul className="space-y-1 text-gray-400">
                <li>Python + FastAPI</li>
                <li>Scikit-learn, XGBoost</li>
                <li>Pandas, NumPy</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-secondary font-semibold border-b border-white/10 pb-1">Blockchain & IoT</h4>
              <ul className="space-y-1 text-gray-400">
                <li>Hyperledger Fabric</li>
                <li>MQTT / Mosquitto</li>
                <li>ESP32 Gateways</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Challenges & Learnings */}
        <section>
          <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><Brain className="text-emerald-400" /> Challenges and Learnings</h3>
          <p className="leading-relaxed text-sm mb-3">
            One of the major challenges in this project was integrating multiple technologies such as AI models, IoT sensors, blockchain infrastructure, and distributed backend services into a unified platform. Ensuring real-time data synchronization across these systems required careful architecture design and efficient event-driven workflows.
          </p>
          <p className="leading-relaxed text-sm mb-3">
            Another key challenge was designing a system that works for rural environments where internet connectivity can be unreliable. Implementing offline-first capabilities and delayed synchronization mechanisms allowed the platform to remain functional even in low-network areas.
          </p>
          <p className="leading-relaxed text-sm">
            This project significantly improved my understanding of scalable system architecture, real-time data pipelines, and multi-service integrations.
          </p>
        </section>

        {/* Outcome */}
        <section className="bg-primary/5 border border-primary/20 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><Activity className="text-primary" /> Outcome</h3>
          <p className="leading-relaxed text-sm mb-3">
            VASUDHA demonstrates how modern technologies like AI, IoT, and blockchain can be used to build intelligent systems for agriculture and food safety. The platform enables transparent monitoring of antimicrobial usage, reduces the risk of residue violations, and empowers farmers with actionable insights for sustainable livestock management.
          </p>
          <p className="leading-relaxed text-sm mb-3">
            This project showcases the ability to design large-scale, multidisciplinary systems that combine software engineering, data science, and emerging technologies to solve real-world agricultural challenges.
          </p>
          <p className="leading-relaxed text-sm font-semibold text-white">
            This project highlights expertise in full-stack development, distributed systems, AI integration, and real-world problem solving in AgriTech and Food Safety domains.
          </p>
        </section>

      </div>
    </Modal>
  );
};

export default VasudhaCaseStudy;
