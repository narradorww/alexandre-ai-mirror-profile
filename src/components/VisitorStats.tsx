
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { MapPin, Users, Eye, BarChart } from 'lucide-react';

interface VisitorInfo {
  ip: string;
  city: string;
  country: string;
  referrer: string;
}

const VisitorStats = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [visitorCount, setVisitorCount] = useState(1);
  const [totalVisits, setTotalVisits] = useState(145);
  
  // Fetch visitor info from ipinfo.io
  const { data: visitorInfo, isLoading } = useQuery({
    queryKey: ['visitorInfo'],
    queryFn: async (): Promise<VisitorInfo> => {
      try {
        const response = await fetch('https://ipinfo.io/json?token=2ec29fca5b7860');
        if (!response.ok) {
          throw new Error('Failed to fetch visitor info');
        }
        const data = await response.json();
        return {
          ip: data.ip || '192.168.1.1',
          city: data.city || 'Unknown City',
          country: data.country || 'Unknown Country',
          referrer: document.referrer || 'Direct Visit'
        };
      } catch (error) {
        console.error('Error fetching visitor info:', error);
        return {
          ip: '192.168.1.1',
          city: 'São Paulo',
          country: 'BR',
          referrer: 'Direct Visit'
        };
      }
    },
    refetchOnWindowFocus: false,
    retry: 1
  });
  
  useEffect(() => {
    // Simulate increasing visitor count
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setVisitorCount(prev => prev + 1);
        setTotalVisits(prev => prev + 1);
      }
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);
  
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  
  return (
    <div className={`fixed right-6 bottom-6 z-40 transition-transform duration-300 ${isVisible ? 'translate-x-0' : 'translate-x-[calc(100%-2rem)]'}`}>
      {/* Toggle button */}
      <button 
        onClick={toggleVisibility}
        className="absolute top-4 left-0 transform -translate-x-full bg-card rounded-l-md p-2 border border-r-0 border-primary/30"
      >
        <BarChart size={16} className="text-primary" />
      </button>
      
      <Card className="w-64 bg-card/95 backdrop-blur-sm border border-primary/30 shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center">
            <Eye size={16} className="mr-2 text-primary" />
            Visitor Statistics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-0">
          {/* IP Address & Location */}
          <div className="space-y-1">
            <div className="text-xs text-foreground/70">Your IP Address</div>
            {isLoading ? (
              <Skeleton className="h-4 w-24" />
            ) : (
              <div className="text-sm font-mono">{visitorInfo?.ip}</div>
            )}
          </div>
          
          {/* Location */}
          <div className="space-y-1">
            <div className="text-xs text-foreground/70 flex items-center">
              <MapPin size={14} className="mr-1 text-primary" />
              Your Location
            </div>
            {isLoading ? (
              <Skeleton className="h-4 w-36" />
            ) : (
              <div className="text-sm">{visitorInfo?.city}, {visitorInfo?.country}</div>
            )}
          </div>
          
          {/* Referrer */}
          <div className="space-y-1">
            <div className="text-xs text-foreground/70">Referral Source</div>
            {isLoading ? (
              <Skeleton className="h-4 w-32" />
            ) : (
              <div className="text-sm truncate" title={visitorInfo?.referrer}>
                {visitorInfo?.referrer || 'Direct Visit'}
              </div>
            )}
          </div>
          
          {/* Current Visitors */}
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <div className="flex items-center">
              <Users size={14} className="mr-2 text-primary" />
              <span className="text-xs">Current Visitors</span>
            </div>
            <div className="text-sm font-medium">{visitorCount}</div>
          </div>
          
          {/* Total Visits */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Eye size={14} className="mr-2 text-primary" />
              <span className="text-xs">Total Visits</span>
            </div>
            <div className="text-sm font-medium">{totalVisits.toLocaleString()}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VisitorStats;
