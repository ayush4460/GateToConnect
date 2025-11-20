// app/post-event/page.tsx
'use client';

import { useState } from 'react';
import PostEventBasics from '@/components/post-event/PostEventBasics';
import VolunteerList from '@/components/post-event/VolunteerList';
import VolunteerRequirements from '@/components/post-event/VolunteerRequirements';

export default function PostEventPage() {
  const [step, setStep] = useState<'basics' | 'list' | 'requirements'>('basics');
  const [eventData, setEventData] = useState<any>({});

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      {step === 'basics' && (
        <PostEventBasics
          onSkip={() => setStep('list')}
          onContinue={(data: any) => {
            setEventData(data);
            setStep('requirements'); // or setStep('list') if you want to show list first
          }}
        />
      )}

      {step === 'list' && (
        <VolunteerList
          eventData={eventData}
          onBack={() => setStep('basics')}  // This goes back to basics step
        />
      )}

      {step === 'requirements' && (
        <VolunteerRequirements
          eventData={eventData}
          onBack={() => setStep('basics')} // or setStep('list') if coming from list
        />
      )}
    </div>
  );
}