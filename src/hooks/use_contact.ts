import { useMutation } from '@tanstack/react-query';
import { Contact } from '@/interfaces/contact';
import { contact_message } from '@/api/contact_messages';

export function useContact() {
  return useMutation(contact_message);
}
