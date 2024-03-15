export default function simpleValidForm(
  email: FormDataEntryValue | null,
  password: FormDataEntryValue | null
) {
  if (email === "") return false;
  if (password === "") return false;
  return true;
}
