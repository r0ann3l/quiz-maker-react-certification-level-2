import * as yup from 'yup';

export const newQuizSchema = yup.object().shape({
  difficulty: yup.string()
    .transform((value) => value ? value : null)
    .required('You must select one difficulty level before creating a new Quiz'),
  category: yup.number()
    .transform((value) => value ? value : null)
    .required('You must select a category, before creating a new Quiz')
});