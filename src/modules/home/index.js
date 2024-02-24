import dayjs from 'dayjs';

export const home = async (req, res) => {
  console.log('home');
  res.json({
    message: 'Simple Express boilerplate by ImmJnn',
    date: dayjs().format('DD MMM YYYY, HH:mm:ss'),
  });
};
