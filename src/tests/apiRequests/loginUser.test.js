import axios from 'axios';
// import getAllCategories from '../../apirequests/GetAllCategories';
import loginUser from '../../ApiRequests/loginUser';

jest.mock('axios');
it('logs in user', async () => {
  axios.post.mockResolvedValue(
    {
      user: {
        email: 'testone@user.com',
        password: '1234',
      },
    },
  );

  const result = loginUser();
  expect(result).toBeTruthy();
  expect(axios.post).toHaveBeenCalledWith('https://appointmentendpoints.herokuapp.com/auth/login');
});
