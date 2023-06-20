import { useEvent } from 'effector-react';

import { fetchChatHistoryEffect } from '@/effects';
import { useEffect } from 'react';

export function useFetchChatHistory() {
  const fetchChatHistoryEvent = useEvent(fetchChatHistoryEffect);

  useEffect(() => {
    fetchChatHistoryEvent(0);
  }, []);

  return {
    fetchChatHistory: fetchChatHistoryEvent,
  };
}
