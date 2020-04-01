export const sendApiStatus = async (req, res) => {
  res.send(process.env.API_MESSAGE);
};
