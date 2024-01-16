import axios, { AxiosError } from "axios";

export async function fetchAPI(
  url: string,
  method: string,
  token: string | null,
  data: object | null = null,
  params = {}
) {
  try {
    const options = {
      method: method,
      url: url,
      headers: { Authorization: `Bearer ${token}` },
      params: params, // Add query parameters to the request
      ...(data && { data: data }),
    };

    const response = await axios(options);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    // Handle error appropriately
    // Axios wraps the error response in error.response
    if (axiosError.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Error response:", axiosError.response);
    } else if (axiosError.request) {
      // The request was made but no response was received
      console.error("No response received:", axiosError.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error:", axiosError.message);
    }

    throw error; // You can decide how to handle the error and whether to re-throw it
  }
}
