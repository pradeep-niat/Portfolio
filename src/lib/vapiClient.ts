import Vapi from '@vapi-ai/web';

let vapi: any;

const PUBLIC_API_KEY = 'c225ae48-39cd-4932-b885-92b3fd76eaf5';
const ASSISTANT_ID = '472aa4c3-c2b2-4513-ac23-244f1674755f';

export function getVapi() {
  if (!vapi) {
    vapi = new Vapi(PUBLIC_API_KEY);
    // Pre-configure all event listeners to reduce startup time
    vapi.on('call-start', () => {
      console.log('Vapi: call started, AI should speak now');
    });
    vapi.on('call-end', () => console.log('Vapi: call ended'));
    vapi.on('speech-start', () => console.log('Vapi: AI started speaking'));
    vapi.on('message', (m: any) => {
      if (m?.type === 'transcript') console.log(`${m.role}: ${m.transcript}`);
    });
    vapi.on('error', (error: any) => {
      console.error('Vapi error:', error);
    });
  }
  return vapi;
}

// Pre-initialize Vapi on module load to reduce delay
getVapi();

export async function startVapiVoice() {
  const instance = getVapi();
  // Request microphone permission first
  try {
    await navigator.mediaDevices.getUserMedia({ audio: true });
  } catch (err) {
    console.error('Microphone access is required to talk to the AI:', err);
    throw err;
  }
  
  // Start immediately with assistant ID to reduce latency
  console.log('Starting Vapi voice assistant...');
  const result = await instance.start(ASSISTANT_ID);
  console.log('Vapi started, assistant should greet you now');
  return result;
}

export function stopVapiVoice() {
  const instance = getVapi();
  return instance.stop();
}
