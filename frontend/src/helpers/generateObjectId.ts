export const ObjectId = (
  m = Math,
  d = Date,
  h = 16,
  s = (s: number) => m.floor(s).toString(h)
) => s(d.now() / 1000) + " ".repeat(h).replace(/./g, () => s(m.random() * h));
