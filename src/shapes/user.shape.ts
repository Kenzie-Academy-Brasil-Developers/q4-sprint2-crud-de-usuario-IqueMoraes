import * as yup from 'yup';
import { hashSync } from 'bcrypt';
import { capitalizeTitle } from '../utils';

const createUserShape = yup.object().shape({
  name: yup.string().transform((s) => capitalizeTitle(s)).required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).transform((p) => hashSync(p, 10)).required(),
  isAdm: yup.boolean().default(() => false).optional(),
  createdOn: yup.date().default(() => new Date()),
  updatedOn: yup.date().default(() => new Date())
})

export default createUserShape;
