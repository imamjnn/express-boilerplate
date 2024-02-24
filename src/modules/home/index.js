export const home = async (req, res) => {
  console.log('home');
  res.json({
    message: 'Simple Express boilerplate by ImmJnn',
  });
};
