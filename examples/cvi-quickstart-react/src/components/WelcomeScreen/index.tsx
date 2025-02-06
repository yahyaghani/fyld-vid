import { Button } from '../ui/button';

export const WelcomeScreen = ({ onStart, loading }: { onStart: () => void, loading: boolean }) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-6 p-10 text-center'>
      <div className="flex justify-center w-full mt-[-250px]">
        <img 
          src="https://worldwatertechinnovation.com/wp-content/uploads/2024/12/FYLD.png" 
          alt="Fyld.ai Logo" 
          className="w-18 h-auto"
        />
      </div>
      <h1 className='text-3xl'>
        Video Call Hub
      </h1>
      <Button onClick={onStart}>{loading ? 'Loading...' : 'Start Inspection'}</Button>
    </div>
  );
};
