interface Params {
  id: number
}
export const updateUrl = ({ id }: Params): void => {
  const history = window.history;
  console.log(history);
};
