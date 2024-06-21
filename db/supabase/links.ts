import createClient from './client';

export const getLinks = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.from('submit').select('*');
  return { data, error };
};
