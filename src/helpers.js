export const getJSON = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response?.json();

    if(!response.ok){
      throw new Error(data?.message 
        ? `${data.message} (${response.status})`
        : `Error while fetching ${url}. Response: ${response}`);
    }
  } catch (error) {
    throw error;
  }
}