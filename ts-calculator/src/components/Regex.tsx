

export function regValue(value: string){

  const reg1 = /÷/gi;
  const newValue = value.replace(reg1, '/')
  return newValue
}