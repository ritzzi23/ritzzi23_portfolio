
import { Mail, MapPin, Phone, Send, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-4">
              Let's <span className="font-semibold">Connect</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Ready to bring your vision to life? I'd love to hear about your project
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">Get in Touch</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  I'm always excited to discuss new opportunities and challenging projects. 
                  Whether you need a consultation or want to start a collaboration, I'm here to help.
                </p>
              </div>
              
              {/* Contact methods */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-slate-200 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-medium">Email</p>
                    <p className="text-slate-800 font-semibold">alex@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-slate-200 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-medium">Phone</p>
                    <p className="text-slate-800 font-semibold">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-slate-200 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-medium">Location</p>
                    <p className="text-slate-800 font-semibold">San Francisco, CA</p>
                  </div>
                </div>
              </div>
              
              {/* Availability status */}
              <div className="p-6 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-slate-800 font-semibold">Available for Projects</span>
                </div>
                <p className="text-slate-600 text-sm">
                  Currently accepting new projects for Q2 2024
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-5 h-5 text-slate-600" />
                <h3 className="text-xl font-semibold text-slate-800">Send Message</h3>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <Input 
                      type="text" 
                      className="border-slate-300 focus:border-blue-500 focus:ring-blue-500/20" 
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <Input 
                      type="text" 
                      className="border-slate-300 focus:border-blue-500 focus:ring-blue-500/20" 
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <Input 
                    type="email" 
                    className="border-slate-300 focus:border-blue-500 focus:ring-blue-500/20" 
                    placeholder="john@company.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Project Type</label>
                  <Input 
                    type="text" 
                    className="border-slate-300 focus:border-blue-500 focus:ring-blue-500/20" 
                    placeholder="Web Development, Design, Consulting..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Project Details</label>
                  <Textarea 
                    rows={4}
                    className="border-slate-300 focus:border-blue-500 focus:ring-blue-500/20 resize-none" 
                    placeholder="Tell me about your project requirements, timeline, and goals..."
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
