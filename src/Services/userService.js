import Swal from 'sweetalert2';

export const login = async (user_name, password) => {
    const url = "http://falcon-dev.ap-southeast-1.elasticbeanstalk.com/api/auth/auth";
    const data = {
      user_name,
      password,
    };
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    //   Swal.fire({
    //     title: 'Success',
    //     icon: 'success',
    //     confirmButtonColor: 'green'
    // })
    // .then(() => {
    //     window.location.href = '/'
    // })
   
      return response.json();

    } catch (error) {
      throw error;
    }
  };

  export const getUserDetail = async (userid) => {
    const url = `http://falcon-dev.ap-southeast-1.elasticbeanstalk.com/api/admin/get_user_details?user_id=${userid}`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.json();
    } catch (error) {
      throw error;
    }
  };

