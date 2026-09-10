import supabase from '../../.config/supabase';

export const getEnrollments = async () => {
  const { data, error } = await supabase.from('enrollment').select('*').order('id');

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const createEnrollment = async ({ student_id, course_id, enrollment_date, enrollment_status }) => {
  const { data, error } = await supabase
    .from('enrollment')
    .insert([{ student_id, course_id, enrollment_date, enrollment_status }])
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const updateEnrollment = async (id, { student_id, course_id, enrollment_date, enrollment_status }) => {
  const { data, error } = await supabase
    .from('enrollment')
    .update({ student_id, course_id, enrollment_date, enrollment_status })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const deleteEnrollment = async (id) => {
  const { error } = await supabase.from('enrollment').delete().eq('id', id);

  if (error) {
    throw new Error(error.message);
  }
};
