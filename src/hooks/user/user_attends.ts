import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getUsersAttends } from '@/api/user/user_attends';
import { UserAttends } from '@/interfaces/user';

const key = 'user_attends';

export function useUserAttends() {
  return useQuery<UserAttends>([key], getUsersAttends);
}
