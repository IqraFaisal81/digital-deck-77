
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const EmailMarketingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50 dark:from-gray-900 dark:via-blue-950/30 dark:to-purple-950/30">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-xl mr-6">
                  <Mail className="text-white h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent">
                    Email Marketing
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300">Strategic email campaigns and automation</p>
                </div>
              </div>
              
              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Create sophisticated email campaigns and automation sequences that engage your audience, drive conversions, and build lasting customer relationships with personalized messaging.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">What's Included:</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Email campaign strategy and planning</li>
                  <li>• Automated drip sequences</li>
                  <li>• List segmentation and targeting</li>
                  <li>• A/B testing and optimization</li>
                  <li>• Performance tracking and analytics</li>
                  <li>• Integration with CRM systems</li>
                </ul>
              </div>
              
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <a href="https://calendly.com/iqrafaisal81/discovery-call?month=2025-04" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Free Strategy Call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailMarketingPage;
