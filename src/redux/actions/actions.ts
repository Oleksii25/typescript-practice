type Test = {
  type: string,
  payload: number
}
export const add = (payload: number): Test => {
  return {
    type: '+',
    payload,
  }
};

export const remove = (payload: number): Test => {
  return {
    type: '-',
    payload,
  }
} 
