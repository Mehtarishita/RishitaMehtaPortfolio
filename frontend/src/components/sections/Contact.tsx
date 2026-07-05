import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, CheckCircle, XCircle, Loader2, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { Button } from '../ui/Button';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

  const onSubmit = async (data: ContactFormValues) => {
    setStatus('loading');
    try {
      await axios.post(`${API_URL}/contact`, data);
      setStatus('success');
      reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error("Failed to send message:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 inline-block relative">
            Get In Touch
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium mb-1">Email</p>
                    <a href="mailto:rishitamehta298@gmail.com" className="text-white hover:text-primary transition-colors">
                      rishitamehta298@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium mb-1">Location</p>
                    <p className="text-white">Udaipur, Rajasthan, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-sm text-gray-400 font-medium mb-4">Connect on Social</p>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/rishitamehta29/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] border border-white/10 transition-all">
                    <FaLinkedin size={18} />
                  </a>
                  <a href="https://github.com/Mehtarishita" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-white hover:text-black border border-white/10 transition-all">
                    <FaGithub size={18} />
                  </a>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium border border-white/20 transition-all flex items-center justify-center hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-2/3 glass p-8 md:p-10 rounded-2xl relative overflow-hidden"
          >
            {status === 'success' && (
              <div className="absolute top-4 right-4 bg-green-500/20 text-green-400 px-4 py-2 rounded-lg flex items-center gap-2 border border-green-500/30 animate-fade-in-up">
                <CheckCircle size={18} /> Message sent successfully!
              </div>
            )}
            {status === 'error' && (
              <div className="absolute top-4 right-4 bg-red-500/20 text-red-400 px-4 py-2 rounded-lg flex items-center gap-2 border border-red-500/30 animate-fade-in-up">
                <XCircle size={18} /> Failed to send message.
              </div>
            )}

            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Your Name</label>
                  <input 
                    {...register('name')}
                    type="text" 
                    id="name"
                    className="w-full bg-[#050816]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Your Email</label>
                  <input 
                    {...register('email')}
                    type="email" 
                    id="email"
                    className="w-full bg-[#050816]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                <input 
                  {...register('subject')}
                  type="text" 
                  id="subject"
                  className="w-full bg-[#050816]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                  placeholder="Job Opportunity / Project Collaboration"
                />
                {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <textarea 
                  {...register('message')}
                  id="message"
                  rows={5}
                  className="w-full bg-[#050816]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Hello Rishita, I'd like to discuss..."
                ></textarea>
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <Button type="submit" disabled={status === 'loading' || status === 'success'} className="w-full md:w-auto" variant={status === 'success' ? 'secondary' : 'primary'} size="lg">
                {status === 'loading' ? (
                  <><Loader2 size={18} className="mr-2 animate-spin" /> Sending...</>
                ) : status === 'success' ? (
                  <><CheckCircle size={18} className="mr-2" /> Message Sent!</>
                ) : (
                  <><Send size={18} className="mr-2" /> Send Message</>
                )}
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Interests Strip */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-3 text-sm">
          <span className="text-gray-500 mr-2 font-medium">Interests & Hobbies:</span>
          {['Full-Stack Engineering', 'AI', 'System Design', 'Open Source', 'Music', 'Traveling', 'Chess', 'Hockey'].map((interest, idx) => (
            <span key={idx} className="px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">
              {interest}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Contact;
