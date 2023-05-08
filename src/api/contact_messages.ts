import axios from '@/lib/axios';
import { Contact } from '@/interfaces/contact';

export const contact_message = async (
  form_data: Contact & { g_captcha: string }
) => {
  const { data } = await axios.post('/contacts/', form_data);

  return data;
};
