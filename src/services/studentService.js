import supabase from '../../.config/supabase';

export const getStudents = async () => {
  const { data, error } = await supabase.from('Student').select('*').order('id');

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const createStudent = async ({ id, first_name, last_name, email }) => {
  const { data, error } = await supabase
    .from('Student')
    .insert([{ id, first_name, last_name, email }])
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const updateStudent = async (id, { first_name, last_name, email }) => {
  const { data, error } = await supabase
    .from('Student')
    .update({ first_name, last_name, email })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const deleteStudent = async (id) => {
  const { error } = await supabase.from('Student').delete().eq('id', id);

  if (error) {
    throw new Error(error.message);
  }
};
