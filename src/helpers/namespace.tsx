export default (type: string[], ns: string) =>
  type.reduce((acc, key) => ({ ...acc, [key]: `${ns}/${key}` }), {})
