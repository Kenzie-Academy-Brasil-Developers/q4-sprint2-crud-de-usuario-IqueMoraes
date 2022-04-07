import * as yup from 'yup';
import { hashSync } from 'bcrypt';
import { capitalizeTitle } from '../utils';

const updateUserShape = yup.object().shape({
  name: yup.string().transform((s) => capitalizeTitle(s)).optional(),
  email: yup.string().email().optional(),
  password: yup.string().min(6).transform((p) => hashSync(p, 10)).optional(),
  isAdm: yup.boolean().default(() => false),
  updatedOn: yup.date().default(() => new Date())
})

export default updateUserShape;
