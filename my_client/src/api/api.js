import axios from 'axios';

export const uploadPDF = async (formData) => {
  try {
    const response = await axios.post('http://localhost:5000/upload', formData);
    return response.data;
  } catch (err) {
    const errorData = err.response?.data;
    if (errorData?.rawOutput) {
      console.error('⚠️ Mistral raw output:\n', errorData.rawOutput);
      throw new Error('Error parsing Mistral output. See console for raw response.');
    } else {
      console.error('❌ Error details:', errorData || err.message);
      throw new Error('Error generating questions. See console for details.');
    }
  }
};
