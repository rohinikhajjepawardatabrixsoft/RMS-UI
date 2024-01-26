import axios from 'axios';

export const postData = async (postData:any) => {
    try {
      const response = await axios.post('https://api.example.com/data', postData);
      console.log(response.data); // Handle the response data as needed
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  export const FetchData = async () => {
    try {
      const response = await axios.get('https://localhost:44311/api/User/GetAllUsers?userId=1');
      console.log(response.data); // Handle the response data as needed
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  export const FetchDataRole = async () => {
    try {
      const response = await axios.get('https://localhost:44311/api/Role/GetAllRoles?userId=1');
      console.log(response.data); // Handle the response data as needed
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };