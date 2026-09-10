import supabase from '../../.config/supabase';

export const getCourses = async () => {
  const { data, error } = await supabase.from('Course').select('*').order('id');

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const createCourse = async ({ code, name, description }) => {
  const { data, error } = await supabase
    .from('Course')
    .insert([{ code, name, description }])
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const updateCourse = async (id, { code, name, description }) => {
  const { data, error } = await supabase
    .from('Course')
    .update({ code, name, description })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const deleteCourse = async (id) => {
  const { error } = await supabase.from('Course').delete().eq('id', id);

  if (error) {
    throw new Error(error.message);
  }
};
