const axios = require('axios');
require('dotenv').config();

exports.generateSummary = async (req, res) => {
  try {

    const { main_issue, outcome_in_favor_of, number_of_evidences, outcome_in_court } = req.body;
    const text = `The case involves the issue: "${main_issue}". The court ruled ${outcome_in_favor_of.toLowerCase()}. The evidence presented was categorized as ${number_of_evidences.toLowerCase()}, and the final outcome in court was: "${outcome_in_court}".`;

    // Hugging Face API call to generate summary
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
      { inputs: text,
        parameters: {
            min_length: 100,
            max_length: 250,
            length_penalty: 2.0,
          },

       },
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}`,  
          'Content-Type': 'application/json',
        },
      }
    );
    
    res.json({ summary: response.data[0]?.summary_text || 'No summary available' });
  } catch (error) {
    console.error('Error generating summary:', error);
    res.status(500).json({ error: 'Error generating summary' });
  }
};