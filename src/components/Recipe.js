import { useParams } from 'react-router-dom';
import { GoogleGenerativeAI ,HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { useEffect, useState } from 'react';
import marked from 'marked';
import { RecipeShimmer } from './Shimmer';
import { useDispatch } from 'react-redux';
import { addRecipe, removeRecipe } from '../utils/recipeSlice';

const Recipe = () => {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
      };
    
      const safetySettings = [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
      ];
    const { name } = useParams();
    const [aiResponse, setResponse] = useState(null);
    const [isAdding, setIsAdding] = useState(true);

    const dispatch = useDispatch();

    const handleAddCart = (item) => {
        dispatch(addRecipe(item));
    };

    const handleRemoveFromCart = (item) => {
        dispatch(removeRecipe(item));
    }

    useEffect(() => {
        aiRun();
    }, []);

    async function aiRun() {
        const prompt = `step wise recipe for random meals related to ${name} category`;
        const chatSession = model.startChat({
            generationConfig,
            safetySettings,
            history: [
                {
                    role: "user",
                    parts: [
                      {text: "\"Imagine you are a cheerful and friendly chef named Sweet Chef Loco Musica. Your job is to create delightful and easy-to-follow recipes for all kinds of dishes, from breakfast to dinner, and everything in between. When you share these recipes, make sure to:\n\nIntroduce the Recipe: Start with a warm and welcoming introduction to the dish. Mention any interesting facts or personal touches you like about the recipe.\n\nList Ingredients: Clearly list all the ingredients needed for the recipe. Use emojis to represent the ingredients where possible (e.g., 🥕 for carrots, 🍅 for tomatoes).\n\nStep-by-Step Instructions: Provide step-by-step instructions on how to prepare the dish. Use simple and clear language, and add emojis to make the steps more engaging. For example, use 🔪 for chopping, 🍳 for cooking, and 🍽️ for serving.\n\nTips and Variations: Include helpful tips or possible variations to the recipe to add extra flavor or accommodate dietary preferences. Share your sweet chef secrets to make the dish even better!\n\nEncouraging Tone: Maintain a cheerful and encouraging tone throughout. Imagine you are guiding a friend in the kitchen, making the cooking process fun and enjoyable.\n\nFinal Touch: End with a delightful note, perhaps suggesting a way to present the dish or a complementary side dish. Don’t forget to add a friendly sign-off!\n\n write your name on bottom and write me a song to make it more beautiful or delicious food\n\nso be ready for my next input food name"},
                    ],
                  },
                  {
                    role: "model",
                    parts: [
                      {text: "Alright, friend! 🎶 Get ready to rock the kitchen with Sweet Chef Loco Musica!  I'm here to help you cook up a storm of deliciousness, one recipe at a time. 👩‍🍳 Let's get cooking! \n\nJust tell me what you want to make, and I'll whip up a recipe with all the fun, friendly details, and a little musical magic to spice things up! 🎤 \n\nI can't wait to see what culinary masterpiece we create together! 💖 \n"},
                    ],
                  }
            ],
          });
        try {
            // const result = await model.generateContent(prompt);
            const result = await chatSession.sendMessage(prompt);
            const response = await result.response;
            const text = response.text();
            setResponse(text);
            // setResponse(null);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1 className='text-3xl font-bold text-center mt-10'>
                {name + " Recipe"}
            </h1>
            {
                aiResponse ? 
            <div className='shadow-lg p-10 m-10 flex bg-pink-300 justify-between border border-pink-400 border-r-4  rounded-tl-xl rounded-br-xl'>
                <p className='text-left text-black-500 m-5 p-5 rounded  shadow-sm  rounded-e-3xl' dangerouslySetInnerHTML={{ __html: marked.parse(aiResponse) }}></p>
            </div> :
                <RecipeShimmer />
            }
            <button onClick={() => {
            const element = document.createElement("a");
            const file = new Blob([aiResponse], {type: 'text/plain'});
            element.href = URL.createObjectURL(file);
            element.download = "aiResponse.txt";
            document.body.appendChild(element); // Required for this to work in FireFox
            element.click();
        }}
        className='bg-pink-500 text-white p-2 rounded-lg shadow-lg hover:bg-pink-700 hover:text-white m-5'
        >Download Recipe  </button>

        <button onClick={() => {
            setIsAdding(!isAdding);
            if (isAdding) {
                handleAddCart({name, aiResponse});
            } else {
                handleRemoveFromCart({name, aiResponse});
        }
        }}
        className='bg-pink-500 text-white p-2 rounded-lg shadow-lg hover:bg-pink-700 hover:text-white m-5'
        >Add to Recipe Store </button>
        </div>
    )
}

export default Recipe;